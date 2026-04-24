import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'From chat to agents.',
    subtitle: 'A chat model responds. An agent acts. This is the most important distinction in modern AI.',
    chatVsAgent: [
      {
        type: 'Chat model', icon: '💬', color: '#378ADD',
        desc: 'You ask a question, it gives an answer. One turn, no external actions. It can\'t check your calendar, run your tests, or push code.',
        example: '"Summarize this document" → returns a summary. Done.'
      },
      {
        type: 'Agent', icon: '🤖', color: '#6554C0',
        desc: 'An LLM that can use tools, take actions, make decisions, and run multi-step workflows. It can read files, call APIs, write code, and even spawn sub-agents.',
        example: '"Summarize all support tickets from last week and create a Jira issue for the top 3 problems" → reads Slack, analyzes patterns, creates tickets. All automatically.'
      },
    ],
    loop: {
      label: 'The agent loop',
      steps: [
        { n: '1', label: 'Receive task', desc: 'User or system gives the agent a goal' },
        { n: '2', label: 'Plan', desc: 'Agent breaks the goal into steps' },
        { n: '3', label: 'Act', desc: 'Agent calls a tool or takes an action' },
        { n: '4', label: 'Observe', desc: 'Agent sees the result of the action' },
        { n: '5', label: 'Decide', desc: 'Continue, adjust, or finish based on the result' },
      ]
    },
    vismaExample: {
      label: 'Visma example: Claude Code',
      text: 'Claude Code is an agentic coding assistant. When you ask it to "add pagination to the user list", it reads your codebase, writes the code, runs the tests, fixes failures, and opens a PR — all without you doing anything step by step. That\'s an agent loop.'
    },
    warning: 'Because agents take real actions in the world, a runaway agent can cause real damage: deleting files, spamming APIs, or running up enormous token bills. Always define clear stopping conditions.'
  },
  es: {
    title: 'Del chat a los agentes.',
    subtitle: 'Un modelo de chat responde. Un agente actúa. Esta es la distinción más importante en la IA moderna.',
    chatVsAgent: [
      {
        type: 'Modelo de chat', icon: '💬', color: '#378ADD',
        desc: 'Hacés una pregunta, da una respuesta. Un turno, sin acciones externas. No puede revisar tu calendario, correr tus tests ni hacer push de código.',
        example: '"Resumí este documento" → devuelve un resumen. Listo.'
      },
      {
        type: 'Agente', icon: '🤖', color: '#6554C0',
        desc: 'Un LLM que puede usar herramientas, tomar acciones, tomar decisiones y correr flujos de trabajo multi-paso. Puede leer archivos, llamar APIs, escribir código e incluso crear sub-agentes.',
        example: '"Resumí todos los tickets de soporte de la semana pasada y creá un issue en Jira para los 3 principales problemas" → lee Slack, analiza patrones, crea tickets. Todo automáticamente.'
      },
    ],
    loop: {
      label: 'El loop del agente',
      steps: [
        { n: '1', label: 'Recibir tarea', desc: 'El usuario o sistema le da un objetivo al agente' },
        { n: '2', label: 'Planificar', desc: 'El agente divide el objetivo en pasos' },
        { n: '3', label: 'Actuar', desc: 'El agente llama una herramienta o toma una acción' },
        { n: '4', label: 'Observar', desc: 'El agente ve el resultado de la acción' },
        { n: '5', label: 'Decidir', desc: 'Continuar, ajustar o terminar basándose en el resultado' },
      ]
    },
    vismaExample: {
      label: 'Ejemplo Visma: Claude Code',
      text: 'Claude Code es un asistente de código agéntico. Cuando le pedís "agregá paginación a la lista de usuarios", lee tu codebase, escribe el código, corre los tests, arregla los fallos y abre un PR — todo sin que vos hagas nada paso a paso. Eso es un loop de agente.'
    },
    warning: 'Como los agentes toman acciones reales en el mundo, un agente descontrolado puede causar daño real: eliminar archivos, spamear APIs o generar facturas enormes de tokens. Siempre definí condiciones claras de parada.'
  }
}

export default function S08_Agents({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {c.chatVsAgent.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className="rounded-2xl border p-5" style={{ borderColor: item.color + '40', background: item.color + '0D' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-bold text-sm" style={{ color: item.color }}>{item.type}</p>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">{item.desc}</p>
            <div className="bg-slate-900/50 rounded-lg px-3 py-2 text-xs text-slate-400 italic">{item.example}</div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">{c.loop.label}</p>
        <div className="flex flex-col gap-2">
          {c.loop.steps.map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 text-xs font-bold shrink-0">{s.n}</div>
              <div>
                <p className="text-white text-sm font-medium">{s.label}</p>
                <p className="text-slate-500 text-xs">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-sm text-cyan-200 mb-4">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">{c.vismaExample.label}</p>
        {c.vismaExample.text}
      </motion.div>
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-sm text-red-200">
        ⚠️ {c.warning}
      </div>
    </div>
  )
}
