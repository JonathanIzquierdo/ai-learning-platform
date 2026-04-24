import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Personal data, GDPR & AI tools.',
    subtitle: 'Using AI with personal data isn\'t just a security risk — it\'s a compliance risk. GDPR applies even when the tool is Claude.',
    gdprBasics: {
      label: 'What GDPR means for AI usage',
      text: 'GDPR requires that personal data (any information that can identify a person) is processed lawfully, for a specific purpose, with appropriate safeguards. When you paste personal data into an AI tool, you are processing that data — and GDPR applies. This is true even for internal tools, even for brief analysis, even if you delete the conversation afterward.'
    },
    redLines: [
      { data: 'Employee names + performance data', risk: 'Violates employee privacy rights. Requires consent or legitimate interest basis.' },
      { data: 'Customer email lists for AI segmentation', risk: 'Consent required. Purpose limitation applies. Data minimization principle.' },
      { data: 'Health or biometric data', risk: 'Special category data — requires explicit consent and DPA notification.' },
      { data: 'Children\'s data', risk: 'Highest level of protection. Parental consent required.' },
      { data: 'Political opinions, religious beliefs', risk: 'Special category data under Article 9 — strict restrictions.' },
    ],
    safeApproaches: [
      { approach: 'Pseudonymization', desc: 'Replace names with codes (Employee A, B, C). Keep the mapping in a separate secure system. AI sees the pattern, not the person.' },
      { approach: 'Aggregation', desc: 'Use group-level data instead of individual records. "30% of employees" instead of individual names and responses.' },
      { approach: 'Synthetic data', desc: 'Generate fake but realistic data for testing AI workflows. Never use real customer or employee data for development.' },
      { approach: 'Data minimization', desc: 'Only share with AI what is strictly necessary. If the task needs age ranges, don\'t share exact birthdates.' },
    ],
    dpa: 'If you\'re unsure whether a specific AI use case complies with GDPR, contact Visma\'s Data Protection Officer before proceeding. It\'s faster to ask than to remediate a breach.'
  },
  es: {
    title: 'Datos personales, GDPR y herramientas de IA.',
    subtitle: 'Usar IA con datos personales no es solo un riesgo de seguridad — es un riesgo de cumplimiento. El GDPR aplica incluso cuando la herramienta es Claude.',
    gdprBasics: {
      label: 'Qué significa el GDPR para el uso de IA',
      text: 'El GDPR requiere que los datos personales (cualquier información que pueda identificar a una persona) sean procesados lícitamente, para un propósito específico, con las salvaguardas apropiadas. Cuando pegás datos personales en una herramienta de IA, estás procesando esos datos — y el GDPR aplica. Esto es cierto incluso para herramientas internas, incluso para análisis breves, incluso si borraste la conversación después.'
    },
    redLines: [
      { data: 'Nombres de empleados + datos de desempeño', risk: 'Viola los derechos de privacidad de los empleados. Requiere consentimiento o base de interés legítimo.' },
      { data: 'Listas de emails de clientes para segmentación con IA', risk: 'Se requiere consentimiento. Aplica la limitación de propósito. Principio de minimización de datos.' },
      { data: 'Datos de salud o biométricos', risk: 'Datos de categoría especial — requiere consentimiento explícito y notificación al DPA.' },
      { data: 'Datos de menores', risk: 'Máximo nivel de protección. Se requiere consentimiento parental.' },
      { data: 'Opiniones políticas, creencias religiosas', risk: 'Datos de categoría especial bajo el Artículo 9 — restricciones estrictas.' },
    ],
    safeApproaches: [
      { approach: 'Seudonimización', desc: 'Reemplazá nombres con códigos (Empleado A, B, C). Guardá el mapeo en un sistema seguro separado. La IA ve el patrón, no la persona.' },
      { approach: 'Agregación', desc: 'Usá datos a nivel grupal en lugar de registros individuales. "El 30% de los empleados" en lugar de nombres y respuestas individuales.' },
      { approach: 'Datos sintéticos', desc: 'Generá datos falsos pero realistas para testear flujos de trabajo de IA. Nunca uses datos reales de clientes o empleados para desarrollo.' },
      { approach: 'Minimización de datos', desc: 'Solo compartí con la IA lo estrictamente necesario. Si la tarea necesita rangos de edad, no compartas fechas de nacimiento exactas.' },
    ],
    dpa: 'Si no estás seguro de si un caso de uso específico de IA cumple con el GDPR, contactá al Oficial de Protección de Datos de Visma antes de continuar. Es más rápido preguntar que remediar una brecha.'
  }
}

export default function S08_GDPR({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">{c.gdprBasics.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.gdprBasics.text}</p>
      </motion.div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Red lines — never use AI with:</p>
      <div className="flex flex-col gap-2 mb-6">
        {c.redLines.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }}
            className="flex items-start gap-3 bg-red-500/8 border border-red-500/20 rounded-xl px-4 py-3">
            <span className="text-red-400 text-xs mt-0.5">✗</span>
            <div>
              <p className="text-white text-xs font-semibold">{r.data}</p>
              <p className="text-slate-500 text-xs mt-0.5">{r.risk}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Safe approaches:</p>
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {c.safeApproaches.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 + i * 0.08 }}
            className="bg-green-500/8 border border-green-500/20 rounded-xl p-3">
            <p className="text-green-400 text-xs font-semibold mb-1">{s.approach}</p>
            <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        💡 {c.dpa}
      </div>
    </div>
  )
}
