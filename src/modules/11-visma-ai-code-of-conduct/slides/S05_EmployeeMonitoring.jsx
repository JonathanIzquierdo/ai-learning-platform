import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Principle 3 \u2014 Hard Line',
    title: 'Never Use AI to Monitor Employees',
    body: 'This is a hard line. AI must not be used to monitor, profile, or make employment decisions about colleagues. This applies especially to managers and HR professionals.',
    forbidden: [
      'Using AI to rank, flag, or shortlist employees for redundancy',
      'Letting AI drive decisions about sick leave, salary, warnings, promotions, hiring or dismissal without genuine human review',
      'Connecting AI agents to Slack, Drive, or email to monitor employee behavior without justification and prior consultation with employee representatives',
      'Using Slack AI to generate reports about individual colleagues\u2019 behavior, activity patterns, or communication frequency',
    ],
    why: 'This crosses into employee monitoring, which is heavily regulated under GDPR, the EU AI Act, and local employment law. Violations can result in significant legal consequences for both Visma and the individuals involved.',
  },
  es: {
    eyebrow: 'Principio 3 \u2014 L\u00ednea Dura',
    title: 'Nunca Uses IA para Monitorear Empleados',
    body: 'Esta es una l\u00ednea dura. La IA no debe usarse para monitorear, perfilar o tomar decisiones laborales sobre colegas. Esto aplica especialmente a managers y profesionales de RRHH.',
    forbidden: [
      'Usar IA para rankear, marcar o preseleccionar empleados para procesos de despido',
      'Dejar que la IA maneje decisiones sobre licencias, salarios, apercibimientos, promociones, contrataci\u00f3n o despido sin revisi\u00f3n humana genuina',
      'Conectar agentes de IA a Slack, Drive o email para monitorear comportamiento de empleados sin justificaci\u00f3n y consulta previa con representantes',
      'Usar Slack AI para generar reportes sobre comportamiento individual de colegas, patrones de actividad o frecuencia de comunicaci\u00f3n',
    ],
    why: 'Esto cruza hacia el monitoreo de empleados, que est\u00e1 fuertemente regulado por GDPR, el EU AI Act y legislaci\u00f3n laboral local. Las violaciones pueden resultar en consecuencias legales significativas tanto para Visma como para los individuos involucrados.',
  }
}

export default function S05_EmployeeMonitoring({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-4">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-8 max-w-xl">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
        className="bg-red-500/5 border border-red-500/30 rounded-xl p-5 mb-6">
        <p className="text-red-400 text-xs font-bold uppercase mb-3">{String.fromCodePoint(0x1F6AB)} {lang === 'es' ? 'Prohibido' : 'Not Permitted'}</p>
        <div className="space-y-3">
          {c.forbidden.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-start gap-3">
              <span className="text-red-400 text-sm mt-0.5">{String.fromCodePoint(0x274C)}</span>
              <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        {String.fromCodePoint(0x26A0, 0xFE0F)} {c.why}
      </motion.div>
    </div>
  )
}
