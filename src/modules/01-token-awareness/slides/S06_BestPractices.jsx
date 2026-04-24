import { motion } from 'framer-motion'

const content = {
  en: {
    title: '8 habits that cut your token bill.',
    practices: [
      { emoji: '🎯', title: 'Be specific in your prompts', body: 'Vague prompts generate verbose answers. A precise prompt gets a precise answer — fewer output tokens.' },
      { emoji: '🧠', title: 'Use Plan Mode before executing', body: 'Copilot CLI and VS Code have plan mode. It lets the model think without acting — much cheaper than a full agentic run.' },
      { emoji: '📂', title: "Don't feed the whole codebase", body: 'Include only files relevant to the task. Every extra file = more input tokens = more cost.' },
      { emoji: '⚙️', title: 'Match the model to the task', body: 'Haiku for simple, Sonnet for daily work, Opus only when you need heavy reasoning.' },
      { emoji: '🔄', title: 'Avoid runaway agent loops', body: 'Set clear stopping conditions. Agents that retry indefinitely burn tokens fast.' },
      { emoji: '📊', title: 'Monitor your usage', body: 'Check the GitHub Copilot dashboard. Know your baseline. Spot outliers early.' },
      { emoji: '🤝', title: 'Pool credits intentionally', body: 'Credits are pooled across Visma. Heavy users in one team affect everyone.' },
      { emoji: '🚀', title: 'Value over volume', body: "Don't use agents for tasks you can do in 10 seconds. Automate the right things." },
    ]
  },
  es: {
    title: '8 hábitos que reducen tu factura de tokens.',
    practices: [
      { emoji: '🎯', title: 'Sé específico en tus prompts', body: 'Los prompts vagos generan respuestas largas. Un prompt preciso obtiene una respuesta precisa — menos tokens.' },
      { emoji: '🧠', title: 'Usá Plan Mode antes de ejecutar', body: 'CLI y VS Code tienen modo plan. Le permite al modelo pensar sin actuar — mucho más barato que una ejecución agéntica completa.' },
      { emoji: '📂', title: 'No alimentes todo el codebase', body: 'Incluí solo los archivos relevantes. Cada archivo extra = más input tokens = más costo.' },
      { emoji: '⚙️', title: 'Elegí el modelo según la tarea', body: 'Haiku para lo simple, Sonnet para el día a día, Opus solo cuando necesitás razonamiento profundo.' },
      { emoji: '🔄', title: 'Evitá loops de agentes descontrolados', body: 'Definí condiciones claras de parada. Los agentes que reintentan indefinidamente queman tokens rápido.' },
      { emoji: '📊', title: 'Monitoreá tu uso', body: 'Revisá el dashboard de Copilot. Conocé tu baseline. Detectá outliers temprano.' },
      { emoji: '🤝', title: 'Usá los créditos pooled con intención', body: 'Los créditos son compartidos en Visma. Los usuarios intensivos en un equipo afectan a todos.' },
      { emoji: '🚀', title: 'Valor sobre volumen', body: 'No uses agentes para tareas que podés hacer en 10 segundos. Automatizá las cosas correctas.' },
    ]
  }
}

export default function S06_BestPractices({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{c.title}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {c.practices.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex gap-3">
            <span className="text-xl mt-0.5">{p.emoji}</span>
            <div>
              <p className="text-white text-sm font-semibold mb-1">{p.title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
