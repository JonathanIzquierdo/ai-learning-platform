import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import ModuleCard from './components/ModuleCard'
import ModulePlayer from './components/ModulePlayer'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useProgress } from './hooks/useProgress'
import { module01 } from './modules/01-token-awareness/index'

const ALL_MODULES = [module01]

export default function App() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'
  const { getModuleProgress, setModuleSlide, completeModule } = useProgress()
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
      <nav className="max-w-3xl mx-auto flex items-center justify-between mb-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Cpu size={16} className="text-white" />
          </div>
          <span className="font-bold text-white text-sm">AI Learning</span>
        </div>
        <LanguageSwitcher />
      </nav>

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
