import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 00 · AI Fundamentals for Visma',
    title: 'Before you use AI, speak its language.',
    intro: 'Visma is making a deliberate, company-wide bet on AI. Not as a trend, but as a fundamental shift in how software is built, how teams work, and how we create value for our customers.',
    why: 'But here\'s the problem: when people don\'t share a common vocabulary, conversations about AI become confusing. "Should we use an agent for this?" "What do you mean by context window?" "Why is the model hallucinating?" These questions slow teams down.',
    mission: 'This module fixes that. By the end, you\'ll have a shared mental model and a common language — whether you\'re an engineer, a product manager, or a team lead.',
    cards: [
      { icon: '💬', label: 'LLMs & Tokens', desc: 'What they are and how they think' },
      { icon: '🤖', label: 'Agents', desc: 'AI that acts, not just answers' },
      { icon: '🔌', label: 'MCP & Tools', desc: 'How AI connects to the real world' },
      { icon: '📚', label: 'RAG & Skills', desc: 'Making AI smarter and more reliable' },
      { icon: '📖', label: 'Glossary', desc: 'The Visma AI dictionary' },
    ],
    note: 'Already familiar with some concepts? Feel free to move through quickly. The glossary at the end is always worth a look.'
  },
  es: {
    eyebrow: 'Módulo 00 · Fundamentos de IA para Visma',
    title: 'Antes de usar IA, hablá su idioma.',
    intro: 'Visma está haciendo una apuesta deliberada y a nivel empresa en IA. No como una tendencia, sino como un cambio fundamental en cómo se construye software, cómo trabajan los equipos y cómo creamos valor para nuestros clientes.',
    why: 'Pero acá está el problema: cuando las personas no comparten un vocabulario común, las conversaciones sobre IA se vuelven confusas. "¿Deberíamos usar un agente para esto?" "¿Qué querés decir con context window?" "¿Por qué el modelo está alucinando?" Estas preguntas frenan a los equipos.',
    mission: 'Este módulo lo resuelve. Al final, vas a tener un modelo mental compartido y un lenguaje común — seas ingeniero, product manager o team lead.',
    cards: [
      { icon: '💬', label: 'LLMs & Tokens', desc: 'Qué son y cómo piensan' },
      { icon: '🤖', label: 'Agentes', desc: 'IA que actúa, no solo responde' },
      { icon: '🔌', label: 'MCP & Tools', desc: 'Cómo la IA se conecta al mundo real' },
      { icon: '📚', label: 'RAG & Skills', desc: 'Hacer la IA más inteligente y confiable' },
      { icon: '📖', label: 'Glosario', desc: 'El diccionario de IA de Visma' },
    ],
    note: '¿Ya conocés algunos conceptos? Sentíte libre de avanzar rápido. El glosario al final siempre vale la pena.'
  }
}

export default function S01_Hook({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-slate-300 text-lg mb-4 max-w-xl leading-relaxed">{c.intro}</motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="text-slate-400 text-base mb-10 max-w-xl leading-relaxed">{c.why}</motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="text-white text-base font-medium mb-10 max-w-xl leading-relaxed">{c.mission}</motion.p>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
        {c.cards.map((card, i) => (
          <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-center">
            <div className="text-2xl mb-1">{card.icon}</div>
            <p className="text-white text-xs font-semibold mb-0.5">{card.label}</p>
            <p className="text-slate-500 text-xs leading-tight">{card.desc}</p>
          </div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-sm text-cyan-200">
        {c.note}
      </motion.div>
    </div>
  )
}
