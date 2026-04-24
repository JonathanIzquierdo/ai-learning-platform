import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'The evaluation spectrum.',
    subtitle: 'Not all evaluators work the same way. They live on a spectrum from fully deterministic to fully probabilistic.',
    types: [
      {
        name: 'Deterministic', color: '#36B37E',
        desc: 'Rule-based. Always returns the same result for the same input.',
        examples: ['Exact match: does the output equal the expected string?', 'Regex: does the response contain a valid date format?', 'Schema validation: is the JSON output well-formed?', 'Contains/not-contains: is a forbidden word absent?'],
        pro: 'Fast, cheap, 100% reproducible', con: 'Can\'t judge quality, nuance, or meaning'
      },
      {
        name: 'Heuristic / Statistical', color: '#FF991F',
        desc: 'Computes a score using algorithms — no AI involved.',
        examples: ['BLEU / ROUGE: text similarity vs. reference', 'Embedding cosine similarity: semantic closeness', 'Token count: is the response within expected length?', 'Latency / cost thresholds'],
        pro: 'Scalable, consistent, no API cost', con: 'Scores can mislead — high BLEU ≠ good answer'
      },
      {
        name: 'LLM-as-a-Judge', color: '#6554C0',
        desc: 'Use a second AI model to evaluate the output of the first.',
        examples: ['Is this response factually correct?', 'Is the tone appropriate for a financial assistant?', 'Does the answer fully address the user question?', 'Is this output free of hallucinations?'],
        pro: 'Handles nuance, subjectivity, and complex criteria', con: 'Non-deterministic, more expensive, needs calibration'
      },
    ]
  },
  es: {
    title: 'El espectro de evaluación.',
    subtitle: 'No todos los evaluadores funcionan igual. Viven en un espectro desde completamente determinísticos hasta completamente probabilísticos.',
    types: [
      {
        name: 'Determinístico', color: '#36B37E',
        desc: 'Basado en reglas. Siempre devuelve el mismo resultado para el mismo input.',
        examples: ['Exact match: ¿el output es igual al string esperado?', 'Regex: ¿la respuesta contiene un formato de fecha válido?', 'Validación de schema: ¿el JSON está bien formado?', 'Contains/not-contains: ¿ausencia de palabras prohibidas?'],
        pro: 'Rápido, barato, 100% reproducible', con: 'No puede juzgar calidad, matices ni significado'
      },
      {
        name: 'Heurístico / Estadístico', color: '#FF991F',
        desc: 'Calcula un puntaje usando algoritmos — sin IA.',
        examples: ['BLEU / ROUGE: similitud de texto vs. referencia', 'Cosine similarity de embeddings: cercanía semántica', 'Token count: ¿la respuesta está dentro de la longitud esperada?', 'Umbrales de latencia / costo'],
        pro: 'Escalable, consistente, sin costo de API', con: 'Los puntajes pueden engañar — BLEU alto ≠ buena respuesta'
      },
      {
        name: 'LLM como Juez', color: '#6554C0',
        desc: 'Usar un segundo modelo de IA para evaluar el output del primero.',
        examples: ['¿Esta respuesta es factualmente correcta?', '¿El tono es apropiado para un asistente financiero?', '¿La respuesta responde completamente la pregunta del usuario?', '¿Este output está libre de alucinaciones?'],
        pro: 'Maneja matices, subjetividad y criterios complejos', con: 'No determinístico, más caro, necesita calibración'
      },
    ]
  }
}

export default function S03_Spectrum({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-5">
        {c.types.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className="rounded-2xl border p-5" style={{ borderColor: t.color + '40', background: t.color + '0D' }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: t.color }}>{t.name}</p>
            <p className="text-slate-300 text-sm mb-3">{t.desc}</p>
            <ul className="flex flex-col gap-1 mb-4">
              {t.examples.map((ex, j) => (
                <li key={j} className="text-xs text-slate-400 flex items-start gap-2">
                  <span style={{ color: t.color }} className="mt-0.5">›</span>{ex}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 text-xs">
              <span className="text-green-400">✓ {t.pro}</span>
              <span className="text-red-400">✗ {t.con}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
