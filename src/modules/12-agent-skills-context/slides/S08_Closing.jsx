import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module Complete',
    title: 'Now Configure Your Agent Like a Pro.',
    summary: [
      'The context hierarchy: LLM system prompt > enterprise rules > CLAUDE.md > SKILL.md > MEMORY.md > conversation > prompt',
      'CLAUDE.md = project identity. Keep it under 300 lines. Only universal rules.',
      'AGENTS.md = cross-tool standard. Use it + symlink if your team uses multiple AI tools.',
      'SKILL.md = modular capabilities. Progressive disclosure \u2014 zero cost until loaded.',
      'MEMORY.md = persistent learning. What makes agents compound their effectiveness over time.',
      'Subagents = separate context windows. Use for wide tasks, not small ones.',
      'More specific context always overrides broader context.',
    ],
    cta: 'The gap between "the AI keeps forgetting my project" and "the AI already knows" is these files. One afternoon setting them up saves hundreds of hours.',
    tools: 'Tools: Claude Code (.claude/), Cursor (.cursor/rules), Copilot (.github/copilot-instructions.md), Windsurf (.windsurf/rules), AGENTS.md (universal)',
  },
  es: {
    eyebrow: 'M\u00f3dulo Completo',
    title: 'Ahora Configur\u00e1 Tu Agente Como un Pro.',
    summary: [
      'La jerarqu\u00eda: system prompt LLM > reglas enterprise > CLAUDE.md > SKILL.md > MEMORY.md > conversaci\u00f3n > prompt',
      'CLAUDE.md = identidad del proyecto. Bajo 300 l\u00edneas. Solo reglas universales.',
      'AGENTS.md = est\u00e1ndar cross-tool. Usalo + symlink si tu equipo usa m\u00faltiples herramientas.',
      'SKILL.md = capacidades modulares. Progressive disclosure \u2014 cero costo hasta que se carga.',
      'MEMORY.md = aprendizaje persistente. Lo que hace que los agentes multipliquen su efectividad.',
      'Subagentes = context windows separados. Us\u00e1 para tareas amplias, no peque\u00f1as.',
      'El contexto m\u00e1s espec\u00edfico siempre overridea al m\u00e1s amplio.',
    ],
    cta: 'La brecha entre "la IA se olvida de mi proyecto" y "la IA ya sabe" son estos archivos. Una tarde configur\u00e1ndolos ahorra cientos de horas.',
    tools: 'Claude Code (.claude/), Cursor (.cursor/rules), Copilot (.github/copilot-instructions.md), Windsurf (.windsurf/rules), AGENTS.md (universal)',
  }
}

export default function S08_Closing({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-8">{c.title}</motion.h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-slate-800 border border-violet-500/30 rounded-2xl p-5 mb-6">
        <p className="text-violet-400 text-xs font-bold uppercase tracking-wider mb-4">7 {lang === 'es' ? 'Conceptos Clave' : 'Key Concepts'}</p>
        <div className="space-y-2">
          {c.summary.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.05 }}
              className="flex items-start gap-3">
              <span className="bg-green-500/20 text-green-300 text-xs font-bold w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5">{String.fromCodePoint(0x2713)}</span>
              <p className="text-slate-300 text-sm">{s}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 mb-4">
        <p className="text-violet-100 text-sm font-medium leading-relaxed">{c.cta}</p>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="text-slate-600 text-xs font-mono">{c.tools}</motion.p>
    </div>
  )
}
