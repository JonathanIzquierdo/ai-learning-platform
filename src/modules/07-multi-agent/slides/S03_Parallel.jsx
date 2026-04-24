import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Pattern 02: Parallel',
    subtitle: 'Multiple agents run simultaneously on independent subtasks. An aggregator collects all results and merges them.',
    when: 'Use when subtasks are independent of each other and can run at the same time. This is the fastest pattern for decomposable problems.',
    steps: [
      { agent: 'Agent A', task: 'Analyze Q1 financials', color: '#36B37E' },
      { agent: 'Agent B', task: 'Analyze Q2 financials', color: '#36B37E' },
      { agent: 'Agent C', task: 'Analyze Q3 financials', color: '#36B37E' },
      { agent: 'Agent D', task: 'Analyze Q4 financials', color: '#36B37E' },
    ],
    aggregator: 'Aggregator agent merges all quarterly analyses into annual report',
    visma: {
      label: 'Visma example: Multi-company LATAM analysis',
      flow: [
        'Orchestrator receives request: "Summarize AI adoption across all 8 LATAM companies"',
        '8 agents run in parallel — one per company — each analyzing that company\'s data',
        'Aggregator merges 8 summaries into regional overview with cross-company patterns',
        'Total time: 45 seconds vs 4 hours sequential',
      ],
      result: '8x speed improvement. The result is also more consistent since each agent uses the same analysis template.'
    },
    speedNote: 'Parallel is often 5-10x faster than sequential for decomposable tasks. The bottleneck becomes the aggregation step, not the analysis.',
    tradeoffs: {
      pros: ['Dramatically faster for large decomposable tasks', 'Each agent works independently — failures don\'t cascade', 'Natural fit for multi-entity, multi-region, or multi-file analysis'],
      cons: ['Aggregation logic can be complex', 'Results need to be truly independent (no agent depends on another\'s output)', 'Higher cost — all agents consume tokens simultaneously']
    }
  },
  es: {
    title: 'Patrón 02: Paralelo',
    subtitle: 'Múltiples agentes corren simultáneamente en subtareas independientes. Un agregador recopila todos los resultados y los fusiona.',
    when: 'Usá cuando las subtareas son independientes entre sí y pueden correr al mismo tiempo. Este es el patrón más rápido para problemas descomponibles.',
    steps: [
      { agent: 'Agente A', task: 'Analizar finanzas Q1', color: '#36B37E' },
      { agent: 'Agente B', task: 'Analizar finanzas Q2', color: '#36B37E' },
      { agent: 'Agente C', task: 'Analizar finanzas Q3', color: '#36B37E' },
      { agent: 'Agente D', task: 'Analizar finanzas Q4', color: '#36B37E' },
    ],
    aggregator: 'El agente agregador fusiona todos los análisis trimestrales en el reporte anual',
    visma: {
      label: 'Ejemplo Visma: Análisis multi-empresa LATAM',
      flow: [
        'El orquestador recibe la solicitud: "Resume la adopción de IA en las 8 empresas LATAM"',
        '8 agentes corren en paralelo — uno por empresa — cada uno analizando los datos de esa empresa',
        'El agregador fusiona 8 resúmenes en un overview regional con patrones entre empresas',
        'Tiempo total: 45 segundos vs 4 horas secuencial',
      ],
      result: 'Mejora de velocidad 8x. El resultado también es más consistente ya que cada agente usa la misma plantilla de análisis.'
    },
    speedNote: 'El paralelo suele ser 5-10x más rápido que el secuencial para tareas descomponibles. El cuello de botella pasa a ser el paso de agregación, no el análisis.',
    tradeoffs: {
      pros: ['Dramáticamente más rápido para tareas grandes descomponibles', 'Cada agente trabaja independientemente — los fallos no se propagan', 'Ajuste natural para análisis multi-entidad, multi-región o multi-archivo'],
      cons: ['La lógica de agregación puede ser compleja', 'Los resultados necesitan ser verdaderamente independientes (ningún agente depende del output de otro)', 'Mayor costo — todos los agentes consumen tokens simultáneamente']
    }
  }
}

export default function S03_Parallel({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-green-600/20 text-green-400 text-xs font-black px-2 py-1 rounded">02</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-3 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-green-400 text-xs italic mb-8">📍 {c.when}</p>

      {/* Diagram */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <div className="flex justify-center mb-3">
          <div className="bg-slate-700 rounded-lg px-4 py-2 text-white text-xs font-semibold">Orchestrator</div>
        </div>
        <div className="flex justify-center gap-2 mb-3">
          {c.steps.map((_, i) => <div key={i} className="w-px h-6 bg-green-500/50" />)}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
          {c.steps.map((s, i) => (
            <div key={i} className="bg-green-600/15 border border-green-500/30 rounded-xl p-3 text-center">
              <p className="text-green-400 text-xs font-bold mb-1">{s.agent}</p>
              <p className="text-slate-400 text-xs leading-snug">{s.task}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300 text-xs font-semibold text-center max-w-xs">{c.aggregator}</div>
        </div>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2 mb-6">
        <p className="text-amber-300 text-xs">⚡ {c.speedNote}</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-green-500/10 border border-green-500/30 rounded-2xl p-5 mb-6">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-3">{c.visma.label}</p>
        {c.visma.flow.map((f, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-start gap-2">
            <span className="text-green-400 shrink-0">{i + 1}.</span>{f}
          </p>
        ))}
        <div className="mt-3 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
          <p className="text-green-300 text-xs">✓ {c.visma.result}</p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-500/8 border border-green-500/20 rounded-xl p-4">
          <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">Pros</p>
          {c.tradeoffs.pros.map((p, i) => <p key={i} className="text-slate-300 text-xs mb-1">✓ {p}</p>)}
        </div>
        <div className="bg-red-500/8 border border-red-500/20 rounded-xl p-4">
          <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">Cons</p>
          {c.tradeoffs.cons.map((p, i) => <p key={i} className="text-slate-400 text-xs mb-1">✗ {p}</p>)}
        </div>
      </div>
    </div>
  )
}
