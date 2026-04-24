import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Pattern 01: Sequential',
    subtitle: 'The simplest multi-agent pattern. Agents form a pipeline — each one processes the output of the previous and passes it to the next.',
    when: 'Use when each step requires the full output of the previous step. The work is inherently linear and order matters.',
    diagram: null,
    steps: [
      { agent: 'Agent 1: Research', task: 'Gather raw information from sources', output: 'Unstructured data dump' },
      { agent: 'Agent 2: Synthesize', task: 'Structure and summarize the research', output: 'Organized summary' },
      { agent: 'Agent 3: Write', task: 'Turn summary into polished document', output: 'Final draft' },
      { agent: 'Agent 4: Review', task: 'Check for errors, gaps, tone', output: 'Approved document' },
    ],
    visma: {
      label: 'Visma example: Competitive intelligence report',
      flow: [
        'Scraper agent → collects public data on 3 competitors',
        'Analyst agent → structures data into comparison framework',
        'Writer agent → drafts executive summary',
        'Editor agent → formats for leadership presentation',
      ],
      result: 'A research task that took a human analyst 4 hours now runs in 12 minutes.'
    },
    tradeoffs: {
      pros: ['Simple to debug — clear input/output at each step', 'Easy to insert human review checkpoints between steps', 'Failure is isolated — you know exactly which step failed'],
      cons: ['Slowest pattern — no parallelism', 'Errors propagate: bad output from step 2 poisons step 3', 'Total latency = sum of all agent latencies']
    }
  },
  es: {
    title: 'Patrón 01: Secuencial',
    subtitle: 'El patrón multi-agente más simple. Los agentes forman un pipeline — cada uno procesa el output del anterior y lo pasa al siguiente.',
    when: 'Usá cuando cada paso requiere el output completo del paso anterior. El trabajo es inherentemente lineal y el orden importa.',
    steps: [
      { agent: 'Agente 1: Investigación', task: 'Recopilar información bruta de fuentes', output: 'Volcado de datos no estructurado' },
      { agent: 'Agente 2: Síntesis', task: 'Estructurar y resumir la investigación', output: 'Resumen organizado' },
      { agent: 'Agente 3: Escritura', task: 'Convertir resumen en documento pulido', output: 'Borrador final' },
      { agent: 'Agente 4: Revisión', task: 'Verificar errores, lagunas, tono', output: 'Documento aprobado' },
    ],
    visma: {
      label: 'Ejemplo Visma: Reporte de inteligencia competitiva',
      flow: [
        'Agente scraper → recopila datos públicos de 3 competidores',
        'Agente analista → estructura datos en framework de comparación',
        'Agente escritor → redacta resumen ejecutivo',
        'Agente editor → formatea para presentación de liderazgo',
      ],
      result: 'Una tarea de investigación que le tomaba 4 horas a un analista humano ahora corre en 12 minutos.'
    },
    tradeoffs: {
      pros: ['Simple de depurar — input/output claro en cada paso', 'Fácil insertar puntos de revisión humana entre pasos', 'El fallo está aislado — sabés exactamente qué paso falló'],
      cons: ['Patrón más lento — sin paralelismo', 'Los errores se propagan: el mal output del paso 2 envenena el paso 3', 'Latencia total = suma de todas las latencias de agentes']
    }
  }
}

export default function S02_Sequential({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-blue-600/20 text-blue-400 text-xs font-black px-2 py-1 rounded">01</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-3 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-blue-400 text-xs italic mb-8">📍 {c.when}</p>

      {/* Diagram */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {c.steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="bg-blue-600/20 border border-blue-500/40 rounded-xl p-3 w-36">
                <p className="text-blue-400 text-xs font-bold mb-1">{s.agent}</p>
                <p className="text-slate-400 text-xs leading-snug mb-1">{s.task}</p>
                <p className="text-slate-600 text-xs italic">→ {s.output}</p>
              </div>
              {i < c.steps.length - 1 && <span className="text-blue-400 text-lg">→</span>}
            </div>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-5 mb-6">
        <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">{c.visma.label}</p>
        {c.visma.flow.map((f, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-center gap-2">
            <span className="text-blue-400">{i + 1}.</span>{f}
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
