import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 01 · Token Awareness',
    title: 'The free lunch is over.',
    body: 'For years, AI coding tools felt unlimited. You typed, the model answered, no questions asked. That model is changing — fast.',
    stat1: { value: '2×', label: 'Copilot weekly costs since Jan 2026' },
    stat2: { value: '$840k', label: 'Estimated extra annual cost for Visma' },
    stat3: { value: 'Jun 1', label: 'Token billing goes live' },
  },
  es: {
    eyebrow: 'Módulo 01 · Conciencia de Tokens',
    title: 'El almuerzo gratis se terminó.',
    body: 'Por años, las herramientas de IA parecían ilimitadas. Escribías, el modelo respondía, sin preguntas. Ese modelo está cambiando — rápido.',
    stat1: { value: '2×', label: 'Costos semanales de Copilot desde ene 2026' },
    stat2: { value: '$840k', label: 'Costo anual adicional estimado para Visma' },
    stat3: { value: '1 Jun', label: 'Arranca el cobro por tokens' },
  }
}

export default function S01_Hook({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-visma-teal text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-300 text-xl mb-12 max-w-xl leading-relaxed">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="grid grid-cols-3 gap-4">
        {[c.stat1, c.stat2, c.stat3].map((s, i) => (
          <div key={i} className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
            <div className="text-3xl font-bold text-visma-blue mb-1">{s.value}</div>
            <div className="text-xs text-slate-400 leading-snug">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
