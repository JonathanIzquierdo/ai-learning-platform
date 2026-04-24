import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'What NOT to put in an AI prompt.',
    subtitle: 'This is the most actionable slide in this module. Print it. Share it. Live by it.',
    never: {
      label: 'Never paste into any AI tool',
      color: '#DE350B',
      items: [
        { category: 'Credentials', examples: 'Passwords, API keys, tokens, OAuth secrets, private keys, connection strings', icon: '🔑' },
        { category: 'PII of employees or customers', examples: 'Full names + IDs, SSNs, passport numbers, bank accounts, health data, salary information', icon: '👤' },
        { category: 'Unreleased financial data', examples: 'Earnings before public announcement, M&A discussions, undisclosed projections', icon: '💰' },
        { category: 'Confidential customer data', examples: 'Customer contracts, pricing agreements, private communications, CRM notes with sensitive info', icon: '🤝' },
        { category: 'Internal security configurations', examples: 'Network diagrams, firewall rules, authentication architecture, vulnerability reports', icon: '🛡️' },
        { category: 'Legal privilege material', examples: 'Drafts under attorney-client privilege, litigation strategy, settlement negotiations', icon: '⚖️' },
      ]
    },
    caution: {
      label: 'Use with caution — anonymize first',
      color: '#FF991F',
      items: [
        'Employee survey responses — remove names, departments, identifying details',
        'Customer feedback — strip personal identifiers before analysis',
        'Financial data — use ranges and labels instead of exact figures',
        'Internal project names — use generic placeholders if the project is confidential',
      ]
    },
    ok: {
      label: 'Generally safe',
      color: '#36B37E',
      items: [
        'Public information already on your website or documentation',
        'Generic tasks with no company-specific context',
        'Anonymized data where all identifiers have been removed',
        'Content you would be comfortable sharing externally',
      ]
    },
    tip: 'A good test: would you be comfortable if this prompt appeared on a public screen during an all-hands? If not, don\'t send it.'
  },
  es: {
    title: 'Lo que NO poner en un prompt de IA.',
    subtitle: 'Esta es la slide más accionable de este módulo. Imprímela. Compartíla. Vivila.',
    never: {
      label: 'Nunca pegues en ninguna herramienta de IA',
      color: '#DE350B',
      items: [
        { category: 'Credenciales', examples: 'Contraseñas, API keys, tokens, secretos OAuth, claves privadas, strings de conexión', icon: '🔑' },
        { category: 'PII de empleados o clientes', examples: 'Nombres completos + IDs, DNIs, números de pasaporte, cuentas bancarias, datos de salud, información salarial', icon: '👤' },
        { category: 'Datos financieros no publicados', examples: 'Resultados antes del anuncio público, discusiones de M&A, proyecciones no divulgadas', icon: '💰' },
        { category: 'Datos confidenciales de clientes', examples: 'Contratos de clientes, acuerdos de precios, comunicaciones privadas, notas de CRM con info sensible', icon: '🤝' },
        { category: 'Configuraciones de seguridad interna', examples: 'Diagramas de red, reglas de firewall, arquitectura de autenticación, reportes de vulnerabilidades', icon: '🛡️' },
        { category: 'Material con privilegio legal', examples: 'Borradores bajo privilegio abogado-cliente, estrategia de litigio, negociaciones de acuerdos', icon: '⚖️' },
      ]
    },
    caution: {
      label: 'Usar con precaución — anonimizar primero',
      color: '#FF991F',
      items: [
        'Respuestas de encuestas de empleados — eliminá nombres, departamentos, detalles identificadores',
        'Feedback de clientes — eliminá identificadores personales antes del análisis',
        'Datos financieros — usá rangos y etiquetas en lugar de cifras exactas',
        'Nombres de proyectos internos — usá placeholders genéricos si el proyecto es confidencial',
      ]
    },
    ok: {
      label: 'Generalmente seguro',
      color: '#36B37E',
      items: [
        'Información pública ya en tu sitio web o documentación',
        'Tareas genéricas sin contexto específico de la empresa',
        'Datos anonimizados donde se eliminaron todos los identificadores',
        'Contenido con el que te sentirías cómodo compartiendo externamente',
      ]
    },
    tip: 'Una buena prueba: ¿te sentirías cómodo si este prompt apareciera en una pantalla pública durante un all-hands? Si no, no lo envíes.'
  }
}

export default function S03_WhatNot({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 mb-5">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3">{c.never.label}</p>
        <div className="grid md:grid-cols-2 gap-2">
          {c.never.items.map((item, i) => (
            <div key={i} className="bg-slate-800/60 rounded-xl p-3 flex gap-2">
              <span className="text-lg shrink-0">{item.icon}</span>
              <div>
                <p className="text-white text-xs font-semibold mb-0.5">{item.category}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{item.examples}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="rounded-xl border p-4" style={{ borderColor: '#FF991F40', background: '#FF991F0D' }}>
          <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.caution.label}</p>
          {c.caution.items.map((item, i) => (
            <p key={i} className="text-slate-300 text-xs mb-1 flex items-start gap-1.5">
              <span className="text-amber-400">⚠️</span>{item}
            </p>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="rounded-xl border p-4" style={{ borderColor: '#36B37E40', background: '#36B37E0D' }}>
          <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.ok.label}</p>
          {c.ok.items.map((item, i) => (
            <p key={i} className="text-slate-300 text-xs mb-1 flex items-start gap-1.5">
              <span className="text-green-400">✓</span>{item}
            </p>
          ))}
        </motion.div>
      </div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        💡 {c.tip}
      </div>
    </div>
  )
}
