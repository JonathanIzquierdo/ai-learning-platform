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
- **Tailwind CSS** — utility-first, no custom CSS framework
- **Framer Motion** — animations across slides and components
- **react-i18next** — EN/ES translations
- **canvas-confetti** — via CDN, used on module completion
- **lucide-react** — icons
- **localStorage** — only persistence layer (no backend yet)
- **Vercel** — auto-deploy from `main`

No backend. No database. No auth. Everything client-side. This is intentional for v1.

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
└── src/
    ├── App.jsx                        ← module registry, navbar, routing, VISMA_LOGO base64
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── ModuleCard.jsx             ← home grid card with progress bar
    │   ├── ModulePlayer.jsx           ← slide player + confetti + completion screen
    │   ├── ProgressBar.jsx            ← top progress bar inside the player
    │   ├── QuizCard.jsx               ← interactive quiz with color feedback
    │   ├── LanguageSwitcher.jsx       ← EN/ES toggle
    │   ├── EventsHome.jsx             ← Workshops vs Talks chooser
    │   ├── EventsList.jsx             ← list of cards for one kind
    │   └── EventDetail.jsx            ← detail view + request flow (Gmail/mailto/copy)
    ├── data/
    │   └── events.js                  ← Workshops & Talks catalog (EN/ES)
    ├── hooks/
    │   └── useProgress.js             ← localStorage persistence
    ├── i18n/
    │   ├── config.js
    │   ├── en.json
    │   └── es.json
    ├── modules/                       ← 13 self-paced modules (00–12)
    │   ├── metadata.js                ← difficulty + audience tags per module
    │   ├── 00-ai-fundamentals/
    │   ├── 01-token-awareness/
    │   ├── …
    │   └── 12-agent-skills-context/
    └── tools/
        ├── TokenOptimizer.jsx
        └── model-advisor/
            └── ModelAdvisor.jsx
```

Every module directory follows this structure:

```
NN-module-name/
├── config.js      ← id, icon, color, duration, title/subtitle (EN+ES), tags
├── index.js       ← imports config + slides, exports moduleNN
└── slides/
    ├── S01_Hook.jsx
    ├── S02_*.jsx
    └── SXX_Closing.jsx
```

---

## Current State

### Modules (13 total)

| #   | ID                              | Slides | Min | Audience            | Color    |
| --- | ------------------------------- | ------ | --- | ------------------- | -------- |
| 00  | `ai-fundamentals`               | 15     | 28  | All                 | `#00B8D9` |
| 01  | `token-awareness`               | 8      | 15  | All                 | `#0052CC` |
| 02  | `evals-harness`                 | 12     | 22  | Technical           | `#6554C0` |
| 03  | `ai-maturity`                   | 13     | 22  | Leadership          | `#36B37E` |
| 04  | `ai-metrics`                    | 13     | 24  | All                 | `#FF991F` |
| 05  | `ai-non-technical`              | 11     | 20  | Ops/HR/Finance/Mkt  | `#00B8D9` |
| 06  | `ai-security`                   | 11     | 22  | All                 | `#DE350B` |
| 07  | `multi-agent`                   | 11     | 25  | Developers          | `#6554C0` |
| 08  | `context-engineering`           | 10     | 22  | All                 | `#36B37E` |
| 09  | `finetune-rag-local`            | 9      | 28  | Technical (⚠️ adv)  | `#DE350B` |
| 10  | `ai-skills-developers`          | —      | —   | Technical           | —        |
| 11  | `visma-ai-code-of-conduct`      | —      | —   | All (Visma policy)  | —        |
| 12  | `agent-skills-context`          | —      | —   | Technical           | —        |

Difficulty/audience tags are centralized in `src/modules/metadata.js`.

### Tools

- **Model Advisor** (`src/tools/model-advisor/ModelAdvisor.jsx`) — interactive picker that recommends an AI model based on task properties. Navbar entry: 🧭 Models.
- **Token Optimizer** (`src/tools/TokenOptimizer.jsx`) — paste a prompt, see token savings opportunities. Navbar entry: ✨ Token Optimizer.

### Events (Workshops & Talks)

