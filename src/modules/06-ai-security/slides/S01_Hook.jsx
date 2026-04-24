import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 06 · AI Security',
    title: 'Not fear. Awareness.',
    body: 'AI tools are powerful, connected, and increasingly trusted with sensitive information. Most people use them without thinking twice about what happens to their data, what those MCP integrations can actually do, or how an attacker could exploit the AI itself. This module doesn\'t aim to scare you. It aims to make you conscious.',
    incidents: {
      label: 'Real incidents — 2025/2026',
      items: [
        { what: 'GitHub MCP data heist', detail: 'An AI agent with broad GitHub token access was tricked via prompt injection in public issues to exfiltrate private repository contents including API keys and customer data.', source: 'Invariant Labs, May 2025' },
        { what: 'Supabase Cursor agent breach', detail: 'Support tickets with embedded SQL commands caused an agent with service-role access to leak sensitive integration tokens into a public thread.', source: 'Practical DevSecOps, 2025' },
        { what: 'MCP supply chain RCE', detail: 'A systemic vulnerability in Anthropic\'s MCP SDK allowed arbitrary command execution across 7,000+ servers and 150M+ downloads. Cursor, VS Code, Windsurf, Claude Code all affected.', source: 'OX Security, April 2026' },
        { what: 'Rug pull attacks', detail: 'MCP tools that appeared legitimate silently changed behavior after gaining trust — rerouting API keys to attackers.', source: 'OWASP MCP Top 10, 2025' },
      ]
    },
    mindset: 'These aren\'t edge cases. They\'re patterns that will only become more common as AI becomes more integrated. The good news: most of these attacks are preventable with basic awareness and a few simple habits.',
    note: 'This module is for everyone who uses AI tools at Visma — not just developers. Security failures often start with a non-technical user pasting the wrong thing into the wrong place.'
  },
  es: {
    eyebrow: 'Módulo 06 · Seguridad en IA',
    title: 'No miedo. Conciencia.',
    body: 'Las herramientas de IA son poderosas, están conectadas y cada vez más se les confía información sensible. La mayoría de la gente las usa sin pensar dos veces qué pasa con sus datos, qué pueden hacer realmente esas integraciones MCP o cómo un atacante podría explotar la IA misma. Este módulo no busca asustarte. Busca hacerte consciente.',
    incidents: {
      label: 'Incidentes reales — 2025/2026',
      items: [
        { what: 'Robo de datos GitHub via MCP', detail: 'Un agente de IA con acceso amplio a token de GitHub fue engañado vía prompt injection en issues públicos para exfiltrar contenidos de repositorios privados incluyendo API keys y datos de clientes.', source: 'Invariant Labs, mayo 2025' },
        { what: 'Brecha del agente Cursor de Supabase', detail: 'Tickets de soporte con comandos SQL embebidos causaron que un agente con acceso de service-role filtrara tokens de integración sensibles en un hilo público.', source: 'Practical DevSecOps, 2025' },
        { what: 'RCE en supply chain MCP', detail: 'Una vulnerabilidad sistémica en el SDK de MCP de Anthropic permitió ejecución arbitraria de comandos en 7.000+ servidores y 150M+ descargas. Cursor, VS Code, Windsurf, Claude Code todos afectados.', source: 'OX Security, abril 2026' },
        { what: 'Rug pull attacks', detail: 'Herramientas MCP que parecían legítimas cambiaron silenciosamente su comportamiento después de ganar confianza — redirigiendo API keys a atacantes.', source: 'OWASP MCP Top 10, 2025' },
      ]
    },
    mindset: 'Estos no son casos extremos. Son patrones que solo se volveran más comunes a medida que la IA se integre más. La buena noticia: la mayoría de estos ataques son prevenibles con conciencia básica y algunos hábitos simples.',
    note: 'Este módulo es para todos los que usan herramientas de IA en Visma — no solo para desarrolladores. Los fallos de seguridad a menudo comienzan con un usuario no técnico pegando lo incorrecto en el lugar incorrecto.'
  }
}

export default function S01_Hook({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-slate-800 border border-red-500/30 rounded-2xl p-5 mb-6">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-4">{c.incidents.label}</p>
        <div className="flex flex-col gap-3">
          {c.incidents.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
              className="border-l-2 border-red-500/40 pl-3">
              <p className="text-white text-xs font-semibold mb-1">{item.what}</p>
              <p className="text-slate-400 text-xs leading-relaxed mb-1">{item.detail}</p>
              <p className="text-slate-600 text-xs italic">{item.source}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
        className="text-slate-300 text-sm leading-relaxed mb-4">{c.mindset}</motion.p>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        💡 {c.note}
      </div>
    </div>
  )
}
