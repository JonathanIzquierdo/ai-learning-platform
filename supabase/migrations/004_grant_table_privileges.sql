-- ============================================================================
-- Migration 004: Grant table-level privileges to authenticated role
-- ============================================================================
-- The project was created with "Automatically expose new tables = OFF" for
-- security. As a result, every new table needs explicit GRANTs to the
-- `authenticated` role so PostgREST can serve it via the REST API.
--
-- Without these grants, the API returns 42501 "permission denied for table"
-- BEFORE evaluating Row Level Security policies. RLS handles row-level
-- filtering; these grants handle table-level access.
--
-- Rule of thumb for each table:
--   - SELECT: any authenticated user reads (RLS filters which rows)
--   - INSERT: any authenticated user can attempt to write (RLS validates)
--   - UPDATE: any authenticated user can attempt to update (RLS validates)
--   - DELETE: not granted anywhere; deletes happen via admin panel / SQL
-- ============================================================================

-- profiles: read own (or all if admin via RLS), update own
grant select, update on public.profiles to authenticated;

-- module_progress: read own (or all if admin), insert/update own
grant select, insert, update on public.module_progress to authenticated;

-- workshop_interests: read own (or all if admin), insert
grant select, insert on public.workshop_interests to authenticated;

-- talk_requests: submit; admin can update status (controlled by RLS)
grant select, insert, update on public.talk_requests to authenticated;

-- module_feedback: read own (or all if admin), insert/update own
grant select, insert, update on public.module_feedback to authenticated;

-- module_suggestions: any authenticated user reads + inserts
grant select, insert on public.module_suggestions to authenticated;

-- admins: SELECT granted but RLS limits it to admins only.
-- Direct SELECT from frontend not used; is_admin() RPC is the canonical
-- way to check admin status.
grant select on public.admins to authenticated;

-- ============================================================================
-- End of migration 004
-- ============================================================================
