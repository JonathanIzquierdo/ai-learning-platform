import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Pattern 05: Handoff',
    subtitle: 'One agent handles a task until it reaches the boundary of its expertise, then explicitly transfers control to a specialized peer — along with full context.',
    when: 'Use when the same task crosses domains mid-flight. A triage agent starts, then hands off to a specialist who takes over completely. Common in customer support, onboarding, and incident response.',
    flow: [
      { from: 'Triage Agent', to: 'Specialist Agent', trigger: 'When task complexity exceeds generalist capability', carries: 'Full conversation history + structured handoff note' },
    ],
    keyPrinciple: 'The handoff must carry context. A cold handoff (no history, no summary) is a failure. The receiving agent must know what happened, what was tried, and what the user needs.',
    visma: {
      label: 'Visma example: Customer onboarding pipeline',
      flow: [
        'Welcome agent handles initial onboarding: account setup, basic product tour, FAQ',
        'Detects: customer is asking about advanced API integration beyond welcome scope',
        'Handoff: passes full conversation + customer profile + specific technical question to Integration Specialist agent',
        'Integration agent picks up seamlessly with full context, no customer repetition required',
        'If billing question detected: handoff to Finance agent with same rich context',
      ],
      result: 'Customers experience one continuous conversation. Agents experience clean, scoped responsibilities. Zero repeated context.'
    },
    handoffNote: {
      label: 'What a good handoff note looks like',
      fields: [
        'Customer ID and account tier',
        'Summary of conversation so far (3-5 bullets)',
        'What was attempted and why it failed',
        'Specific question or problem to resolve',
        'Urgency and sentiment signal',
      ]
    },
    tradeoffs: {
      pros: ['Natural fit for multi-domain workflows', 'Each agent stays in its lane — specialized and focused', 'Seamless customer/user experience when handoff is rich'],
      cons: ['Handoff context design is critical — easy to get wrong', 'More agents = more failure points', 'Circular handoffs (A → B → A) must be prevented']
    }
  },
  es: {
    title: 'Patrón 05: Handoff',
    subtitle: 'Un agente maneja una tarea hasta que llega al límite de su experiencia, luego transfiere explícitamente el control a un par especializado — junto con todo el contexto.',
    when: 'Usá cuando la misma tarea cruza dominios a mitad de camino. Un agente de triaje comienza, luego hace handoff a un especialista que toma el control completamente. Común en soporte al cliente, onboarding y respuesta a incidentes.',
    flow: [
      { from: 'Agente de Triaje', to: 'Agente Especialista', trigger: 'Cuando la complejidad de la tarea supera la capacidad generalista', carries: 'Historial completo de conversación + nota de handoff estructurada' },
    ],
    keyPrinciple: 'El handoff debe llevar contexto. Un handoff frío (sin historial, sin resumen) es un fallo. El agente receptor debe saber qué pasó, qué se intentó y qué necesita el usuario.',
    visma: {
      label: 'Ejemplo Visma: Pipeline de onboarding de clientes',
      flow: [
        'El agente de bienvenida maneja el onboarding inicial: configuración de cuenta, tour básico del producto, FAQ',
        'Detecta: el cliente pregunta sobre integración API avanzada más allá del alcance de bienvenida',
        'Handoff: pasa conversación completa + perfil del cliente + pregunta técnica específica al agente Especialista en Integración',
        'El agente de integración retoma sin interrupciones con contexto completo, sin que el cliente repita nada',
        'Si se detecta pregunta de facturación: handoff al agente de Finanzas con el mismo contexto enriquecido',
      ],
      result: 'Los clientes experimentan una conversación continua. Los agentes tienen responsabilidades limpias y acotadas. Cero contexto repetido.'
    },
    handoffNote: {
      label: 'Cómo se ve una buena nota de handoff',
      fields: [
        'ID del cliente y tier de cuenta',
        'Resumen de la conversación hasta ahora (3-5 bullets)',
        'Qué se intentó y por qué falló',
        'Pregunta o problema específico a resolver',
        'Señal de urgencia y sentimiento',
      ]
    },
    tradeoffs: {
      pros: ['Ajuste natural para flujos de trabajo multi-dominio', 'Cada agente se mantiene en su carril — especializado y enfocado', 'Experiencia fluida para el cliente/usuario cuando el handoff es rico'],
      cons: ['El diseño del contexto de handoff es crítico — fácil de hacer mal', 'Más agentes = más puntos de fallo', 'Los handoffs circulares (A → B → A) deben prevenirse']
    }
  }
}

export default function S06_Handoff({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-cyan-600/20 text-cyan-400 text-xs font-black px-2 py-1 rounded">05</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-3 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-cyan-400 text-xs italic mb-8">📍 {c.when}</p>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-slate-700 rounded-xl p-3 flex-1 text-center">
            <p className="text-white text-xs font-bold">Triage Agent</p>
            <p className="text-slate-500 text-xs">Generalist</p>
          </div>
          <div className="text-center">
            <span className="text-cyan-400 text-2xl">→</span>
            <p className="text-cyan-400 text-xs font-semibold">Handoff +</p>
            <p className="text-slate-500 text-xs">context</p>
          </div>
          <div className="bg-cyan-600/20 border border-cyan-500/40 rounded-xl p-3 flex-1 text-center">
            <p className="text-cyan-300 text-xs font-bold">Specialist Agent</p>
            <p className="text-slate-500 text-xs">Domain expert</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2 mb-6">
        <p className="text-amber-300 text-xs">💡 {c.keyPrinciple}</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-5 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">{c.visma.label}</p>
        {c.visma.flow.map((f, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-start gap-2">
            <span className="text-cyan-400 shrink-0">{i + 1}.</span>{f}
          </p>
        ))}
        <div className="mt-3 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
          <p className="text-green-300 text-xs">✓ {c.visma.result}</p>
        </div>
      </motion.div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">{c.handoffNote.label}</p>
        {c.handoffNote.fields.map((f, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-center gap-2">
            <span className="text-cyan-400">‣</span>{f}
          </p>
        ))}
      </div>

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
