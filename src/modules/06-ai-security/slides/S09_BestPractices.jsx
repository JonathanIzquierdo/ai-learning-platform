import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'AI security best practices: the complete picture.',
    subtitle: 'Everything covered in this module, distilled into concrete actions for every role.',
    byRole: [
      {
        role: 'Everyone at Visma', icon: '👥', color: '#00B8D9',
        practices: [
          'Use only company-provisioned AI tools on work tasks',
          'Never paste passwords, API keys, tokens, or PII into any AI tool',
          'Treat every AI conversation as potentially visible — write accordingly',
          'If an AI output seems to do something unexpected, stop and investigate',
          'When in doubt about data sharing, ask your manager or DPO',
        ]
      },
      {
        role: 'Developers & Engineers', icon: '💻', color: '#6554C0',
        practices: [
          'Only install MCP servers from official, verified sources',
          'Never give AI agents broader access than needed (least privilege)',
          'Use short-lived, scoped tokens for all AI integrations',
          'Enable secret scanning on all repositories',
          'Always use placeholders instead of real credentials when sharing code with AI',
          'Monitor what actions agents are actually taking, not just outputs',
          'Run MCP servers in sandboxed environments where possible',
        ]
      },
      {
        role: 'Team Leads & Managers', icon: '🏆', color: '#36B37E',
        practices: [
          'Establish clear guidelines on what data can/cannot be shared with AI tools',
          'Ensure your team uses company accounts, not personal accounts, for work AI tasks',
          'Review AI tool access and permissions periodically',
          'Escalate to security team if you suspect a data exposure incident',
          'Make AI security awareness part of team onboarding',
        ]
      },
    ],
    incident: {
      label: 'If you suspect a security incident',
      steps: [
        'Stop using the affected tool immediately',
        'Rotate any credentials you may have shared',
        'Report to Visma\'s security team (don\'t wait to confirm — report the suspicion)',
        'Document what you shared, when, and with which tool',
        'Do not try to investigate or remediate alone',
      ]
    }
  },
  es: {
    title: 'Mejores prácticas de seguridad en IA: el panorama completo.',
    subtitle: 'Todo lo cubierto en este módulo, destilado en acciones concretas para cada rol.',
    byRole: [
      {
        role: 'Todos en Visma', icon: '👥', color: '#00B8D9',
        practices: [
          'Usá solo herramientas de IA provistas por la empresa para tareas de trabajo',
          'Nunca pegues contraseñas, API keys, tokens o PII en ninguna herramienta de IA',
          'Tratá cada conversación de IA como potencialmente visible — escribí en consecuencia',
          'Si un output de IA parece hacer algo inesperado, detené e investigá',
          'Ante la duda sobre el intercambio de datos, preguntá a tu gerente o al DPO',
        ]
      },
      {
        role: 'Desarrolladores e Ingenieros', icon: '💻', color: '#6554C0',
        practices: [
          'Solo instalá servidores MCP de fuentes oficiales y verificadas',
          'Nunca des a los agentes de IA más acceso del necesario (mínimo privilegio)',
          'Usá tokens de corta duración y con alcance limitado para todas las integraciones de IA',
          'Activá secret scanning en todos los repositorios',
          'Siempre usá placeholders en lugar de credenciales reales al compartir código con IA',
          'Monitoreá qué acciones están tomando realmente los agentes, no solo los outputs',
          'Corré servidores MCP en entornos sandboxed donde sea posible',
        ]
      },
      {
        role: 'Team Leads y Gerentes', icon: '🏆', color: '#36B37E',
        practices: [
          'Establecé pautas claras sobre qué datos pueden/no pueden compartirse con herramientas de IA',
          'Asegurá que tu equipo use cuentas de empresa, no personales, para tareas de IA en el trabajo',
          'Revisá periódicamente el acceso y los permisos de herramientas de IA',
          'Escalá al equipo de seguridad si sospechás un incidente de exposición de datos',
          'Hacé de la conciencia de seguridad en IA parte del onboarding del equipo',
        ]
      },
    ],
    incident: {
      label: 'Si sospechás un incidente de seguridad',
      steps: [
        'Dejá de usar la herramienta afectada inmediatamente',
        'Rotá cualquier credencial que hayas podido compartir',
        'Reportá al equipo de seguridad de Visma (no esperes confirmar — reportá la sospecha)',
        'Documentá qué compartiste, cuándo y con qué herramienta',
        'No intentes investigar o remediar solo',
      ]
    }
  }
}

export default function S09_BestPractices({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-5 mb-8">
        {c.byRole.map((section, si) => (
          <motion.div key={si} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: si * 0.15 }}
            className="rounded-2xl border p-5" style={{ borderColor: section.color + '40', background: section.color + '0D' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{section.icon}</span>
              <p className="font-bold text-sm" style={{ color: section.color }}>{section.role}</p>
            </div>
            {section.practices.map((p, i) => (
              <p key={i} className="text-slate-300 text-xs mb-1.5 flex items-start gap-2">
                <span style={{ color: section.color }}>✓</span>{p}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3">{c.incident.label}</p>
        {c.incident.steps.map((s, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <span className="text-red-400 font-bold text-xs w-4 shrink-0">{i + 1}.</span>
            <p className="text-slate-300 text-xs leading-relaxed">{s}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
