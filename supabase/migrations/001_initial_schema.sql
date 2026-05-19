-- ============================================================================
-- Visma AI Learning Platform — Database schema (v1)
-- ============================================================================
-- Paste this entire file into Supabase SQL Editor and run once.
-- Safe to re-run: all CREATE statements use IF NOT EXISTS where possible,
-- and policies are dropped before being re-created.
--
-- Tables:
--   profiles               — one row per user (extends auth.users)
--   admins                 — allowlist of admin emails
--   module_progress        — per-user per-module progress (replaces localStorage)
--   workshop_interests     — log of workshop "I'm interested" clicks
--   talk_requests          — log of talk request submissions
--   module_feedback        — (future) thumbs up/down per module
--   module_suggestions     — (future) user-proposed module topics
-- ============================================================================

-- ---------------------------------------------------------------------------
-- 1. Domain restriction trigger on auth.users
-- ---------------------------------------------------------------------------
-- Reject signups whose email domain is not in the allowlist.
-- Keep this list in sync with VITE_ALLOWED_EMAIL_DOMAINS env var.
create or replace function public.enforce_email_domain()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if lower(split_part(new.email, '@', 2)) not in ('visma.com') then
    raise exception 'Signups are restricted to @visma.com email addresses.';
  end if;
  return new;
end;
$$;

drop trigger if exists enforce_email_domain on auth.users;
create trigger enforce_email_domain
  before insert on auth.users
  for each row execute function public.enforce_email_domain();

-- ---------------------------------------------------------------------------
-- 2. profiles — one row per authenticated user
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  email       text not null unique,
  name        text,
  team        text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin"
  on public.profiles for select
  using (
    auth.uid() = id
    or exists (select 1 from public.admins where email = auth.jwt() ->> 'email')
  );

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile row when a new auth user is created
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, name, team)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'name', null),
    coalesce(new.raw_user_meta_data ->> 'team', null)
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- 3. admins — allowlist of admin emails
-- ---------------------------------------------------------------------------
create table if not exists public.admins (
  email      text primary key,
  added_at   timestamptz not null default now(),
  notes      text
);

alter table public.admins enable row level security;

drop policy if exists "admins_select_admins" on public.admins;
create policy "admins_select_admins"
  on public.admins for select
  using (exists (select 1 from public.admins a where a.email = auth.jwt() ->> 'email'));

-- Seed initial admins
insert into public.admins (email, notes) values
  ('jonathan.izquierdo@visma.com', 'Project owner'),
  ('marisa.pineiro@visma.com',     'Admin'),
  ('isabel.loaldi@visma.com',      'Admin'),
  ('diego.colombo@visma.com',      'Admin')
on conflict (email) do nothing;

-- ---------------------------------------------------------------------------
-- 4. module_progress — replaces localStorage
-- ---------------------------------------------------------------------------
create table if not exists public.module_progress (
  user_id        uuid not null references auth.users(id) on delete cascade,
  module_id      text not null,
  current_slide  int  not null default 0,
  completed      boolean not null default false,
  started_at     timestamptz not null default now(),
  completed_at   timestamptz,
  last_seen_at   timestamptz not null default now(),
  primary key (user_id, module_id)
);

create index if not exists module_progress_module_id_idx on public.module_progress(module_id);
create index if not exists module_progress_completed_idx on public.module_progress(completed);

alter table public.module_progress enable row level security;

drop policy if exists "module_progress_select_own_or_admin" on public.module_progress;
create policy "module_progress_select_own_or_admin"
  on public.module_progress for select
  using (
    auth.uid() = user_id
    or exists (select 1 from public.admins where email = auth.jwt() ->> 'email')
  );

drop policy if exists "module_progress_insert_own" on public.module_progress;
create policy "module_progress_insert_own"
  on public.module_progress for insert
  with check (auth.uid() = user_id);

drop policy if exists "module_progress_update_own" on public.module_progress;
create policy "module_progress_update_own"
  on public.module_progress for update
  using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- 5. workshop_interests — log of "I'm interested" clicks on workshops
