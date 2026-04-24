import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'What exactly is a token?',
    body: 'Tokens are the basic unit of text AI models process — roughly ¾ of a word on average.',
    examples: [
      { text: '"Hello, how are you?"', tokens: '5 tokens', note: 'Simple greeting', danger: false },
      { text: 'A function with 50 lines of code', tokens: '~300–400 tokens', note: 'Typical snippet', danger: false },
      { text: 'A full file with context', tokens: '1,000–5,000 tokens', note: 'Real agent session', danger: false },
      { text: 'Long agentic session + codebase context', tokens: '50M–500M tokens', note: 'This is where costs explode', danger: true },
    ],
    note: 'Both your input (prompt) and the model output count as tokens. So do instructions, context, and conversation history.'
  },
  es: {
    title: '¿Qué es exactamente un token?',
    body: 'Los tokens son la unidad básica de texto que los modelos de IA procesan — aproximadamente ¾ de una palabra en promedio.',
    examples: [
      { text: '"Hola, ¿cómo estás?"', tokens: '5 tokens', note: 'Saludo simple', danger: false },
      { text: 'Una función con 50 líneas de código', tokens: '~300–400 tokens', note: 'Snippet típico', danger: false },
      { text: 'Un archivo completo con contexto', tokens: '1.000–5.000 tokens', note: 'Sesión real de agente', danger: false },
      { text: 'Sesión agéntica larga + contexto del codebase', tokens: '50M–500M tokens', note: 'Acá es donde los costos explotan', danger: true },
    ],
    note: 'Tu input y el output del modelo cuentan como tokens. También las instrucciones, el contexto y el historial de conversación.'
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
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className={`flex items-center justify-between px-5 py-4 rounded-xl border ${
              ex.danger ? 'border-red-500/40 bg-red-500/5' : 'border-slate-700 bg-slate-800'
            }`}>
            <div>
              <p className="text-white text-sm font-medium">{ex.text}</p>
              <p className="text-slate-500 text-xs mt-0.5">{ex.note}</p>
            </div>
            <span className={`text-sm font-bold ml-4 whitespace-nowrap ${
              ex.danger ? 'text-red-400' : 'text-cyan-400'
            }`}>{ex.tokens}</span>
          </motion.div>
        ))}
      </div>
      <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-4 text-sm text-slate-300 leading-relaxed">
        💡 {c.note}
      </div>
    </div>
  )
}
