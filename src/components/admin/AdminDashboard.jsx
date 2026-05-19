import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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

function StatCard({ label, value, sub, color = '#0052CC', delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}
      className="p-5 rounded-2xl bg-slate-800/60 ring-1 ring-slate-700/60">
      <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">{label}</div>
      <div className="text-3xl font-bold text-white leading-none mb-1" style={{ color }}>
        {value}
      </div>
      {sub && <div className="text-[11px] text-slate-500 mt-2">{sub}</div>}
    </motion.div>
  )
}

export default function AdminDashboard({ lang }) {
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')
  const [stats, setStats]       = useState(null)

  const t = {
    en: {
      totalUsers: 'Total users',
      activeWeek: 'Active (7d)',
      activeWeekSub: 'Signed in in the last 7 days',
      modulesCompleted: 'Module completions',
      modulesCompletedSub: 'Total times a module has been finished',
      pendingTalks: 'Pending talks',
      pendingTalksSub: 'Talk requests awaiting response',
      workshopInterests: 'Workshop interests',
      workshopInterestsSub: 'Total “I’m interested” clicks',
      topModules: 'Top modules by completion',
      topModulesEmpty: 'No completions yet.',
      modulesStarted: 'Modules started',
      modulesStartedSub: 'In progress (not yet completed)',
      avgPerUser: 'Avg modules per user',
      avgPerUserSub: 'Among users who started at least one'
    },
    es: {
      totalUsers: 'Usuarios totales',
      activeWeek: 'Activos (7d)',
      activeWeekSub: 'Iniciaron sesión en los últimos 7 días',
      modulesCompleted: 'Módulos completados',
      modulesCompletedSub: 'Veces que se completó un módulo',
      pendingTalks: 'Charlas pendientes',
      pendingTalksSub: 'Solicitudes de charla sin responder',
      workshopInterests: 'Interés en workshops',
      workshopInterestsSub: 'Cantidad total de clicks “Me interesa”',
      topModules: 'Módulos más completados',
      topModulesEmpty: 'Todavía no hay completados.',
      modulesStarted: 'Módulos en curso',
      modulesStartedSub: 'Iniciados, sin completar',
      avgPerUser: 'Promedio por usuario',
      avgPerUserSub: 'Entre quienes iniciaron al menos uno'
    }
  }[lang]

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      setLoading(true); setError('')
      try {
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()

        // Parallel fetches
        const [profilesRes, activeRes, progressRes, pendingTalksRes, workshopRes] = await Promise.all([
          supabase.from('profiles').select('id', { count: 'exact', head: true }),
          supabase.from('profiles').select('id', { count: 'exact', head: true }).gte('last_seen_at', sevenDaysAgo),
          supabase.from('module_progress').select('module_id, completed, user_id'),
          supabase.from('talk_requests').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
          supabase.from('workshop_interests').select('id', { count: 'exact', head: true })
        ])

        if (cancelled) return

        if (profilesRes.error || activeRes.error || progressRes.error || pendingTalksRes.error || workshopRes.error) {
          throw (profilesRes.error || activeRes.error || progressRes.error || pendingTalksRes.error || workshopRes.error)
        }

        const allProgress = progressRes.data || []
        const completedRows = allProgress.filter((r) => r.completed)
        const startedRows   = allProgress.filter((r) => !r.completed)

        // Top modules by completion count
        const completionCount = {}
        for (const r of completedRows) {
          completionCount[r.module_id] = (completionCount[r.module_id] || 0) + 1
        }
        const topModules = Object.entries(completionCount)
          .map(([moduleId, count]) => ({ moduleId, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5)

        // Average modules started per user (among those who started at least one)
        const usersWithProgress = new Set(allProgress.map((r) => r.user_id))
        const avgPerUser = usersWithProgress.size > 0
          ? (allProgress.length / usersWithProgress.size).toFixed(1)
          : '0'

        setStats({
          totalUsers:        profilesRes.count ?? 0,
          activeWeek:        activeRes.count ?? 0,
          modulesCompleted:  completedRows.length,
          modulesStarted:    startedRows.length,
          pendingTalks:      pendingTalksRes.count ?? 0,
          workshopInterests: workshopRes.count ?? 0,
          topModules,
          avgPerUser
        })
      } catch (err) {
        console.warn('[admin-dashboard]', err)
        if (!cancelled) setError(err?.message || 'Error')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  if (loading) {
    return <div className="text-slate-500 text-center py-12">• • •</div>
  }
  if (error) {
    return <div className="text-red-400 text-sm py-8">{error}</div>
  }
  if (!stats) return null

  return (
    <div>
      {/* Top row: 4 main stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatCard label={t.totalUsers}        value={stats.totalUsers}        color="#00B8D9" delay={0.00} />
        <StatCard label={t.activeWeek}        value={stats.activeWeek}        sub={t.activeWeekSub} color="#36B37E" delay={0.05} />
        <StatCard label={t.modulesCompleted}  value={stats.modulesCompleted}  sub={t.modulesCompletedSub} color="#0052CC" delay={0.10} />
        <StatCard label={t.pendingTalks}      value={stats.pendingTalks}      sub={t.pendingTalksSub} color={stats.pendingTalks > 0 ? '#FF991F' : '#64748b'} delay={0.15} />
      </div>

      {/* Second row: secondary stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        <StatCard label={t.modulesStarted}    value={stats.modulesStarted}    sub={t.modulesStartedSub} color="#6554C0" delay={0.20} />
        <StatCard label={t.workshopInterests} value={stats.workshopInterests} sub={t.workshopInterestsSub} color="#36B37E" delay={0.25} />
        <StatCard label={t.avgPerUser}        value={stats.avgPerUser}        sub={t.avgPerUserSub} color="#00B8D9" delay={0.30} />
      </div>

      {/* Top modules */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
        className="p-6 rounded-2xl bg-slate-800/60 ring-1 ring-slate-700/60">
        <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-5">
          {t.topModules}
        </h2>
        {stats.topModules.length === 0 ? (
          <p className="text-slate-500 text-sm">{t.topModulesEmpty}</p>
        ) : (
          <div className="space-y-3">
            {stats.topModules.map(({ moduleId, count }, i) => {
              const mod = MODULE_BY_ID[moduleId]
              const maxCount = stats.topModules[0].count
              const pct = (count / maxCount) * 100
              return (
                <div key={moduleId} className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 w-4 text-right">{i + 1}</span>
                  <span className="text-xl w-6">{mod?.icon || '📄'}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white font-medium truncate">
                      {mod?.title[lang] || moduleId}
                    </div>
                    <div className="mt-1.5 h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ delay: 0.4 + i * 0.05 }}
                        className="h-full rounded-full"
                        style={{ background: mod?.color || '#0052CC' }} />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white w-10 text-right">{count}</span>
                </div>
              )
            })}
          </div>
        )}
      </motion.div>
    </div>
  )
}
