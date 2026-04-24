import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 09 · Advanced',
    title: 'Three strategies. One real question.',
    body: 'When a general-purpose model isn\'t performing well enough for your specific domain, you have three main strategies to close the gap: Prompting, RAG, or Fine-tuning. Each has very different costs, complexity, and appropriate use cases. And a fourth option is emerging: running your own local model entirely.',
    warning: 'This is an advanced module. It assumes familiarity with LLM basics, APIs, and basic software engineering concepts. If you haven\'t completed the earlier modules, start there.',
    strategies: [
      { name: 'Prompting', color: '#36B37E', cost: '$', complexity: 'Low', latency: 'Instant', when: 'Always try first' },
      { name: 'RAG', color: '#0052CC', cost: '$$', complexity: 'Medium', latency: 'Fast', when: 'Domain knowledge needed' },
      { name: 'Fine-tuning', color: '#6554C0', cost: '$$$', complexity: 'High', latency: 'Fast (after training)', when: 'Behavior/style change' },
      { name: 'Local Models', color: '#DE350B', cost: 'HW upfront', complexity: 'High', latency: 'Variable', when: 'Privacy / cost at scale' },
    ],
    realQuestion: 'The real question is never "which is better?" It\'s "what problem am I solving?" Each strategy solves a different problem. The mistake is reaching for fine-tuning when the problem is actually a prompting issue — or deploying RAG when you just needed better instructions.',
    toc: [
      'Strategy 1: Prompting — start here, always',
      'Strategy 2: RAG — when the model doesn\'t know enough',
      'Strategy 3: Fine-tuning — when behavior needs to change',
      'Strategy 4: Local models — the emerging fourth option',
      'The decision framework: which strategy when',
    ]
  },
  es: {
    eyebrow: 'Módulo 09 · Avanzado',
    title: 'Tres estrategias. Una pregunta real.',
    body: 'Cuando un modelo de propósito general no rinde lo suficiente para tu dominio específico, tenés tres estrategias principales para cerrar la brecha: Prompting, RAG o Fine-tuning. Cada una tiene costos, complejidad y casos de uso apropiados muy diferentes. Y una cuarta opción está emergiendo: correr tu propio modelo local completamente.',
    warning: 'Este es un módulo avanzado. Asume familiaridad con los conceptos básicos de LLM, APIs y conceptos básicos de ingeniería de software. Si no completaste los módulos anteriores, empezá por ahí.',
    strategies: [
      { name: 'Prompting', color: '#36B37E', cost: '$', complexity: 'Baja', latency: 'Instantánea', when: 'Siempre intentá primero' },
      { name: 'RAG', color: '#0052CC', cost: '$$', complexity: 'Media', latency: 'Rápida', when: 'Se necesita conocimiento de dominio' },
      { name: 'Fine-tuning', color: '#6554C0', cost: '$$$', complexity: 'Alta', latency: 'Rápida (después del entrenamiento)', when: 'Cambio de comportamiento/estilo' },
      { name: 'Modelos Locales', color: '#DE350B', cost: 'HW por adelantado', complexity: 'Alta', latency: 'Variable', when: 'Privacidad / costo a escala' },
    ],
    realQuestion: 'La pregunta real nunca es "¿cuál es mejor?" Es "¿qué problema estoy resolviendo?" Cada estrategia resuelve un problema diferente. El error es llegar al fine-tuning cuando el problema en realidad es de prompting — o deployar RAG cuando solo necesitabas mejores instrucciones.',
    toc: [
      'Estrategia 1: Prompting — empezá aquí, siempre',
      'Estrategia 2: RAG — cuando el modelo no sabe suficiente',
      'Estrategia 3: Fine-tuning — cuando el comportamiento necesita cambiar',
      'Estrategia 4: Modelos locales — la cuarta opción emergente',
      'El framework de decisión: qué estrategia cuándo',
    ]
  }
}

export default function S01_Hook({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="flex items-center gap-2 mb-4">
        <span className="bg-red-600/20 text-red-400 text-xs font-bold px-2 py-1 rounded">{c.eyebrow}</span>
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-slate-300 text-lg mb-6 max-w-xl leading-relaxed">{c.body}</motion.p>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 mb-8">
        <p className="text-amber-300 text-xs">⚠️ {c.warning}</p>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Strategy overview</p>
        <div className="grid grid-cols-4 gap-1 mb-2">
          <p className="text-slate-600 text-xs uppercase">Strategy</p>
          <p className="text-slate-600 text-xs uppercase">Cost</p>
          <p className="text-slate-600 text-xs uppercase">Complexity</p>
          <p className="text-slate-600 text-xs uppercase">When</p>
        </div>
        {c.strategies.map((s, i) => (
          <div key={i} className="grid grid-cols-4 gap-1 py-2 border-b border-slate-700/50 last:border-0">
            <p className="text-xs font-bold" style={{ color: s.color }}>{s.name}</p>
            <p className="text-slate-400 text-xs">{s.cost}</p>
            <p className="text-slate-400 text-xs">{s.complexity}</p>
            <p className="text-slate-500 text-xs">{s.when}</p>
          </div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-4">
        <p className="text-slate-300 text-sm leading-relaxed italic">{c.realQuestion}</p>
      </motion.div>
    </div>
  )
}
