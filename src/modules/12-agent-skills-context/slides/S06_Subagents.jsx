import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'The Delegation Layer',
    title: 'Subagents: Separate Context Windows',
    body: 'The key insight about subagents is not the name or the ceremony. It\u2019s the separate context window. A subagent runs in its own context, so its work doesn\u2019t pollute your main conversation.',
    when: [
      { do: 'Use subagents when the task would pollute your main conversation', icon: String.fromCodePoint(0x2705) },
      { do: 'Use subagents for research that produces lots of file reads and outputs', icon: String.fromCodePoint(0x2705) },
      { do: 'Don\u2019t use subagents for small inline tasks \u2014 the overhead isn\u2019t worth it', icon: String.fromCodePoint(0x274C) },
      { do: 'Don\u2019t spawn subagents for every action \u2014 that burns tokens', icon: String.fromCodePoint(0x274C) },
    ],
    builtIn: [
      { name: 'Plan subagent', purpose: 'Codebase research for planning. Prevents infinite nesting while gathering context.' },
      { name: 'General-purpose subagent', purpose: 'Complex research + multi-step operations + code modifications.' },
    ],
    custom: 'You can create custom subagents with their own system prompt, tool restrictions, permission mode, hooks, and skills. Each gets a persistent memory directory.',
    customExample: '---\nname: code-reviewer\ndescription: Reviews code for quality\nmemory: user\n---\nYou are a code reviewer. Update your\nagent memory with patterns and\nrecurring issues you discover.',
    golden: 'If the task is small, do it inline. If the task is wide, isolate it. That one sentence is better than most subagent advice.',
  },
  es: {
    eyebrow: 'La Capa de Delegaci\u00f3n',
    title: 'Subagentes: Context Windows Separados',
    body: 'El insight clave sobre subagentes no es el nombre ni la ceremonia. Es el context window separado. Un subagente corre en su propio contexto, as\u00ed su trabajo no contamina tu conversaci\u00f3n principal.',
    when: [
      { do: 'Us\u00e1 subagentes cuando la tarea contaminar\u00eda tu conversaci\u00f3n principal', icon: String.fromCodePoint(0x2705) },
      { do: 'Us\u00e1 subagentes para research que produce muchas lecturas de archivos', icon: String.fromCodePoint(0x2705) },
      { do: 'No uses subagentes para tareas peque\u00f1as inline \u2014 el overhead no vale la pena', icon: String.fromCodePoint(0x274C) },
      { do: 'No spawne\u00e9s subagentes para cada acci\u00f3n \u2014 eso quema tokens', icon: String.fromCodePoint(0x274C) },
    ],
    builtIn: [
      { name: 'Subagente Plan', purpose: 'Research de codebase para planificaci\u00f3n. Previene nesting infinito.' },
      { name: 'Subagente general', purpose: 'Research complejo + operaciones multi-paso + modificaciones de c\u00f3digo.' },
    ],
    custom: 'Pod\u00e9s crear subagentes custom con su propio system prompt, restricciones de tools, modo de permisos, hooks y skills. Cada uno tiene un directorio de memoria persistente.',
    customExample: '---\nname: code-reviewer\ndescription: Revisa c\u00f3digo por calidad\nmemory: user\n---\nSos un code reviewer. Actualiz\u00e1 tu\nagent memory con patterns e issues\nrecurrentes que descubras.',
    golden: 'Si la tarea es chica, hacela inline. Si la tarea es amplia, aislala. Esa sola frase es mejor que la mayor\u00eda de los consejos sobre subagentes.',
  }
}

export default function S06_Subagents({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-6 max-w-xl">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="space-y-2 mb-6">
        {c.when.map((w, i) => (
          <div key={i} className="flex items-start gap-2 bg-slate-800/30 rounded-lg p-2">
            <span className="text-sm shrink-0">{w.icon}</span>
            <p className="text-slate-300 text-sm">{w.do}</p>
          </div>
        ))}
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          <p className="text-white text-xs font-bold uppercase mb-2">Built-in</p>
          {c.builtIn.map((b, i) => (
            <div key={i} className="mb-2">
              <p className="text-violet-300 text-sm font-medium">{b.name}</p>
              <p className="text-slate-500 text-xs">{b.purpose}</p>
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="bg-slate-800 border border-violet-500/30 rounded-xl p-4">
          <p className="text-white text-xs font-bold uppercase mb-2">Custom</p>
          <p className="text-slate-400 text-xs mb-2">{c.custom}</p>
          <div className="bg-slate-900/50 rounded-lg p-2">
            <p className="text-violet-300 text-[10px] font-mono whitespace-pre-wrap">{c.customExample}</p>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        {String.fromCodePoint(0x2B50)} {c.golden}
      </motion.div>
    </div>
  )
}
