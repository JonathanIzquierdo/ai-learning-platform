import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const content = {
  en: {
    badge: '🛡️ Module complete!',
    title: 'Security is everyone\'s job.',
    subtitle: 'Not just the security team\'s. Every person who uses AI is a potential entry point. And every conscious user is a layer of defense.',
    keyTakeaways: [
      'AI tools can see everything you type. Treat every prompt like an email you could forward.',
      'Unofficial MCP servers are a real attack vector. Only use verified, official integrations.',
      'Credentials in prompts = credentials at risk. Always use placeholders.',
      'Prompt injection can turn helpful AI agents into attackers\' tools. Be skeptical of unexpected AI behavior.',
      'GDPR applies to AI. Anonymize before you analyze any personal data.',
      'If something feels wrong, stop and report. Don\'t investigate alone.',
    ],
    owasp: {
      label: 'The OWASP MCP Top 10 — know these exist',
      items: [
        'MCP01: Token mismanagement & secret exposure',
        'MCP02: Excessive permissions & privilege abuse',
        'MCP03: Tool poisoning & rug pull attacks',
        'MCP04: Supply chain compromise',
        'MCP05: Command & code injection',
        'MCP06: Prompt injection & context manipulation',
        'MCP07: Insecure direct object reference',
        'MCP08: Covert channel abuse',
        'MCP09: Uncontrolled resource consumption',
        'MCP10: Insufficient logging & auditability',
      ]
    },
    closing: 'AI security isn\'t about being afraid of AI. It\'s about using it with the same judgment you apply to every other tool in your work. The goal is confident, conscious use — not paralysis.',
    cta: 'Share this module with your team 🔗'
  },
  es: {
    badge: '🛡️ ¡Módulo completado!',
    title: 'La seguridad es responsabilidad de todos.',
    subtitle: 'No solo del equipo de seguridad. Cada persona que usa IA es un punto de entrada potencial. Y cada usuario consciente es una capa de defensa.',
    keyTakeaways: [
      'Las herramientas de IA pueden ver todo lo que escribís. Tratá cada prompt como un email que podrías reenviar.',
      'Los servidores MCP no oficiales son un vector de ataque real. Usá solo integraciones oficiales y verificadas.',
      'Credenciales en prompts = credenciales en riesgo. Siempre usá placeholders.',
      'El prompt injection puede convertir agentes de IA útiles en herramientas de atacantes. Sé escéptico ante comportamientos inesperados de la IA.',
      'El GDPR aplica a la IA. Anonimizá antes de analizar cualquier dato personal.',
      'Si algo parece mal, detenéte y reportá. No investigues solo.',
    ],
    owasp: {
      label: 'El OWASP MCP Top 10 — sabé que existen',
      items: [
        'MCP01: Mala gestión de tokens y exposición de secretos',
        'MCP02: Permisos excesivos y abuso de privilegios',
        'MCP03: Tool poisoning y rug pull attacks',
        'MCP04: Compromiso de la cadena de suministro',
        'MCP05: Inyección de comandos y código',
        'MCP06: Prompt injection y manipulación del contexto',
        'MCP07: Referencia directa insegura a objetos',
        'MCP08: Abuso de canales encubiertos',
        'MCP09: Consumo descontrolado de recursos',
        'MCP10: Registro e auditabilidad insuficiente',
      ]
    },
    closing: 'La seguridad en IA no se trata de tener miedo de la IA. Se trata de usarla con el mismo juicio que aplicás a cada otra herramienta en tu trabajo. El objetivo es el uso confiado y consciente — no la parálisis.',
    cta: 'Compartí este módulo con tu equipo 🔗'
  }
}

export default function S11_Closing({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="text-4xl mb-4">{c.badge}</motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{c.title}</h2>
      <p className="text-slate-400 text-base mb-10">{c.subtitle}</p>
      <div className="flex flex-col gap-3 mb-8">
        {c.keyTakeaways.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3">
            <CheckCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
            <p className="text-slate-200 text-sm leading-relaxed">{t}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3">{c.owasp.label}</p>
        <div className="grid md:grid-cols-2 gap-1">
          {c.owasp.items.map((item, i) => (
            <p key={i} className="text-slate-400 text-xs flex items-center gap-2">
              <span className="text-red-400/60">‣</span>{item}
            </p>
          ))}
        </div>
      </motion.div>
      <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-4 text-sm text-slate-200 leading-relaxed mb-4">
        {c.closing}
      </div>
      <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-4 text-center text-sm text-red-400 font-semibold">
        {c.cta}
      </div>
    </div>
  )
}
