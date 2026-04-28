import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 11 \u00b7 Visma AI Code of Conduct',
    title: 'Use AI. Do it right.',
    body: 'Visma is an AI-forward company. We expect and encourage every employee to use AI tools to work better \u2014 to move faster, think sharper, and spend less time on repetitive tasks. But with great power comes real responsibility.',
    quote: '"The AI Code of Conduct is not to list things you cannot do. It is a guide for doing the right thing confidently."',
    principles: [
      'Use reviewed tools and understand what you connect',
      'Be aware of the data you share with third parties',
      'Do not use AI to monitor or profile employees',
      'Handle AI meeting tools responsibly',
      'Follow extra rules when building AI into products',
      'Developers: special considerations for your workflow',
      'Security good practices for everyone',
      'Always verify AI output before using it',
      'Basic ethics don\u2019t disappear because it\u2019s an AI',
    ],
    note: 'This module covers all 9 principles from the official Visma AI Code of Conduct (April 2026). Approved by the Chief Risk Officer and the Chief Financial Officer.',
  },
  es: {
    eyebrow: 'M\u00f3dulo 11 \u00b7 C\u00f3digo de Conducta IA de Visma',
    title: 'Us\u00e1 IA. Hacelo bien.',
    body: 'Visma es una empresa AI-forward. Esperamos y alentamos a cada empleado a usar herramientas de IA para trabajar mejor \u2014 m\u00e1s r\u00e1pido, m\u00e1s agudo, y gastar menos tiempo en tareas repetitivas. Pero con gran poder viene responsabilidad real.',
    quote: '"El C\u00f3digo de Conducta de IA no es para listar lo que no pod\u00e9s hacer. Es una gu\u00eda para hacer lo correcto con confianza."',
    principles: [
      'Us\u00e1 herramientas revisadas y entend\u00e9 lo que conect\u00e1s',
      'S\u00e9 consciente de los datos que compart\u00eds con terceros',
      'No uses IA para monitorear o perfilar empleados',
      'Manej\u00e1 las herramientas de IA para reuniones responsablemente',
      'Reglas adicionales al construir IA en productos',
      'Desarrolladores: consideraciones especiales para tu workflow',
      'Buenas pr\u00e1cticas de seguridad para todos',
      'Siempre verific\u00e1 el output de IA antes de usarlo',
      'La \u00e9tica b\u00e1sica no desaparece porque lo hace una IA',
    ],
    note: 'Este m\u00f3dulo cubre los 9 principios del C\u00f3digo de Conducta IA oficial de Visma (abril 2026). Aprobado por el Chief Risk Officer y el Chief Financial Officer.',
  }
}

export default function S01_Hook({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-slate-300 text-lg mb-6 max-w-xl leading-relaxed">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-8">
        <p className="text-purple-200 text-sm italic leading-relaxed">{c.quote}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">9 {lang === 'es' ? 'Principios' : 'Principles'}</p>
        <div className="flex flex-col gap-2">
          {c.principles.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.06 }}
              className="flex items-start gap-3">
              <span className="bg-purple-500/20 text-purple-300 text-xs font-bold w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-slate-300 text-sm">{p}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        {String.fromCodePoint(0x1F4A1)} {c.note}
      </div>
    </div>
  )
}
