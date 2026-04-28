import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Clock, PlayCircle, CheckCircle, RotateCcw, Shield } from 'lucide-react'
import { getMetadata, DIFFICULTY_CONFIG, AREA_CONFIG } from '../modules/metadata'

export default function ModuleCard({ module: mod, progress, onStart, index }) {
  const { i18n, t } = useTranslation()
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'
  const { completed, currentSlide = 0 } = progress || {}
  const hasStarted = currentSlide > 0 || completed
  const meta = getMetadata(mod.id)
  const diff = DIFFICULTY_CONFIG[meta.difficulty]
  const area = AREA_CONFIG[meta.area]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
      className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: mod.color + '20' }}>{mod.icon}</div>
        {completed && (
          <span className="flex items-center gap-1 text-xs text-green-400 font-medium">
            <CheckCircle size={14} /> {t('home.completed')}
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${diff.color}`}>{diff[lang]}</span>
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${area.color}`}>{area[lang]}</span>
        {meta.badge === 'visma-policy' && (
          <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-purple-500/20 text-purple-300 flex items-center gap-1">
            <Shield size={8} /> Visma
          </span>
        )}
      </div>
      <h3 className="text-white font-semibold text-lg mt-1 mb-1">{mod.title[lang]}</h3>
      <p className="text-slate-400 text-sm mb-5 leading-relaxed">{mod.subtitle[lang]}</p>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs text-slate-500">
          <Clock size={12} /> {mod.duration} {t('home.minutes')}
        </span>
        <button onClick={onStart} className="flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
          {completed ? <><RotateCcw size={14} /> Retry</>
            : hasStarted ? <><PlayCircle size={14} /> {t('home.continue')}</>
            : <><PlayCircle size={14} /> {t('home.start')}</>}
        </button>
      </div>
      {hasStarted && !completed && (
        <div className="mt-3 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full transition-all"
            style={{ width: `${(currentSlide / (mod.totalSlides - 1)) * 100}%` }} />
        </div>
      )}
    </motion.div>
  )
}