-- ---------------------------------------------------------------------------
create table if not exists public.workshop_interests (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  workshop_id text not null,
  created_at  timestamptz not null default now()
);

create index if not exists workshop_interests_user_id_idx on public.workshop_interests(user_id);
create index if not exists workshop_interests_workshop_id_idx on public.workshop_interests(workshop_id);

alter table public.workshop_interests enable row level security;

drop policy if exists "workshop_interests_select_own_or_admin" on public.workshop_interests;
create policy "workshop_interests_select_own_or_admin"
  on public.workshop_interests for select
  using (
    auth.uid() = user_id
    or exists (select 1 from public.admins where email = auth.jwt() ->> 'email')
  );

drop policy if exists "workshop_interests_insert_own" on public.workshop_interests;
create policy "workshop_interests_insert_own"
  on public.workshop_interests for insert
  with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- 6. talk_requests — log of talk request submissions
-- ---------------------------------------------------------------------------
create table if not exists public.talk_requests (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  talk_id    text not null,
  name       text,
  team       text,
  message    text,
  status     text not null default 'pending', -- pending | contacted | scheduled | declined
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists talk_requests_user_id_idx on public.talk_requests(user_id);
create index if not exists talk_requests_talk_id_idx on public.talk_requests(talk_id);
create index if not exists talk_requests_status_idx on public.talk_requests(status);

alter table public.talk_requests enable row level security;

drop policy if exists "talk_requests_select_own_or_admin" on public.talk_requests;
create policy "talk_requests_select_own_or_admin"
  on public.talk_requests for select
  using (
    auth.uid() = user_id
    or exists (select 1 from public.admins where email = auth.jwt() ->> 'email')
  );

drop policy if exists "talk_requests_insert_own" on public.talk_requests;
create policy "talk_requests_insert_own"
  on public.talk_requests for insert
  with check (auth.uid() = user_id);

drop policy if exists "talk_requests_update_admin_only" on public.talk_requests;
create policy "talk_requests_update_admin_only"
  on public.talk_requests for update
  using (exists (select 1 from public.admins where email = auth.jwt() ->> 'email'));

-- ---------------------------------------------------------------------------
-- 7. module_feedback — future feature: thumbs up/down + comment per module
-- ---------------------------------------------------------------------------
create table if not exists public.module_feedback (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  module_id  text not null,
  thumbs     int  not null check (thumbs in (-1, 1)),
  comment    text,
  created_at timestamptz not null default now(),
  unique (user_id, module_id)
);

alter table public.module_feedback enable row level security;

drop policy if exists "module_feedback_select_own_or_admin" on public.module_feedback;
create policy "module_feedback_select_own_or_admin"
  on public.module_feedback for select
  using (
    auth.uid() = user_id
    or exists (select 1 from public.admins where email = auth.jwt() ->> 'email')
  );

drop policy if exists "module_feedback_upsert_own" on public.module_feedback;
create policy "module_feedback_upsert_own"
  on public.module_feedback for insert
  with check (auth.uid() = user_id);

drop policy if exists "module_feedback_update_own" on public.module_feedback;
create policy "module_feedback_update_own"
  on public.module_feedback for update
  using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- 8. module_suggestions — future: users propose new module topics
-- ---------------------------------------------------------------------------
create table if not exists public.module_suggestions (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  title       text not null,
  description text,
  upvotes     int  not null default 1,
  status      text not null default 'open', -- open | planned | shipped | rejected
  created_at  timestamptz not null default now()
);

alter table public.module_suggestions enable row level security;

drop policy if exists "module_suggestions_select_authenticated" on public.module_suggestions;
create policy "module_suggestions_select_authenticated"
  on public.module_suggestions for select
  using (auth.role() = 'authenticated');

drop policy if exists "module_suggestions_insert_own" on public.module_suggestions;
create policy "module_suggestions_insert_own"
  on public.module_suggestions for insert
  with check (auth.uid() = user_id);

-- ============================================================================
-- End of migration
-- ============================================================================
