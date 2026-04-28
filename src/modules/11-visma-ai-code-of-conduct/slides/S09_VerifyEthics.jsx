import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Principles 8 & 9',
    title: 'Verify Output. Keep Your Ethics.',
    verifyTitle: 'Always Verify AI Output',
    verifyBody: 'AI tools can be wrong. They produce confident-sounding text that is inaccurate, outdated, or biased. Do not use output you do not understand.',
    verifyRules: [
      'For AI-generated code: check if it appears in public repos, assess licensing risks',
      'Follow your company\u2019s procedures for embedding AI-generated code in products',
      'Review everything in the VASP tools',
      'Never trust AI output blindly \u2014 especially for customer-facing content',
    ],
    ethicsTitle: 'Ethics Don\u2019t Disappear',
    ethicsBody: 'If you wouldn\u2019t ask a human colleague to do something, don\u2019t ask an AI to do it either.',
    ethicsQuote: '"If you find yourself working to get an AI to produce something you wouldn\u2019t want your manager to see, that\u2019s the signal to stop."',
    ethicsNote: 'Visma works continuously with vendors to configure appropriate guardrails. But no technical control replaces good judgment.',
  },
  es: {
    eyebrow: 'Principios 8 y 9',
    title: 'Verific\u00e1 el Output. Manten\u00e9 la \u00c9tica.',
    verifyTitle: 'Siempre Verific\u00e1 el Output de IA',
    verifyBody: 'Las herramientas de IA pueden estar equivocadas. Producen texto que suena convincente pero es inexacto, desactualizado o sesgado. No uses output que no entiendas.',
    verifyRules: [
      'Para c\u00f3digo generado por IA: verific\u00e1 si aparece en repos p\u00fablicos, evalu\u00e1 riesgos de licencias',
      'Segu\u00ed los procedimientos de tu empresa para incrustar c\u00f3digo generado por IA en productos',
      'Revis\u00e1 todo en las herramientas VASP',
      'Nunca conf\u00edes ciegamente en el output de IA \u2014 especialmente para contenido dirigido a clientes',
    ],
    ethicsTitle: 'La \u00c9tica No Desaparece',
    ethicsBody: 'Si no le pedir\u00edas a un colega humano que haga algo, tampoco se lo pidas a una IA.',
    ethicsQuote: '"Si te encontr\u00e1s esforzandote para que una IA produzca algo que no querr\u00edas que tu manager vea, esa es la se\u00f1al para detenerte."',
    ethicsNote: 'Visma trabaja continuamente con los proveedores para configurar guardrails apropiados. Pero ning\u00fan control t\u00e9cnico reemplaza el buen juicio.',
  }
}

export default function S09_VerifyEthics({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-8">{c.title}</motion.h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-5 mb-6">
        <p className="text-white text-sm font-semibold mb-2">{String.fromCodePoint(0x1F50D)} {c.verifyTitle}</p>
        <p className="text-slate-400 text-sm mb-4">{c.verifyBody}</p>
        <div className="space-y-2">
          {c.verifyRules.map((r, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-amber-400 text-xs mt-1">{String.fromCodePoint(0x26A0, 0xFE0F)}</span>
              <p className="text-slate-300 text-sm">{r}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="bg-slate-800 border border-purple-500/30 rounded-xl p-5">
        <p className="text-white text-sm font-semibold mb-2">{String.fromCodePoint(0x1F9ED)} {c.ethicsTitle}</p>
        <p className="text-slate-300 text-sm mb-4">{c.ethicsBody}</p>
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 mb-3">
          <p className="text-purple-200 text-sm italic">{c.ethicsQuote}</p>
        </div>
        <p className="text-slate-500 text-xs">{c.ethicsNote}</p>
      </motion.div>
    </div>
  )
}
