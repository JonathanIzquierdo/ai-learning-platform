import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module Complete',
    title: 'Your AI Toolkit Is Ready.',
    summary: [
      'Zero-shot for simple tasks, few-shot for patterns, CoT for complex reasoning',
      'Always specify output format explicitly \u2014 show, don\u2019t describe',
      'Tool use turns models from text generators into agents that act',
      'Debug with the 4-step framework: error, reproduction, tried, constraints',
      'Iterate on outputs \u2014 don\u2019t restart. Every re-prompt costs tokens',
      'Evaluate at 4 levels: syntax, logic, quality, security',
    ],
    cta: 'The difference between a developer who uses AI and one who is productive with AI is not talent. It\u2019s patterns. You now have them. Go practice.',
    next: 'Next step: try the Context Engineering module (08) to go deeper into how to structure the information you give to models.',
  },
  es: {
    eyebrow: 'M\u00f3dulo Completo',
    title: 'Tu Toolkit de IA Est\u00e1 Listo.',
    summary: [
      'Zero-shot para tareas simples, few-shot para patterns, CoT para razonamiento complejo',
      'Siempre especific\u00e1 el formato de output expl\u00edcitamente \u2014 mostr\u00e1, no describas',
      'Tool use convierte modelos de generadores de texto en agentes que act\u00faan',
      'Debug\u00e1 con el framework de 4 pasos: error, reproducci\u00f3n, intent\u00e9, restricciones',
      'Iter\u00e1 sobre outputs \u2014 no reinicies. Cada re-prompt cuesta tokens',
      'Evalu\u00e1 en 4 niveles: sintaxis, l\u00f3gica, calidad, seguridad',
    ],
    cta: 'La diferencia entre un developer que usa IA y uno que es productivo con IA no es talento. Son patterns. Ahora los ten\u00e9s. And\u00e1 a practicar.',
    next: 'Siguiente paso: prob\u00e1 el m\u00f3dulo de Context Engineering (08) para profundizar en c\u00f3mo estructurar la informaci\u00f3n que le das a los modelos.',
  }
}

export default function S10_Closing({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-8">{c.title}</motion.h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-slate-800 border border-cyan-500/30 rounded-2xl p-5 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">6 {lang === 'es' ? 'Skills Clave' : 'Key Skills'}</p>
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
        className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 mb-4">
        <p className="text-cyan-100 text-sm font-medium leading-relaxed">{c.cta}</p>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
        className="text-slate-500 text-xs">{String.fromCodePoint(0x27A1, 0xFE0F)} {c.next}</motion.p>
    </div>
  )
}
