import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'What exactly is a token?',
    body: 'Tokens are the basic unit of text that AI models process. Think of them as chunks — roughly ¾ of a word on average.',
    examples: [
      { text: '"Hello, how are you?"', tokens: '5 tokens', note: 'Simple greeting' },
      { text: 'A function with 50 lines of code', tokens: '~300–400 tokens', note: 'Typical code snippet' },
      { text: 'A full file with context', tokens: '1,000–5,000 tokens', note: 'Real agent session' },
      { text: 'A long agentic session with context', tokens: '50,000–500,000 tokens', note: 'This is where costs explode' },
    ],
    note: 'Both your input (prompt) and the model\'s output count as tokens. So do the instructions, the context, and the conversation history.',
  },
  es: {
    title: '¿Qué es exactamente un token?',
    body: 'Los tokens son la unidad básica de texto que los modelos de IA procesan. Son fragmentos — aproximadamente ¾ de una palabra en promedio.',
    examples: [
      { text: '"Hola, ¿cómo estás?"', tokens: '5 tokens', note: 'Saludo simple' },
      { text: 'Una función con 50 líneas de código', tokens: '~300–400 tokens', note: 'Snippet típico' },
      { text: 'Un archivo completo con contexto', tokens: '1.000–5.000 tokens', note: 'Sesión real de agente' },
      { text: 'Sesión agéntica larga con contexto', tokens: '50.000–500.000 tokens', note: 'Acá es donde los costos explotan' },
    ],
    note: 'Tu input (prompt) y el output del modelo cuentan como tokens. También las instrucciones, el contexto y el historial de conversación.',
  }
}

export default function S02_WhatIsAToken({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.body}</p>
      <div className="flex flex-col gap-3 mb-8">
        {c.examples.map((ex, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex items-center justify-between px-5 py-4 rounded-xl border ${
              i === 3 ? 'border-red-500/40 bg-red-500/5' : 'border-slate-700 bg-slate-800'
            }`}
          >
            <div>
              <p className="text-white text-sm font-medium">{ex.text}</p>
              <p className="text-slate-500 text-xs mt-0.5">{ex.note}</p>
            </div>
            <span className={`text-sm font-bold ml-4 whitespace-nowrap ${
              i === 3 ? 'text-red-400' : 'text-visma-teal'
            }`}>{ex.tokens}</span>
          </motion.div>
        ))}
      </div>
      <div className="bg-visma-blue/10 border border-visma-blue/30 rounded-xl p-4 text-sm text-slate-300 leading-relaxed">
        💡 {c.note}
      </div>
    </div>
  )
}
