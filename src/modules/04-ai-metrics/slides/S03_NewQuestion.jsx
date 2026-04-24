import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'The new question.',
    subtitle: 'The shift isn\'t just about what you measure. It\'s about what question you\'re trying to answer.',
    oldQ: {
      label: 'The old question',
      q: 'How much did we produce?',
      metrics: ['Lines of code', 'Tickets closed', 'Emails sent', 'Hours logged', 'Documents created']
    },
    newQ: {
      label: 'The new question',
      q: 'How well did we choose?',
      metrics: ['Acceptance rate of AI output', 'Impact of what was kept', 'Time freed for higher-value work', 'Quality of decisions made', 'Value delivered to end users']
    },
    framework: {
      label: 'The 3 questions framework',
      questions: [
        {
          n: '1', q: 'What decision will someone make with this metric?',
          why: 'If you can\'t name a decision, the metric is decoration. Every KPI should change someone\'s behavior or inform a concrete choice.',
          color: '#FF991F'
        },
        {
          n: '2', q: 'What behavior does this metric incentivize?',
          why: 'Metrics are not neutral. "PRs opened" incentivizes opening PRs. "PR acceptance rate" incentivizes quality. Always ask: what will people optimize for?',
          color: '#0052CC'
        },
        {
          n: '3', q: 'Do I have a before to compare against?',
          why: 'Without a baseline, you can\'t attribute change to AI. You\'re just measuring a number that floats up or down with no context.',
          color: '#36B37E'
        },
      ]
    },
    example: {
      label: 'Example: customer support team',
      before: 'Before AI: 200 tickets resolved per week (volume metric)',
      after: 'After AI: still 200 tickets — but 60% resolved by AI, 40% by humans. CSAT went from 3.8 to 4.6. Average handle time dropped 40%. Human agents now handle only complex cases.',
      insight: 'Volume didn\'t change. Everything meaningful did. Without measuring CSAT, handle time, and case complexity distribution, you\'d see flat performance.'
    }
  },
  es: {
    title: 'La nueva pregunta.',
    subtitle: 'El cambio no es solo sobre qué medís. Es sobre qué pregunta estás intentando responder.',
    oldQ: {
      label: 'La vieja pregunta',
      q: '¿Cuánto produjimos?',
      metrics: ['Líneas de código', 'Tickets cerrados', 'Emails enviados', 'Horas registradas', 'Documentos creados']
    },
    newQ: {
      label: 'La nueva pregunta',
      q: '¿Qué tan bien elegimos?',
      metrics: ['Tasa de aceptación del output de IA', 'Impacto de lo que se conservó', 'Tiempo liberado para trabajo de mayor valor', 'Calidad de las decisiones tomadas', 'Valor entregado a usuarios finales']
    },
    framework: {
      label: 'El framework de las 3 preguntas',
      questions: [
        {
          n: '1', q: '¿Qué decisión va a tomar alguien con esta métrica?',
          why: 'Si no podés nombrar una decisión, la métrica es decoración. Cada KPI debería cambiar el comportamiento de alguien o informar una elección concreta.',
          color: '#FF991F'
        },
        {
          n: '2', q: '¿Qué comportamiento incentiva esta métrica?',
          why: 'Las métricas no son neutrales. "PRs abiertos" incentiva abrir PRs. "Tasa de aceptación de PRs" incentiva la calidad. Siempre preguntá: ¿para qué van a optimizar las personas?',
          color: '#0052CC'
        },
        {
          n: '3', q: '¿Tengo un antes para comparar?',
          why: 'Sin una línea de base, no podés atribuir el cambio a la IA. Solo estás midiendo un número que sube o baja sin contexto.',
          color: '#36B37E'
        },
      ]
    },
    example: {
      label: 'Ejemplo: equipo de soporte al cliente',
      before: 'Antes de IA: 200 tickets resueltos por semana (métrica de volumen)',
      after: 'Después de IA: todavía 200 tickets — pero 60% resueltos por IA, 40% por humanos. El CSAT pasó de 3.8 a 4.6. El tiempo promedio de resolución bajó 40%. Los agentes humanos ahora manejan solo casos complejos.',
      insight: 'El volumen no cambió. Todo lo significativo sí. Sin medir CSAT, tiempo de resolución y distribución de complejidad de casos, verías un rendimiento plano.'
    }
  }
}

export default function S03_NewQuestion({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">
          <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.oldQ.label}</p>
          <p className="text-white font-semibold text-base mb-3 italic">"{c.oldQ.q}"</p>
          {c.oldQ.metrics.map((m, i) => <p key={i} className="text-slate-400 text-xs mb-1 flex items-center gap-2"><span className="text-red-400">‣</span>{m}</p>)}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-green-500/10 border border-green-500/30 rounded-2xl p-5">
          <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.newQ.label}</p>
          <p className="text-white font-semibold text-base mb-3 italic">"{c.newQ.q}"</p>
          {c.newQ.metrics.map((m, i) => <p key={i} className="text-slate-300 text-xs mb-1 flex items-center gap-2"><span className="text-green-400">✓</span>{m}</p>)}
        </motion.div>
      </div>
      <div className="flex flex-col gap-3 mb-8">
        {c.framework.questions.map((q, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.12 }}
            className="rounded-xl border p-4" style={{ borderColor: q.color + '40', background: q.color + '0D' }}>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{ background: q.color + '25', color: q.color }}>{q.n}</div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">{q.q}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{q.why}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">{c.example.label}</p>
        <p className="text-slate-400 text-xs mb-2">❌ {c.example.before}</p>
        <p className="text-slate-300 text-xs mb-3">✓ {c.example.after}</p>
        <p className="text-amber-300 text-xs leading-relaxed italic">{c.example.insight}</p>
      </motion.div>
    </div>
  )
}
