import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 02 · AI Evals & Harness',
    title: 'You shipped AI. How do you know it works?',
    body: 'Your AI feature passed manual testing. It looked great in the demo. You deployed it. But how do you know it still works tomorrow — when the model updates, the data changes, or a user asks something unexpected?',
    problems: [
      { icon: '🤷', text: 'The model provider silently updates the model' },
      { icon: '💥', text: 'A prompt change breaks 20% of responses' },
      { icon: '🔍', text: 'Your RAG retrieves the wrong documents' },
      { icon: '💸', text: 'Costs spike because a new code path burns 10x tokens' },
      { icon: '🐌', text: 'Latency degrades and nobody notices for 3 days' },
    ],
    cta: 'This is what Evals solve.'
  },
  es: {
    eyebrow: 'Módulo 02 · Evals y Harness de IA',
    title: 'Publicaste tu IA. ¿Cómo sabés que funciona?',
    body: 'Tu feature de IA pasó el testing manual. Se vio genial en el demo. La desplegaste. Pero, ¿cómo sabés que todavía funciona mañana — cuando el modelo se actualiza, los datos cambian o un usuario pregunta algo inesperado?',
    problems: [
      { icon: '🤷', text: 'El proveedor del modelo lo actualiza silenciosamente' },
      { icon: '💥', text: 'Un cambio de prompt rompe el 20% de las respuestas' },
      { icon: '🔍', text: 'Tu RAG recupera los documentos equivocados' },
      { icon: '💸', text: 'Los costos se disparan porque un nuevo flujo quema 10x tokens' },
      { icon: '🐌', text: 'La latencia empeora y nadie lo nota por 3 días' },
    ],
    cta: 'Esto es lo que los Evals resuelven.'
  }
}

export default function S01_Hook({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.body}</motion.p>
      <div className="flex flex-col gap-3 mb-8">
        {c.problems.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
            className="flex items-center gap-3 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-300">
            <span className="text-lg">{p.icon}</span>{p.text}
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        className="text-xl font-bold text-purple-400">{c.cta}</motion.div>
    </div>
  )
}
