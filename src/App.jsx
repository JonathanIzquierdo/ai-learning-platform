import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ModuleCard from './components/ModuleCard'
import ModulePlayer from './components/ModulePlayer'
import LanguageSwitcher from './components/LanguageSwitcher'
import EventsHome from './components/EventsHome'
import EventsList from './components/EventsList'
import EventDetail from './components/EventDetail'
import ModelAdvisor from './tools/model-advisor/ModelAdvisor'
import TokenOptimizer from './tools/TokenOptimizer'
import { useProgress } from './hooks/useProgress'
import { module00 } from './modules/00-ai-fundamentals/index'
import { module01 } from './modules/01-token-awareness/index'
import { module02 } from './modules/02-evals-harness/index'
import { module03 } from './modules/03-ai-maturity/index'
import { module04 } from './modules/04-ai-metrics/index'
import { module05 } from './modules/05-ai-non-technical/index'
import { module06 } from './modules/06-ai-security/index'
import { module07 } from './modules/07-multi-agent/index'
import { module08 } from './modules/08-context-engineering/index'
import { module09 } from './modules/09-finetune-rag-local/index'
import { module10 } from './modules/10-ai-skills-developers/index'
import { module11 } from './modules/11-visma-ai-code-of-conduct/index'
import { module12 } from './modules/12-agent-skills-context/index'

const ALL_MODULES = [module00, module01, module02, module03, module04, module05, module06, module07, module08, module09, module10, module11, module12]

const VISMA_LOGO = 'data:image/png;base64,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'

const COMPASS = String.fromCodePoint(0x1F9ED)
const SPARKLE = String.fromCodePoint(0x2728)
const CALENDAR = String.fromCodePoint(0x1F4C5)

export default function App() {
  const { t, i18n } = useTranslation()
  const { getModuleProgress, completeModule } = useProgress()
  const [activeModule, setActiveModule] = useState(null)
  const [view, setView] = useState('home')
  const [eventsKind, setEventsKind] = useState(null) // null | 'workshops' | 'talks'
  const [selectedEventId, setSelectedEventId] = useState(null)
  const [eventsMenuOpen, setEventsMenuOpen] = useState(false)
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'
  const eventsMenuRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (eventsMenuRef.current && !eventsMenuRef.current.contains(e.target)) {
        setEventsMenuOpen(false)
      }
    }
    if (eventsMenuOpen) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [eventsMenuOpen])

  const goToEvents = (kind) => {
    setView('events')
    setEventsKind(kind)
    setSelectedEventId(null)
    setEventsMenuOpen(false)
  }

  const NavBar = ({ active }) => (
    <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-6">
      <div className="flex items-center gap-3">
        <img src={VISMA_LOGO} alt="Visma" className="h-7 w-auto" />
        <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">LATAM</span>
      </div>
      <div className="flex items-center gap-2 flex-wrap justify-end">
        <button onClick={() => { setView('home'); setEventsKind(null); setSelectedEventId(null) }}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${active === 'home' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>
          {lang === 'es' ? 'Cursos' : 'Courses'}
        </button>

        <div className="relative" ref={eventsMenuRef}>
          <button onClick={() => setEventsMenuOpen((o) => !o)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${active === 'events' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>
            {CALENDAR} <span className="hidden sm:inline">{lang === 'es' ? 'Eventos' : 'Events'}</span>
            <span className="text-[10px] opacity-70">▾</span>
          </button>
          {eventsMenuOpen && (
            <div className="absolute right-0 mt-2 w-52 rounded-xl bg-slate-800 ring-1 ring-slate-700 shadow-xl overflow-hidden z-50">
              <button onClick={() => goToEvents('workshops')}
                className="w-full text-left px-4 py-3 text-sm text-slate-200 hover:bg-slate-700 flex items-center gap-3 transition-colors">
                <span className="text-lg">🎓</span>
                <div>
                  <div className="font-medium">{lang === 'es' ? 'Workshops' : 'Workshops'}</div>
                  <div className="text-[11px] text-slate-400">{lang === 'es' ? 'Sesiones hands-on' : 'Hands-on sessions'}</div>
                </div>
              </button>
              <button onClick={() => goToEvents('talks')}
                className="w-full text-left px-4 py-3 text-sm text-slate-200 hover:bg-slate-700 flex items-center gap-3 border-t border-slate-700/60 transition-colors">
                <span className="text-lg">🎤</span>
                <div>
                  <div className="font-medium">{lang === 'es' ? 'Charlas' : 'Talks'}</div>
                  <div className="text-[11px] text-slate-400">{lang === 'es' ? 'Sesiones cortas' : 'Short sessions'}</div>
                </div>
              </button>
            </div>
          )}
        </div>

        <button onClick={() => setView('advisor')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${active === 'advisor' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>
          {COMPASS} <span className="hidden sm:inline">{lang === 'es' ? 'Modelos' : 'Models'}</span>
        </button>
        <button onClick={() => setView('optimizer')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${active === 'optimizer' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}>
          {SPARKLE} <span className="hidden sm:inline">{lang === 'es' ? 'Optimizar Tokens' : 'Token Optimizer'}</span>
        </button>
        <LanguageSwitcher />
      </div>
    </nav>
  )

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

  if (view === 'advisor') {
    return (
      <div className="min-h-screen bg-slate-900">
        <NavBar active="advisor" />
        <ModelAdvisor onBack={() => setView('home')} />
      </div>
    )
  }

  if (view === 'optimizer') {
    return (
      <div className="min-h-screen bg-slate-900">
        <NavBar active="optimizer" />
        <TokenOptimizer />
      </div>
    )
  }

  if (view === 'events') {
    return (
      <div className="min-h-screen bg-slate-900">
        <NavBar active="events" />
        {selectedEventId ? (
          <EventDetail
            kind={eventsKind}
            id={selectedEventId}
            lang={lang}
            onBack={() => setSelectedEventId(null)}
          />
        ) : eventsKind ? (
          <EventsList
            kind={eventsKind}
            lang={lang}
            onBack={() => setEventsKind(null)}
            onSelect={(id) => setSelectedEventId(id)}
          />
        ) : (
          <EventsHome lang={lang} onSelectKind={(k) => setEventsKind(k)} />
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-8">
      <NavBar active="home" />
      <div className="max-w-5xl mx-auto mb-12 mt-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {t('home.title')}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg">
          {t('home.subtitle')}
        </motion.p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
