import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'What is an LLM?',
    subtitle: 'Large Language Model. The engine behind ChatGPT, Claude, Gemini, and most AI tools your team uses today.',
    notThis: {
      label: 'What it is NOT',
      items: [
        'Not a database — it doesn\'t "look up" answers',
        'Not a search engine — it doesn\'t fetch real-time information',
        'Not a human — it has no understanding, beliefs, or intentions',
        'Not a calculator — it can make arithmetic errors',
      ]
    },
    isThis: {
      label: 'What it IS',
      text: 'An LLM is a statistical pattern matcher trained on an enormous amount of text. Given a sequence of words, it predicts the most likely next word — over and over, until it produces a complete response.',
    },
    analogy: {
      label: 'Analogy',
      text: 'Think of it like an incredibly well-read intern who has consumed billions of documents, books, and code repositories. They can write, reason, summarize, and translate — but they can also confidently say something wrong, because they\'re pattern-matching, not knowing.'
    },
    howTrained: {
      label: 'How it was trained (simplified)',
      steps: [
        '1. Feed it trillions of tokens of text from the internet, books, and code',
        '2. Train it to predict the next token billions of times',
        '3. Fine-tune it with human feedback to be helpful and safe (RLHF)',
        '4. The result: a model with billions of parameters that encodes patterns of language',
      ]
    }
  },
  es: {
    title: '¿Qué es un LLM?',
    subtitle: 'Large Language Model. El motor detrás de ChatGPT, Claude, Gemini y la mayoría de las herramientas de IA que tu equipo usa hoy.',
    notThis: {
      label: 'Lo que NO es',
      items: [
        'No es una base de datos — no "busca" respuestas',
        'No es un motor de búsqueda — no obtiene información en tiempo real',
        'No es un humano — no tiene comprensión, creencias ni intenciones',
        'No es una calculadora — puede cometer errores aritméticos',
      ]
    },
    isThis: {
      label: 'Lo que SÍ es',
      text: 'Un LLM es un comparador de patrones estadísticos entrenado en una enorme cantidad de texto. Dada una secuencia de palabras, predice la siguiente palabra más probable — una y otra vez, hasta producir una respuesta completa.',
    },
    analogy: {
      label: 'Analogía',
      text: 'Pensá en él como un pasante increíblemente bien leído que consumió miles de millones de documentos, libros y repositorios de código. Puede escribir, razonar, resumir y traducir — pero también puede decir algo incorrecto con total confianza, porque hace pattern-matching, no sabe.'
    },
    howTrained: {
      label: 'Cómo fue entrenado (simplificado)',
      steps: [
        '1. Se le proporcionan billones de tokens de texto de internet, libros y código',
        '2. Se entrena para predecir el siguiente token miles de millones de veces',
        '3. Se ajusta con feedback humano para ser útil y seguro (RLHF)',
        '4. El resultado: un modelo con miles de millones de parámetros que codifica patrones del lenguaje',
      ]
    }
  }
}

export default function S02_WhatIsLLM({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">
          <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3">{c.notThis.label}</p>
          <div className="flex flex-col gap-2">
            {c.notThis.items.map((item, i) => (
              <p key={i} className="text-slate-300 text-sm flex items-start gap-2">
                <span className="text-red-400 mt-0.5">×</span>{item}
              </p>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-green-500/10 border border-green-500/30 rounded-2xl p-5">
          <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-3">{c.isThis.label}</p>
          <p className="text-slate-300 text-sm leading-relaxed">{c.isThis.text}</p>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 mb-6">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.analogy.label}</p>
        <p className="text-slate-200 text-sm leading-relaxed">{c.analogy.text}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">{c.howTrained.label}</p>
        <div className="flex flex-col gap-2">
          {c.howTrained.steps.map((s, i) => (
            <p key={i} className="text-slate-300 text-sm">{s}</p>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
