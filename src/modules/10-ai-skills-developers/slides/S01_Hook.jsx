import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 10 \u00b7 AI Skills for Developers',
    title: 'Stop guessing. Start engineering.',
    body: 'Most developers use AI the same way: paste code, ask a vague question, get a mediocre answer, retry 5 times. This module teaches the patterns that make the difference between "AI is useless" and "AI just saved me 3 hours."',
    skills: [
      'Prompting patterns: zero-shot, few-shot, chain-of-thought',
      'Structured output: getting JSON, code, tables reliably',
      'Tool use & function calling: letting the model act',
      'Debugging with AI: the right way to share context',
      'Iterative refinement: building on outputs, not starting over',
      'Evaluation: knowing when the output is actually good',
    ],
    note: 'Every pattern includes a real before/after example. The difference is always in the context you provide.',
  },
  es: {
    eyebrow: 'M\u00f3dulo 10 \u00b7 Skills de IA para Developers',
    title: 'Dej\u00e1 de adivinar. Empez\u00e1 a ingeniar.',
    body: 'La mayor\u00eda de los desarrolladores usan IA igual: pegan c\u00f3digo, hacen una pregunta vaga, obtienen una respuesta mediocre, reintentan 5 veces. Este m\u00f3dulo ense\u00f1a los patterns que marcan la diferencia entre "la IA no sirve" y "la IA me ahorr\u00f3 3 horas."',
    skills: [
      'Patterns de prompting: zero-shot, few-shot, chain-of-thought',
      'Output estructurado: obtener JSON, c\u00f3digo, tablas de forma confiable',
      'Tool use y function calling: dejar que el modelo act\u00fae',
      'Debugging con IA: la forma correcta de compartir contexto',
      'Refinamiento iterativo: construir sobre outputs, no empezar de cero',
      'Evaluaci\u00f3n: saber cu\u00e1ndo el output realmente es bueno',
    ],
    note: 'Cada pattern incluye un ejemplo real de antes/despu\u00e9s. La diferencia siempre est\u00e1 en el contexto que das.',
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
        className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-slate-800 border border-cyan-500/30 rounded-2xl p-5 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">{lang === 'es' ? 'Lo que vas a aprender' : 'What you will learn'}</p>
        <div className="flex flex-col gap-2">
          {c.skills.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.06 }}
              className="flex items-start gap-3">
              <span className="bg-cyan-500/20 text-cyan-300 text-xs font-bold w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-slate-300 text-sm">{s}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        {String.fromCodePoint(0x1F4A1)} {c.note}
      </div>
    </div>
  )
}
