import { motion } from 'framer-motion'
import { WORKSHOPS, TALKS } from '../data/events'

export default function EventsHome({ lang, onSelectKind }) {
  const t = {
    en: {
      title: 'Workshops & Talks',
      subtitle: 'In-person and online sessions designed for teams across Visma LATAM. Pick what fits.',
      workshopsTitle: 'Workshops',
      workshopsDesc: 'Multi-hour, hands-on sessions. Real tools, real exercises, real teams.',
      talksTitle: 'Talks',
      talksDesc: 'Short, focused sessions for leaders and technical teams. Ideal for kickoffs.',
      explore: 'Explore',
      sessions: 'sessions'
    },
    es: {
      title: 'Workshops y Charlas',
      subtitle: 'Sesiones presenciales y online diseñadas para equipos de Visma LATAM. Elegí lo que mejor encaje.',
      workshopsTitle: 'Workshops',
      workshopsDesc: 'Sesiones de varias horas, hands-on. Herramientas reales, ejercicios reales, equipos reales.',
      talksTitle: 'Charlas',
      talksDesc: 'Sesiones cortas y enfocadas para líderes y equipos técnicos. Ideales para kickoffs.',
      explore: 'Explorar',
      sessions: 'sesiones'
    }
  }[lang]

  const cards = [
    {
      kind: 'workshops',
      title: t.workshopsTitle,
      desc: t.workshopsDesc,
      count: WORKSHOPS.length,
      icon: '🎓',
      gradient: 'from-blue-600/20 to-cyan-500/10',
      ring: 'ring-blue-500/30 hover:ring-blue-400/60',
      accent: 'text-cyan-300'
    },
    {
      kind: 'talks',
      title: t.talksTitle,
      desc: t.talksDesc,
      count: TALKS.length,
      icon: '🎤',
      gradient: 'from-purple-600/20 to-pink-500/10',
      ring: 'ring-purple-500/30 hover:ring-purple-400/60',
      accent: 'text-pink-300'
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {t.title}
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="text-slate-400 text-lg mb-10">
        {t.subtitle}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((c, i) => (
          <motion.button
            key={c.kind}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            whileHover={{ y: -4 }}
            onClick={() => onSelectKind(c.kind)}
            className={`text-left bg-gradient-to-br ${c.gradient} bg-slate-800/60 backdrop-blur ring-1 ${c.ring} rounded-2xl p-8 transition-all`}>
            <div className="flex items-start justify-between mb-6">
              <span className="text-5xl">{c.icon}</span>
              <span className={`text-xs font-bold uppercase tracking-widest ${c.accent}`}>
                {c.count} {t.sessions}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{c.title}</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">{c.desc}</p>
            <span className="inline-flex items-center gap-2 text-white font-medium text-sm">
              {t.explore} <span aria-hidden>→</span>
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
