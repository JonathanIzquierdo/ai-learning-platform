import { useState, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import ModuleCard from './components/ModuleCard'
import ModulePlayer from './components/ModulePlayer'
import LanguageSwitcher from './components/LanguageSwitcher'
import EventsHome from './components/EventsHome'
import EventsList from './components/EventsList'
import EventDetail from './components/EventDetail'
import AuthModal from './components/AuthModal'
import ProfileView from './components/ProfileView'
import AdminPanel from './components/admin/AdminPanel'
import ModelAdvisor from './tools/model-advisor/ModelAdvisor'
import TokenOptimizer from './tools/TokenOptimizer'
import { useProgress } from './hooks/useProgress'
import { useAuth } from './lib/auth'
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

// Visma isotype — PNG with transparent background, cropped to bounding box,
// 140x96px. Generated from the official Visma brand asset by cropping the
// isotype out of its black canvas and making the black pixels transparent.
const VISMA_LOGO = 'data:image/png;base64,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'

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
  const [authModalOpen, setAuthModalOpen]     = useState(false)
  const [authReason, setAuthReason]           = useState('module')
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

  const startModule = (mod) => {
    if (!user) {
      setAuthReason('module'); setAuthModalOpen(true); return
    }
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

        {/* Auth area */}
        {!authLoading && (user ? (
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
        ) : (
          <button onClick={() => { setAuthReason('module'); setAuthModalOpen(true) }}
            className="px-3 py-1 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all">
            {lang === 'es' ? 'Iniciar sesión' : 'Sign in'}
          </button>
        ))}
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
    <div className="min-h-screen bg-slate-900">
      <NavBar active={active} />
      <AuthModal open={authModalOpen} onClose={() => setAuthModalOpen(false)} lang={lang} reason={authReason} />
      <IncompleteBanner />
      {children}
    </div>
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
