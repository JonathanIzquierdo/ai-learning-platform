import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Metrics for Engineering & Product.',
    subtitle: 'Traditional dev metrics were designed for human-only output. Here\'s what to measure when agents are on the team.',
    retire: {
      label: 'Retire these (or interpret them very differently)',
      metrics: [
        { metric: 'Lines of code per developer', why: 'Agents inflate this instantly. Means nothing.' },
        { metric: 'PRs opened per week', why: 'Agents open PRs. Volume is not value.' },
        { metric: 'Commits per day', why: 'Same problem. Volume ≠ progress.' },
        { metric: 'Time to write a feature', why: 'Measures execution speed, not problem-solving quality.' },
      ]
    },
    adopt: {
      label: 'Adopt these instead',
      metrics: [
        { metric: 'PR acceptance rate', desc: 'What % of agent-opened PRs merge without major rework? Target: >70% first-pass.', color: '#36B37E' },
        { metric: 'Code churn rate', desc: 'What % of AI-generated code gets reverted within 2 weeks? Industry baseline: 3.3% pre-AI, 7.1% with AI. Yours should be improving.', color: '#36B37E' },
        { metric: 'Cycle time (idea → production)', desc: 'End-to-end time from feature request to deployed. AI should compress this. Track it.', color: '#0052CC' },
        { metric: 'Defect rate per release', desc: 'Is AI-assisted code introducing more or fewer bugs than human-only? This is your quality truth.', color: '#0052CC' },
        { metric: 'Eval pass rate', desc: 'What % of AI outputs pass your automated eval suite? If you don\'t have evals, you\'re measuring nothing meaningful.', color: '#6554C0' },
        { metric: 'Token cost per feature', desc: 'How much did it cost in tokens to deliver each shipped feature? Track this weekly to spot runaway sessions.', color: '#FF991F' },
        { metric: 'Developer time on high-value work', desc: 'What % of developer hours go to architecture, design, and complex problem-solving vs. routine tasks? AI should move this number up.', color: '#FF991F' },
      ]
    },
    product: {
      label: 'For Product Managers specifically',
      metrics: [
        'Feature velocity: how many features validated and shipped per sprint?',
        'Spec acceptance rate: what % of AI-drafted specs make it to development unchanged?',
        'Discovery cycle time: how long from user interview to validated spec?',
        'Decision quality: are product decisions leading to better outcomes? (measured retroactively)',
      ]
    }
  },
  es: {
    title: 'Métricas para Ingeniería y Producto.',
    subtitle: 'Las métricas de desarrollo tradicionales fueron diseñadas para output solo humano. Esto es lo que medir cuando los agentes son parte del equipo.',
    retire: {
      label: 'Jubilá estas (o interpretálas de forma muy diferente)',
      metrics: [
        { metric: 'Líneas de código por desarrollador', why: 'Los agentes inflan esto instantáneamente. No significa nada.' },
        { metric: 'PRs abiertos por semana', why: 'Los agentes abren PRs. El volumen no es valor.' },
        { metric: 'Commits por día', why: 'Mismo problema. Volumen ≠ progreso.' },
        { metric: 'Tiempo para escribir una feature', why: 'Mide velocidad de ejecución, no calidad de resolución de problemas.' },
      ]
    },
    adopt: {
      label: 'Adoptá estas en su lugar',
      metrics: [
        { metric: 'Tasa de aceptación de PRs', desc: '¿Qué % de los PRs abiertos por agentes se mergean sin retrabajo mayor? Target: >70% en primera revisión.', color: '#36B37E' },
        { metric: 'Tasa de churn de código', desc: '¿Qué % del código generado por IA se revierte en 2 semanas? Baseline de la industria: 3.3% pre-IA, 7.1% con IA. El tuyo debería estar mejorando.', color: '#36B37E' },
        { metric: 'Tiempo de ciclo (idea → producción)', desc: 'Tiempo de extremo a extremo desde la solicitud de feature hasta el deploy. La IA debería comprimir esto. Rastreló.', color: '#0052CC' },
        { metric: 'Tasa de defectos por release', desc: '¿El código asistido por IA introduce más o menos bugs que el solo humano? Esta es tu verdad de calidad.', color: '#0052CC' },
        { metric: 'Tasa de éxito de evals', desc: '¿Qué % de los outputs de IA pasan tu suite de evals automatizados? Si no tenés evals, no estás midiendo nada significativo.', color: '#6554C0' },
        { metric: 'Costo de tokens por feature', desc: '¿Cuánto costó en tokens entregar cada feature publicada? Rastreló semanalmente para detectar sesiones descontroladas.', color: '#FF991F' },
        { metric: 'Tiempo de desarrolladores en trabajo de alto valor', desc: '¿Qué % de las horas de los desarrolladores van a arquitectura, diseño y resolución de problemas complejos vs. tareas rutinarias? La IA debería aumentar este número.', color: '#FF991F' },
      ]
    },
    product: {
      label: 'Para Product Managers específicamente',
      metrics: [
        'Velocidad de features: ¿cuántas features validadas y publicadas por sprint?',
        'Tasa de aceptación de specs: ¿qué % de los specs redactados por IA llegan a desarrollo sin cambios?',
        'Tiempo de ciclo de discovery: ¿cuánto tiempo desde la entrevista de usuario hasta el spec validado?',
        'Calidad de decisiones: ¿las decisiones de producto llevan a mejores resultados? (medido retroactivamente)',
      ]
    }
  }
}

export default function S06_EngineeringMetrics({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3">{c.retire.label}</p>
        {c.retire.metrics.map((m, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <span className="text-red-400 text-xs font-bold mt-0.5">✗</span>
            <div><span className="text-white text-xs font-semibold">{m.metric}</span><span className="text-slate-500 text-xs"> — {m.why}</span></div>
          </div>
        ))}
      </motion.div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">{c.adopt.label}</p>
      <div className="flex flex-col gap-2 mb-6">
        {c.adopt.metrics.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.07 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3">
            <p className="text-xs font-bold mb-1" style={{ color: m.color }}>{m.metric}</p>
            <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">{c.product.label}</p>
        {c.product.metrics.map((m, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-start gap-2">
            <span className="text-purple-400">‣</span>{m}
          </p>
        ))}
      </motion.div>
    </div>
  )
}
