import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../../lib/supabase'
import { WORKSHOPS, TALKS } from '../../data/events'

const TALK_BY_ID     = Object.fromEntries(TALKS.map((t)     => [t.id, t]))
const WORKSHOP_BY_ID = Object.fromEntries(WORKSHOPS.map((w) => [w.id, w]))

const STATUS_CONFIG = {
  pending:   { en: 'Pending',   es: 'Pendiente',   color: '#FF991F' },
  contacted: { en: 'Contacted', es: 'Contactado',  color: '#00B8D9' },
  scheduled: { en: 'Scheduled', es: 'Agendado',    color: '#0052CC' },
  declined:  { en: 'Declined',  es: 'Rechazado',   color: '#64748b' }
}
const STATUSES = Object.keys(STATUS_CONFIG)

export default function AdminEvents({ lang }) {
  const [sub, setSub] = useState('talks') // 'talks' | 'workshops'
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')
  const [talks, setTalks]       = useState([])
  const [workshops, setWorkshops] = useState([])
  const [filter, setFilter] = useState('all') // status filter for talks
  const [updatingId, setUpdatingId] = useState(null)

  const t = {
    en: {
      sub: { talks: 'Talk requests', workshops: 'Workshop interests' },
      empty: 'Nothing here yet.',
      filterAll: 'All',
      cols: { talk: 'Talk', user: 'User', message: 'Message', status: 'Status', when: 'When' },
      colsW: { workshop: 'Workshop', user: 'User', when: 'When' },
      saving: 'Saving…'
    },
    es: {
      sub: { talks: 'Solicitudes de charlas', workshops: 'Interés en workshops' },
      empty: 'Aún no hay nada por acá.',
      filterAll: 'Todas',
      cols: { talk: 'Charla', user: 'Usuario', message: 'Mensaje', status: 'Estado', when: 'Fecha' },
      colsW: { workshop: 'Workshop', user: 'Usuario', when: 'Fecha' },
      saving: 'Guardando…'
    }
  }[lang]

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      setLoading(true); setError('')
      try {
        const [talksRes, wsRes] = await Promise.all([
          supabase.from('talk_requests')
            .select('id, user_id, talk_id, name, team, message, status, created_at, profiles!inner(email, name)')
            .order('created_at', { ascending: false }),
          supabase.from('workshop_interests')
            .select('id, user_id, workshop_id, created_at, profiles!inner(email, name)')
            .order('created_at', { ascending: false })
        ])
        if (cancelled) return
        if (talksRes.error) throw talksRes.error
        if (wsRes.error) throw wsRes.error
        setTalks(talksRes.data || [])
        setWorkshops(wsRes.data || [])
      } catch (err) {
        console.warn('[admin-events]', err)
        if (!cancelled) setError(err?.message || 'Error')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  const filteredTalks = useMemo(() => (
    filter === 'all' ? talks : talks.filter((tk) => tk.status === filter)
  ), [talks, filter])

  const updateStatus = async (id, newStatus) => {
    setUpdatingId(id)
    const { error: err } = await supabase
      .from('talk_requests')
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq('id', id)
    setUpdatingId(null)
    if (err) {
      console.warn('[admin-events] update status failed', err)
      return
    }
    setTalks((prev) => prev.map((tk) => tk.id === id ? { ...tk, status: newStatus } : tk))
  }

  const fmtDate = (iso) => iso
    ? new Date(iso).toLocaleString(lang === 'es' ? 'es-AR' : 'en-US', {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
      })
    : '—'

  if (loading) return <div className="text-slate-500 text-center py-12">• • •</div>
  if (error)   return <div className="text-red-400 text-sm py-8">{error}</div>

  return (
    <div>
      {/* Sub-tabs */}
      <div className="inline-flex p-1 rounded-lg bg-slate-800/60 ring-1 ring-slate-700/60 mb-5">
        {Object.entries(t.sub).map(([key, label]) => {
          const count = key === 'talks' ? talks.length : workshops.length
          return (
            <button key={key} onClick={() => setSub(key)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                sub === key ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}>
              {label} <span className="text-slate-500 ml-1">{count}</span>
            </button>
          )
        })}
      </div>

      {sub === 'talks' && (
        <>
          {/* Status filter chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            <button onClick={() => setFilter('all')}
              className={`text-[11px] uppercase tracking-widest px-3 py-1 rounded-full font-bold transition-all ${
                filter === 'all' ? 'bg-white text-slate-900' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}>
              {t.filterAll}
            </button>
            {STATUSES.map((s) => (
              <button key={s} onClick={() => setFilter(s)}
                className={`text-[11px] uppercase tracking-widest px-3 py-1 rounded-full font-bold transition-all ${
                  filter === s ? 'text-slate-900' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
                style={filter === s ? { background: STATUS_CONFIG[s].color } : undefined}>
                {STATUS_CONFIG[s][lang]}
              </button>
            ))}
          </div>

          {filteredTalks.length === 0 ? (
            <div className="text-slate-500 text-center py-12 text-sm">{t.empty}</div>
          ) : (
            <div className="space-y-2">
              {filteredTalks.map((tk, i) => {
                const talk = TALK_BY_ID[tk.talk_id]
                const profile = tk.profiles
                return (
                  <motion.div key={tk.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                    className="p-4 rounded-xl bg-slate-800/60 ring-1 ring-slate-700/60">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">{talk?.icon || '🎤'}</span>
                          <span className="text-white font-semibold truncate">{talk?.title[lang] || tk.talk_id}</span>
                        </div>
                        <div className="text-xs text-slate-400 truncate">
                          {tk.name || profile?.name || (lang === 'es' ? 'Sin nombre' : 'No name')}
                          {' · '}
                          <a href={`mailto:${profile?.email}`} className="hover:text-white">{profile?.email}</a>
                          {tk.team && <span> · {tk.team}</span>}
                        </div>
                      </div>
                      <select value={tk.status}
                        disabled={updatingId === tk.id}
                        onChange={(e) => updateStatus(tk.id, e.target.value)}
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white outline-none cursor-pointer"
                        style={{ background: STATUS_CONFIG[tk.status]?.color || '#64748b' }}>
                        {STATUSES.map((s) => (
                          <option key={s} value={s} className="bg-slate-800 text-white">
                            {STATUS_CONFIG[s][lang]}
                          </option>
                        ))}
                      </select>
                    </div>
                    {tk.message && (
                      <p className="text-sm text-slate-300 leading-relaxed mt-2 p-3 rounded-lg bg-slate-900/40 border-l-2 border-slate-700">
                        {tk.message}
                      </p>
                    )}
                    <div className="text-[10px] text-slate-500 mt-2">
                      {fmtDate(tk.created_at)}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </>
      )}

      {sub === 'workshops' && (
        workshops.length === 0 ? (
          <div className="text-slate-500 text-center py-12 text-sm">{t.empty}</div>
        ) : (
          <div className="rounded-xl bg-slate-800/60 ring-1 ring-slate-700/60 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-900/50">
                <tr className="text-left text-[10px] uppercase tracking-widest text-slate-400">
                  <th className="px-4 py-3 font-bold">{t.colsW.workshop}</th>
                  <th className="px-4 py-3 font-bold">{t.colsW.user}</th>
                  <th className="px-4 py-3 font-bold text-right">{t.colsW.when}</th>
                </tr>
              </thead>
              <tbody>
                {workshops.map((w) => {
                  const ws = WORKSHOP_BY_ID[w.workshop_id]
                  const profile = w.profiles
                  return (
                    <tr key={w.id} className="border-t border-slate-700/40 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{ws?.icon || '🎓'}</span>
                          <span className="text-white font-medium truncate">{ws?.title[lang] || w.workshop_id}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-white truncate">{profile?.name || (lang === 'es' ? 'Sin nombre' : 'No name')}</div>
                        <div className="text-[11px] text-slate-400 truncate">
                          <a href={`mailto:${profile?.email}`} className="hover:text-white">{profile?.email}</a>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right text-slate-400">{fmtDate(w.created_at)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  )
}
