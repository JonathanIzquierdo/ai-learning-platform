import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'MCP security: the risks of unofficial integrations.',
    subtitle: 'MCP makes AI incredibly powerful. But not all MCP servers are trustworthy — and the risks of unofficial ones are real, documented, and growing.',
    whatMCPDoes: 'When you connect an MCP server to Claude or another AI agent, you are giving that server the ability to: see everything in your conversation, request the AI to take actions on your behalf, and potentially access any tools or data the AI can reach. An official MCP server from Google, Slack, or GitHub follows security standards. An unofficial one from a random GitHub repo might not.',
    risks: [
      {
        risk: 'Credential harvesting', icon: '🔑', severity: 'Critical',
        desc: 'A malicious MCP server can request your AI to reveal tokens, API keys, or session credentials that are in the conversation context or environment.',
        real: 'OWASP MCP Top 10 #1: Token Mismanagement & Secret Exposure. Hard-coded credentials and long-lived tokens in model memory can be retrieved via prompt injection.'
      },
      {
        risk: 'Rug pull attacks', icon: '🎭', severity: 'High',
        desc: 'An MCP tool looks legitimate on day 1. By day 7, it silently updates its behavior to reroute your API keys or exfiltrate data — without any visible change to you.',
        real: 'Simon Willison documented this in April 2025: MCP tools can mutate their own definitions after installation without user notification.'
      },
      {
        risk: 'Tool poisoning', icon: '☠️', severity: 'High',
        desc: 'Attackers embed harmful commands in MCP tool metadata. The AI reads the metadata as trusted instructions and executes them unknowingly.',
        real: 'The MCPTox benchmark shows tool poisoning attacks are alarmingly common in MCP ecosystems.'
      },
      {
        risk: 'Remote code execution', icon: '💻', severity: 'Critical',
        desc: 'A systemic vulnerability in Anthropic\'s MCP SDK allows arbitrary command execution on any system running a vulnerable implementation.',
        real: 'OX Security (April 2026): Affects 7,000+ servers, 150M+ downloads. Cursor, VS Code, Windsurf, Claude Code all vulnerable.'
      },
      {
        risk: 'Covert tool invocation', icon: '👻', severity: 'Medium',
        desc: 'Malicious MCP servers can invoke tools and perform file system operations without your knowledge or visible consent.',
        real: 'Palo Alto Unit42 research (Dec 2025): Hidden tool invocations that are invisible in the chat interface.'
      },
    ],
    rules: [
      'Only install MCP servers from verified, official sources (official GitHub registry, vendor documentation)',
      'Review what permissions an MCP server requests before connecting it',
      'Never use MCP servers that request broad filesystem or shell access unless you understand exactly why',
      'Monitor what tools your agent is actually calling — not just the final output',
      'Use short-lived, scoped tokens for any MCP integration',
      'If an MCP server is from an unknown developer, treat it like you would an unvetted browser extension',
    ]
  },
  es: {
    title: 'Seguridad MCP: los riesgos de las integraciones no oficiales.',
    subtitle: 'MCP hace que la IA sea increíblemente poderosa. Pero no todos los servidores MCP son confiables — y los riesgos de los no oficiales son reales, documentados y crecientes.',
    whatMCPDoes: 'Cuando conectas un servidor MCP a Claude u otro agente de IA, le estás dando a ese servidor la capacidad de: ver todo en tu conversación, pedirle a la IA que tome acciones en tu nombre, y potencialmente acceder a cualquier herramienta o dato al que la IA pueda llegar. Un servidor MCP oficial de Google, Slack o GitHub sigue estándares de seguridad. Uno no oficial de un repo aleatorio de GitHub puede no hacerlo.',
    risks: [
      {
        risk: 'Cosecha de credenciales', icon: '🔑', severity: 'Crítico',
        desc: 'Un servidor MCP malicioso puede pedirle a tu IA que revele tokens, API keys o credenciales de sesión que estén en el contexto de la conversación o el entorno.',
        real: 'OWASP MCP Top 10 #1: Mala gestión de tokens y exposición de secretos. Las credenciales hard-codeadas y los tokens de larga duración en la memoria del modelo pueden recuperarse vía prompt injection.'
      },
      {
        risk: 'Rug pull attacks', icon: '🎭', severity: 'Alto',
        desc: 'Una herramienta MCP parece legítima el día 1. Para el día 7, actualiza silenciosamente su comportamiento para redirigir tus API keys o exfiltrar datos — sin ningún cambio visible para vos.',
        real: 'Simon Willison documentó esto en abril de 2025: las herramientas MCP pueden mutar sus propias definiciones después de la instalación sin notificación al usuario.'
      },
      {
        risk: 'Tool poisoning', icon: '☠️', severity: 'Alto',
        desc: 'Los atacantes incrustan comandos dañinos en los metadatos de herramientas MCP. La IA lee los metadatos como instrucciones confiables y los ejecuta sin saberlo.',
        real: 'El benchmark MCPTox muestra que los ataques de tool poisoning son alarmantemente comunes en los ecosistemas MCP.'
      },
      {
        risk: 'Ejecución remota de código', icon: '💻', severity: 'Crítico',
        desc: 'Una vulnerabilidad sistémica en el SDK de MCP de Anthropic permite la ejecución arbitraria de comandos en cualquier sistema que ejecute una implementación vulnerable.',
        real: 'OX Security (abril 2026): Afecta a 7.000+ servidores, 150M+ descargas. Cursor, VS Code, Windsurf, Claude Code todos vulnerables.'
      },
      {
        risk: 'Invocación encubierta de herramientas', icon: '👻', severity: 'Medio',
        desc: 'Los servidores MCP maliciosos pueden invocar herramientas y realizar operaciones en el sistema de archivos sin tu conocimiento o consentimiento visible.',
        real: 'Investigación de Palo Alto Unit42 (dic 2025): Invocaciones de herramientas ocultas que son invisibles en la interfaz de chat.'
      },
    ],
    rules: [
      'Solo instalá servidores MCP de fuentes oficiales y verificadas (registro oficial de GitHub, documentación del proveedor)',
      'Revisá qué permisos solicita un servidor MCP antes de conectarlo',
      'Nunca uses servidores MCP que soliciten acceso amplio al sistema de archivos o shell a menos que entiendas exactamente por qué',
      'Monitoreá qué herramientas está llamando realmente tu agente — no solo el output final',
      'Usá tokens de corta duración y con alcance limitado para cualquier integración MCP',
      'Si un servidor MCP es de un desarrollador desconocido, tratálo como tratarías una extensión de navegador no verificada',
    ]
  }
}

export default function S05_MCPRisks({ lang }) {
  const c = content[lang]
  const severityColor = (s) => s === 'Critical' || s === 'Crítico' ? '#DE350B' : s === 'High' || s === 'Alto' ? '#FF991F' : '#FF991F80'
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-6 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-slate-400 text-sm mb-8 leading-relaxed">{c.whatMCPDoes}</p>
      <div className="flex flex-col gap-3 mb-8">
        {c.risks.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{r.icon}</span>
                <p className="text-white text-sm font-semibold">{r.risk}</p>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: severityColor(r.severity) + '25', color: severityColor(r.severity) }}>{r.severity}</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed mb-2">{r.desc}</p>
            <p className="text-slate-500 text-xs italic">{r.real}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">MCP safety rules</p>
        {c.rules.map((r, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1.5 flex items-start gap-2">
            <span className="text-green-400 shrink-0">✓</span>{r}
          </p>
        ))}
      </motion.div>
    </div>
  )
}
