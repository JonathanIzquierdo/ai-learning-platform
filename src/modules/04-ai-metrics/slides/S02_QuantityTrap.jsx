import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'The quantity trap.',
    subtitle: 'For decades, measuring output meant counting things. More was better. AI just broke that equation permanently.',
    before: {
      label: 'The old world — quantity as proxy for quality',
      metrics: [
        { icon: '📝', metric: 'Lines of code written', why: 'More code = more work done' },
        { icon: '📧', metric: 'Emails sent', why: 'More emails = more communication' },
        { icon: '🎫', metric: 'Tickets closed', why: 'More closed = more productive' },
        { icon: '📊', metric: 'Reports generated', why: 'More reports = more insight' },
        { icon: '💬', metric: 'Responses sent', why: 'Faster reply = better service' },
      ]
    },
    broken: {
      label: 'Why AI broke these metrics',
      text: 'An LLM can generate 1,000 lines of code in 30 seconds. It can write 50 emails in a minute. It can close 200 tickets by generating boilerplate responses. It can produce a 40-page report in the time it takes you to make coffee. Volume is now the floor, not the ceiling. A metric that any intern with a $20 AI subscription can inflate by 10x overnight is not a metric — it\'s a vanity number.'
    },
    examples: [
      { bad: 'PR count per week', why: 'Agents open PRs autonomously. PR count says nothing about value delivered.' },
      { bad: 'Emails sent per day', why: 'AI drafts and sends. Volume inflates without human effort.' },
      { bad: 'Documents produced', why: 'Generation is free. Quality and usefulness are not.' },
      { bad: 'Code lines added', why: 'AI-generated code often gets reverted. GitClear found churn rose from 3.3% to 7.1% as AI adoption grew.' },
    ],
    shift: 'The shift: stop counting what was produced. Start measuring what was accepted, used, and had impact.'
  },
  es: {
    title: 'La trampa del volumen.',
    subtitle: 'Durante décadas, medir el output significó contar cosas. Más era mejor. La IA acaba de romper esa ecuación para siempre.',
    before: {
      label: 'El viejo mundo — cantidad como proxy de calidad',
      metrics: [
        { icon: '📝', metric: 'Líneas de código escritas', why: 'Más código = más trabajo hecho' },
        { icon: '📧', metric: 'Emails enviados', why: 'Más emails = más comunicación' },
        { icon: '🎫', metric: 'Tickets cerrados', why: 'Más cerrados = más productivo' },
        { icon: '📊', metric: 'Reportes generados', why: 'Más reportes = más insight' },
        { icon: '💬', metric: 'Respuestas enviadas', why: 'Respuesta más rápida = mejor servicio' },
      ]
    },
    broken: {
      label: 'Por qué la IA rompió estas métricas',
      text: 'Un LLM puede generar 1.000 líneas de código en 30 segundos. Puede escribir 50 emails en un minuto. Puede cerrar 200 tickets generando respuestas de plantilla. Puede producir un reporte de 40 páginas en el tiempo que tardás en hacerte un café. El volumen ahora es el piso, no el techo. Una métrica que cualquier pasante con una suscripción de IA de $20 puede inflar 10x de la noche a la mañana no es una métrica — es un número de vanidad.'
    },
    examples: [
      { bad: 'Cantidad de PRs por semana', why: 'Los agentes abren PRs de forma autónoma. La cantidad no dice nada sobre el valor entregado.' },
      { bad: 'Emails enviados por día', why: 'La IA redacta y envía. El volumen se infla sin esfuerzo humano.' },
      { bad: 'Documentos producidos', why: 'La generación es gratis. La calidad y utilidad no lo son.' },
      { bad: 'Líneas de código agregadas', why: 'El código generado por IA frecuentemente se revierte. GitClear encontró que el churn subió de 3.3% a 7.1% con la adopción de IA.' },
    ],
    shift: 'El cambio: dejá de contar lo que se produjo. Empezá a medir lo que fue aceptado, usado y tuvo impacto.'
  }
}

export default function S02_QuantityTrap({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">{c.before.label}</p>
        <div className="flex flex-col gap-2">
          {c.before.metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2 bg-slate-700/40 rounded-lg">
              <span className="text-lg">{m.icon}</span>
              <span className="text-white text-sm font-medium flex-1">{m.metric}</span>
              <span className="text-slate-500 text-xs italic">{m.why}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
        className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 mb-6">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.broken.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.broken.text}</p>
      </motion.div>
      <div className="flex flex-col gap-2 mb-6">
        {c.examples.map((ex, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
            className="flex items-start gap-3 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
            <span className="text-red-400 font-bold text-xs mt-0.5">✗</span>
            <div>
              <p className="text-white text-sm font-semibold">{ex.bad}</p>
              <p className="text-slate-400 text-xs mt-0.5">{ex.why}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm font-semibold text-amber-200">
        💡 {c.shift}
      </div>
    </div>
  )
}
