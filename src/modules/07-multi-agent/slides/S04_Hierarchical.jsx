import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Pattern 03: Hierarchical',
    subtitle: 'An orchestrator agent breaks down a complex task and delegates pieces to specialized sub-agents. The orchestrator doesn\'t do the work — it manages who does.',
    when: 'Use when the task requires different types of expertise, different tools, or different levels of access. The orchestrator is the strategist; sub-agents are the specialists.',
    levels: [
      { level: 'Orchestrator', role: 'Plans, delegates, synthesizes', color: '#6554C0', desc: 'Receives the high-level goal. Breaks it into subtasks. Assigns each to the right sub-agent. Synthesizes results.' },
      { level: 'Sub-agents', role: 'Specialized executors', color: '#0052CC', desc: 'Each sub-agent has specific tools, instructions, and expertise. They only do their assigned task and report back.' },
    ],
    visma: {
      label: 'Visma example: Automated due diligence for M&A',
      orchestrator: 'M&A Orchestrator receives: "Analyze AcquireCo for acquisition readiness"',
      subagents: [
        { name: 'Financial agent', task: 'Pulls and analyzes 3 years of financials, ARR, churn, margins' },
        { name: 'Legal agent', task: 'Reviews contracts, IP ownership, pending litigation' },
        { name: 'Technical agent', task: 'Scans codebase quality, tech debt, security posture' },
        { name: 'People agent', task: 'Analyzes org structure, key person dependencies, culture signals' },
      ],
      synthesis: 'Orchestrator synthesizes 4 specialist reports into executive due diligence brief',
      result: 'A process that took 3 weeks with 4 specialist teams now runs in 4 hours with human review at the end.'
    },
    tradeoffs: {
      pros: ['Best for complex, multi-domain tasks', 'Specialists can be optimized independently', 'Orchestrator failure is recoverable — retry specific sub-tasks'],
      cons: ['Orchestrator is a single point of failure for planning', 'More complex to build and debug', 'Orchestrator quality determines overall quality']
    }
  },
  es: {
    title: 'Patrón 03: Jerárquico',
    subtitle: 'Un agente orquestador descompone una tarea compleja y delega piezas a sub-agentes especializados. El orquestador no hace el trabajo — gestiona quién lo hace.',
    when: 'Usá cuando la tarea requiere diferentes tipos de experiencia, diferentes herramientas o diferentes niveles de acceso. El orquestador es el estratega; los sub-agentes son los especialistas.',
    levels: [
      { level: 'Orquestador', role: 'Planifica, delega, sintetiza', color: '#6554C0', desc: 'Recibe el objetivo de alto nivel. Lo descompone en subtareas. Asigna cada una al sub-agente correcto. Sintetiza resultados.' },
      { level: 'Sub-agentes', role: 'Ejecutores especializados', color: '#0052CC', desc: 'Cada sub-agente tiene herramientas, instrucciones y experiencia específicas. Solo hacen su tarea asignada e informan de vuelta.' },
    ],
    visma: {
      label: 'Ejemplo Visma: Due diligence automatizado para M&A',
      orchestrator: 'El orquestador M&A recibe: "Analizad a AcquireCo para preparación de adquisición"',
      subagents: [
        { name: 'Agente financiero', task: 'Extrae y analiza 3 años de finanzas, ARR, churn, márgenes' },
        { name: 'Agente legal', task: 'Revisa contratos, propiedad intelectual, litigios pendientes' },
        { name: 'Agente técnico', task: 'Escanea calidad del código, deuda técnica, postura de seguridad' },
        { name: 'Agente de personas', task: 'Analiza estructura org, dependencias de personas clave, señales de cultura' },
      ],
      synthesis: 'El orquestador sintetiza 4 reportes de especialistas en un brief ejecutivo de due diligence',
      result: 'Un proceso que tomó 3 semanas con 4 equipos especializados ahora corre en 4 horas con revisión humana al final.'
    },
    tradeoffs: {
      pros: ['Mejor para tareas complejas y multi-dominio', 'Los especialistas pueden optimizarse independientemente', 'El fallo del orquestador es recuperable — reintentá subtareas específicas'],
      cons: ['El orquestador es un único punto de fallo para la planificación', 'Más complejo de construir y depurar', 'La calidad del orquestador determina la calidad general']
    }
  }
}

export default function S04_Hierarchical({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-purple-600/20 text-purple-400 text-xs font-black px-2 py-1 rounded">03</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-3 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-purple-400 text-xs italic mb-8">📍 {c.when}</p>

      {/* Diagram */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <div className="flex justify-center mb-4">
          <div className="bg-purple-600/25 border border-purple-500/40 rounded-xl px-6 py-3 text-center">
            <p className="text-purple-300 text-xs font-bold">{c.levels[0].level}</p>
            <p className="text-slate-500 text-xs">{c.levels[0].role}</p>
          </div>
        </div>
        <div className="flex justify-center gap-8 mb-2">
          {c.visma.subagents.map((_, i) => <div key={i} className="w-px h-6 bg-purple-500/30" />)}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {c.visma.subagents.map((s, i) => (
            <div key={i} className="bg-blue-600/15 border border-blue-500/30 rounded-xl p-3">
              <p className="text-blue-400 text-xs font-bold mb-1">{s.name}</p>
              <p className="text-slate-400 text-xs leading-snug">{s.task}</p>
            </div>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">{c.visma.label}</p>
        <p className="text-slate-300 text-xs mb-3 italic">“{c.visma.orchestrator}”</p>
        <p className="text-slate-400 text-xs mb-3">→ {c.visma.synthesis}</p>
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
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
