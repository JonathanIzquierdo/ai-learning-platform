import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Temperature, hallucinations & why models make things up.',
    subtitle: 'Two of the most misunderstood aspects of LLMs — and the most important to internalize before building with them.',
    temperature: {
      label: 'Temperature: the creativity dial',
      text: 'Temperature controls how random the model\'s output is. It\'s a number between 0 and 2.',
      levels: [
        { value: '0', label: 'Deterministic', desc: 'Same input = same output every time. Best for structured data, code, factual answers.' },
        { value: '0.7', label: 'Balanced', desc: 'Some variation. Good for most tasks — helpful, creative, but not erratic.' },
        { value: '1.5+', label: 'Creative', desc: 'Highly varied output. Good for brainstorming, storytelling. Bad for factual tasks.' },
      ]
    },
    hallucination: {
      label: 'Hallucinations: confident wrongness',
      text: 'A hallucination is when the model generates something that sounds correct but is factually wrong — and presents it with full confidence.',
      why: 'Why does this happen? Remember: LLMs predict the next token based on patterns. Sometimes the most statistically likely next word is... wrong. The model has no internal fact-checker.',
      examples: [
        'Citing a research paper that doesn\'t exist',
        'Giving a wrong API endpoint with perfect syntax',
        'Inventing a date, a name, or a statistic',
        'Confidently answering a question outside its training data',
      ],
      mitigations: [
        'RAG: ground the model with real retrieved data',
        'Deterministic evals: catch factual errors automatically',
        'Low temperature for factual tasks',
        'Always verify critical outputs, especially numbers and citations',
      ]
    }
  },
  es: {
    title: 'Temperatura, alucinaciones y por qué los modelos inventan cosas.',
    subtitle: 'Dos de los aspectos más incomprendidos de los LLMs — y los más importantes de internalizar antes de construir con ellos.',
    temperature: {
      label: 'Temperatura: el dial de creatividad',
      text: 'La temperatura controla qué tan aleatorio es el output del modelo. Es un número entre 0 y 2.',
      levels: [
        { value: '0', label: 'Determinístico', desc: 'El mismo input = el mismo output siempre. Ideal para datos estructurados, código, respuestas factuales.' },
        { value: '0.7', label: 'Balanceado', desc: 'Algo de variación. Bueno para la mayoría de las tareas — útil, creativo, pero no errático.' },
        { value: '1.5+', label: 'Creativo', desc: 'Output muy variado. Bueno para brainstorming, storytelling. Malo para tareas factuales.' },
      ]
    },
    hallucination: {
      label: 'Alucinaciones: estar equivocado con confianza',
      text: 'Una alucinación es cuando el modelo genera algo que suena correcto pero es factualmente incorrecto — y lo presenta con total confianza.',
      why: '¿Por qué pasa esto? Recordemos: los LLMs predicen el siguiente token basado en patrones. A veces la siguiente palabra estadísticamente más probable es... incorrecta. El modelo no tiene un verificador de hechos interno.',
      examples: [
        'Citar un paper de investigación que no existe',
        'Dar un endpoint de API incorrecto con sintaxis perfecta',
        'Inventar una fecha, un nombre o una estadística',
        'Responder con confianza una pregunta fuera de sus datos de entrenamiento',
      ],
      mitigations: [
        'RAG: fundamentar el modelo con datos reales recuperados',
        'Evals determinísticos: detectar errores factuales automáticamente',
        'Temperatura baja para tareas factuales',
        'Siempre verificar outputs críticos, especialmente números y citas',
      ]
    }
  }
}

export default function S06_Temperature({ lang }) {
  const c = content[lang]
  const t = c.temperature
  const h = c.hallucination
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-8">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{t.label}</p>
        <p className="text-slate-300 text-sm mb-4">{t.text}</p>
        <div className="flex flex-col gap-2">
          {t.levels.map((lv, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-700/50">
              <span className="font-bold text-sm text-amber-400 w-8 shrink-0">{lv.value}</span>
              <div>
                <p className="text-white text-sm font-semibold">{lv.label}</p>
                <p className="text-slate-400 text-xs mt-0.5">{lv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 mb-6">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{h.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">{h.text}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{h.why}</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-red-400 text-xs font-bold mb-2">Examples</p>
            {h.examples.map((ex, i) => (
              <p key={i} className="text-slate-400 text-xs mb-1 flex items-start gap-1">
                <span className="text-red-400">×</span>{ex}
              </p>
            ))}
          </div>
          <div>
            <p className="text-green-400 text-xs font-bold mb-2">Mitigations</p>
            {h.mitigations.map((m, i) => (
              <p key={i} className="text-slate-400 text-xs mb-1 flex items-start gap-1">
                <span className="text-green-400">✓</span>{m}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
