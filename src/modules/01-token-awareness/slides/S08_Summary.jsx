import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const content = {
  en: {
    title: 'You\'re ready. Here\'s what matters.',
    takeaways: [
      'Tokens are the unit of cost — every character in, every character out counts.',
      'Match the model to the task. Haiku for simple, Sonnet for daily work, Opus for hard problems.',
      'Agentic sessions are the biggest cost driver. Set limits, monitor, stop runaway loops.',
      'Precise prompts = fewer tokens = lower cost + better results.',
      'Credits are pooled across Visma from June — your usage affects your team.',
    ],
    cta: 'Share this module with your team',
    badge: '🎉 Module complete!',
  },
  es: {
    title: 'Estás listo. Esto es lo que importa.',
    takeaways: [
      'Los tokens son la unidad de costo — cada carácter de entrada y salida cuenta.',
      'Elegí el modelo según la tarea. Haiku para lo simple, Sonnet para el día a día, Opus para problemas difíciles.',
      'Las sesiones agénticas son el mayor driver de costos. Poné límites, monitoreá, frenó los loops descontrolados.',
      'Prompts precisos = menos tokens = menor costo + mejores resultados.',
      'Los créditos son compartidos en Visma desde junio — tu uso afecta a tu equipo.',
    ],
    cta: 'Compartí este módulo con tu equipo',
    badge: '🎉 ¡Módulo completado!',
  }
}

export default function S08_Summary({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[70vh]">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-4xl mb-6">
        {c.badge}
      </motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{c.title}</h2>
      <div className="flex flex-col gap-4 mb-10">
        {c.takeaways.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3"
          >
            <CheckCircle size={18} className="text-visma-green mt-0.5 shrink-0" />
            <p className="text-slate-200 text-base leading-relaxed">{t}</p>
          </motion.div>
        ))}
      </div>
      <div className="bg-visma-blue/10 border border-visma-blue/30 rounded-xl p-4 text-center text-sm text-visma-blue font-semibold">
        🔗 {c.cta}
      </div>
    </div>
  )
}
