# AGENTS.md — AI Learning Platform

**Read this file first before making any changes.** It is the canonical guide for AI agents (Claude, Copilot, Codex, Cursor) and human contributors. It explains how the project is structured, what conventions to follow, what to leave alone, and where the project is heading.

If you find this file out of sync with the actual repo, update it as part of your PR — context drift is the enemy.

---

## Quick Facts

- **Project:** Visma LATAM AI Learning Platform
- **Type:** React + Vite single-page app, statically deployed
- **Live URL:** https://ai-learning-platform-livid.vercel.app
- **Repo:** https://github.com/JonathanIzquierdo/ai-learning-platform
- **Main branch:** `main` (every push auto-deploys to Vercel, ~1 min)
- **Owner:** Jonathan Izquierdo · jonathan.izquierdo@visma.com
- **Slack:** #ai-engineering-and-technology (ID: `GS8RTDCQ7`)

---

## Stack

- **React 18 + Vite** — no Next.js, no SSR, pure static SPA
- **Tailwind CSS** — utility-first
- **Framer Motion** — animations
- **react-i18next** — EN/ES translations
- **canvas-confetti** — via CDN, used on module completion
- **lucide-react** — icons
- **Supabase** — auth (magic link) + Postgres database (RLS-protected)
- **localStorage** — offline mirror for module progress (DB is source of truth when signed in)
- **Vercel** — auto-deploy from `main`

---

## Repo Map

```
ai-learning-platform/
├── README.md
├── AGENTS.md                          ← you are here
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── .env.local.example                 ← template for local Vite env vars
├── .gitignore
├── supabase/
│   └── migrations/                    ← versioned SQL migrations (run in order)
│       ├── 001_initial_schema.sql
│       ├── 002_fix_admin_rls_recursion.sql
│       ├── 003_add_with_check_to_updates.sql
│       ├── 004_grant_table_privileges.sql
│       └── 005_add_profile_fk_to_events.sql
└── src/
    ├── App.jsx                        ← module registry, navbar, routing, VISMA_LOGO base64, auth gate, admin gate
    ├── main.jsx                       ← <AuthProvider> wraps <App>
    ├── index.css
    ├── lib/
    │   ├── supabase.js                ← Supabase client init + domain allowlist util
    │   └── auth.jsx                   ← <AuthProvider>, useAuth hook
    ├── components/
    │   ├── ModuleCard.jsx
    │   ├── ModulePlayer.jsx
    │   ├── ProgressBar.jsx
    │   ├── QuizCard.jsx
    │   ├── LanguageSwitcher.jsx
    │   ├── AuthModal.jsx              ← magic-link sign-in modal (EN/ES)
    │   ├── ProfileView.jsx            ← user profile edit (name/team)
    │   ├── EventsHome.jsx             ← Workshops vs Talks chooser
    │   ├── EventsList.jsx
    │   ├── EventDetail.jsx            ← detail + auth-gated request flow
    │   └── admin/
    │       ├── AdminPanel.jsx         ← gate + tab switcher (Dashboard/Users/Events)
    │       ├── AdminDashboard.jsx     ← completion rates, drop-off, top modules
    │       ├── AdminUsers.jsx         ← user list + per-user detail drawer
    │       └── AdminEvents.jsx        ← talk_requests + workshop_interests with status workflow
    ├── data/
    │   └── events.js                  ← Workshops & Talks catalog (EN/ES)
    ├── hooks/
    │   └── useProgress.js             ← Supabase-first, localStorage fallback, first-login migration
    ├── i18n/
    │   ├── config.js, en.json, es.json
    ├── modules/
    │   ├── metadata.js                ← difficulty + audience tags per module
    │   ├── 00-ai-fundamentals/
    │   ├── …
    │   └── 12-agent-skills-context/
    └── tools/
        ├── TokenOptimizer.jsx
        └── model-advisor/ModelAdvisor.jsx
```

Module directories follow this shape:

```
NN-module-name/
├── config.js
├── index.js
└── slides/
    ├── S01_Hook.jsx
    └── …
```

---

## Current State

### Modules (13 total, 00–12)

Catalog in `src/App.jsx` (`ALL_MODULES` array), metadata in `src/modules/metadata.js`.

