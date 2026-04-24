import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const content = {
  en: {
    badge: '🤖 Module complete!',
    title: 'You now think in systems, not agents.',
    subtitle: 'The shift from single-agent to multi-agent thinking is the shift from "what can AI do?" to "how do I architect AI to solve this problem?"',
    patternSummary: [
      { n: '01', name: 'Sequential', when: 'Linear pipeline, order matters', color: '#0052CC' },
      { n: '02', name: 'Parallel', when: 'Independent subtasks, speed matters', color: '#36B37E' },
      { n: '03', name: 'Hierarchical', when: 'Complex multi-domain tasks', color: '#6554C0' },
      { n: '04', name: 'Loop / Feedback', when: 'Quality is measurable and critical', color: '#FF991F' },
      { n: '05', name: 'Handoff', when: 'Task crosses domains mid-flight', color: '#00B8D9' },
    ],
    principles: [
      'Match the pattern to the problem shape — don\'t force one pattern onto every task',
      'Always set hard limits: max iterations, max parallelism, max cost per run',
      'Log everything: every agent call, every handoff, every evaluation score',
      'Design for failure: assume any agent can fail at any time and plan accordingly',
      'Start with sequential or parallel before reaching for hierarchical complexity',
      'The cheapest model that passes your evals is the right model for that step',
    ],
    nextStep: 'The best way to internalize these patterns is to sketch them for a real problem you have today. Pick one workflow at Visma that\'s currently manual — and draw the agent architecture that could automate it.',
    cta: 'Share this module with your team 🔗'
  },
  es: {
    badge: '🤖 ¡Módulo completado!',
    title: 'Ahora pensás en sistemas, no en agentes.',
    subtitle: 'El cambio de pensar en agentes individuales a multi-agente es el cambio de "¿qué puede hacer la IA?" a "¿cómo arquitecturo la IA para resolver este problema?"',
    patternSummary: [
      { n: '01', name: 'Secuencial', when: 'Pipeline lineal, el orden importa', color: '#0052CC' },
      { n: '02', name: 'Paralelo', when: 'Subtareas independientes, la velocidad importa', color: '#36B37E' },
      { n: '03', name: 'Jerárquico', when: 'Tareas complejas multi-dominio', color: '#6554C0' },
      { n: '04', name: 'Loop / Feedback', when: 'La calidad es medible y crítica', color: '#FF991F' },
      { n: '05', name: 'Handoff', when: 'La tarea cruza dominios a mitad de camino', color: '#00B8D9' },
    ],
    principles: [
      'Adaptá el patrón a la forma del problema — no forzés un patrón en cada tarea',
      'Siempre establecé límites estrictos: máx iteraciones, máx paralelismo, máx costo por ejecución',
      'Registrá todo: cada llamada de agente, cada handoff, cada puntaje de evaluación',
      'Diseñá para el fallo: asumió que cualquier agente puede fallar en cualquier momento y planíficá en consecuencia',
      'Empezá con secuencial o paralelo antes de llegar a la complejidad jerárquica',
      'El modelo más barato que pasa tus evals es el modelo correcto para ese paso',
    ],
    nextStep: 'La mejor manera de internalizar estos patrones es bosquejarlos para un problema real que tenés hoy. Elegí un flujo de trabajo en Visma que actualmente es manual — y dibújá la arquitectura de agentes que podría automatizarlo.',
    cta: 'Compartí este módulo con tu equipo 🔗'
  }
}

export default function S11_Closing({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="text-4xl mb-4">{c.badge}</motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{c.title}</h2>
      <p className="text-slate-400 text-base mb-8">{c.subtitle}</p>
      <div className="flex flex-col gap-2 mb-8">
        {c.patternSummary.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-xl border px-4 py-3" style={{ borderColor: p.color + '40', background: p.color + '0D' }}>
            <span className="text-xs font-black w-6" style={{ color: p.color }}>{p.n}</span>
            <span className="text-white text-xs font-semibold w-28">{p.name}</span>
            <span className="text-slate-400 text-xs">{p.when}</span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">Core principles</p>
        {c.principles.map((p, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <CheckCircle size={14} className="text-purple-400 mt-0.5 shrink-0" />
            <p className="text-slate-300 text-sm leading-relaxed">{p}</p>
          </div>
        ))}
      </motion.div>
      <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-4 text-sm text-slate-200 leading-relaxed mb-4">
        📝 {c.nextStep}
      </div>
      <div className="bg-purple-600/10 border border-purple-600/30 rounded-xl p-4 text-center text-sm text-purple-400 font-semibold">
        {c.cta}
      </div>
    </div>
  )
}
