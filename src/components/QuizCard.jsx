import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

export default function QuizCard({ question, options, correctIndex, onPass }) {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(null)
  const [attempts, setAttempts] = useState(0)

  const choose = (i) => {
    if (selected === correctIndex) return
    setSelected(i)
    setAttempts(a => a + 1)
    if (i === correctIndex) setTimeout(() => onPass && onPass(), 1200)
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <p className="text-xs font-semibold uppercase tracking-widest text-visma-teal mb-4">{t('module.quiz')}</p>
      <p className="text-xl font-semibold text-white mb-6 leading-snug">{question}</p>
      <div className="flex flex-col gap-3">
        {options.map((opt, i) => {
          const isCorrect = i === correctIndex
          const isSelected = i === selected
          let style = 'border-slate-600 text-slate-300 hover:border-visma-blue hover:text-white'
          if (isSelected && isCorrect) style = 'border-visma-green bg-visma-green/10 text-white'
          else if (isSelected && !isCorrect) style = 'border-red-500 bg-red-500/10 text-white'
          return (
            <motion.button
              key={i}
              whileTap={{ scale: 0.98 }}
              onClick={() => choose(i)}
              className={`w-full text-left px-5 py-4 rounded-xl border transition-all text-sm leading-snug ${style}`}
            >
              {opt}
            </motion.button>
          )
        })}
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`flex items-center gap-2 mt-4 text-sm font-medium ${
              selected === correctIndex ? 'text-visma-green' : 'text-red-400'
            }`}
          >
            {selected === correctIndex
              ? <><CheckCircle size={16} /> {t('module.correct')}</>
              : <><XCircle size={16} /> {t('module.incorrect')}</>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
