import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ModuleCard from './components/ModuleCard'
import ModulePlayer from './components/ModulePlayer'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useProgress } from './hooks/useProgress'
import { module00 } from './modules/00-ai-fundamentals/index'
import { module01 } from './modules/01-token-awareness/index'
import { module02 } from './modules/02-evals-harness/index'
import { module03 } from './modules/03-ai-maturity/index'

const ALL_MODULES = [module00, module01, module02, module03]

const VISMA_LOGO = 'data:image/png;base64,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'

export default function App() {
  const { t } = useTranslation()
  const { getModuleProgress, completeModule } = useProgress()
  const [activeModule, setActiveModule] = useState(null)

  if (activeModule) {
    const modProgress = getModuleProgress(activeModule.id)
    return (
      <ModulePlayer
        module={activeModule}
        initialSlide={modProgress.completed ? 0 : modProgress.currentSlide || 0}
        onComplete={() => { completeModule(activeModule.id); setActiveModule(null) }}
        onBack={() => setActiveModule(null)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-8">
      {/* Nav */}
      <nav className="max-w-3xl mx-auto flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <img src={VISMA_LOGO} alt="Visma" className="h-7 w-auto" />
          <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">LATAM</span>
        </div>
        <LanguageSwitcher />
      </nav>

      {/* Hero */}
      <div className="max-w-3xl mx-auto mb-12">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {t('home.title')}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg">
          {t('home.subtitle')}
        </motion.p>
      </div>

      {/* Modules grid */}
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
        {ALL_MODULES.map((mod, i) => (
          <ModuleCard
            key={mod.id}
            module={mod}
            progress={getModuleProgress(mod.id)}
            onStart={() => setActiveModule(mod)}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}
