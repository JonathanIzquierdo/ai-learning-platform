import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Observability & failure modes.',
    subtitle: 'Multi-agent systems fail in ways single agents don\'t. You need to observe, measure, and handle failures at every layer.',
    failures: [
      { failure: 'Context drift', desc: 'After many agent hops, the original intent gets distorted. Agent 4 is solving a different problem than Agent 1 started with.', fix: 'Pass a structured "original task" field in every handoff. Never rely on conversation history alone.' },
      { failure: 'Silent failure', desc: 'An agent produces output that looks correct but is subtly wrong. Downstream agents accept it and amplify the error.', fix: 'Add validation steps between agents. Never pass raw output to the next step without a lightweight sanity check.' },
      { failure: 'Infinite loop', desc: 'A loop pattern without a proper exit condition runs forever, consuming tokens and money.', fix: 'Always set maxIterations. Log each iteration. Alert if iterations exceed expected range.' },
      { failure: 'Cost explosion', desc: 'A parallel pattern spawns too many sub-agents, or a loop runs too many iterations. Token cost multiplies fast.', fix: 'Set hard limits on parallelism and iteration. Add cost alerts. Use cheaper models for evaluation steps.' },
      { failure: 'Orphaned agents', desc: 'An agent starts a task but the orchestrator fails before receiving the result. The agent keeps running, consuming resources.', fix: 'Implement timeouts. Use structured state management. Every agent should have a TTL (time to live).' },
    ],
    mustHaves: [
      'Log every agent call: input, output, latency, cost',
      'Track the full execution trace from first agent to last',
      'Set hard limits: max iterations, max parallel agents, max token spend per pipeline run',
      'Alert on anomalies: unexpected agent count, latency spikes, cost outliers',
      'Design for partial failure: if one agent fails, the pipeline should degrade gracefully, not crash completely',
    ]
  },
  es: {
    title: 'Observabilidad y modos de fallo.',
    subtitle: 'Los sistemas multi-agente fallan de maneras que los agentes individuales no. Necesitás observar, medir y manejar fallos en cada capa.',
    failures: [
      { failure: 'Deriva de contexto', desc: 'Después de muchos saltos de agentes, la intención original se distorsiona. El Agente 4 está resolviendo un problema diferente al que el Agente 1 empezó.', fix: 'Pasá un campo estructurado "tarea original" en cada handoff. Nunca depás solo del historial de conversación.' },
      { failure: 'Fallo silencioso', desc: 'Un agente produce output que parece correcto pero es sutilmente incorrecto. Los agentes downstream lo aceptan y amplifican el error.', fix: 'Agréga pasos de validación entre agentes. Nunca pases el output bruto al siguiente paso sin una verificación rápida de cordura.' },
      { failure: 'Loop infinito', desc: 'Un patrón de loop sin una condición de salida adecuada corre para siempre, consumiendo tokens y dinero.', fix: 'Siempre establecé maxIteraciones. Registrá cada iteración. Alertá si las iteraciones superan el rango esperado.' },
      { failure: 'Explosión de costos', desc: 'Un patrón paralelo genera demasiados sub-agentes, o un loop corre demasiadas iteraciones. El costo de tokens se multiplica rápido.', fix: 'Establecé límites estrictos en paralelismo e iteración. Agréga alertas de costo. Usá modelos más baratos para pasos de evaluación.' },
      { failure: 'Agentes huérfanos', desc: 'Un agente comienza una tarea pero el orquestador falla antes de recibir el resultado. El agente sigue corriendo, consumiendo recursos.', fix: 'Implementá timeouts. Usá gestión de estado estructurada. Cada agente debería tener un TTL (tiempo de vida).' },
    ],
    mustHaves: [
      'Registrá cada llamada de agente: input, output, latencia, costo',
      'Rastrea el trazado de ejecución completo de primer a último agente',
      'Establecé límites estrictos: máx iteraciones, máx agentes paralelos, máx gasto de tokens por ejecución de pipeline',
      'Alertá sobre anomalías: conteo inesperado de agentes, picos de latencia, outliers de costo',
      'Diseñá para fallo parcial: si un agente falla, el pipeline debería degradarse elegantemente, no crashear completamente',
    ]
  }
}

export default function S09_Observability({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-3 mb-8">
        {c.failures.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-400">⚠️</span>
              <p className="text-white text-sm font-semibold">{f.failure}</p>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-2">{f.desc}</p>
            <p className="text-green-400 text-xs">→ Fix: {f.fix}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
        className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-5">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">Must-haves for every multi-agent system</p>
        {c.mustHaves.map((m, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1.5 flex items-start gap-2">
            <span className="text-purple-400">✓</span>{m}
          </p>
        ))}
      </motion.div>
    </div>
  )
}
