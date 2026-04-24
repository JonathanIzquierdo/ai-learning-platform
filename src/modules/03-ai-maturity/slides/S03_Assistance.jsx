import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Level 1: Assistance.',
    tagline: 'AI completes your thoughts.',
    desc: 'This is where almost everyone starts. You\'re in the driver\'s seat at all times. AI is a co-pilot that suggests, drafts, and explains — but you decide on every single output before it goes anywhere.',
    examples: [
      { icon: '✏️', title: 'Inline autocomplete', desc: 'Copilot suggests the next line of code as you type. You accept, reject, or modify.' },
      { icon: '💬', title: 'Chat Q&A', desc: 'You ask Claude to explain a function, suggest a regex, or summarize a document. You read and use the answer.' },
      { icon: '📝', title: 'Draft generation', desc: 'You ask for a first draft of a PR description, a Slack message, or a ticket. You edit it before sending.' },
      { icon: '🔍', title: 'Code explanation', desc: 'You paste a complex function and ask the model to explain it line by line.' },
    ],
    value: {
      label: 'Real value at Level 1',
      items: [
        '20-40% faster for routine writing tasks',
        'Fewer context switches — answers without leaving the editor',
        'Lower barrier for unfamiliar languages or frameworks',
        'Better documentation and PR descriptions',
      ]
    },
    ceiling: {
      label: 'The ceiling of Level 1',
      text: 'At Level 1, your output is still bounded by your own time. AI makes you faster, but you\'re still the bottleneck. Every line that ships still went through your brain and hands. You\'re not delegating — you\'re accelerating.'
    },
    signal: {
      label: 'Signs your team is stuck at Level 1',
      items: [
        'AI is used ad-hoc, not systematically',
        'No shared prompts, instructions, or context files',
        'Everyone\'s AI workflow is different and undocumented',
        '"AI wrote it" is never a thing — it\'s always "I wrote it with AI help"',
      ]
    }
  },
  es: {
    title: 'Nivel 1: Asistencia.',
    tagline: 'La IA completa tus pensamientos.',
    desc: 'Acá es donde casi todos empiezan. Vos estás al volante todo el tiempo. La IA es un co-piloto que sugiere, redacta y explica — pero vos decídis cada output antes de que vaya a cualquier lado.',
    examples: [
      { icon: '✏️', title: 'Autocompletado inline', desc: 'Copilot sugiere la siguiente línea de código mientras escribís. Aceptás, rechazás o modificás.' },
      { icon: '💬', title: 'Chat Q&A', desc: 'Le pedís a Claude que explique una función, sugiera un regex o resuma un documento. Vos leés y usás la respuesta.' },
      { icon: '📝', title: 'Generación de borradores', desc: 'Pedís un primer borrador de una descripción de PR, un mensaje de Slack o un ticket. Vos lo editás antes de enviarlo.' },
      { icon: '🔍', title: 'Explicación de código', desc: 'Pegás una función compleja y le pedís al modelo que la explique línea por línea.' },
    ],
    value: {
      label: 'Valor real en el Nivel 1',
      items: [
        '20-40% más rápido en tareas de escritura rutinaria',
        'Menos cambios de contexto — respuestas sin salir del editor',
        'Menor barrera para lenguajes o frameworks desconocidos',
        'Mejor documentación y descripciones de PRs',
      ]
    },
    ceiling: {
      label: 'El techo del Nivel 1',
      text: 'En el Nivel 1, tu output sigue estando limitado por tu propio tiempo. La IA te hace más rápido, pero vos seguís siendo el cuello de botella. Cada línea que llega a producción todavía pasó por tu cabeza y tus manos. No estás delegando — estás acelerando.'
    },
    signal: {
      label: 'Señales de que tu equipo está estancado en el Nivel 1',
      items: [
        'La IA se usa de forma ad-hoc, no sistemática',
        'No hay prompts, instrucciones ni archivos de contexto compartidos',
        'El flujo de trabajo con IA de cada uno es diferente y no está documentado',
        '"La IA lo escribió" nunca es una cosa — siempre es "yo lo escribí con ayuda de IA"',
      ]
    }
  }
}

export default function S03_Assistance({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-sm">1</div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
          <p className="text-blue-400 text-sm italic">{c.tagline}</p>
        </div>
      </div>
      <p className="text-slate-300 text-base mb-8 max-w-xl leading-relaxed mt-4">{c.desc}</p>
      <div className="grid md:grid-cols-2 gap-3 mb-8">
        {c.examples.map((ex, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex gap-3">
            <span className="text-xl">{ex.icon}</span>
            <div>
              <p className="text-white text-sm font-semibold mb-1">{ex.title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{ex.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-4 mb-4">
        <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">{c.value.label}</p>
        {c.value.items.map((item, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-center gap-2">
            <span className="text-green-400">✓</span>{item}
          </p>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.ceiling.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.ceiling.text}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-4">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.signal.label}</p>
        {c.signal.items.map((item, i) => (
          <p key={i} className="text-slate-400 text-xs mb-1 flex items-start gap-2">
            <span className="text-red-400 mt-0.5">‣</span>{item}
          </p>
        ))}
      </motion.div>
    </div>
  )
}