Catalog lives in `src/data/events.js`. Navbar exposes a 📅 **Events** dropdown with two destinations:

- **Workshops** (2 sessions): AI Master Class, AI in Testing.
  Detail view → **"I'm interested"** button opens the Visma Space registration URL in a new tab.
- **Talks** (5 sessions): Challenges for Leaders, AI Fundamentals for Leaders, Agentic Delegation, Evals in AI Systems, AI Cost Engineering.
  Detail view → **"Request this talk"** opens an inline form. On submit, the request can be sent via:
  1. **Gmail web compose** (primary) — opens `https://mail.google.com/mail/?view=cm&...` in a new tab. Works for Visma's Google Workspace accounts.
  2. **mailto:** (secondary) — opens the OS-default mail client. For Outlook/Apple Mail users.
  3. **Copy to clipboard** (fallback) — copies a formatted block ("To:", "Subject:", body) for paste anywhere.

All three pre-fill: recipient `jonathan.izquierdo@visma.com`, subject with talk title, body with submitter details, and CC to the submitter's own email.

### Features implemented

- Persistent progress in `localStorage` per module (current slide + completed flag)
- Confetti on module completion
- Completion screen with "Review again" / "Back to home" options
- EN/ES toggle in navbar
- Interactive quizzes with color feedback
- Framer Motion animations across all slides
- "Completed" badge on `ModuleCard`
- Difficulty + audience tags on each card via `metadata.js`
- Events catalog with 3-way request flow

---

## Conventions

### Module `config.js`

```js
export const moduleConfig = {
  id: '00-ai-fundamentals',
  icon: '🤖',
  color: '#00B8D9',         // hex, used in cards and slide accents
  duration: 28,              // minutes (rough estimate)
  title:    { en: '...', es: '...' },
  subtitle: { en: '...', es: '...' },
  level:    { en: 'Beginner · All roles', es: 'Principiante · Todos los roles' },
  tags: ['...'],
}
```

### Module `index.js`

```js
import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
// … more imports

export const module00 = {
  ...moduleConfig,
  totalSlides: 15,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'quiz',    component: S07_Quiz1 },  // type: 'quiz' triggers special player logic
    // …
  ],
}
```

### Slides

```jsx
export default function S01_Hook({ lang }) {
  const c = content[lang]   // content object with 'en' and 'es' keys
  return ( /* JSX */ )
}
```

Quiz slides additionally receive `onQuizPass` from the player and must call it on correct answer:

```jsx
<QuizCard
  question={c.question}
  options={c.options}         // array of strings
  correctIndex={c.correct}    // 0-based index
  onPass={onQuizPass}         // advances player
/>
```

### Events `data/events.js`

`WORKSHOPS` and `TALKS` are arrays of objects with this shape (EN/ES per text field):

```js
{
  id: 'unique-slug',
  icon: '🎓',
  color: '#0052CC',
  duration: { en: '...', es: '...' },
  level:    { en: '...', es: '...' },
  audience: { en: [...], es: [...] },
  title:    { en: '...', es: '...' },
  tagline:  { en: '...', es: '...' },
  description: { en: '...', es: '...' },
  objectives:  { en: [...], es: [...] },        // workshops only
  agenda:      { en: [{day, items}], es: [...] }, // workshops only
  topics:      { en: [...], es: [...] },        // talks only
  keyMessage:  { en: '...', es: '...' },
  requestUrl:  'https://space.visma.com/...',   // workshops only
}
```

---

## How to Add Things

### Add a new module

1. Create `src/modules/NN-name/` with `config.js`, `index.js`, and `slides/`.
2. Add an entry to `src/modules/metadata.js` for difficulty/audience tags.
3. Import and append to `ALL_MODULES` in `src/App.jsx`:
   ```js
   import { moduleNN } from './modules/NN-name/index'
   const ALL_MODULES = [..., moduleNN]
   ```
4. Add translations to `src/i18n/en.json` and `es.json` if needed.
5. Push to `main`. Vercel deploys in ~1 min.

### Add a new workshop or talk

1. Edit `src/data/events.js`. Push a new object to `WORKSHOPS` or `TALKS`.
2. No other file changes required — the list, detail view, and request flow pick it up automatically.

