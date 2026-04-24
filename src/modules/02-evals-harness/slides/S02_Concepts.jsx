import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Eval. Harness. What do they mean?',
    evalDef: { term: 'Eval (Evaluation)', def: 'A single test that checks whether an AI output meets a defined criterion. Like a unit test — but for AI behavior.' },
    harnessDef: { term: 'Harness', def: 'The framework that runs all your evals systematically, collects results, tracks changes over time, and reports pass/fail rates.' },
    analogy: {
      label: 'Analogy',
      text: 'If your AI feature is a car, an Eval is one test drive on a specific road. The Harness is the full test track that runs every scenario, measures every metric, and produces a report card every time you change something.'
    },
    whyMatters: [
      'Catch regressions before users do',
      'Measure quality changes when you swap models',
      'Justify AI decisions to stakeholders with data',
      'Build confidence to ship faster',
    ]
  },
  es: {
    title: 'Eval. Harness. ¿Qué significan?',
    evalDef: { term: 'Eval (Evaluación)', def: 'Un test individual que verifica si un output de IA cumple un criterio definido. Como un unit test — pero para el comportamiento de IA.' },
    harnessDef: { term: 'Harness', def: 'El framework que corre todos tus evals sistemáticamente, recopila resultados, rastrea cambios a lo largo del tiempo y reporta tasas de éxito/fallo.' },
    analogy: {
      label: 'Analogía',
      text: 'Si tu feature de IA es un auto, un Eval es una prueba de manejo en un camino específico. El Harness es la pista de pruebas completa que corre cada escenario, mide cada métrica y produce un reporte cada vez que cambiás algo.'
    },
    whyMatters: [
      'Detectar regresiones antes que los usuarios',
      'Medir cambios de calidad al cambiar de modelo',
      'Justificar decisiones de IA con datos ante stakeholders',
      'Construir confianza para deployar más rápido',
    ]
  }
}

export default function S02_Concepts({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{c.title}</h2>
      <div className="flex flex-col gap-4 mb-8">
        {[c.evalDef, c.harnessDef].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className="bg-slate-800 border border-purple-500/30 rounded-2xl p-5">
            <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">{item.term}</p>
            <p className="text-white text-base leading-relaxed">{item.def}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 mb-8">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.analogy.label}</p>
        <p className="text-slate-200 text-sm leading-relaxed">{c.analogy.text}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Why it matters</p>
        <div className="flex flex-col gap-2">
          {c.whyMatters.map((w, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
              <span className="text-purple-400">•</span> {w}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
