import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Principle 7',
    title: 'Security Good Practices',
    body: 'Everyone shares the responsibility for maintaining security. These are non-negotiable.',
    practices: [
      { icon: String.fromCodePoint(0x1F511), label: 'Minimum access', detail: 'Always select \u201cSpecific folders\u201d or \u201cIndividual files.\u201d Never give whole-drive access. Only give the AI what it needs for the immediate task.' },
      { icon: String.fromCodePoint(0x1F441, 0xFE0F), label: 'Check permissions', detail: 'Read/View = moderate risk. Write/Edit = high risk. Manage/Delete = critical risk. Restrict to Read whenever possible.' },
      { icon: String.fromCodePoint(0x23F3), label: 'Temporary access', detail: 'Treat AI access as temporary. If using AI for a single project, revoke access immediately upon completion. Monthly audit recommended.' },
      { icon: String.fromCodePoint(0x1F512), label: 'Enable 2FA', detail: 'Always use two-factor authentication on all accounts connected to AI tools (Entra-ID or Google Account).' },
      { icon: String.fromCodePoint(0x1F6A8), label: 'Report immediately', detail: 'Report any suspected data breaches or unintended data exposures involving AI tools to security@visma.com without delay.' },
    ],
    auditPath: 'Google Drive audit: myaccount.google.com/permissions \u2192 \u201cThird-party apps with account access\u201d \u2192 Remove Access',
  },
  es: {
    eyebrow: 'Principio 7',
    title: 'Buenas Pr\u00e1cticas de Seguridad',
    body: 'Todos compartimos la responsabilidad de mantener la seguridad. Estas son innegociables.',
    practices: [
      { icon: String.fromCodePoint(0x1F511), label: 'Acceso m\u00ednimo', detail: 'Siempre seleccion\u00e1 \u201cCarpetas espec\u00edficas\u201d o \u201cArchivos individuales.\u201d Nunca des acceso a todo el Drive. Solo dale a la IA lo que necesita para la tarea inmediata.' },
      { icon: String.fromCodePoint(0x1F441, 0xFE0F), label: 'Verific\u00e1 permisos', detail: 'Lectura/Vista = riesgo moderado. Escritura/Edici\u00f3n = riesgo alto. Gestionar/Eliminar = riesgo cr\u00edtico. Restringir a Lectura siempre que sea posible.' },
      { icon: String.fromCodePoint(0x23F3), label: 'Acceso temporal', detail: 'Trat\u00e1 el acceso de IA como temporal. Si us\u00e1s IA para un proyecto puntual, revoc\u00e1 el acceso inmediatamente al completarlo. Auditor\u00eda mensual recomendada.' },
      { icon: String.fromCodePoint(0x1F512), label: 'Activ\u00e1 2FA', detail: 'Siempre us\u00e1 autenticaci\u00f3n de dos factores en todas las cuentas conectadas a herramientas de IA (Entra-ID o Google Account).' },
      { icon: String.fromCodePoint(0x1F6A8), label: 'Report\u00e1 inmediatamente', detail: 'Report\u00e1 cualquier sospecha de brechas de datos o exposiciones no intencionadas con herramientas de IA a security@visma.com sin demora.' },
    ],
    auditPath: 'Auditor\u00eda Google Drive: myaccount.google.com/permissions \u2192 \u201cApps de terceros con acceso a la cuenta\u201d \u2192 Quitar Acceso',
  }
}

export default function S08_SecurityPractices({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-4">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-8 max-w-xl">{c.body}</motion.p>
      <div className="space-y-3 mb-6">
        {c.practices.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{p.icon}</span>
              <span className="text-white text-sm font-semibold">{p.label}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed pl-7">{p.detail}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 text-xs text-blue-200 font-mono">
        {c.auditPath}
      </motion.div>
    </div>
  )
}
