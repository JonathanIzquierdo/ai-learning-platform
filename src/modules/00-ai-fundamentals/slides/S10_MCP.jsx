import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'MCP — Model Context Protocol.',
    subtitle: 'MCP is the standard that lets AI models connect to external tools and services in a consistent, secure, and reusable way.',
    problem: {
      label: 'The problem before MCP',
      text: 'Every team built their own integration: Claude + Slack was custom code, Claude + GitHub was different custom code, Claude + Calendar was yet another integration. No standards, no reusability, no security guarantees.'
    },
    solution: {
      label: 'What MCP solves',
      text: 'MCP is a protocol (like HTTP for the web) that standardizes how AI models discover and use tools. A server exposes tools following the MCP spec. Any MCP-compatible model can use them — no custom code per integration.'
    },
    vismaExample: {
      label: 'MCP at Visma — this is real',
      text: 'Right now, Claude at Visma is connected to Google Calendar, Slack, GitHub, Google Drive, Notion, Jira, and more — all via MCP. When you ask Claude to "schedule a meeting" or "create a GitHub issue", it\'s using MCP server tools behind the scenes.',
      items: [
        'Google Calendar MCP → create, read, update events',
        'Slack MCP → read channels, send messages, search messages',
        'GitHub MCP → create issues, PRs, read code',
        'Google Drive MCP → read and search documents',
        'Notion MCP → read and update pages',
      ]
    },
    howItWorks: [
      { step: 'MCP Server', desc: 'A service that exposes tools following the MCP spec (e.g., Google Calendar MCP)' },
      { step: 'MCP Client', desc: 'The AI model or agent that connects to MCP servers and can call their tools' },
      { step: 'Tool discovery', desc: 'The model reads the server\'s tool list and descriptions at connection time' },
      { step: 'Secure execution', desc: 'The server handles authentication and authorization — the model never sees raw credentials' },
    ],
    tip: 'Think of MCP as the USB standard for AI tools. Before USB, every device needed its own proprietary port. MCP does the same for AI integrations.'
  },
  es: {
    title: 'MCP — Model Context Protocol.',
    subtitle: 'MCP es el estándar que permite a los modelos de IA conectarse a herramientas y servicios externos de forma consistente, segura y reutilizable.',
    problem: {
      label: 'El problema antes de MCP',
      text: 'Cada equipo construyó su propia integración: Claude + Slack era código personalizado, Claude + GitHub era código personalizado diferente, Claude + Calendar era otra integración más. Sin estándares, sin reutilización, sin garantías de seguridad.'
    },
    solution: {
      label: 'Qué resuelve MCP',
      text: 'MCP es un protocolo (como HTTP para la web) que estandariza cómo los modelos de IA descubren y usan herramientas. Un servidor expone tools siguiendo la especificación MCP. Cualquier modelo compatible con MCP puede usarlas — sin código personalizado por integración.'
    },
    vismaExample: {
      label: 'MCP en Visma — esto es real',
      text: 'Ahora mismo, Claude en Visma está conectado a Google Calendar, Slack, GitHub, Google Drive, Notion, Jira y más — todo vía MCP. Cuando le pedís a Claude "agendar una reunión" o "crear un GitHub issue", está usando tools de servidores MCP detrás de escena.',
      items: [
        'Google Calendar MCP → crear, leer, actualizar eventos',
        'Slack MCP → leer canales, enviar mensajes, buscar mensajes',
        'GitHub MCP → crear issues, PRs, leer código',
        'Google Drive MCP → leer y buscar documentos',
        'Notion MCP → leer y actualizar páginas',
      ]
    },
    howItWorks: [
      { step: 'Servidor MCP', desc: 'Un servicio que expone tools siguiendo la especificación MCP (ej. Google Calendar MCP)' },
      { step: 'Cliente MCP', desc: 'El modelo o agente de IA que se conecta a servidores MCP y puede llamar sus tools' },
      { step: 'Descubrimiento de tools', desc: 'El modelo lee la lista y descripciones de tools del servidor al conectarse' },
      { step: 'Ejecución segura', desc: 'El servidor maneja autenticación y autorización — el modelo nunca ve las credenciales reales' },
    ],
    tip: 'Pensá en MCP como el estándar USB para tools de IA. Antes del USB, cada dispositivo necesitaba su propio puerto propietario. MCP hace lo mismo para las integraciones de IA.'
  }
}

export default function S10_MCP({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">
          <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.problem.label}</p>
          <p className="text-slate-300 text-sm leading-relaxed">{c.problem.text}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-green-500/10 border border-green-500/30 rounded-2xl p-5">
          <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.solution.label}</p>
          <p className="text-slate-300 text-sm leading-relaxed">{c.solution.text}</p>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-5 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">{c.vismaExample.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">{c.vismaExample.text}</p>
        <div className="flex flex-col gap-1">
          {c.vismaExample.items.map((item, i) => (
            <p key={i} className="text-slate-400 text-xs flex items-center gap-2">
              <span className="text-cyan-400">‣</span>{item}
            </p>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">How it works</p>
        <div className="grid md:grid-cols-2 gap-3">
          {c.howItWorks.map((h, i) => (
            <div key={i} className="bg-slate-700/50 rounded-xl p-3">
              <p className="text-white text-xs font-semibold mb-1">{h.step}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{h.desc}</p>
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