| #   | ID                              | Audience            | Notes              |
| --- | ------------------------------- | ------------------- | ------------------ |
| 00  | `ai-fundamentals`               | All                 |                    |
| 01  | `token-awareness`               | All                 |                    |
| 02  | `evals-harness`                 | Technical           |                    |
| 03  | `ai-maturity`                   | Leadership          |                    |
| 04  | `ai-metrics`                    | All                 |                    |
| 05  | `ai-non-technical`              | Ops/HR/Finance/Mkt  |                    |
| 06  | `ai-security`                   | All                 |                    |
| 07  | `multi-agent`                   | Developers          |                    |
| 08  | `context-engineering`           | All                 |                    |
| 09  | `finetune-rag-local`            | Technical           | ⚠️ advanced        |
| 10  | `ai-skills-developers`          | Technical           |                    |
| 11  | `visma-ai-code-of-conduct`      | All                 | Visma policy       |
| 12  | `agent-skills-context`          | Technical           |                    |

### Tools

- **Model Advisor** (`src/tools/model-advisor/ModelAdvisor.jsx`) — interactive model picker. Navbar: 🧭 Models.
- **Token Optimizer** (`src/tools/TokenOptimizer.jsx`) — paste-a-prompt analyzer. Navbar: ✨ Token Optimizer.

### Events (Workshops & Talks)

Catalog in `src/data/events.js`. Navbar dropdown 📅 **Events** → Workshops or Talks.

- **Workshops** (2): AI Master Class, AI in Testing. Detail → **"I'm interested"** logs to `workshop_interests` table AND opens the Space registration URL.
- **Talks** (5): Challenges for Leaders, AI Fundamentals for Leaders, Agentic Delegation, Evals in AI Systems, AI Cost Engineering. Detail → **"Request this talk"** opens an inline form (name/team/notes) and on submit logs to `talk_requests` table. **Silent**: no email is sent — admin views requests in the admin panel.

Both flows are auth-gated: the CTAs open the AuthModal if no session.

### Admin Panel `/admin` — LIVE

Gated by `isAdmin` (from `useAuth()`, backed by `is_admin()` RPC).

- **AdminPanel.jsx** — tab switcher (Dashboard / Users / Events) and admin route guard.
- **AdminDashboard.jsx** — aggregate stats: total users, completion rates per module, drop-off slide, top modules.
- **AdminUsers.jsx** — user list with name/team/email/last activity. Row click opens a detail drawer showing that user's module_progress + event activity.
- **AdminEvents.jsx** — two sections:
  - **Talk requests** — list with status workflow (pending → contacted → scheduled → declined). Status update goes through RLS-protected UPDATE on `talk_requests`.
  - **Workshop interests** — list with timestamps.

Migration **005** is required for the nested PostgREST selects (`talk_requests.profile:profiles(*)`) used by AdminEvents/AdminUsers to render names and teams — without the foreign keys, those joins return null silently.

---

## Auth & Persistence

### Provider: Supabase

- **Project URL:** `https://wwzrqduocihohbuvitdq.supabase.co`
- **Region:** São Paulo (sa-east-1)
- **Auth method:** magic link (passwordless)
- **Allowed domains:** `@visma.com` (enforced client-side via `isAllowedEmail()` and server-side via `enforce_email_domain` trigger on `auth.users`)
- **Session lifetime:** 1 hour (`JWT expiry limit = 3600`)
- **Default SMTP:** Supabase built-in (~3-4 emails/hour rate limit). For production scale, switch to **Resend** under Authentication → SMTP. Free tier 3k/month is enough for Visma LATAM volume. **Not yet configured — pending before any group demo.**

### Admins (seeded in `001_initial_schema.sql`)

`public.admins` is a hardcoded allowlist:

- jonathan.izquierdo@visma.com (project owner)
- marisa.pineiro@visma.com
- isabel.loaldi@visma.com
- diego.colombo@visma.com

To check admin status from client code, **always use the `is_admin()` RPC** — never SELECT from `public.admins` directly (RLS blocks it).

```js
const { data: isAdmin } = await supabase.rpc('is_admin')
```

### Database schema

7 tables, all with RLS enabled:

