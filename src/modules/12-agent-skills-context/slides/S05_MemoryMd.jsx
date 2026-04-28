import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'The Memory Layer',
    title: 'MEMORY.md: Your Agent Gets Smarter Over Time',
    body: 'Without memory, your agent is equally useful on run 1 and run 100. With memory, it compounds knowledge.',
    types: [
      { name: 'Auto-Memory', detail: 'Claude Code automatically creates and updates memory files based on corrections you make.', icon: String.fromCodePoint(0x1F9E0) },
      { name: 'Project Memory', detail: 'MEMORY.md at the project level captures tribal knowledge: known issues, architectural decisions.', icon: String.fromCodePoint(0x1F4DA) },
      { name: 'Learnings File', detail: 'A learnings.md that the agent appends to after each run. What worked, what failed, what to do differently.', icon: String.fromCodePoint(0x1F4DD) },
      { name: 'Task History', detail: 'For multi-week projects: what was done last session, what is pending, decisions made and why.', icon: String.fromCodePoint(0x1F4CB) },
    ],
    memoryExample: '## 2026-04-18 \u2014 Auth Module Refactor\n**Worked:** Extracting JWT validation into middleware\n**Failed:** Supabase session breaks in Server Components\n**Decision:** Never destructure Supabase session in SSR\n**Next:** Implement refresh token rotation',
    compounding: 'Agents that accumulate structured memory across runs compound their effectiveness over time. Agents that don\u2019t, plateau.',
  },
  es: {
    eyebrow: 'La Capa de Memoria',
    title: 'MEMORY.md: Tu Agente Se Vuelve M\u00e1s Inteligente',
    body: 'Sin memoria, tu agente es igual de \u00fatil en la corrida 1 y en la 100. Con memoria, acumula conocimiento.',
    types: [
      { name: 'Auto-Memory', detail: 'Claude Code crea y actualiza archivos de memoria autom\u00e1ticamente basado en correcciones que hac\u00e9s.', icon: String.fromCodePoint(0x1F9E0) },
      { name: 'Memoria de Proyecto', detail: 'MEMORY.md a nivel proyecto captura conocimiento tribal: issues conocidos, decisiones arquitecturales.', icon: String.fromCodePoint(0x1F4DA) },
      { name: 'Archivo de Learnings', detail: 'Un learnings.md al que el agente agrega despu\u00e9s de cada corrida. Qu\u00e9 funcion\u00f3, qu\u00e9 fall\u00f3, qu\u00e9 hacer diferente.', icon: String.fromCodePoint(0x1F4DD) },
      { name: 'Historial de Tareas', detail: 'Para proyectos de varias semanas: qu\u00e9 se hizo la sesi\u00f3n pasada, qu\u00e9 est\u00e1 pendiente, y decisiones tomadas.', icon: String.fromCodePoint(0x1F4CB) },
    ],
    memoryExample: '## 2026-04-18 \u2014 Refactor M\u00f3dulo Auth\n**Funcion\u00f3:** Extraer validaci\u00f3n JWT a middleware\n**Fall\u00f3:** Sesi\u00f3n Supabase se rompe en Server Components\n**Decisi\u00f3n:** Nunca desestructurar sesi\u00f3n Supabase en SSR\n**Siguiente:** Implementar rotaci\u00f3n de refresh token',
    compounding: 'Agentes que acumulan memoria estructurada entre corridas multiplican su efectividad con el tiempo. Los que no, se estancan.',
  }
}

export default function S05_MemoryMd({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-6 max-w-xl">{c.body}</motion.p>
      <div className="space-y-3 mb-4">
        {c.types.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{t.icon}</span>
              <span className="text-white text-sm font-semibold">{t.name}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed pl-7">{t.detail}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-slate-900/50 rounded-lg p-3 mb-4">
        <p className="text-violet-300 text-xs font-mono whitespace-pre-wrap">{c.memoryExample}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 text-sm text-violet-200">
        {String.fromCodePoint(0x1F4C8)} {c.compounding}
      </motion.div>
    </div>
  )
}
