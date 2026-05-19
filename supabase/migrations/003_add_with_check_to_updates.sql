-- ============================================================================
-- Migration 003: Add WITH CHECK to UPDATE policies
-- ============================================================================
-- UPDATE policies need both USING (which rows can be targeted) and
-- WITH CHECK (which row values are allowed to be written). Without
-- WITH CHECK, Postgres lets the UPDATE statement run against matching
-- rows but rejects the write phase, surfacing as HTTP 403 from PostgREST.
-- ============================================================================

-- profiles.update
drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- module_progress.update
drop policy if exists "module_progress_update_own" on public.module_progress;
create policy "module_progress_update_own"
  on public.module_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- module_feedback.update
drop policy if exists "module_feedback_update_own" on public.module_feedback;
create policy "module_feedback_update_own"
  on public.module_feedback for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- talk_requests.update (admins only)
drop policy if exists "talk_requests_update_admin_only" on public.talk_requests;
create policy "talk_requests_update_admin_only"
  on public.talk_requests for update
  using (public.is_admin())
  with check (public.is_admin());

-- ============================================================================
-- End of migration 003
-- ============================================================================
