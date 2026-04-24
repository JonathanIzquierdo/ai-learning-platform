import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Agentic workflows are the cost multiplier.',
    body: 'Single interactions are cheap. The problem is when agents run long, parallel, or recursive sessions.',
    items: [
      { icon: '💬', label: 'One chat message', tokens: '~500 tokens', cost: '$0.001', safe: true },
      { icon: '🔁', label: 'Agent loop (10 steps)', tokens: '~50,000 tokens', cost: '$0.15', safe: true },
      { icon: '⚡', label: 'Parallel agents (5x)', tokens: '~250,000 tokens', cost: '$0.75', safe: true },
      { icon: '🔥', label: 'Long CLI session + full codebase context', tokens: '100M+ tokens', cost: '$300+', safe: false },
    ],
    note: 'That last scenario? Under the current Copilot pricing it costs $0.04 — one request. Under token billing, it costs $300. Same work, 7,500× the price.',
  },
  es: {
    title: 'Los flujos agénticos son el multiplicador de costos.',
    body: 'Las interacciones simples son baratas. El problema es cuando los agentes corren sesiones largas, paralelas o recursivas.',
    items: [
      { icon: '💬', label: 'Un mensaje de chat', tokens: '~500 tokens', cost: '$0.001', safe: true },
      { icon: '🔁', label: 'Loop de agente (10 pasos)', tokens: '~50.000 tokens', cost: '$0.15', safe: true },
      { icon: '⚡', label: 'Agentes en paralelo (5×)', tokens: '~250.000 tokens', cost: '$0.75', safe: true },
      { icon: '🔥', label: 'Sesión CLI larga + contexto completo del codebase', tokens: '100M+ tokens', cost: '$300+', safe: false },
    ],
    note: '¿Ese último escenario? Con el pricing actual de Copilot cuesta $0.04 — una request. Con token billing, cuesta $300. El mismo trabajo, 7.500× el precio.',
  }
}

export default function S05_AgentCostExplode({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.body}</p>
      <div className="flex flex-col gap-3 mb-8">
        {c.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 }}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl border ${
              !item.safe ? 'border-red-500/50 bg-red-500/8' : 'border-slate-700 bg-slate-800'
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">{item.label}</p>
              <p className="text-slate-500 text-xs">{item.tokens}</p>
            </div>
            <span className={`font-bold text-sm ${ !item.safe ? 'text-red-400' : 'text-visma-green' }`}>{item.cost}</span>
          </motion.div>
        ))}
      </div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200 leading-relaxed">
        ⚠️ {c.note}
      </div>
    </div>
  )
}
