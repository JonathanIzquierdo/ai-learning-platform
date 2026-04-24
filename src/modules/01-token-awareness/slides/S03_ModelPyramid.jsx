import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Not all models cost the same.',
    subtitle: 'Matching the model to the task is the single biggest lever you have on cost.',
    tiers: [
      {
        name: 'Heavy / Frontier', models: 'Claude Opus · GPT-5', color: '#6554C0',
        use: 'Complex reasoning, architecture decisions, novel problem-solving',
        cost: '$$$',
        when: 'Use when the task genuinely requires deep thinking',
      },
      {
        name: 'Balanced', models: 'Claude Sonnet · GPT-4.1', color: '#0052CC',
        use: 'Most coding tasks, code review, explanations, PR summaries',
        cost: '$$',
        when: 'Your default for day-to-day work',
      },
      {
        name: 'Fast / Lightweight', models: 'Claude Haiku · GPT-4.1 mini', color: '#00B8D9',
        use: 'Autocomplete, simple Q&A, formatting, quick lookups',
        cost: '$',
        when: 'Use as much as you want — costs almost nothing',
      },
    ]
  },
  es: {
    title: 'No todos los modelos cuestan igual.',
    subtitle: 'Elegir el modelo correcto para cada tarea es la palanca más grande que tenés sobre los costos.',
    tiers: [
      {
        name: 'Pesado / Frontier', models: 'Claude Opus · GPT-5', color: '#6554C0',
        use: 'Razonamiento complejo, decisiones de arquitectura, resolución de problemas nuevos',
        cost: '$$$',
        when: 'Usalo cuando la tarea realmente requiere pensamiento profundo',
      },
      {
        name: 'Balanceado', models: 'Claude Sonnet · GPT-4.1', color: '#0052CC',
        use: 'La mayoría de tareas de código, revisión de código, explicaciones, resúmenes de PRs',
        cost: '$$',
        when: 'Tu default para el trabajo del día a día',
      },
      {
        name: 'Rápido / Liviano', models: 'Claude Haiku · GPT-4.1 mini', color: '#00B8D9',
        use: 'Autocompletado, preguntas simples, formateo, búsquedas rápidas',
        cost: '$',
        when: 'Usalo todo lo que quieras — cuesta casi nada',
      },
    ]
  }
}

export default function S03_ModelPyramid({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-4">
        {c.tiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl border p-5"
            style={{ borderColor: tier.color + '40', background: tier.color + '10' }}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: tier.color }}>{tier.name}</span>
                <p className="text-slate-300 text-xs mt-0.5">{tier.models}</p>
              </div>
              <span className="text-xl font-bold" style={{ color: tier.color }}>{tier.cost}</span>
            </div>
            <p className="text-white text-sm mb-1 font-medium">{tier.use}</p>
            <p className="text-slate-400 text-xs italic">{tier.when}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
