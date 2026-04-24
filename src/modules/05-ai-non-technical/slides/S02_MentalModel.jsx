import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Think of AI as a brilliant colleague.',
    subtitle: 'Before using any tool, you need the right mental model. This one changes everything.',
    wrong: [
      { model: 'Search engine', problem: 'You expect it to find facts. AI generates — it can be wrong with total confidence.' },
      { model: 'Calculator', problem: 'You expect precise answers. AI is probabilistic — same question can get different answers.' },
      { model: 'Magic oracle', problem: 'You expect it to know everything. AI has a knowledge cutoff and no real-time data by default.' },
      { model: 'Replacement for thinking', problem: 'You turn off your brain. AI output needs your judgment before it ships anywhere.' },
    ],
    right: {
      label: 'The right model: a brilliant generalist colleague',
      desc: 'Imagine a colleague who has read everything, never gets tired, never judges you, and can draft anything in seconds. But they\'re new to your company, don\'t know your internal context, and can occasionally say something confidently wrong. Your job is to brief them well and review their work.',
      implications: [
        'The better you explain the task, the better the output',
        'Always review before sending anything externally',
        'Give context: your role, the audience, the goal',
        'If the output is wrong, give feedback and try again',
        'You\'re still the expert in your domain — AI is your assistant',
      ]
    },
    daily: {
      label: 'What this looks like in practice',
      examples: [
        { before: 'You spend 45 minutes drafting a status report', after: 'You brief AI with bullet points, it drafts in 2 minutes, you edit for 5' },
        { before: 'You spend an hour researching a topic before a meeting', after: 'You ask AI to summarize the key points and prepare 5 questions to ask' },
        { before: 'You write the same type of email 10 times a week', after: 'You create a template prompt once, reuse it every time' },
        { before: 'You stare at a blank page for 20 minutes', after: 'You ask AI for a first draft and edit from there' },
      ]
    }
  },
  es: {
    title: 'Pensá en la IA como un colega brillante.',
    subtitle: 'Antes de usar cualquier herramienta, necesitás el modelo mental correcto. Este cambia todo.',
    wrong: [
      { model: 'Motor de búsqueda', problem: 'Esperan que encuentre hechos. La IA genera — puede estar equivocada con total confianza.' },
      { model: 'Calculadora', problem: 'Esperan respuestas precisas. La IA es probabilística — la misma pregunta puede tener diferentes respuestas.' },
      { model: 'Óraculo mágico', problem: 'Esperan que sepa todo. La IA tiene un corte de conocimiento y no tiene datos en tiempo real por defecto.' },
      { model: 'Reemplazo del pensamiento', problem: 'Apagan el cerebro. El output de IA necesita tu juicio antes de que llegue a cualquier lado.' },
    ],
    right: {
      label: 'El modelo correcto: un colega generalista brillante',
      desc: 'Imaginá un colega que leíyó todo, nunca se cansa, nunca te juzga y puede redactar cualquier cosa en segundos. Pero es nuevo en tu empresa, no conoce tu contexto interno y ocasionalmente puede decir algo incorrectamente con total confianza. Tu trabajo es informarle bien y revisar su trabajo.',
      implications: [
        'Cuanto mejor explicás la tarea, mejor es el output',
        'Siempre revisá antes de enviar algo externamente',
        'Dá contexto: tu rol, la audiencia, el objetivo',
        'Si el output está mal, dá feedback e intentá de nuevo',
        'Vos seguís siendo el experto en tu dominio — la IA es tu asistente',
      ]
    },
    daily: {
      label: 'Cómo se ve esto en la práctica',
      examples: [
        { before: 'Tardás 45 minutos redactando un reporte de estado', after: 'Le das a la IA bullets con puntos clave, redacta en 2 minutos, editaslo en 5' },
        { before: 'Tardás una hora investigando un tema antes de una reunión', after: 'Le pedís a la IA que resuma los puntos clave y prepare 5 preguntas para hacer' },
        { before: 'Escribís el mismo tipo de email 10 veces por semana', after: 'Creás un prompt de plantilla una vez, lo reusisás cada vez' },
        { before: 'Mirás una página en blanco 20 minutos', after: 'Le pedís a la IA un primer borrador y editás desde ahí' },
      ]
    }
  }
}

export default function S02_MentalModel({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Common wrong mental models</p>
      <div className="grid md:grid-cols-2 gap-2 mb-8">
        {c.wrong.map((w, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-red-500/8 border border-red-500/25 rounded-xl p-3">
            <p className="text-red-400 text-xs font-bold mb-1">✗ "{w.model}"</p>
            <p className="text-slate-400 text-xs leading-relaxed">{w.problem}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-5 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">{c.right.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">{c.right.desc}</p>
        {c.right.implications.map((imp, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-center gap-2">
            <span className="text-cyan-400">✓</span>{imp}
          </p>
        ))}
      </motion.div>
      <div className="flex flex-col gap-2">
        {c.daily.examples.map((ex, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.08 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 grid grid-cols-2 gap-3">
            <div><p className="text-red-400 text-xs font-semibold mb-1">Before</p><p className="text-slate-400 text-xs leading-relaxed">{ex.before}</p></div>
            <div><p className="text-green-400 text-xs font-semibold mb-1">After</p><p className="text-slate-300 text-xs leading-relaxed">{ex.after}</p></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
