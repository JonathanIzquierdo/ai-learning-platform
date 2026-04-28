import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 12 \u00b7 Agent Skills & Context Hierarchy',
    title: 'Your agent is only as good as its context.',
    body: 'Every AI coding agent \u2014 Claude Code, Cursor, Copilot, Windsurf \u2014 starts each session with zero knowledge of your project. The difference between a useless assistant and a productive teammate is entirely defined by the files you give it.',
    layers: [
      { name: 'LLM System Prompt', scope: 'Immutable', detail: 'Built-in rules (no insults, safety). You cannot change these.' },
      { name: 'Enterprise/Org Rules', scope: 'Organization', detail: 'Company-wide policies. Set by admins.' },
      { name: 'CLAUDE.md / AGENTS.md', scope: 'Project', detail: 'Your project identity, rules, conventions. Loaded every session.' },
      { name: 'SKILL.md', scope: 'On-demand', detail: 'Modular capabilities loaded only when relevant.' },
      { name: 'MEMORY.md', scope: 'Persistent', detail: 'What the agent learned across sessions.' },
      { name: 'Conversation context', scope: 'Ephemeral', detail: 'The current chat. Disappears when the session ends.' },
      { name: 'User prompt', scope: 'Instant', detail: 'Your message right now. Highest priority.' },
    ],
    note: 'More specific context overrides broader context. Your CLAUDE.md overrides enterprise rules for your project. A SKILL.md overrides CLAUDE.md for its specific task.',
  },
  es: {
    eyebrow: 'M\u00f3dulo 12 \u00b7 Agent Skills y Jerarqu\u00eda de Contexto',
    title: 'Tu agente es tan bueno como su contexto.',
    body: 'Todo agente de IA \u2014 Claude Code, Cursor, Copilot, Windsurf \u2014 empieza cada sesi\u00f3n con cero conocimiento de tu proyecto. La diferencia entre un asistente in\u00fatil y un compa\u00f1ero productivo est\u00e1 completamente definida por los archivos que le das.',
    layers: [
      { name: 'System Prompt del LLM', scope: 'Inmutable', detail: 'Reglas built-in. No pod\u00e9s cambiarlas.' },
      { name: 'Reglas Enterprise/Org', scope: 'Organizaci\u00f3n', detail: 'Pol\u00edticas de toda la empresa.' },
      { name: 'CLAUDE.md / AGENTS.md', scope: 'Proyecto', detail: 'Identidad del proyecto, reglas, convenciones.' },
      { name: 'SKILL.md', scope: 'On-demand', detail: 'Capacidades modulares cargadas solo cuando son relevantes.' },
      { name: 'MEMORY.md', scope: 'Persistente', detail: 'Lo que el agente aprendi\u00f3 entre sesiones.' },
      { name: 'Contexto de conversaci\u00f3n', scope: 'Ef\u00edmero', detail: 'El chat actual. Desaparece al terminar.' },
      { name: 'Prompt del usuario', scope: 'Instant\u00e1neo', detail: 'Tu mensaje ahora mismo. M\u00e1xima prioridad.' },
    ],
    note: 'El contexto m\u00e1s espec\u00edfico overridea al m\u00e1s amplio. Tu CLAUDE.md overridea reglas enterprise para tu proyecto.',
  }
}

export default function S01_Hook({ lang }) {
  const c = content[lang]
  const colors = ['bg-red-500/20 text-red-300', 'bg-orange-500/20 text-orange-300', 'bg-amber-500/20 text-amber-300', 'bg-green-500/20 text-green-300', 'bg-blue-500/20 text-blue-300', 'bg-purple-500/20 text-purple-300', 'bg-cyan-500/20 text-cyan-300']
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-slate-800 border border-violet-500/30 rounded-2xl p-5 mb-6">
        <p className="text-violet-400 text-xs font-bold uppercase tracking-wider mb-4">{lang === 'es' ? 'Jerarqu\u00eda de Contexto' : 'Context Hierarchy'}</p>
        <div className="flex flex-col gap-2">
          {c.layers.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.06 }}
              className="flex items-center gap-3">
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0 ${colors[i]}`}>{l.scope}</span>
              <span className="text-white text-sm font-medium w-40 shrink-0">{l.name}</span>
              <span className="text-slate-500 text-xs hidden sm:block">{l.detail}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        {String.fromCodePoint(0x1F4A1)} {c.note}
      </div>
    </div>
  )
}
