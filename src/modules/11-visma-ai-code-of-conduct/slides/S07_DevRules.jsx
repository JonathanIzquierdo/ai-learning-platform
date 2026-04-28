import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Principle 6',
    title: 'For Developers: AI in Your Workflow',
    body: 'AI coding assistants (Copilot, Claude Code, Cursor) are powerful but they see your entire project context. Here\u2019s what you must do.',
    rules: [
      { icon: String.fromCodePoint(0x1F50D), title: 'Review all generated code', detail: 'AI output often looks correct while containing subtle security vulnerabilities, logic errors, or performance issues. Run through CI/CD and security testing.' },
      { icon: String.fromCodePoint(0x1F6AB), title: 'No AI write access to production', detail: 'AI agents that execute commands, modify infrastructure, or trigger deployments must be restricted to dev/sandbox environments.' },
      { icon: String.fromCodePoint(0x1F310), title: 'Be careful with browser agents', detail: 'Extensions and MCPs that give browser access operate with your full logged-in session. They can see, click, and submit forms in any app you\u2019re signed into. Use a separate browser profile.' },
      { icon: String.fromCodePoint(0x1F511), title: 'Keep secrets out of AI context', detail: 'AI will ingest .env files, API keys, DB connection strings. Use .claudeignore, .cursorignore or equivalent. Never paste credentials into prompts.' },
      { icon: String.fromCodePoint(0x1F9EA), title: 'Use synthetic data for debugging', detail: 'Do not paste production logs, customer data, or query results containing personal data into AI prompts. Strip or mask identifiers first.' },
      { icon: String.fromCodePoint(0x1F4BC), title: 'No personal AI accounts for work', detail: 'A personal Copilot or Claude subscription processing Visma source code is subject to consumer terms that may permit training use.' },
    ],
  },
  es: {
    eyebrow: 'Principio 6',
    title: 'Para Desarrolladores: IA en Tu Workflow',
    body: 'Los asistentes de c\u00f3digo IA (Copilot, Claude Code, Cursor) son poderosos pero ven todo el contexto de tu proyecto. Esto es lo que deb\u00e9s hacer.',
    rules: [
      { icon: String.fromCodePoint(0x1F50D), title: 'Revis\u00e1 todo el c\u00f3digo generado', detail: 'El output de IA suele parecer correcto pero contiene vulnerabilidades sutiles, errores de l\u00f3gica o problemas de performance. Pas\u00e1 por CI/CD y testing de seguridad.' },
      { icon: String.fromCodePoint(0x1F6AB), title: 'Sin acceso de escritura a producci\u00f3n', detail: 'Los agentes de IA que ejecutan comandos, modifican infraestructura o disparan deploys deben estar restringidos a entornos dev/sandbox.' },
      { icon: String.fromCodePoint(0x1F310), title: 'Cuidado con los agentes de browser', detail: 'Las extensiones y MCPs con acceso al browser operan con tu sesi\u00f3n completa. Pueden ver, clickear y enviar formularios en cualquier app donde est\u00e9s logueado. Us\u00e1 un perfil de browser separado.' },
      { icon: String.fromCodePoint(0x1F511), title: 'Manten\u00e9 secretos fuera del contexto de IA', detail: 'La IA va a ingerir archivos .env, API keys, strings de conexi\u00f3n. Us\u00e1 .claudeignore, .cursorignore o equivalentes. Nunca pegues credenciales en prompts.' },
      { icon: String.fromCodePoint(0x1F9EA), title: 'Us\u00e1 datos sint\u00e9ticos para debugging', detail: 'No pegues logs de producci\u00f3n, datos de clientes o resultados de queries con datos personales en prompts de IA. Strip\u00e1 o mask\u00e1 identificadores primero.' },
      { icon: String.fromCodePoint(0x1F4BC), title: 'No uses cuentas personales de IA para trabajo', detail: 'Una suscripci\u00f3n personal de Copilot o Claude procesando c\u00f3digo fuente de Visma est\u00e1 sujeta a t\u00e9rminos de consumidor que pueden permitir uso para entrenamiento.' },
    ],
  }
}

export default function S07_DevRules({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-4">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-8 max-w-xl">{c.body}</motion.p>
      <div className="space-y-3">
        {c.rules.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{r.icon}</span>
              <span className="text-white text-sm font-semibold">{r.title}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed pl-7">{r.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
