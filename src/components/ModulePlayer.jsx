import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import ProgressBar from './ProgressBar'

function fireConfetti() {
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js'
  script.onload = () => {
    const confetti = window.confetti
    if (!confetti) return
    const count = 220
    const defaults = { origin: { y: 0.7 }, zIndex: 9999 }
    function fire(particleRatio, opts) {
      confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) })
    }
    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#0052CC', '#00B8D9', '#36B37E'] })
    fire(0.2,  { spread: 60, colors: ['#6554C0', '#FF991F', '#ffffff'] })
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#0052CC', '#36B37E', '#FF991F'] })
    fire(0.1,  { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
    fire(0.1,  { spread: 120, startVelocity: 45 })
  }
  document.head.appendChild(script)
}

export default function ModulePlayer({ module: mod, initialSlide = 0, onComplete, onBack }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'
  const slides = mod.slides
  const [current, setCurrent] = useState(initialSlide)
  const [quizPassed, setQuizPassed] = useState(false)
  const [showCompletion, setShowCompletion] = useState(false)
  const slide = slides[current]
  const isLast = current === slides.length - 1
  const isQuiz = slide.type === 'quiz'
  const canAdvance = !isQuiz || quizPassed

  const next = () => {
    if (isLast) {
      fireConfetti()
      setShowCompletion(true)
      return
    }
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

  if (showCompletion) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 text-center">
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="text-8xl mb-6">🎉</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4">
          {lang === 'es' ? '¡Módulo completado!' : 'Module complete!'}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="text-slate-400 text-lg mb-10 max-w-sm leading-relaxed">
          {lang === 'es'
            ? `Terminaste "${mod.title[lang]}". Tu progreso fue guardado.`
            : `You finished "${mod.title[lang]}". Your progress has been saved.`}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => { setCurrent(0); setShowCompletion(false); setQuizPassed(false) }}
            className="px-6 py-3 rounded-full border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 transition-all text-sm font-semibold">
            {lang === 'es' ? 'Revisar de nuevo' : 'Review again'}
          </button>
          <button
            onClick={() => { onComplete?.() }}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30">
            {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
          </button>
        </motion.div>
      </div>
    )
  }

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
              canAdvance ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25' : 'bg-slate-700 text-slate-500 cursor-not-allowed'
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
