import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 04 · AI Metrics & KPIs',
    title: 'Your metrics are lying to you.',
    body: 'You deployed AI. People are using it. Volume is up — more emails sent, more code written, more reports generated, more tickets closed. Everything looks great on the dashboard. And yet… something feels off.',
    paradox: {
      label: 'The measurement crisis — real data, 2026',
      stats: [
        { value: '80%', label: 'of firms report zero measurable productivity gains from AI', source: 'NBER, 6,000 executives' },
        { value: '91%', label: 'of businesses are now using AI in at least one function', source: 'McKinsey 2026' },
        { value: '19%', label: 'more time experienced devs took on tasks with AI tools vs without', source: 'METR randomized trial 2025' },
        { value: '66%', label: 'of workers report productivity boost — yet bottom lines don\'t reflect it', source: 'Multiple studies' },
      ]
    },
    why: {
      label: 'Why the gap?',
      text: 'Because the metrics haven\'t changed. We\'re measuring AI-era output with industrial-era tools. We count volume — lines of code, emails sent, tickets closed, reports generated. But AI makes volume trivially easy to produce. Volume is no longer signal. It\'s noise.'
    },
    mission: 'This module will help you redesign your metrics from the ground up — not just for engineering, but for every team that uses AI.',
    note: 'This module is for everyone: engineers, PMs, HR, finance, operations, customer success. If your team uses AI, your metrics need a rethink.'
  },
  es: {
    eyebrow: 'Módulo 04 · Métricas e Indicadores de IA',
    title: 'Tus métricas te están mintiendo.',
    body: 'Deployaste IA. La gente la está usando. El volumen subió — más emails enviados, más código escrito, más reportes generados, más tickets cerrados. Todo se ve bien en el dashboard. Y sin embargo… algo no encaja.',
    paradox: {
      label: 'La crisis de medición — datos reales, 2026',
      stats: [
        { value: '80%', label: 'de las empresas reportan cero ganancias de productividad medibles de IA', source: 'NBER, 6.000 ejecutivos' },
        { value: '91%', label: 'de los negocios ahora usan IA en al menos una función', source: 'McKinsey 2026' },
        { value: '19%', label: 'más tiempo tardaron devs experimentados en tareas con IA vs sin ella', source: 'METR ensayo aleatorio 2025' },
        { value: '66%', label: 'de los trabajadores reportan más productividad — pero los resultados finales no lo reflejan', source: 'Múltiples estudios' },
      ]
    },
    why: {
      label: '¿Por qué la brecha?',
      text: 'Porque las métricas no cambiaron. Estamos midiendo el output de la era de la IA con herramientas de la era industrial. Contamos volumen — líneas de código, emails enviados, tickets cerrados, reportes generados. Pero la IA hace que el volumen sea trivialmente fácil de producir. El volumen ya no es señal. Es ruido.'
    },
    mission: 'Este módulo te va a ayudar a rediseñar tus métricas desde cero — no solo para ingeniería, sino para todos los equipos que usan IA.',
    note: 'Este módulo es para todos: ingenieros, PMs, RRHH, finanzas, operaciones, éxito del cliente. Si tu equipo usa IA, tus métricas necesitan una revisión.'
  }
}

export default function S01_Hook({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">{c.paradox.label}</p>
        <div className="grid grid-cols-2 gap-3">
          {c.paradox.stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-slate-700/50 rounded-xl p-3">
              <p className="text-2xl font-bold text-amber-400 mb-1">{s.value}</p>
              <p className="text-slate-300 text-xs leading-snug mb-1">{s.label}</p>
              <p className="text-slate-500 text-xs italic">{s.source}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
        className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.why.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.why.text}</p>
      </motion.div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        💡 {c.note}
      </div>
    </div>
  )
}
