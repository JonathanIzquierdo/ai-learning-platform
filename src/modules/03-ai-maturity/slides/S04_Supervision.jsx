import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Level 2: Supervision.',
    tagline: 'AI executes your instructions.',
    desc: 'At Level 2, you stop improvising and start engineering. You write explicit instructions — skills, system prompts, CLAUDE.md files, rules — and the agent follows them. You supervise the outputs, not the keystrokes.',
    shift: {
      label: 'The key shift from Level 1 to Level 2',
      from: 'You prompt the AI reactively, one message at a time, with no persistent context.',
      to: 'You engineer the context proactively. The agent knows its role, its rules, and what good output looks like — before you even start.'
    },
    examples: [
      { icon: '📄', title: 'CLAUDE.md / agent rules file', desc: 'A file in your repo that tells the agent how to work: what to check, how to commit, when to ask vs. when to decide.' },
      { icon: '🎯', title: 'System prompt engineering', desc: 'You write a system prompt that defines the agent\'s persona, constraints, and output format for a specific product feature.' },
      { icon: '🧪', title: 'Eval-driven iteration', desc: 'You write evals to measure output quality. When the agent fails, you improve the instructions — not just the prompt.' },
      { icon: '🔄', title: 'Feedback loops', desc: 'Agent runs, you review, you update the skill or context. The system improves over time.' },
    ],
    whatYouLearn: {
      label: 'What Level 2 teaches you',
      items: [
        'How to write instructions the agent actually follows',
        'Why context quality determines output quality',
        'How to measure AI output systematically (evals)',
        'What makes agent behavior consistent vs. erratic',
        'The cost of vague instructions at scale',
      ]
    },
    unlock: 'Level 2 is where you develop the craft of context engineering. Without this foundation, Level 3 and Level 4 will fail — not because the model is bad, but because the instructions are.'
  },
  es: {
    title: 'Nivel 2: Supervisión.',
    tagline: 'La IA ejecuta tus instrucciones.',
    desc: 'En el Nivel 2, dejás de improvisar y empezás a hacer ingeniería. Escribís instrucciones explícitas — skills, system prompts, archivos CLAUDE.md, reglas — y el agente las sigue. Supervisás los outputs, no las teclas.',
    shift: {
      label: 'El cambio clave del Nivel 1 al Nivel 2',
      from: 'Le promptés a la IA de forma reactiva, un mensaje a la vez, sin contexto persistente.',
      to: 'Ingenierías el contexto de forma proactiva. El agente conoce su rol, sus reglas y cómo se ve un buen output — antes de que empieces.'
    },
    examples: [
      { icon: '📄', title: 'CLAUDE.md / archivo de reglas del agente', desc: 'Un archivo en tu repo que le dice al agente cómo trabajar: qué revisar, cómo hacer commits, cuándo preguntar vs. cuándo decidir.' },
      { icon: '🎯', title: 'Ingeniería de system prompts', desc: 'Escribís un system prompt que define la personalidad, restricciones y formato de output del agente para una feature específica del producto.' },
      { icon: '🧪', title: 'Iteración guiada por evals', desc: 'Escribís evals para medir la calidad del output. Cuando el agente falla, mejorás las instrucciones — no solo el prompt.' },
      { icon: '🔄', title: 'Loops de feedback', desc: 'El agente corre, vos revisás, vos actualizás la skill o el contexto. El sistema mejora con el tiempo.' },
    ],
    whatYouLearn: {
      label: 'Qué te enseña el Nivel 2',
      items: [
        'Cómo escribir instrucciones que el agente realmente sigue',
        'Por qué la calidad del contexto determina la calidad del output',
        'Cómo medir el output de IA de forma sistemática (evals)',
        'Qué hace que el comportamiento del agente sea consistente vs. errático',
        'El costo de las instrucciones vagas a escala',
      ]
    },
    unlock: 'El Nivel 2 es donde desarrollás el oficio de la ingeniería de contexto. Sin esta base, los Niveles 3 y 4 van a fallar — no porque el modelo sea malo, sino porque las instrucciones lo son.'
  }
}

export default function S04_Supervision({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 font-bold text-sm">2</div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
          <p className="text-purple-400 text-sm italic">{c.tagline}</p>
        </div>
      </div>
      <p className="text-slate-300 text-base mb-8 max-w-xl leading-relaxed mt-4">{c.desc}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">{c.shift.label}</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <span className="text-red-400 text-xs font-bold w-10 shrink-0 mt-0.5">Before</span>
            <p className="text-slate-400 text-sm">{c.shift.from}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400 text-xs font-bold w-10 shrink-0 mt-0.5">After</span>
            <p className="text-slate-300 text-sm">{c.shift.to}</p>
          </div>
        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {c.examples.map((ex, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-slate-800 border border-purple-500/20 rounded-xl p-4 flex gap-3">
            <span className="text-xl">{ex.icon}</span>
            <div>
              <p className="text-white text-sm font-semibold mb-1">{ex.title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{ex.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-4">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">{c.whatYouLearn.label}</p>
        {c.whatYouLearn.items.map((item, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-center gap-2">
            <span className="text-purple-400">‣</span>{item}
          </p>
        ))}
      </motion.div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        💡 {c.unlock}
      </div>
    </div>
  )
}
