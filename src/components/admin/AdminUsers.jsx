import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../../lib/supabase'
import { module00 } from '../../modules/00-ai-fundamentals/index'
import { module01 } from '../../modules/01-token-awareness/index'
import { module02 } from '../../modules/02-evals-harness/index'
import { module03 } from '../../modules/03-ai-maturity/index'
import { module04 } from '../../modules/04-ai-metrics/index'
import { module05 } from '../../modules/05-ai-non-technical/index'
import { module06 } from '../../modules/06-ai-security/index'
import { module07 } from '../../modules/07-multi-agent/index'
import { module08 } from '../../modules/08-context-engineering/index'
import { module09 } from '../../modules/09-finetune-rag-local/index'
import { module10 } from '../../modules/10-ai-skills-developers/index'
import { module11 } from '../../modules/11-visma-ai-code-of-conduct/index'
import { module12 } from '../../modules/12-agent-skills-context/index'

const ALL_MODULES = [module00, module01, module02, module03, module04, module05, module06, module07, module08, module09, module10, module11, module12]
const MODULE_BY_ID = Object.fromEntries(ALL_MODULES.map((m) => [m.id, m]))
const TOTAL_MODULES = ALL_MODULES.length

export default function AdminUsers({ lang }) {
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')
  const [users, setUsers]       = useState([])
  const [progress, setProgress] = useState({})
  const [query, setQuery]       = useState('')
  const [sortBy, setSortBy]     = useState('last_seen')
  const [selectedUser, setSelectedUser] = useState(null)

  const t = {
    en: {
      search: 'Search by name, email or team…',
      empty: 'No users yet.',
      noResults: 'No users match the search.',
      cols: { user: 'User', team: 'Team', completed: 'Completed', started: 'Started', lastSeen: 'Last seen' },
      sort: { last_seen: 'Last seen', completed: 'Most completed', name: 'Name (A→Z)' },
      sortLabel: 'Sort:',
      modulesProgress: 'Modules progress',
      completed: 'Completed',
      inProgress: 'In progress',
      noProgress: 'No modules started yet.',
      memberSince: 'Member since',
      close: 'Close',
      slide: 'Slide'
    },
    es: {
      search: 'Buscar por nombre, email o equipo…',
      empty: 'Aún no hay usuarios.',
      noResults: 'Ningún usuario coincide con la búsqueda.',
      cols: { user: 'Usuario', team: 'Equipo', completed: 'Completados', started: 'Iniciados', lastSeen: 'Último acceso' },
      sort: { last_seen: 'Último acceso', completed: 'Más completados', name: 'Nombre (A→Z)' },
      sortLabel: 'Orden:',
      modulesProgress: 'Progreso de módulos',
      completed: 'Completado',
      inProgress: 'En curso',
      noProgress: 'Aún no inició ningún módulo.',
      memberSince: 'Miembro desde',
      close: 'Cerrar',
      slide: 'Slide'
    }
  }[lang]

  // Load profiles + all progress in parallel
  useEffect(() => {
    let cancelled = false
    const load = async () => {
      setLoading(true); setError('')
      try {
        const [usersRes, progRes] = await Promise.all([
          supabase.from('profiles').select('id, email, name, team, created_at, last_seen_at'),
          supabase.from('module_progress').select('user_id, module_id, current_slide, completed, completed_at, last_seen_at')
        ])
        if (cancelled) return
        if (usersRes.error) throw usersRes.error
        if (progRes.error) throw progRes.error

        // Index progress by user
        const byUser = {}
        for (const r of progRes.data || []) {
          if (!byUser[r.user_id]) byUser[r.user_id] = []
          byUser[r.user_id].push(r)
        }

        setUsers(usersRes.data || [])
        setProgress(byUser)
      } catch (err) {
        console.warn('[admin-users]', err)
        if (!cancelled) setError(err?.message || 'Error')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  // Compute counts per user once
  const usersWithCounts = useMemo(() => users.map((u) => {
    const rows = progress[u.id] || []
    const completed = rows.filter((r) => r.completed).length
    const started   = rows.length - completed
    return { ...u, _completed: completed, _started: started, _rows: rows }
  }), [users, progress])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let arr = usersWithCounts
    if (q) {
      arr = arr.filter((u) =>
        (u.email || '').toLowerCase().includes(q) ||
        (u.name  || '').toLowerCase().includes(q) ||
        (u.team  || '').toLowerCase().includes(q)
      )
    }
    arr = [...arr] // don't mutate
    if (sortBy === 'last_seen') {
      arr.sort((a, b) => (b.last_seen_at || '').localeCompare(a.last_seen_at || ''))
    } else if (sortBy === 'completed') {
      arr.sort((a, b) => b._completed - a._completed || (b.last_seen_at || '').localeCompare(a.last_seen_at || ''))
    } else if (sortBy === 'name') {
      arr.sort((a, b) => (a.name || a.email).localeCompare(b.name || b.email))
    }
    return arr
  }, [usersWithCounts, query, sortBy])

  const fmtDate = (iso) => iso
    ? new Date(iso).toLocaleDateString(lang === 'es' ? 'es-AR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : '—'
  const fmtRelative = (iso) => {
    if (!iso) return '—'
    const diff = Date.now() - new Date(iso).getTime()
    const mins = Math.floor(diff / 60000)
    if (mins < 1)  return lang === 'es' ? 'recién' : 'just now'
    if (mins < 60) return `${mins}m`
    const hours = Math.floor(mins / 60)
    if (hours < 24) return `${hours}h`
    const days = Math.floor(hours / 24)
    if (days < 30)  return `${days}d`
    return fmtDate(iso)
  }

  if (loading) return <div className="text-slate-500 text-center py-12">• • •</div>
  if (error)   return <div className="text-red-400 text-sm py-8">{error}</div>

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
          placeholder={t.search}
          className="flex-1 px-4 py-2.5 rounded-lg bg-slate-800 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 hidden sm:inline">{t.sortLabel}</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2.5 rounded-lg bg-slate-800 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none text-sm">
            {Object.entries(t.sort).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl bg-slate-800/60 ring-1 ring-slate-700/60 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-900/50">
            <tr className="text-left text-[10px] uppercase tracking-widest text-slate-400">
              <th className="px-4 py-3 font-bold">{t.cols.user}</th>
              <th className="px-4 py-3 font-bold hidden md:table-cell">{t.cols.team}</th>
              <th className="px-4 py-3 font-bold text-right">{t.cols.completed}</th>
              <th className="px-4 py-3 font-bold text-right hidden sm:table-cell">{t.cols.started}</th>
              <th className="px-4 py-3 font-bold text-right hidden md:table-cell">{t.cols.lastSeen}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={5} className="text-center text-slate-500 py-12 text-sm">
                {usersWithCounts.length === 0 ? t.empty : t.noResults}
              </td></tr>
            ) : filtered.map((u) => {
              const pct = TOTAL_MODULES > 0 ? Math.round((u._completed / TOTAL_MODULES) * 100) : 0
              return (
                <tr key={u.id} onClick={() => setSelectedUser(u)}
                  className="border-t border-slate-700/40 hover:bg-slate-700/30 cursor-pointer transition-colors">
                  <td className="px-4 py-3">
                    <div className="text-white font-medium truncate">{u.name || (lang === 'es' ? 'Sin nombre' : 'No name')}</div>
                    <div className="text-[11px] text-slate-400 truncate">{u.email}</div>
                  </td>
                  <td className="px-4 py-3 text-slate-300 hidden md:table-cell">{u.team || '—'}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="text-white font-bold">{u._completed}<span className="text-slate-500 font-normal">/{TOTAL_MODULES}</span></div>
                    <div className="text-[10px] text-slate-500">{pct}%</div>
                  </td>
                  <td className="px-4 py-3 text-right text-slate-300 hidden sm:table-cell">{u._started}</td>
                  <td className="px-4 py-3 text-right text-slate-400 hidden md:table-cell">{fmtRelative(u.last_seen_at)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* User detail drawer */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center px-4 py-8"
            onClick={() => setSelectedUser(null)}>
            <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-slate-900 ring-1 ring-slate-700 rounded-2xl p-6 shadow-2xl">

              <div className="flex items-start justify-between mb-5">
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-white truncate">
                    {selectedUser.name || (lang === 'es' ? 'Sin nombre' : 'No name')}
                  </h3>
                  <div className="text-sm text-slate-400 truncate">{selectedUser.email}</div>
                  {selectedUser.team && <div className="text-[11px] text-slate-500 mt-0.5">{selectedUser.team}</div>}
                </div>
                <button onClick={() => setSelectedUser(null)}
                  className="text-slate-400 hover:text-white text-xs">
                  {t.close}
                </button>
              </div>

              <div className="text-[11px] text-slate-500 mb-5">
                {t.memberSince}: {fmtDate(selectedUser.created_at)}
              </div>

              <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">
                {t.modulesProgress}
              </h4>

              {selectedUser._rows.length === 0 ? (
                <p className="text-slate-500 text-sm">{t.noProgress}</p>
              ) : (
                <div className="space-y-2">
                  {selectedUser._rows
                    .slice()
                    .sort((a, b) => (b.last_seen_at || '').localeCompare(a.last_seen_at || ''))
                    .map((r) => {
                      const mod = MODULE_BY_ID[r.module_id]
                      const totalSlides = mod?.totalSlides || 1
                      const pct = r.completed ? 100 : Math.round((r.current_slide / Math.max(1, totalSlides - 1)) * 100)
                      return (
                        <div key={r.module_id} className="p-3 rounded-lg bg-slate-800/60 ring-1 ring-slate-700/60">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">{mod?.icon || '📄'}</span>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm text-white font-medium truncate">
                                {mod?.title[lang] || r.module_id}
                              </div>
                              <div className="text-[10px] text-slate-500">
                                {r.completed
                                  ? <span className="text-emerald-400">✓ {t.completed}</span>
                                  : <span className="text-blue-400">{t.inProgress} — {t.slide} {r.current_slide + 1}/{totalSlides}</span>}
                              </div>
                            </div>
                            <span className="text-xs text-slate-400 font-bold">{pct}%</span>
                          </div>
                          <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                            <div className="h-full rounded-full transition-all"
                              style={{ width: `${pct}%`, background: mod?.color || '#0052CC' }} />
                          </div>
                        </div>
                      )
                    })}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
