import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Baseline first. Always.',
    subtitle: 'Without a before, your after means nothing. This is the most skipped step in every AI rollout.',
    why: {
      label: 'Why baselines are non-negotiable',
      text: 'If you measure CSAT at 4.2 after deploying an AI support bot, is that good? You have no idea. It could be up from 3.6 (AI helped) or down from 4.8 (AI hurt). Without the before, the number is just a number — it tells you nothing about the AI\'s impact.'
    },
    howTo: {
      label: 'How to capture a baseline (before you deploy)',
      steps: [
        { icon: '📸', title: 'Snapshot your current metrics', desc: 'Document exactly what you measure today: average handle time, error rate, time-per-task, satisfaction score, cost-per-output. Whatever matters for your team.' },
        { icon: '📅', title: 'Set a measurement date', desc: 'Pick a specific week or month as T=0. This is your reference point. Everything before is before-AI. Everything after is after-AI.' },
        { icon: '🤳', title: 'Define attribution rules upfront', desc: 'How will you know if a change is caused by AI vs. market conditions, team changes, or seasonality? Decide this before the data comes in.' },
        { icon: '📊', title: 'Track both input and output', desc: 'How many hours did people spend on this task? What did they produce? What was the quality? Capture both sides of the equation.' },
        { icon: '👥', title: 'Include the human side', desc: 'Satisfaction, confidence, stress, skill development. The before/after isn\'t just about output speed — it\'s about the whole experience of work.' },
      ]
    },
    trap: {
      label: 'The retrospective baseline trap',
      text: 'Most teams try to reconstruct a baseline after the fact. This almost never works — the data is incomplete, context is lost, and survivorship bias kicks in. If you haven\'t started yet, capture your baseline today. If you already deployed, acknowledge the gap and start measuring from now.'
    },
    visma: 'This is why the Visma AI Maturity Module emphasized measuring from Level 1. Even if you\'re just using Copilot for autocomplete, write down how long your tasks take today. You\'ll thank yourself in 6 months.'
  },
  es: {
    title: 'El baseline primero. Siempre.',
    subtitle: 'Sin un antes, tu después no significa nada. Este es el paso más saltado en todo despliegue de IA.',
    why: {
      label: 'Por qué los baselines son innegociables',
      text: 'Si medís un CSAT de 4.2 después de desplegar un bot de soporte con IA, ¿es bueno? No tenés idea. Podría ser que subió desde 3.6 (la IA ayudó) o que bajó desde 4.8 (la IA perjudicó). Sin el antes, el número es solo un número — no te dice nada sobre el impacto de la IA.'
    },
    howTo: {
      label: 'Cómo capturar un baseline (antes de deployar)',
      steps: [
        { icon: '📸', title: 'Fotografía de tus métricas actuales', desc: 'Documentá exactamente qué medís hoy: tiempo promedio de resolución, tasa de error, tiempo por tarea, puntaje de satisfacción, costo por output. Lo que importa para tu equipo.' },
        { icon: '📅', title: 'Establecé una fecha de medición', desc: 'Elegí una semana o mes específico como T=0. Este es tu punto de referencia. Todo lo anterior es antes-IA. Todo lo posterior es después-IA.' },
        { icon: '🤳', title: 'Definí reglas de atribución de antemano', desc: '¿Cómo sabés si un cambio es causado por la IA vs. condiciones del mercado, cambios en el equipo o estacionalidad? Decidío antes de que lleguen los datos.' },
        { icon: '📊', title: 'Rastrea tanto input como output', desc: '¿Cuántas horas dedicó la gente a esta tarea? ¿Qué produjeron? ¿Cuál fue la calidad? Capturá ambos lados de la ecuación.' },
        { icon: '👥', title: 'Incluí el lado humano', desc: 'Satisfacción, confianza, estrés, desarrollo de habilidades. El antes/después no es solo sobre velocidad de output — es sobre toda la experiencia de trabajo.' },
      ]
    },
    trap: {
      label: 'La trampa del baseline retrospectivo',
      text: 'La mayoría de los equipos intentan reconstruir un baseline a posterior. Esto casi nunca funciona — los datos están incompletos, el contexto se perdió y el sesgo de supervivencia entra en juego. Si no empezaste todavía, capturá tu baseline hoy. Si ya deployaste, reconocé la brecha y empezá a medir desde ahora.'
    },
    visma: 'Por eso el Módulo de Madurez de IA de Visma enfatizó medir desde el Nivel 1. Aunque solo uses Copilot para autocompletado, escribí cuánto tardan tus tareas hoy. Te lo vas a agradecer en 6 meses.'
  }
}

export default function S04_Baseline({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 mb-6">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.why.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.why.text}</p>
      </motion.div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">{c.howTo.label}</p>
      <div className="flex flex-col gap-3 mb-6">
        {c.howTo.steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex gap-3">
            <span className="text-xl shrink-0">{s.icon}</span>
            <div>
              <p className="text-white text-sm font-semibold mb-1">{s.title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.trap.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.trap.text}</p>
      </motion.div>
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-sm text-cyan-200">
        💡 {c.visma}
      </div>
    </div>
  )
}
