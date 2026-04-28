import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module Complete',
    title: 'You Know the Rules. Now Lead by Example.',
    summary: [
      'Use only Visma-reviewed AI tools \u2014 never personal/free accounts with company data',
      'Know what data you share \u2014 personal data, customer data, and confidential info have strict rules',
      'Never monitor or profile employees with AI \u2014 this is a hard line',
      'Handle meeting AI tools with transparency and care',
      'Building AI into products requires legal assessment and security review',
      'Developers: keep secrets out, use synthetic data, no AI in production',
      'Security is everyone\u2019s job \u2014 minimum access, temporary permissions, 2FA',
      'Always verify AI output \u2014 confident doesn\u2019t mean correct',
      'If you wouldn\u2019t ask a human to do it, don\u2019t ask an AI',
    ],
    cta: 'The best outcome is a Visma where every company and employee feels empowered by AI, not intimidated by it. We are in this together.',
    source: 'Source: Visma AI Code of Conduct, April 2026. Approved by Chief Risk Officer Lars Ottersen and CFO Stian Grindheim.',
  },
  es: {
    eyebrow: 'M\u00f3dulo Completo',
    title: 'Conoc\u00e9s las Reglas. Ahora Lider\u00e1 con el Ejemplo.',
    summary: [
      'Us\u00e1 solo herramientas de IA revisadas por Visma \u2014 nunca cuentas personales/gratuitas con datos de la empresa',
      'Conoc\u00e9 qu\u00e9 datos compart\u00eds \u2014 datos personales, de clientes y confidenciales tienen reglas estrictas',
      'Nunca monitores o perfiles empleados con IA \u2014 esta es una l\u00ednea dura',
      'Manej\u00e1 las herramientas de IA para reuniones con transparencia y cuidado',
      'Construir IA en productos requiere evaluaci\u00f3n legal y revisi\u00f3n de seguridad',
      'Desarrolladores: manten\u00e9 secretos fuera, us\u00e1 datos sint\u00e9ticos, sin IA en producci\u00f3n',
      'La seguridad es responsabilidad de todos \u2014 acceso m\u00ednimo, permisos temporales, 2FA',
      'Siempre verific\u00e1 el output de IA \u2014 convincente no significa correcto',
      'Si no se lo pedir\u00edas a un humano, no se lo pidas a una IA',
    ],
    cta: 'El mejor resultado es una Visma donde cada empresa y empleado se sienta empoderado por la IA, no intimidado. Estamos juntos en esto.',
    source: 'Fuente: C\u00f3digo de Conducta IA de Visma, abril 2026. Aprobado por el Chief Risk Officer Lars Ottersen y el CFO Stian Grindheim.',
  }
}

export default function S11_Closing({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-8">{c.title}</motion.h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-slate-800 border border-purple-500/30 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">9 {lang === 'es' ? 'Principios Clave' : 'Key Principles'}</p>
        <div className="space-y-2">
          {c.summary.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.05 }}
              className="flex items-start gap-3">
              <span className="bg-green-500/20 text-green-300 text-xs font-bold w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5">{String.fromCodePoint(0x2713)}</span>
              <p className="text-slate-300 text-sm">{s}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-4">
        <p className="text-purple-100 text-sm font-medium leading-relaxed">{c.cta}</p>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        className="text-slate-600 text-xs italic">{c.source}</motion.p>
    </div>
  )
}
