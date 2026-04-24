import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'LLM-as-a-Judge: power and pitfalls.',
    subtitle: 'Sometimes only an AI can judge an AI. But this comes with real risks you need to understand.',
    howItWorks: {
      label: 'How it works',
      text: 'You send the original prompt + the model\'s response to a second LLM (the judge). You ask the judge to score or evaluate the response against a rubric. The judge returns a verdict.'
    },
    finbotExample: {
      label: 'FinBot example',
      input: 'User asked: "Why did my expenses increase in March?"',
      response: 'FinBot said: "Your expenses increased by 23% in March, primarily due to a spike in travel costs (€1,840) and three software subscriptions renewed simultaneously (€620 total)."',
      judgement: 'Judge prompt: "On a scale of 1-5, is this response: (a) factually grounded in the provided context, (b) complete, (c) free of speculation? Respond with JSON: {score, reasoning, flags}"'
    },
    pitfalls: [
      { icon: '🎭', title: 'Sycophancy', body: 'Judges tend to rate longer, more confident-sounding answers higher — even when they\'re wrong.' },
      { icon: '🔄', title: 'Position bias', body: 'When comparing two answers, judges favor whichever appears first. Always randomize order.' },
      { icon: '💸', title: 'Cost at scale', body: 'Running LLM judges on every eval doubles your API cost. Use them selectively on high-stakes criteria.' },
      { icon: '🎯', title: 'Needs calibration', body: 'Your judge needs a clear rubric, examples of good/bad answers, and regular human validation.' },
    ],
    tip: 'Best practice: use deterministic evals first to filter obvious failures, then apply LLM judges only to the responses that pass the basic checks.'
  },
  es: {
    title: 'LLM como Juez: poder y riesgos.',
    subtitle: 'A veces solo una IA puede juzgar a otra IA. Pero esto tiene riesgos reales que necesitás entender.',
    howItWorks: {
      label: 'Cómo funciona',
      text: 'Envías el prompt original + la respuesta del modelo a un segundo LLM (el juez). Le pedís al juez que puntúe o evalúe la respuesta contra una rúbrica. El juez devuelve un veredicto.'
    },
    finbotExample: {
      label: 'Ejemplo de FinBot',
      input: 'El usuario preguntó: "¿Por qué aumentaron mis gastos en marzo?"',
      response: 'FinBot respondió: "Tus gastos aumentaron un 23% en marzo, principalmente por un aumento en costos de viaje (€1.840) y tres suscripciones de software renovadas simultáneamente (€620 en total)."',
      judgement: 'Prompt del juez: "En una escala del 1 al 5, ¿esta respuesta es: (a) fundamentada en el contexto provisto, (b) completa, (c) libre de especulación? Respondé con JSON: {score, reasoning, flags}"'
    },
    pitfalls: [
      { icon: '🎭', title: 'Servilismo (Sycophancy)', body: 'Los jueces tienden a puntuar más alto las respuestas más largas y seguras — incluso cuando están equivocadas.' },
      { icon: '🔄', title: 'Sesgo de posición', body: 'Al comparar dos respuestas, los jueces favorecen la que aparece primero. Siempre randomízas el orden.' },
      { icon: '💸', title: 'Costo a escala', body: 'Correr jueces LLM en cada eval duplica el costo de API. Usalo selectivamente en criterios de alto impacto.' },
      { icon: '🎯', title: 'Necesita calibración', body: 'Tu juez necesita una rúbrica clara, ejemplos de buenas/malas respuestas y validación humana regular.' },
    ],
    tip: 'Mejor práctica: usá evals determinísticos primero para filtrar fallos obvios, luego aplicá jueces LLM solo a las respuestas que pasen los checks básicos.'
  }
}

export default function S06_LLMJudge({ lang }) {
  const c = content[lang]
  const ex = c.finbotExample
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">{c.howItWorks.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.howItWorks.text}</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-8">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">{ex.label}</p>
        <div className="flex flex-col gap-3">
          <div className="bg-slate-900 rounded-lg p-3 text-xs text-slate-400">
            <span className="text-blue-400 font-semibold">Input › </span>{ex.input}
          </div>
          <div className="bg-slate-900 rounded-lg p-3 text-xs text-slate-400">
            <span className="text-green-400 font-semibold">Response › </span>{ex.response}
          </div>
          <div className="bg-slate-900 rounded-lg p-3 text-xs text-slate-400">
            <span className="text-purple-400 font-semibold">Judge › </span>{ex.judgement}
          </div>
        </div>
      </motion.div>

      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">Pitfalls</p>
      <div className="grid md:grid-cols-2 gap-3 mb-8">
        {c.pitfalls.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex gap-3">
            <span className="text-xl">{p.icon}</span>
            <div>
              <p className="text-white text-sm font-semibold mb-1">{p.title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200 leading-relaxed">
        💡 {c.tip}
      </div>
    </div>
  )
}
