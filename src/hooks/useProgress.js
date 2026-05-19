import { useState, useEffect, useCallback } from 'react'
import { supabase, isSupabaseReady } from '../lib/supabase'
import { useAuth } from '../lib/auth'

const STORAGE_KEY = 'ai_learning_progress'
const MIGRATED_FLAG = 'ai_learning_progress_migrated'

// ---------- localStorage helpers (anonymous users + offline fallback) -------
const readLocal = () => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {} }
  catch { return {} }
}
const writeLocal = (data) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)) } catch {}
}

// ---------- DB shape <-> local shape adapters -------------------------------
// Local shape:  { '00-ai-fundamentals': { currentSlide, completed, completedAt? }, ... }
// DB shape:     rows of { user_id, module_id, current_slide, completed, ... }
const rowsToMap = (rows) => {
  const out = {}
  for (const r of rows || []) {
    out[r.module_id] = {
      currentSlide: r.current_slide ?? 0,
      completed:    Boolean(r.completed),
      completedAt:  r.completed_at ?? undefined
    }
  }
  return out
}

export function useProgress() {
  const { user } = useAuth()
  const [progress, setProgress] = useState(() => readLocal())
  const [loaded, setLoaded] = useState(false)

  // ---------- Load: prefer DB if signed in; merge any leftover localStorage --
  useEffect(() => {
    let cancelled = false

    const load = async () => {
      if (!user || !isSupabaseReady()) {
        setProgress(readLocal())
        setLoaded(true)
        return
      }

      // 1) Pull whatever is in the DB
      const { data: rows } = await supabase
        .from('module_progress')
        .select('module_id, current_slide, completed, completed_at')
        .eq('user_id', user.id)

      const remote = rowsToMap(rows)
      const local  = readLocal()

      // 2) On first login, migrate localStorage → DB once
      const alreadyMigrated = localStorage.getItem(MIGRATED_FLAG)
      if (!alreadyMigrated && Object.keys(local).length > 0) {
        const toUpsert = Object.entries(local).map(([moduleId, p]) => ({
          user_id:       user.id,
          module_id:     moduleId,
          current_slide: p.currentSlide ?? 0,
          completed:     Boolean(p.completed),
          completed_at:  p.completedAt ?? null,
          last_seen_at:  new Date().toISOString()
        }))
        if (toUpsert.length) {
          await supabase.from('module_progress').upsert(toUpsert, {
            onConflict: 'user_id,module_id',
            ignoreDuplicates: false
          })
        }
        localStorage.setItem(MIGRATED_FLAG, '1')

        // Refresh after merge
        const { data: merged } = await supabase
          .from('module_progress')
          .select('module_id, current_slide, completed, completed_at')
          .eq('user_id', user.id)
        if (!cancelled) {
          const finalMap = rowsToMap(merged)
          setProgress(finalMap)
          writeLocal(finalMap) // mirror for offline
          setLoaded(true)
          return
        }
      }

      if (!cancelled) {
        setProgress(remote)
        writeLocal(remote)
        setLoaded(true)
      }
    }

    load()
    return () => { cancelled = true }
  }, [user])

  // ---------- Persistence helpers ------------------------------------------
  const persistRemote = useCallback(async (moduleId, patch) => {
    if (!user || !isSupabaseReady()) return
    const row = {
      user_id:       user.id,
      module_id:     moduleId,
      current_slide: patch.currentSlide ?? 0,
      completed:     Boolean(patch.completed),
      completed_at:  patch.completedAt ?? null,
      last_seen_at:  new Date().toISOString()
    }
    await supabase.from('module_progress').upsert(row, {
      onConflict: 'user_id,module_id'
    })
  }, [user])

  // ---------- Public API (unchanged signatures) ----------------------------
  const getModuleProgress = (moduleId) =>
    progress[moduleId] || { currentSlide: 0, completed: false }

  const setModuleSlide = (moduleId, slideIndex) => {
    setProgress((prev) => {
      const next = {
        ...prev,
        [moduleId]: { ...prev[moduleId], currentSlide: slideIndex, completed: false }
      }
      writeLocal(next)
      persistRemote(moduleId, next[moduleId])
      return next
    })
  }

  const completeModule = (moduleId) => {
    const now = new Date().toISOString()
    setProgress((prev) => {
      const next = {
        ...prev,
        [moduleId]: { ...prev[moduleId], completed: true, completedAt: now }
      }
      writeLocal(next)
      persistRemote(moduleId, next[moduleId])
      return next
    })
  }

  const resetModule = (moduleId) => {
    setProgress((prev) => {
      const next = { ...prev, [moduleId]: { currentSlide: 0, completed: false } }
      writeLocal(next)
      persistRemote(moduleId, next[moduleId])
      return next
    })
  }

  return { progress, loaded, getModuleProgress, setModuleSlide, completeModule, resetModule }
}
