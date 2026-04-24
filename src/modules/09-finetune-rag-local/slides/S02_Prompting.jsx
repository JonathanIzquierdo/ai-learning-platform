import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Strategy 1: Prompting.',
    subtitle: 'Before doing anything else, exhaust this option. 80% of "model performance" problems are actually prompting problems.',
    why: 'Most teams reach for RAG or fine-tuning too early. They assume the model "doesn\'t know enough" when the real issue is they haven\'t given it enough instructions, examples, or context. Prompting is the cheapest, fastest, most reversible strategy. Always start here.',
    fullTechniques: [
      {
        technique: 'Chain of Thought (CoT)', complexity: 'Low',
        desc: 'Ask the model to reason step by step before giving an answer.',
        example: 'Add "Think through this step by step" or "Let\'s reason through this carefully" to your prompt.',
        gain: 'Dramatically improves accuracy on multi-step reasoning, math, and logic tasks.'
      },
      {
        technique: 'Few-shot prompting', complexity: 'Low',
        desc: 'Provide 3-10 input/output examples before your actual request.',
        example: 'Classify: "Fast delivery!" → positive. "Took 3 weeks" → negative. Now classify: "Never in stock."',
        gain: 'Calibrates the model to your specific criteria without any training.'
      },
      {
        technique: 'Role + context + constraints', complexity: 'Low',
        desc: 'Define who the model is, what it knows, and what it must never do.',
        example: '"You are a senior financial analyst at Visma. Only use data from the provided report. Never speculate."',
        gain: 'Sets hard behavioral boundaries that reduce hallucination and off-topic responses.'
      },
      {
        technique: 'Output format specification', complexity: 'Low',
        desc: 'Tell the model exactly how to structure the output.',
        example: '"Respond with a JSON object with keys: sentiment (positive/negative/neutral), confidence (0-1), reasoning (1 sentence)."',
        gain: 'Eliminates inconsistent formatting and makes output directly usable.'
      },
      {
        technique: 'Self-consistency', complexity: 'Medium',
        desc: 'Run the same prompt 3-5 times and take the majority answer.',
        example: 'Generate 5 classification results for the same input, return the most common answer.',
        gain: 'Reduces variance on ambiguous cases. Especially useful for evals.'
      },
    ],
    whenToStop: 'Stop trying to fix it with prompting and move to RAG or fine-tuning when: you\'ve spent >3 iterations and quality is still below threshold, the model consistently gets domain-specific facts wrong, or the output style needs to match a very specific proprietary format that\'s hard to describe.'
  },
  es: {
    title: 'Estrategia 1: Prompting.',
    subtitle: 'Antes de hacer cualquier otra cosa, agotá esta opción. El 80% de los problemas de "rendimiento del modelo" son en realidad problemas de prompting.',
    why: 'La mayoría de los equipos llegan al RAG o fine-tuning demasiado pronto. Asumen que el modelo "no sabe suficiente" cuando el problema real es que no le dieron suficientes instrucciones, ejemplos o contexto. El prompting es la estrategia más barata, rápida y reversible. Siempre empezá aquí.',
    fullTechniques: [
      {
        technique: 'Chain of Thought (CoT)', complexity: 'Baja',
        desc: 'Pedíl al modelo que razone paso a paso antes de dar una respuesta.',
        example: 'Agréga "Pensalo paso a paso" o "Razonemos esto cuidadosamente" a tu prompt.',
        gain: 'Mejora dramáticamente la precisión en razonamiento de múltiples pasos, matemáticas y lógica.'
      },
      {
        technique: 'Few-shot prompting', complexity: 'Baja',
        desc: 'Proporcioná 3-10 ejemplos de input/output antes de tu solicitud real.',
        example: 'Clasificar: "¡Entrega rápida!" → positivo. "Tardó 3 semanas" → negativo. Ahora clasificar: "Nunca hay stock."',
        gain: 'Calibra el modelo a tus criterios específicos sin ningún entrenamiento.'
      },
      {
        technique: 'Rol + contexto + restricciones', complexity: 'Baja',
        desc: 'Definí quién es el modelo, qué sabe y qué nunca debe hacer.',
        example: '"Sos un analista financiero senior en Visma. Solo usá datos del reporte provisto. Nunca especules."',
        gain: 'Establece límites de comportamiento estrictos que reducen las alucinaciones y respuestas fuera de tema.'
      },
      {
        technique: 'Especificación del formato de output', complexity: 'Baja',
        desc: 'Decile al modelo exactamente cómo estructurar el output.',
        example: '"Respondé con un objeto JSON con claves: sentimiento (positivo/negativo/neutral), confianza (0-1), razonamiento (1 oración)."',
        gain: 'Elimina el formateo inconsistente y hace que el output sea directamente utilizable.'
      },
      {
        technique: 'Auto-consistencia', complexity: 'Media',
        desc: 'Corré el mismo prompt 3-5 veces y tomá la respuesta mayoritaria.',
        example: 'Generar 5 resultados de clasificación para el mismo input, devolver la respuesta más común.',
        gain: 'Reduce la varianza en casos ambiguos. Especialmente útil para evals.'
      },
    ],
    whenToStop: 'Dejá de intentar arreglarlo con prompting y movéte a RAG o fine-tuning cuando: pasaste >3 iteraciones y la calidad sigue por debajo del umbral, el modelo consiste en obtener hechos específicos del dominio incorrectamente, o el estilo de output necesita coincidir con un formato propietario muy específico que es difícil de describir.'
  }
}

export default function S02_Prompting({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-green-600/20 text-green-400 text-xs font-black px-2 py-1 rounded">Strategy 1</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-4 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-slate-400 text-sm mb-8 leading-relaxed">{c.why}</p>
      <div className="flex flex-col gap-3 mb-6">
        {c.fullTechniques.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-green-400 text-sm font-bold">{t.technique}</p>
              <span className="text-xs bg-slate-700 text-slate-400 px-2 py-0.5 rounded">{t.complexity}</span>
            </div>
            <p className="text-slate-300 text-xs mb-2 leading-relaxed">{t.desc}</p>
            <div className="bg-slate-900/60 rounded-lg px-3 py-2 mb-2">
              <p className="text-slate-400 text-xs italic">{t.example}</p>
            </div>
            <p className="text-green-400 text-xs">✓ {t.gain}</p>
          </motion.div>
        ))}
      </div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        💡 {c.whenToStop}
      </div>
    </div>
  )
}