### Add a new tool (like Model Advisor or Token Optimizer)

1. Create `src/tools/your-tool/YourTool.jsx`.
2. Import in `App.jsx`, add a `view` state value, and add a navbar button.
3. Follow the existing pattern for back-to-home navigation.

---

## DO NOT TOUCH

These are landmines. Each was learned the hard way.

- **`src/hooks/useProgress.js`** — touching this without testing across all modules breaks `localStorage` for every existing user. If you must change it, write a migration.
- **`VISMA_LOGO` base64 constant in `App.jsx`** — hardcoded on purpose. Do not move to a separate file or asset without updating all references. The image was processed to remove the original black background and resized to 32px height.
- **Module slide structure** — never change the prop signature (`{ lang }` for content, `+ { onQuizPass }` for quiz) without updating every existing slide.
- **`type: 'quiz'` in `index.js`** — the player relies on this string to wire `onQuizPass`. Don't rename it.
- **`main` branch** — every push deploys to production. There is no staging environment. Test locally with `npm run dev` first.

---

## Conventions for Commits and PRs

- Use Conventional Commits prefixes: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`.
- Scope the prefix when it helps: `feat(events): add Gmail compose option`.
- Group related file changes into a single commit using `github:push_files`. Avoid one-file-per-commit dumps.
- Vercel comments on PRs with preview deployment links automatically.

---

## Connected Tooling (Claude.ai Project Context)

When working through Claude.ai for this project, these MCPs are connected and useful:

- **GitHub** — file reads, commits, branch ops on `JonathanIzquierdo/ai-learning-platform`
- **Slack** — `#ai-engineering-and-technology` (ID `GS8RTDCQ7`) for announcements
- **Google Calendar** — for scheduling work sessions
- **Google Drive** — for source material (catalogs, agendas)

Prefer `github:push_files` over multiple `github:create_or_update_file` calls for multi-file changes — it produces one atomic commit and is one round-trip.

---

## Roadmap (Pending / Future Sessions)

These were discussed but not implemented yet. Order is rough priority.

### Auth & user tracking
- **Supabase magic-link auth** scoped to `@visma.com` emails
- User table linking user_id → modules accessed / modules completed
- Migrate `useProgress` from `localStorage`-only to `localStorage + Supabase` (offline-first sync)

### Admin panel
- Route `/admin` (gated by Supabase auth + allow-list of admin emails)
- Dashboard: modules completion rates, top modules, drop-off slides
- Module suggestions panel (users propose topics)

### Certificates
- Generate a downloadable PDF certificate when a module is completed
- Ask for the user's name + email at completion
- Use `pdf-lib` or `@react-pdf/renderer` in-browser, no backend needed

### Feedback
- Thumbs up/down on each module after completion
- Optional free-text comment
- Aggregated in admin panel

### Prompt sandbox
- Live prompt playground inside the **Context Engineering** module (module 08)
- Side-by-side: prompt input, response, token count
- Calls Anthropic API directly with user-provided key (no server)

### Events automation (nice-to-have)
- Replace mailto/Gmail flow with Web3Forms or Formspree for true zero-click submission
- Keep mailto/Gmail/copy as fallbacks

### Misc
- Search/filter on the modules grid (by difficulty, audience, tag)
- Per-module "estimated remaining time" based on current slide
- Dark/light theme toggle (currently dark-only)

---

## Operational Notes

- **No staging.** `main` is production. Test locally before pushing.
- **No CI.** Vercel handles build + deploy. If the build fails, the live site keeps the previous successful deployment.
- **Bundle size.** Modules are imported eagerly in `App.jsx` — fine at 13 modules, but if we cross ~30, consider `React.lazy` per module.
- **Accessibility.** Every interactive element should be keyboard-navigable. Don't trap focus inside modals. Always provide `alt` text for images.
- **Performance.** Framer Motion adds ~30KB gzipped — acceptable for the UX gains. Don't add more animation libraries.

---

## Last Updated

Last touched: 2026-05-19 (events catalog + Gmail/mailto/copy request flow).
If you edit this file, bump the date and add a one-line note.
