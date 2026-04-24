import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Tools & function calling.',
    subtitle: 'Tools are what turn an LLM into an agent. Without tools, a model can only talk. With tools, it can act.',
    whatIsATool: 'A tool is a function the model can call. The developer defines what tools are available, what parameters they take, and what they return. The model decides when and how to use them.',
    examples: [
      { icon: '📅', name: 'get_calendar_events', desc: 'Retrieves events from Google Calendar between two dates', use: 'Agent checks your schedule before booking a meeting' },
      { icon: '💻', name: 'run_bash_command', desc: 'Executes a shell command and returns stdout/stderr', use: 'Claude Code runs your test suite and reads the results' },
      { icon: '🔍', name: 'search_vector_db', desc: 'Queries a vector database with a semantic search', use: 'RAG pipeline retrieves relevant documents' },
      { icon: '📧', name: 'send_slack_message', desc: 'Posts a message to a Slack channel', use: 'Agent notifies the team when a build fails' },
      { icon: '🐛', name: 'create_github_issue', desc: 'Creates an issue in a GitHub repository', use: 'Agent files a bug report from an error log' },
    ],
    howItWorks: [
      'Developer defines tool schemas (name, description, parameters)',
      'Model reads the tool descriptions and decides if/when to use one',
      'Model generates a tool call with the right parameters',
      'The host application executes the real function',
      'Result is returned to the model as context',
      'Model continues reasoning with the new information',
    ],
    tip: 'The model never directly executes code. It asks for a tool call, and your application runs the actual function. You control what the agent can and cannot do.'
  },
  es: {
    title: 'Tools y function calling.',
    subtitle: 'Las tools son lo que convierte a un LLM en un agente. Sin tools, un modelo solo puede hablar. Con tools, puede actuar.',
    whatIsATool: 'Una tool es una función que el modelo puede llamar. El desarrollador define qué tools están disponibles, qué parámetros reciben y qué devuelven. El modelo decide cuándo y cómo usarlas.',
    examples: [
      { icon: '📅', name: 'get_calendar_events', desc: 'Recupera eventos de Google Calendar entre dos fechas', use: 'El agente revisa tu agenda antes de reservar una reunión' },
      { icon: '💻', name: 'run_bash_command', desc: 'Ejecuta un comando shell y devuelve stdout/stderr', use: 'Claude Code corre tu suite de tests y lee los resultados' },
      { icon: '🔍', name: 'search_vector_db', desc: 'Consulta una base de datos vectorial con búsqueda semántica', use: 'El pipeline RAG recupera documentos relevantes' },
      { icon: '📧', name: 'send_slack_message', desc: 'Publica un mensaje en un canal de Slack', use: 'El agente notifica al equipo cuando un build falla' },
      { icon: '🐛', name: 'create_github_issue', desc: 'Crea un issue en un repositorio de GitHub', use: 'El agente reporta un bug desde un log de error' },
    ],
    howItWorks: [
      'El desarrollador define los schemas de tools (nombre, descripción, parámetros)',
      'El modelo lee las descripciones y decide si/cuándo usar una',
      'El modelo genera una llamada a la tool con los parámetros correctos',
      'La aplicación host ejecuta la función real',
      'El resultado se devuelve al modelo como contexto',
      'El modelo continúa razonando con la nueva información',
    ],
    tip: 'El modelo nunca ejecuta código directamente. Solicita una llamada a una tool, y tu aplicación corre la función real. Vos controlás lo que el agente puede y no puede hacer.'
  }
}

export default function S09_Tools({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-6 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-slate-400 text-sm mb-8 leading-relaxed">{c.whatIsATool}</p>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">Tool examples</p>
      <div className="flex flex-col gap-3 mb-8">
        {c.examples.map((ex, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex gap-3">
            <span className="text-xl shrink-0">{ex.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-green-400 text-xs font-mono font-bold mb-1">{ex.name}</p>
              <p className="text-slate-300 text-xs mb-1">{ex.desc}</p>
              <p className="text-slate-500 text-xs italic">{ex.use}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
        className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">How function calling works</p>
        <div className="flex flex-col gap-2">
          {c.howItWorks.map((step, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-purple-400 font-bold text-xs w-4 shrink-0">{i + 1}.</span>{step}
            </div>
          ))}
        </div>
      </motion.div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        💡 {c.tip}
      </div>
    </div>
  )
}
