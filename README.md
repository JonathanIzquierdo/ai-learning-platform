# Visma AI Learning Platform

Self-paced AI micro-learning platform built for Visma LATAM. 13 modules in EN/ES, two interactive tools, and a Workshops & Talks catalog — all delivered as a single React app deployed on Vercel.

**Live:** https://ai-learning-platform-livid.vercel.app

## Features

- 🎓 **13 self-paced modules** (00–12) covering AI fundamentals, evals, security, multi-agent systems, fine-tuning, and Visma's AI Code of Conduct
- 🌐 **Full i18n** (English & Spanish) across modules, tools, navigation, and events
- 💾 **Persistent progress** in `localStorage` — pause and resume any module from any device
- 🎉 **Confetti + completion screen** on module finish
- 🧭 **Model Advisor** — interactive tool to pick the right AI model for a task
- ✨ **Token Optimizer** — paste a prompt, see savings opportunities
- 📅 **Workshops & Talks** — browse the catalog of in-person sessions and request one
- 📱 Responsive (1 / 2 / 3-column grid on mobile / tablet / desktop)

## Tech Stack

- **React + Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **react-i18next** for EN/ES translations
- **canvas-confetti** (CDN) for completion celebration
- **lucide-react** for icons
- **Vercel** for hosting (auto-deploy from `main`)

## Modules

| #   | Module                              | Level         | Audience           |
| --- | ----------------------------------- | ------------- | ------------------ |
| 00  | AI Fundamentals                     | Beginner      | All roles          |
| 01  | Token Awareness                     | Beginner      | All roles          |
| 02  | AI Evals & Harness                  | Intermediate  | Technical          |
| 03  | AI Maturity                         | Intermediate  | Leadership         |
| 04  | Metrics & KPIs                      | Intermediate  | All roles          |
| 05  | AI for Non-Technical                | Beginner      | Ops / HR / Finance |
| 06  | AI Security                         | Intermediate  | All roles          |
| 07  | Multi-Agent Systems                 | Intermediate  | Developers         |
| 08  | Context Engineering                 | Intermediate  | All roles          |
| 09  | Fine-tuning vs RAG vs Local         | Advanced      | Technical          |
| 10  | AI Skills for Developers            | Intermediate  | Technical          |
| 11  | Visma AI Code of Conduct            | Beginner      | All roles          |
| 12  | Agent Skills & Context              | Intermediate  | Technical          |

## Workshops & Talks

Beyond self-paced modules, the platform lists live sessions Visma teams can request:

- **Workshops** — multi-hour hands-on sessions (AI Master Class, AI in Testing)
- **Talks** — 45–120 min focused sessions for leaders and technical teams

Workshop requests link to internal Space registration pages. Talk requests open a pre-filled email (via Gmail, native mail client, or clipboard copy) to the contact owner.

## Getting Started

```bash
npm install
npm run dev
```

Vite dev server runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
ai-learning-platform/
├── README.md
├── AGENTS.md              ← contributor & agent guide (read first if editing)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── src/
    ├── App.jsx            ← module registry, routing, navbar
    ├── main.jsx
    ├── index.css
    ├── components/        ← ModuleCard, ModulePlayer, EventDetail, …
    ├── data/              ← events.js (workshops & talks catalog)
    ├── hooks/             ← useProgress (localStorage)
    ├── i18n/              ← config + en.json + es.json
    ├── modules/           ← 13 self-paced modules (00–12) + metadata.js
    │   └── NN-name/
    │       ├── config.js
    │       ├── index.js
    │       └── slides/
    └── tools/
        ├── TokenOptimizer.jsx
        └── model-advisor/
```

## Contributing

Contributors and AI agents should read **[AGENTS.md](./AGENTS.md)** before making changes. It documents code conventions, how to add modules and events, what NOT to touch, and the project roadmap.

## License

Internal — Visma LATAM.