| Table | Purpose | Access pattern |
|---|---|---|
| `profiles` | One row per signed-in user (extends `auth.users`) | SELECT own or admin · UPDATE own |
| `admins` | Admin allowlist | SELECT via `is_admin()` RPC only |
| `module_progress` | Per-user per-module slide + completed | SELECT/INSERT/UPDATE own or admin |
| `workshop_interests` | Log of "I'm interested" clicks | INSERT own · SELECT own or admin |
| `talk_requests` | Log of talk submissions | INSERT own · UPDATE admin only |
| `module_feedback` | Thumbs up/down + comments (future) | INSERT/UPDATE own |
| `module_suggestions` | User-proposed topics (future) | INSERT · SELECT authenticated |

### Frontend integration

- `src/lib/supabase.js` exports `supabase` (the client) + `isAllowedEmail()`.
- `src/lib/auth.jsx` exports `<AuthProvider>` and `useAuth()`. The provider exposes: `user`, `session`, `profile`, `isAdmin`, `loading`, `signInWithMagicLink(email, {name, team})`, `updateProfile({name, team})`, `signOut()`.
- `<AuthProvider>` wraps `<App>` in `src/main.jsx`.
- `useProgress` is Supabase-first: on first sign-in, it migrates whatever was in `localStorage` to the DB once, then DB becomes source of truth. `localStorage` continues as offline mirror.

### Env vars (in `.env.local` and Vercel)

```
VITE_SUPABASE_URL=https://wwzrqduocihohbuvitdq.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_eDY-diXPRsoZV2wjApjJ3A_fVDL9RR_
VITE_ALLOWED_EMAIL_DOMAINS=visma.com
```

**Critical:** must be **Plain Text** in Vercel, NOT Sensitive. Sensitive vars are not injected into client-side Vite builds. All three are safe to expose (anon key is public by design; RLS does the real work).

### Auth gate

- **Home + module list + events list:** public (no auth).
- **Start a module:** requires sign-in. Clicking a `ModuleCard` opens the AuthModal if no session.
- **Workshop "I'm interested":** requires sign-in. Logs to `workshop_interests` and opens Space URL.
- **Talk "Request this talk":** requires sign-in. Logs to `talk_requests`, shows "✓ Request received" message.
- **Admin panel `/admin`:** requires sign-in AND `isAdmin`. Non-admins see a 403-style message.
- **Profile incomplete banner:** if `profile.name` or `profile.team` is null, an amber banner appears on every view (except `/profile`) prompting completion. Also an amber dot on the user navbar button.

### Migrations (in `supabase/migrations/`, must be applied in order)

1. **001_initial_schema.sql** — base schema, admin seed, domain trigger.
2. **002_fix_admin_rls_recursion.sql** — introduces `is_admin()` SECURITY DEFINER helper, rewrites policies to use it (fixes infinite recursion that surfaced as HTTP 500).
3. **003_add_with_check_to_updates.sql** — adds `WITH CHECK` clauses to UPDATE policies (without WITH CHECK, PATCH returns 403 even when USING permits the row).
4. **004_grant_table_privileges.sql** — explicit GRANTs to `authenticated` role. Required because project was created with "Automatically expose new tables = OFF". Without these, PostgREST returns 42501 before reaching RLS.
5. **005_add_profile_fk_to_events.sql** — adds explicit foreign key constraints from `talk_requests.user_id` and `workshop_interests.user_id` to `profiles.id`. Required for PostgREST nested selects in the admin panel (e.g., `talk_requests?select=*,profile:profiles(*)`). Without these FKs, the nested join returns null and the admin UI shows empty name/team columns.

When in doubt, run migrations sequentially in Supabase SQL Editor. All are idempotent (`drop policy if exists`, `create table if not exists`, etc.).

---

## Spanish Content Rules — IMPORTANT

The platform targets Spanish-speaking learners across LATAM. Content quality is a recurring workstream.

- **Register:** voseo (Argentine/Uruguayan: *tenés*, *podés*, *sabés*) — applied consistently across all modules.
- **Style:** plain, accessible, conversational Spanish. Imagine explaining to a colleague, not writing a paper.
- **No jargon, no false cognates, no Spanglish.** Replace academic Spanish with simpler equivalents:
  - "observabilidad" → "visibilidad de lo que pasa"
  - "cosechar credenciales" → "robar credenciales"
  - "aluminó" → "alucinó" (typo, real one)
