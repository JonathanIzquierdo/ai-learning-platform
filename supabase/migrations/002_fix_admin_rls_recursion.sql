-- ============================================================================
-- Migration 002: Fix RLS recursion on admins table
-- ============================================================================
-- The initial schema (001) defined an `admins_select_admins` policy that
-- queried `public.admins` itself inside its USING clause. That made the
-- policy recursive: to evaluate the policy, Postgres had to evaluate the
-- same policy again. Worse, every other policy that did
--   `exists (select 1 from public.admins where email = ...)`
-- inherited the same recursion path, surfacing as HTTP 500 from PostgREST
-- on /profiles, /module_progress, etc.
--
-- Fix: introduce a `public.is_admin()` helper marked `security definer` so
-- it can read `public.admins` while bypassing RLS, and rewrite every policy
-- that referenced `public.admins` to call this function instead.
-- ============================================================================

-- 1) Helper function: bypass RLS to check admin status
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admins
    where email = (auth.jwt() ->> 'email')
  );
$$;

grant execute on function public.is_admin() to authenticated;

-- 2) admins SELECT policy: non-recursive
drop policy if exists "admins_select_admins" on public.admins;
create policy "admins_select_admins"
  on public.admins for select
  using (public.is_admin());

-- 3) Rewrite policies that referenced public.admins via subquery

-- profiles
drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin"
  on public.profiles for select
  using (auth.uid() = id or public.is_admin());

-- module_progress
drop policy if exists "module_progress_select_own_or_admin" on public.module_progress;
create policy "module_progress_select_own_or_admin"
  on public.module_progress for select
  using (auth.uid() = user_id or public.is_admin());

-- workshop_interests
drop policy if exists "workshop_interests_select_own_or_admin" on public.workshop_interests;
create policy "workshop_interests_select_own_or_admin"
  on public.workshop_interests for select
  using (auth.uid() = user_id or public.is_admin());

-- talk_requests (select + update)
drop policy if exists "talk_requests_select_own_or_admin" on public.talk_requests;
create policy "talk_requests_select_own_or_admin"
  on public.talk_requests for select
  using (auth.uid() = user_id or public.is_admin());

drop policy if exists "talk_requests_update_admin_only" on public.talk_requests;
create policy "talk_requests_update_admin_only"
  on public.talk_requests for update
  using (public.is_admin());

-- module_feedback
drop policy if exists "module_feedback_select_own_or_admin" on public.module_feedback;
create policy "module_feedback_select_own_or_admin"
  on public.module_feedback for select
  using (auth.uid() = user_id or public.is_admin());

-- ============================================================================
-- End of migration 002
-- ============================================================================
