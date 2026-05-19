import { motion } from 'framer-motion'
import { WORKSHOPS, TALKS } from '../data/events'

export default function EventsList({ kind, lang, onBack, onSelect }) {
  const items = kind === 'workshops' ? WORKSHOPS : TALKS
  const t = {
    en: {
      back: '← Back',
      workshopsTitle: 'Workshops',
      talksTitle: 'Talks',
      workshopsSub: 'Pick a workshop to see the full program and request a session.',
      talksSub: 'Pick a talk to see details and request it for your team.',
      duration: 'Duration',
      audience: 'For',
      view: 'View details'
    },
    es: {
      back: '← Volver',
      workshopsTitle: 'Workshops',
      talksTitle: 'Charlas',
      workshopsSub: 'Elegí un workshop para ver el programa completo y solicitar una sesión.',
      talksSub: 'Elegí una charla para ver los detalles y solicitarla para tu equipo.',
      duration: 'Duración',
      audience: 'Para',
      view: 'Ver detalles'
    }
  }[lang]

  const title = kind === 'workshops' ? t.workshopsTitle : t.talksTitle
  const sub = kind === 'workshops' ? t.workshopsSub : t.talksSub

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button onClick={onBack}
        className="text-slate-400 hover:text-white text-sm font-medium mb-6 transition-colors">
        {t.back}
      </button>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
        {title}
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="text-slate-400 text-lg mb-10">
        {sub}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.06 }}
            whileHover={{ y: -3 }}
            onClick={() => onSelect(item.id)}
            className="text-left bg-slate-800/60 backdrop-blur ring-1 ring-slate-700/60 hover:ring-slate-500 rounded-2xl p-6 transition-all"
            style={{ borderLeft: `4px solid ${item.color}` }}>
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                {item.duration[lang]}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 leading-snug">
              {item.title[lang]}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {item.tagline[lang]}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.audience[lang].slice(0, 3).map((a) => (
                <span key={a} className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-300">
                  {a}
                </span>
              ))}
            </div>
            <span className="text-sm font-medium text-blue-400">{t.view} →</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
