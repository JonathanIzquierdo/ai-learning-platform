-- ============================================================================
-- Migration 005: Add FK from event tables to public.profiles
-- ============================================================================
-- talk_requests.user_id and workshop_interests.user_id reference auth.users(id),
-- which is correct for RLS (auth.uid() = user_id) but PostgREST can't
-- auto-detect the join to public.profiles for nested selects like:
--
--   supabase.from('talk_requests').select('..., profiles!inner(email, name)')
--
-- PostgREST only detects FKs between tables exposed in the public schema.
-- The admin panel relies on this join to show user info next to each
-- talk/workshop record, so we add an explicit FK to public.profiles(id).
-- The existing FK to auth.users(id) remains; both can coexist because
-- profiles.id is itself a FK to auth.users(id).
-- ============================================================================

alter table public.talk_requests
  add constraint talk_requests_user_profile_fk
  foreign key (user_id) references public.profiles(id) on delete cascade;

alter table public.workshop_interests
  add constraint workshop_interests_user_profile_fk
  foreign key (user_id) references public.profiles(id) on delete cascade;

-- ============================================================================
-- End of migration 005
-- ============================================================================
