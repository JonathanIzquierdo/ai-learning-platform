import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../../lib/auth'
import AdminDashboard from './AdminDashboard'
import AdminUsers from './AdminUsers'
import AdminEvents from './AdminEvents'

export default function AdminPanel({ lang, onBack }) {
  const { isAdmin, loading } = useAuth()
  const [tab, setTab] = useState('dashboard')

  const t = {
    en: {
      back: '← Back',
      title: 'Admin',
      subtitle: 'Insights, users, and event requests across the platform.',
      forbidden: 'You don’t have access to this area.',
      forbiddenSub: 'If you believe this is a mistake, contact the project owner.',
      tabs: { dashboard: 'Dashboard', users: 'Users', events: 'Events' }
    },
    es: {
      back: '← Volver',
      title: 'Admin',
      subtitle: 'Métricas, usuarios y solicitudes de eventos de toda la plataforma.',
      forbidden: 'No tenés acceso a esta sección.',
      forbiddenSub: 'Si creés que es un error, contactá al owner del proyecto.',
      tabs: { dashboard: 'Dashboard', users: 'Usuarios', events: 'Eventos' }
    }
  }[lang]

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center text-slate-500">
        • • •
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">🔒</div>
        <h1 className="text-2xl font-bold text-white mb-2">{t.forbidden}</h1>
        <p className="text-slate-400 text-sm mb-6">{t.forbiddenSub}</p>
        <button onClick={onBack}
          className="px-5 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors text-sm font-medium">
          {t.back}
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button onClick={onBack}
        className="text-slate-400 hover:text-white text-sm font-medium mb-6 transition-colors">
        {t.back}
      </button>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{t.title}</h1>
          <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold">
            Admin
          </span>
        </div>
        <p className="text-slate-400 text-base">{t.subtitle}</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b border-slate-800">
        {Object.entries(t.tabs).map(([key, label]) => (
          <button key={key} onClick={() => setTab(key)}
            className={`px-4 py-2 text-sm font-medium transition-all relative ${
              tab === key ? 'text-white' : 'text-slate-400 hover:text-slate-200'
            }`}>
            {label}
            {tab === key && (
              <motion.div layoutId="admin-tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
            )}
          </button>
        ))}
      </div>

      {tab === 'dashboard' && <AdminDashboard lang={lang} />}
      {tab === 'users'     && <AdminUsers     lang={lang} />}
      {tab === 'events'    && <AdminEvents    lang={lang} />}
    </div>
  )
}