- **Preserve English technical terms as-is** when they're standard in the industry: *prompt*, *token*, *embedding*, *fine-tuning*, *RAG*, *eval*, *agent*. Don't translate these into awkward Spanish.
- **Accents matter.** Common slips: alucinó (not aluminó), también, está, qué.

When auditing or producing Spanish content, work file-by-file: list directory → identify targets → fetch → audit → stage → confirm with Jona → push.

---

## Lessons Learned the Hard Way

These bit us during the auth rollout and admin panel build. Save yourself the time.

1. **Don't write recursive RLS policies on `admins`.** A policy on table X that does `select 1 from X` triggers infinite recursion → HTTP 500. Use a `SECURITY DEFINER` function (`is_admin()`) to bypass RLS internally and return a boolean.

2. **UPDATE policies need BOTH `USING` and `WITH CHECK`.** `USING` says which existing rows can be targeted; `WITH CHECK` validates the new values after the SET. Without `WITH CHECK`, Postgres rejects writes silently → 403. For most cases the two expressions are identical.

3. **GRANTs and RLS are separate layers.** RLS filters rows; GRANTs allow table access at all. Every new table needs `grant select/insert/update on public.X to authenticated`. The 42501 error message tells you which one is missing:
   - `permission denied for table X` → missing GRANT
   - `new row violates row-level security policy` → RLS rejected

4. **`select from admins` from the frontend always fails.** The `admins` table has RLS that only lets admins read it (chicken-and-egg). Always use `supabase.rpc('is_admin')`.

5. **PostgREST nested selects require real foreign keys.** `talk_requests?select=*,profile:profiles(*)` won't traverse the join if there's no FK constraint, even if the column logically references `profiles.id`. The query succeeds but `profile` comes back null. This is migration 005's whole reason for existing.

6. **Vercel env vars marked "Sensitive" don't reach the Vite build.** Sensitive is for server-side only. `VITE_*` vars must be Plain Text. If you marked them Sensitive by accident, delete + recreate (Vercel doesn't let you flip the flag).

7. **Vercel build cache holds the previous bundle.** After adding env vars, **redeploy with "Use existing Build Cache" UNCHECKED** or the new vars won't reach the build.

8. **GitHub file updates need a fresh SHA every time.** `github:create_or_update_file` fails with conflict if the SHA is stale. Always fetch via `get_file_contents` immediately before updating. For multi-file changes, prefer `github:push_files` — it bundles into one atomic commit and sidesteps the SHA-per-file dance.

9. **Image clipping issues usually trace to the source asset, not CSS.** The Visma logo problem was excess background and wrong dimensions — fixed by processing the source (crop, transparent alpha, resize to 32px height) and embedding the corrected base64 in `App.jsx`. Don't burn time on layout tweaks before inspecting the asset itself.

---

## Conventions

### Module `config.js`

```js
export const moduleConfig = {
  id: '00-ai-fundamentals',
  icon: '🤖',
  color: '#00B8D9',
  duration: 28,
  title:    { en: '...', es: '...' },
  subtitle: { en: '...', es: '...' },
  level:    { en: '...', es: '...' },
  tags: ['...'],
}
```

### Module `index.js`

```js
import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'

export const moduleNN = {
  ...moduleConfig,
  totalSlides: 15,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'quiz',    component: S07_Quiz1 },  // 'quiz' wires onQuizPass
  ],
}
```

### Slides

```jsx
export default function S01_Hook({ lang }) {
  const c = content[lang]
  return ( /* JSX */ )
}
```

Quiz slides receive `onQuizPass` and must wire it: `<QuizCard onPass={onQuizPass} />`.

### Events catalog shape

See current `src/data/events.js` for the full shape. Every text field is `{ en, es }`.

---

## How to Add Things

**New module:** create `src/modules/NN-name/`, add metadata, import in `App.jsx → ALL_MODULES`, push.

**New workshop/talk:** push an object to `WORKSHOPS` or `TALKS` in `src/data/events.js`. No other files.

**New tool:** create `src/tools/your-tool/`, import in `App.jsx`, add a `view` value + navbar button.

**New admin:** insert into `public.admins` from SQL Editor (`insert into public.admins (email, notes) values (...)`).

