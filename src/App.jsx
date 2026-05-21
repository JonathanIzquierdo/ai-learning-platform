import { useState, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import ModuleCard from './components/ModuleCard'
import ModulePlayer from './components/ModulePlayer'
import LanguageSwitcher from './components/LanguageSwitcher'
import EventsHome from './components/EventsHome'
import EventsList from './components/EventsList'
import EventDetail from './components/EventDetail'
import AccessGate from './components/AccessGate'
import ProfileView from './components/ProfileView'
import AdminPanel from './components/admin/AdminPanel'
import ModelAdvisor from './tools/model-advisor/ModelAdvisor'
import TokenOptimizer from './tools/TokenOptimizer'
import { useProgress } from './hooks/useProgress'
import { useAuth } from './lib/auth'
import { VISMA_LOGO } from './assets/vismaLogo'
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

// ────────────────────────────────────────────────────────────────────────────
// Filter chips — declarative mapping over each module's `tags` / `acceleratorTags`.
// Adding a new chip only requires adding an entry here; no need to touch each module.
// `match` receives the module and returns true if it belongs to that chip.
// ────────────────────────────────────────────────────────────────────────────
const hasAnyTag = (mod, needles) => {
  const bag = new Set([...(mod.tags || []), ...(mod.acceleratorTags || [])])
  return needles.some((n) => bag.has(n))
}

const FILTERS = [
  {
    id: 'all',
    label: { en: 'All', es: 'Todos' },
    match: () => true,
  },
  {
    id: 'fundamentals',
    label: { en: 'Fundamentals', es: 'Fundamentos' },
    match: (m) => hasAnyTag(m, ['fundamentals', 'tokens', 'literacy', 'ai-foundations', 'onboarding']),
  },
  {
    id: 'leaders',
    label: { en: 'For Leaders', es: 'Para Líderes' },
    match: (m) => hasAnyTag(m, ['maturity', 'metrics', 'kpis', 'delegation', 'orchestration', 'ai-maturity', 'leadership', 'strategy']),
  },
  {
    id: 'developers',
    label: { en: 'For Developers', es: 'Para Devs' },
    match: (m) => hasAnyTag(m, ['agents', 'multi-agent', 'evals', 'context-engineering', 'mcp', 'rag', 'skills', 'developers', 'coding', 'agent-skills']),
  },
  {
    id: 'non-technical',
    label: { en: 'Non-Technical', es: 'No Técnicos' },
    match: (m) => hasAnyTag(m, ['non-technical', 'ops', 'hr', 'finance', 'marketing', 'business']),
  },
  {
    id: 'security',
    label: { en: 'Security & Ethics', es: 'Seguridad y Ética' },
    match: (m) => hasAnyTag(m, ['security', 'privacy', 'code-of-conduct', 'ethics', 'compliance']),
  },
  {
    id: 'advanced',
    label: { en: 'Advanced', es: 'Avanzado' },
    match: (m) => hasAnyTag(m, ['fine-tuning', 'local', 'self-hosted', 'advanced']),
  },
]

const COMPASS  = String.fromCodePoint(0x1F9ED)
const SPARKLE  = String.fromCodePoint(0x2728)
const CALENDAR = String.fromCodePoint(0x1F4C5)
const USER     = String.fromCodePoint(0x1F464)
const SHIELD   = String.fromCodePoint(0x1F6E1)

export default function App() {
  const { t, i18n } = useTranslation()
  const { getModuleProgress, completeModule } = useProgress()
  const { user, profile, isAdmin, signOut, loading: authLoading } = useAuth()
  const [activeModule, setActiveModule]   = useState(null)
  const [view, setView]                   = useState('home')
  const [eventsKind, setEventsKind]       = useState(null)
  const [selectedEventId, setSelectedEventId] = useState(null)
  const [eventsMenuOpen, setEventsMenuOpen]   = useState(false)
  const [userMenuOpen, setUserMenuOpen]       = useState(false)
  const [activeFilter, setActiveFilter]       = useState('all')
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'
  const eventsMenuRef = useRef(null)
  const userMenuRef   = useRef(null)

  const profileIncomplete = Boolean(user && profile && (!profile.name || !profile.team))

  useEffect(() => {
    const handleClick = (e) => {
      if (eventsMenuRef.current && !eventsMenuRef.current.contains(e.target)) setEventsMenuOpen(false)
      if (userMenuRef.current   && !userMenuRef.current.contains(e.target))   setUserMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Pre-compute, per filter, how many modules match.
  // We hide chips that match zero modules so the strip stays clean.
  const filterCounts = useMemo(() => {
    const counts = {}
    for (const f of FILTERS) counts[f.id] = ALL_MODULES.filter(f.match).length
    return counts
  }, [])

  const visibleFilters = FILTERS.filter((f) => f.id === 'all' || filterCounts[f.id] > 0)

  const filteredModules = useMemo(() => {
    const f = FILTERS.find((x) => x.id === activeFilter) || FILTERS[0]
    return ALL_MODULES.filter(f.match)
  }, [activeFilter])

  const goToEvents = (kind) => {
    setView('events'); setEventsKind(kind); setSelectedEventId(null); setEventsMenuOpen(false)
  }

  const goToProfile = () => {
    setView('profile'); setUserMenuOpen(false); setEventsKind(null); setSelectedEventId(null)
  }

  const goToAdmin = () => {
    setView('admin'); setUserMenuOpen(false); setEventsKind(null); setSelectedEventId(null)
  }

  // The AccessGate guarantees that by the time we get here interactively
  // there's always a session, so we no longer need to re-check `user` before
  // entering a module.
  const startModule = (mod) => {
    setActiveModule(mod)
  }

  const NavBar = ({ active }) => (
    <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-6">
      <div className="flex items-center gap-3">
        <img src={VISMA_LOGO} alt="Visma" className="h-8 w-auto block" />
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

        {/* Admin button — only visible to admins */}
        {isAdmin && (
          <button onClick={goToAdmin}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${active === 'admin' ? 'bg-amber-500 text-slate-900' : 'text-amber-300 hover:text-amber-200'}`}>
            {SHIELD} <span className="hidden sm:inline">Admin</span>
          </button>
        )}

        <LanguageSwitcher />

        {/* Auth area — always logged in past the gate */}
        {!authLoading && user && (
          <div className="relative" ref={userMenuRef}>
            <button onClick={() => setUserMenuOpen((o) => !o)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                active === 'profile'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700'
              }`}>
              {USER} <span className="hidden sm:inline max-w-[140px] truncate">{profile?.name || user.email}</span>
              {profileIncomplete && (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 ml-0.5" aria-label="profile incomplete" />
              )}
              <span className="text-[10px] opacity-70">▾</span>
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-60 rounded-xl bg-slate-800 ring-1 ring-slate-700 shadow-xl overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-slate-700/60">
                  <div className="text-sm font-medium text-white truncate">
                    {profile?.name || (lang === 'es' ? 'Sin nombre' : 'No name')}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">{user.email}</div>
                  {profile?.team && <div className="text-[11px] text-slate-500 truncate mt-1">{profile.team}</div>}
                </div>
                <button onClick={goToProfile}
                  className="w-full text-left px-4 py-3 text-sm text-slate-200 hover:bg-slate-700 transition-colors flex items-center justify-between">
                  <span>{lang === 'es' ? 'Mi perfil' : 'My profile'}</span>
                  {profileIncomplete && <span className="text-[10px] text-amber-300">•</span>}
                </button>
                <button onClick={() => { signOut(); setUserMenuOpen(false) }}
                  className="w-full text-left px-4 py-3 text-sm text-slate-200 hover:bg-slate-700 transition-colors border-t border-slate-700/60">
                  {lang === 'es' ? 'Cerrar sesión' : 'Sign out'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )

  if (activeModule) {
    const modProgress = getModuleProgress(activeModule.id)
    return (
      <AccessGate lang={lang}>
        <ModulePlayer
          module={activeModule}
          initialSlide={modProgress.completed ? 0 : modProgress.currentSlide || 0}
          onComplete={() => { completeModule(activeModule.id); setActiveModule(null) }}
          onBack={() => setActiveModule(null)}
        />
      </AccessGate>
    )
  }

  const IncompleteBanner = () => (profileIncomplete && view !== 'profile') ? (
    <div className="max-w-5xl mx-auto px-4 -mt-2 mb-4">
      <button onClick={goToProfile}
        className="w-full p-3 rounded-xl bg-amber-500/10 ring-1 ring-amber-500/40 text-amber-200 text-sm flex items-center justify-between hover:bg-amber-500/15 transition-colors">
        <span>
          ⚠️ {lang === 'es'
            ? 'Tu perfil está incompleto. Agregá tu nombre y equipo.'
            : 'Your profile is incomplete. Add your name and team.'}
        </span>
        <span className="text-amber-100 font-medium">
          {lang === 'es' ? 'Completar →' : 'Complete →'}
        </span>
      </button>
    </div>
  ) : null

  const wrap = (children, active) => (
    <AccessGate lang={lang}>
      <div className="min-h-screen bg-slate-900">
        <NavBar active={active} />
        <IncompleteBanner />
        {children}
      </div>
    </AccessGate>
  )

  if (view === 'advisor')   return wrap(<ModelAdvisor onBack={() => setView('home')} />, 'advisor')
  if (view === 'optimizer') return wrap(<TokenOptimizer />, 'optimizer')
  if (view === 'profile')   return wrap(<ProfileView lang={lang} onBack={() => setView('home')} />, 'profile')
  if (view === 'admin')     return wrap(<AdminPanel  lang={lang} onBack={() => setView('home')} />, 'admin')

  if (view === 'events') {
    return wrap(
      selectedEventId ? (
        <EventDetail kind={eventsKind} id={selectedEventId} lang={lang}
          onBack={() => setSelectedEventId(null)} />
      ) : eventsKind ? (
        <EventsList kind={eventsKind} lang={lang}
          onBack={() => setEventsKind(null)}
          onSelect={(id) => setSelectedEventId(id)} />
      ) : (
        <EventsHome lang={lang} onSelectKind={(k) => setEventsKind(k)} />
      ),
      'events'
    )
  }

  return wrap(
    <div className="px-4 py-8">
      <div className="max-w-5xl mx-auto mb-8 mt-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {t('home.title')}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg">
          {t('home.subtitle')}
        </motion.p>
      </div>

      {/* ─── Filter chips ─────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto mb-6">
        <div
          className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4
                     [scrollbar-width:none] [-ms-overflow-style:none]
                     [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label={lang === 'es' ? 'Filtrar módulos' : 'Filter modules'}
        >
          {visibleFilters.map((f) => {
            const isActive = activeFilter === f.id
            const count = filterCounts[f.id]
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(f.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                            transition-all duration-200 flex items-center gap-2
                            ${isActive
                              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/50'
                              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white ring-1 ring-slate-700/60'}`}
              >
                <span>{f.label[lang]}</span>
                <span
                  className={`text-[11px] tabular-nums px-1.5 py-0.5 rounded-full
                              ${isActive ? 'bg-blue-500/40 text-blue-50' : 'bg-slate-700/70 text-slate-400'}`}
                >
                  {count}
                </span>
              </button>
            )
          })}

          {activeFilter !== 'all' && (
            <button
              onClick={() => setActiveFilter('all')}
              className="shrink-0 px-3 py-2 rounded-full text-sm font-medium text-slate-400
                         hover:text-white hover:bg-slate-800 transition-all flex items-center gap-1"
              aria-label={lang === 'es' ? 'Limpiar filtro' : 'Clear filter'}
            >
              <span className="text-base leading-none">×</span>
              <span className="hidden sm:inline">{lang === 'es' ? 'Limpiar' : 'Clear'}</span>
            </button>
          )}
        </div>
      </div>

      {/* ─── Module grid ──────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredModules.map((mod, i) => (
              <ModuleCard
                key={mod.id}
                module={mod}
                progress={getModuleProgress(mod.id)}
                onStart={() => startModule(mod)}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredModules.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            {lang === 'es'
              ? 'No hay módulos en esta categoría todavía.'
              : 'No modules in this category yet.'}
          </div>
        )}
      </div>
    </div>,
    'home'
  )
}
