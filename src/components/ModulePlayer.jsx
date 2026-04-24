import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import ProgressBar from './ProgressBar'

export default function ModulePlayer({ module: mod, initialSlide = 0, onComplete, onBack }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'
  const slides = mod.slides
  const [current, setCurrent] = useState(initialSlide)
  const [quizPassed, setQuizPassed] = useState(false)
  const slide = slides[current]
  const isLast = current === slides.length - 1
  const isQuiz = slide.type === 'quiz'
  const canAdvance = !isQuiz || quizPassed

  const next = () => {
    if (isLast) { onComplete?.(); return }
    setCurrent(c => c + 1)
    setQuizPassed(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const back = () => {
    if (current > 0) { setCurrent(c => c - 1); setQuizPassed(false) }
    else onBack?.()
  }

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [current])

  const SlideComponent = slide.component

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <div className="fixed top-0 left-0 right-0 z-10 bg-slate-900/90 backdrop-blur border-b border-slate-800 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors"><ArrowLeft size={18} /></button>
          <div className="flex-1">
            <p className="text-xs text-slate-400 mb-1">{mod.title[lang]}</p>
            <ProgressBar current={current} total={slides.length} />
          </div>
          <span className="text-xs text-slate-400 whitespace-nowrap">{t('module.progress', { current: current + 1, total: slides.length })}</span>
        </div>
      </div>

      <div className="flex-1 pt-20 pb-28 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={current}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}>
              <SlideComponent lang={lang} onQuizPass={() => setQuizPassed(true)} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur border-t border-slate-800 px-4 py-4">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <button onClick={back} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
            <ArrowLeft size={16} /> {t('module.back')}
          </button>
          <button onClick={next} disabled={!canAdvance}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
              canAdvance ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}>
            {isLast
              ? <><CheckCircle size={16} /> {t('module.finish')}</>
              : <>{t('module.next')} <ArrowRight size={16} /></>}
          </button>
        </div>
      </div>
    </div>
  )
}
