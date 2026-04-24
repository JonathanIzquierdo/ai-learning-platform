import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const content = {
  en: {
    badge: '🧠 Module complete!',
    title: 'The context window is your canvas.',
    subtitle: 'Everything the model produces is shaped by everything you put in that window. Engineer it deliberately.',
    layerSummary: [
      { n: '1', layer: 'Instructions', action: 'Define role, goal, format, constraints, edge cases', color: '#36B37E' },
      { n: '2', layer: 'Memory', action: 'Inject user context, preferences, history', color: '#0052CC' },
      { n: '3', layer: 'Knowledge', action: 'Retrieve relevant documents at runtime (RAG)', color: '#6554C0' },
      { n: '4', layer: 'Tools', action: 'Give the model actions it can take (minimum viable set)', color: '#FF991F' },
      { n: '5', layer: 'Examples', action: 'Show the model what good output looks like', color: '#00B8D9' },
    ],
    principles: [
      'Every output failure is a context failure. Ask: which layer is missing or wrong?',
      'Instructions are iterative. Write them, test them, fix them. Never set and forget.',
      'Examples beat descriptions. Show the model what you want, don\'t just tell it.',
      'Retrieval quality = answer quality. Bad RAG produces bad answers with false confidence.',
      'Memory is selective. Store what matters; storing everything creates noise.',
      'Tools should be minimal. Only give the model the access it needs for this task.',
      'Context engineering is a skill. The more you practice it, the better your AI gets.',
    ],
    debug: {
      label: 'The context engineering debug loop',
      steps: [
        'Run the prompt. Get a bad output.',
        'Ask: which layer failed? Instructions? Memory? Knowledge? Examples?',
        'Fix that specific layer.',
        'Re-run. Compare.',
        'Repeat until quality threshold is met.',
      ]
    },
    closing: 'Prompt Engineering was about the perfect sentence. Context Engineering is about the perfect environment. The teams that master this will build AI systems that consistently outperform those that don\'t.',
    cta: 'Share this module with your team 🔗'
  },
  es: {
    badge: '🧠 ¡Módulo completado!',
    title: 'La ventana de contexto es tu lienzo.',
    subtitle: 'Todo lo que produce el modelo está moldeado por todo lo que ponés en esa ventana. Ingeníalo deliberadamente.',
    layerSummary: [
      { n: '1', layer: 'Instrucciones', action: 'Definir rol, objetivo, formato, restricciones, casos extremos', color: '#36B37E' },
      { n: '2', layer: 'Memoria', action: 'Inyectar contexto del usuario, preferencias, historial', color: '#0052CC' },
      { n: '3', layer: 'Conocimiento', action: 'Recuperar documentos relevantes en tiempo de ejecución (RAG)', color: '#6554C0' },
      { n: '4', layer: 'Herramientas', action: 'Darle al modelo acciones que puede tomar (conjunto mínimo viable)', color: '#FF991F' },
      { n: '5', layer: 'Ejemplos', action: 'Mostrarle al modelo cómo se ve un buen output', color: '#00B8D9' },
    ],
    principles: [
      'Todo fallo de output es un fallo de contexto. Preguntá: ¿qué capa falta o está mal?',
      'Las instrucciones son iterativas. Escribílas, testéalas, arréglalas. Nunca configures y olvides.',
      'Los ejemplos superan a las descripciones. Mostrále al modelo lo que querés, no solo decirle.',
      'Calidad de recuperación = calidad de respuesta. Un RAG malo produce respuestas malas con falsa confianza.',
      'La memoria es selectiva. Almacená lo que importa; almacenar todo crea ruido.',
      'Las herramientas deben ser mínimas. Solo dale al modelo el acceso que necesita para esta tarea.',
      'El context engineering es una habilidad. Cuanto más la practiqués, mejor será tu IA.',
    ],
    debug: {
      label: 'El loop de debug de context engineering',
      steps: [
        'Corré el prompt. Obtén un output malo.',
        'Preguntá: ¿qué capa falló? ¿Instrucciones? ¿Memoria? ¿Conocimiento? ¿Ejemplos?',
        'Arreglá esa capa específica.',
        'Volvé a correr. Compará.',
        'Repetí hasta que se alcance el umbral de calidad.',
      ]
    },
    closing: 'El Prompt Engineering se trataba de la oración perfecta. El Context Engineering se trata del entorno perfecto. Los equipos que dominen esto construirán sistemas de IA que consistentemente superen a los que no lo hacen.',
    cta: 'Compartí este módulo con tu equipo 🔗'
  }
}

export default function S10_Closing({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="text-4xl mb-4">{c.badge}</motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{c.title}</h2>
      <p className="text-slate-400 text-base mb-8">{c.subtitle}</p>
      <div className="flex flex-col gap-2 mb-8">
        {c.layerSummary.map((l, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-xl border px-4 py-3" style={{ borderColor: l.color + '40', background: l.color + '0D' }}>
            <span className="text-xs font-black w-4" style={{ color: l.color }}>{l.n}</span>
            <span className="text-white text-xs font-semibold w-24">{l.layer}</span>
            <span className="text-slate-400 text-xs">{l.action}</span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-3">Core principles</p>
        {c.principles.map((p, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <CheckCircle size={14} className="text-green-400 mt-0.5 shrink-0" />
            <p className="text-slate-300 text-sm leading-relaxed">{p}</p>
          </div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
        className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.debug.label}</p>
        {c.debug.steps.map((s, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-center gap-2">
            <span className="text-green-400">{i + 1}.</span>{s}
          </p>
        ))}
      </motion.div>
      <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-4 text-sm text-slate-200 leading-relaxed mb-4">
        {c.closing}
      </div>
      <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-4 text-center text-sm text-green-400 font-semibold">
        {c.cta}
      </div>
    </div>
  )
}
