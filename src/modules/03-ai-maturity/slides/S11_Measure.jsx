import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'How to measure where your team is.',
    subtitle: 'Self-assessment. Answer honestly. The goal is clarity, not a good score.',
    dimensions: [
      {
        dim: 'Instructions', color: '#6554C0',
        questions: [
          { q: 'Do you have shared, documented instructions for your AI agents?', l1: 'No', l2: 'Yes, basic', l3: 'Yes, with skills and evals', l4: 'Yes, per specialized agent with version control' },
        ]
      },
      {
        dim: 'Measurement', color: '#378ADD',
        questions: [
          { q: 'Can you measure the quality of your AI outputs systematically?', l1: 'No — we check manually', l2: 'Some manual evals', l3: 'Automated eval suite', l4: 'Evals per agent + pipeline evals' },
        ]
      },
      {
        dim: 'Delegation', color: '#FF991F',
        questions: [
          { q: 'How much of your shipped code was written autonomously by AI?', l1: '~0% — AI only assists', l2: 'Small %, with heavy review', l3: 'Significant % via agent PRs', l4: 'Majority, via multi-agent pipelines' },
        ]
      },
      {
        dim: 'Parallelism', color: '#36B37E',
        questions: [
          { q: 'Can engineers run multiple agent workflows simultaneously on different tasks?', l1: 'No', l2: 'Occasionally, manually supervised', l3: 'Yes, with monitoring', l4: 'Yes, orchestrated automatically' },
        ]
      },
      {
        dim: 'Observability', color: '#00B8D9',
        questions: [
          { q: 'When an agent workflow fails, can you diagnose what happened?', l1: 'No — we start over', l2: 'Partially, from logs', l3: 'Yes, from structured traces', l4: 'Yes, with alerts and auto-recovery' },
        ]
      },
    ],
    scoring: {
      label: 'Reading your results',
      text: 'If most of your answers are L1-L2, you\'re on the right path — that\'s honest and normal for most teams right now. The goal isn\'t to jump to L4. The goal is to identify the one dimension where moving from L1 to L2 would have the most impact for your team today.'
    }
  },
  es: {
    title: 'Cómo medir dónde está tu equipo.',
    subtitle: 'Autoevaluación. Respondé con honestidad. El objetivo es claridad, no una buena puntuación.',
    dimensions: [
      {
        dim: 'Instrucciones', color: '#6554C0',
        questions: [
          { q: '¿Tenés instrucciones compartidas y documentadas para tus agentes de IA?', l1: 'No', l2: 'Sí, básicas', l3: 'Sí, con skills y evals', l4: 'Sí, por agente especializado con control de versiones' },
        ]
      },
      {
        dim: 'Medición', color: '#378ADD',
        questions: [
          { q: '¿Podés medir la calidad de tus outputs de IA de forma sistemática?', l1: 'No — verificamos manualmente', l2: 'Algunos evals manuales', l3: 'Suite de evals automatizada', l4: 'Evals por agente + evals de pipeline' },
        ]
      },
      {
        dim: 'Delegación', color: '#FF991F',
        questions: [
          { q: '¿Qué porcentaje de tu código deployado fue escrito de forma autónoma por IA?', l1: '~0% — la IA solo asiste', l2: 'Poco %, con revisión exhaustiva', l3: 'Porcentaje significativo vía PRs de agentes', l4: 'Mayoría, vía pipelines multi-agente' },
        ]
      },
      {
        dim: 'Paralelismo', color: '#36B37E',
        questions: [
          { q: '¿Pueden los ingenieros correr múltiples flujos de agentes simultáneamente en diferentes tareas?', l1: 'No', l2: 'Ocasionalmente, supervisados manualmente', l3: 'Sí, con monitoreo', l4: 'Sí, orquestado automáticamente' },
        ]
      },
      {
        dim: 'Observabilidad', color: '#00B8D9',
        questions: [
          { q: 'Cuando un flujo de agente falla, ¿podés diagnosticar qué pasó?', l1: 'No — empezamos de nuevo', l2: 'Parcialmente, desde logs', l3: 'Sí, desde trazas estructuradas', l4: 'Sí, con alertas y auto-recuperación' },
        ]
      },
    ],
    scoring: {
      label: 'Leyendo tus resultados',
      text: 'Si la mayoría de tus respuestas son L1-L2, estás en el camino correcto — eso es honesto y normal para la mayoría de los equipos ahora mismo. El objetivo no es saltar al L4. El objetivo es identificar la dimensión donde pasar de L1 a L2 tendría más impacto para tu equipo hoy.'
    }
  }
}

export default function S11_Measure({ lang }) {
  const c = content[lang]
  const levels = ['L1', 'L2', 'L3', 'L4']
  const levelColors = ['#378ADD', '#6554C0', '#FF991F', '#36B37E']
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-5 mb-8">
        {c.dimensions.map((dim, di) => (
          <motion.div key={di} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: di * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
            <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: dim.color }}>{dim.dim}</p>
            {dim.questions.map((q, qi) => (
              <div key={qi}>
                <p className="text-white text-sm font-medium mb-3">{q.q}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[q.l1, q.l2, q.l3, q.l4].map((ans, li) => (
                    <div key={li} className="rounded-lg p-2 border" style={{ borderColor: levelColors[li] + '40', background: levelColors[li] + '0D' }}>
                      <p className="text-xs font-bold mb-1" style={{ color: levelColors[li] }}>{levels[li]}</p>
                      <p className="text-slate-400 text-xs leading-snug">{ans}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">{c.scoring.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.scoring.text}</p>
      </div>
    </div>
  )
}
