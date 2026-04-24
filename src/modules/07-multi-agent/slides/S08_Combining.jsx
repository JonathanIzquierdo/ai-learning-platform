import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Combining patterns.',
    subtitle: 'Real systems rarely use a single pattern. The most powerful architectures combine patterns to match the shape of the problem.',
    examples: [
      {
        system: 'Code review pipeline', color: '#6554C0',
        architecture: 'Parallel (run security, style, logic agents simultaneously) → Sequential (reviewer synthesizes → PR comment writer formats)',
        visma: 'PR lands, 3 agents review in parallel in 45s, sequential synthesis writes structured review comment'
      },
      {
        system: 'Customer support escalation', color: '#00B8D9',
        architecture: 'Handoff (triage → specialist) + Loop (specialist iterates on response until quality ≥ threshold)',
        visma: 'Support ticket routes to right specialist, who refines response until eval passes, then sends'
      },
      {
        system: 'Competitive intelligence', color: '#FF991F',
        architecture: 'Hierarchical (orchestrator assigns research domains) + Parallel (domain agents run simultaneously) → Sequential (synthesis → formatting)',
        visma: 'Orchestrator decomposes research, 5 parallel agents gather data, sequential pipeline writes and formats report'
      },
    ],
    principle: 'Match the pattern to the problem shape. Independent subtasks → parallel. Domain crossing → handoff. Quality critical → loop. Complex decomposition → hierarchical. Linear pipeline → sequential.',
    decisionTree: [
      { question: 'Are subtasks independent?', yes: 'Parallel', no: 'Next question' },
      { question: 'Does the task cross domains mid-flight?', yes: 'Handoff', no: 'Next question' },
      { question: 'Does quality need iteration?', yes: 'Loop', no: 'Next question' },
      { question: 'Does the task need expert decomposition?', yes: 'Hierarchical', no: 'Sequential' },
    ]
  },
  es: {
    title: 'Combinando patrones.',
    subtitle: 'Los sistemas reales rara vez usan un solo patrón. Las arquitecturas más poderosas combinan patrones para adaptarse a la forma del problema.',
    examples: [
      {
        system: 'Pipeline de revisión de código', color: '#6554C0',
        architecture: 'Paralelo (agentes de seguridad, estilo, lógica corren simultáneamente) → Secuencial (revisor sintetiza → escritor de comentario de PR formatea)',
        visma: 'El PR aterriza, 3 agentes revisan en paralelo en 45s, la síntesis secuencial escribe el comentario de revisión estructurado'
      },
      {
        system: 'Escalación de soporte al cliente', color: '#00B8D9',
        architecture: 'Handoff (triaje → especialista) + Loop (el especialista itera en la respuesta hasta que la calidad ≥ umbral)',
        visma: 'El ticket de soporte se enruta al especialista correcto, quien refina la respuesta hasta que pasa el eval, luego envía'
      },
      {
        system: 'Inteligencia competitiva', color: '#FF991F',
        architecture: 'Jerárquico (el orquestador asigna dominios de investigación) + Paralelo (los agentes de dominio corren simultáneamente) → Secuencial (síntesis → formateo)',
        visma: 'El orquestador descompone la investigación, 5 agentes paralelos recopilan datos, el pipeline secuencial escribe y formatea el reporte'
      },
    ],
    principle: 'Adaptá el patrón a la forma del problema. Subtareas independientes → paralelo. Cruce de dominios → handoff. Calidad crítica → loop. Descomposición compleja → jerárquico. Pipeline lineal → secuencial.',
    decisionTree: [
      { question: '¿Las subtareas son independientes?', yes: 'Paralelo', no: 'Siguiente pregunta' },
      { question: '¿La tarea cruza dominios a mitad de camino?', yes: 'Handoff', no: 'Siguiente pregunta' },
      { question: '¿La calidad necesita iteración?', yes: 'Loop', no: 'Siguiente pregunta' },
      { question: '¿La tarea necesita descomposición experta?', yes: 'Jerárquico', no: 'Secuencial' },
    ]
  }
}

export default function S08_Combining({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-4 mb-8">
        {c.examples.map((ex, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
            <p className="text-xs font-bold mb-2" style={{ color: ex.color }}>{ex.system}</p>
            <p className="text-slate-300 text-xs leading-relaxed mb-2">🏗️ {ex.architecture}</p>
            <p className="text-slate-500 text-xs italic">📍 Visma: {ex.visma}</p>
          </motion.div>
        ))}
      </div>
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-6">
        <p className="text-purple-300 text-sm leading-relaxed">💡 {c.principle}</p>
      </div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Pattern decision tree</p>
      <div className="flex flex-col gap-2">
        {c.decisionTree.map((d, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
            className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
            <span className="text-slate-500 text-xs w-4">{i + 1}.</span>
            <p className="text-slate-300 text-xs flex-1">{d.question}</p>
            <span className="text-green-400 text-xs font-semibold whitespace-nowrap">→ {d.yes}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