**New table:** create with `if not exists`, enable RLS, write policies, add GRANTs to `authenticated`, add any FKs needed for nested PostgREST selects. Save as a new migration `supabase/migrations/NNN_*.sql`.

---

## DO NOT TOUCH

- **`src/hooks/useProgress.js`** without testing localStorage migration + DB upsert across all modules. The first-login migration runs once via a `MIGRATED_FLAG` in localStorage.
- **`VISMA_LOGO` base64 in `App.jsx`** — hardcoded on purpose. Source was processed (cropped, transparent alpha, resized to 32px height) before embedding.
- **Slide prop signatures** — `{ lang }` for content slides, `+ { onQuizPass }` for quizzes. Updating either requires updating every existing slide.
- **`type: 'quiz'` string** in module `index.js` — the player switches on it.
- **`is_admin()` function** in DB — many policies depend on it.
- **`enforce_email_domain` trigger** — if you change allowed domains, update both the trigger function AND `VITE_ALLOWED_EMAIL_DOMAINS`.
- **`main` branch** — every push deploys to production. No staging.

---

## Commit & PR Conventions

- Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`. Scope when useful: `feat(events):`, `fix(db):`, `fix(auth):`, `fix(i18n):`.
- Multi-file changes → one atomic commit via `github:push_files`.
- Single-file updates → `github:create_or_update_file` with a freshly-fetched SHA.
- DB changes → add a new migration file under `supabase/migrations/`, never edit an old one.

---

## Connected Tooling (Claude.ai)

- **GitHub** — `JonathanIzquierdo/ai-learning-platform`
- **Slack** — `#ai-engineering-and-technology` (`GS8RTDCQ7`)
- **Google Calendar** — work session scheduling
- **Google Drive** — source materials

---

## Open Items / Roadmap

Ranked roughly by priority. **Verify current status before assuming — check the repo, not memory.**

### Active

- **Spanish quiz quality review (in progress).** All 10 quiz modules audited, 18 `S##_Quiz#.jsx` files total. Major fixes identified (typos like *aluminó* → *alucinó*, accent errors, overly academic phrasing). 16/18 corrected versions prepared and pending Jona's confirmation before pushing to `main`. **Next step:** confirm and push, then audit remaining 2.
- **Resend SMTP.** Not yet configured. Built-in Supabase SMTP hit its ~3-4/hour rate limit during testing. Must switch before any group demo. Auth → SMTP in Supabase dashboard; free tier covers Visma LATAM volume.
- **GitHub collaborator invite.** Invite Ignacio Valek (ignacio.valek@xubio.com) as collaborator on private repos via GitHub Settings (manual step, can't be done via MCP).
- **Repo cleanup.** Consider archiving `visma-ai-learning` (private, likely duplicate of `ai-learning-platform`). Verify before archiving.

### Next features

- **Certificates.** Downloadable PDF on module completion, generated in-browser with `pdf-lib` or `@react-pdf/renderer`. Name pulled from `profiles.name`.
- **Feedback.** Thumbs up/down per module post-completion → `module_feedback` table (already exists). Optional comment.
- **Module suggestions.** "Request a module" form → `module_suggestions` table (already exists). Upvote mechanism. Admin reviews in admin panel.
- **Prompt sandbox.** Live playground inside module 08 (Context Engineering). Calls Anthropic API with user-provided key.

### Misc

- Search/filter on modules grid
- Per-module remaining-time estimate
- Dark/light theme toggle (currently dark-only)
- Vercel preview deploys per PR for testing without touching prod

---

## Operational Notes

- **No staging.** `main` = production.
- **No CI.** Vercel handles build + deploy.
- **Bundle size.** Eager-imported modules — fine at 13, consider `React.lazy` past ~30.
- **A11y.** Keyboard nav, `alt` on images, no focus traps.
- **Animation.** Framer Motion only. Don't add more libs.
- **Email rate limit.** Built-in Supabase SMTP allows ~3-4 emails/hour per project. Switch to Resend before any group demo.

---

## Last Updated

2026-05-21 — Admin panel (`/admin` with Dashboard / Users / Events tabs) shipped. Migration 005 (FKs from `talk_requests` / `workshop_interests` to `profiles`) added to repo. Spanish quiz review in progress (16/18 files prepared, pending push). Logo asset fix documented in lessons learned.
