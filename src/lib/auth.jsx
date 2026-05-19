import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase, isSupabaseReady, isAllowedEmail } from './supabase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  // Bootstrap session on mount
  useEffect(() => {
    if (!isSupabaseReady()) {
      setLoading(false)
      return
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session ?? null)
      setLoading(false)
    })

    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession ?? null)
    })

    return () => sub.subscription?.unsubscribe()
  }, [])

  // Load profile + admin flag whenever session changes
  useEffect(() => {
    if (!session?.user) {
      setProfile(null)
      setIsAdmin(false)
      return
    }
    let cancelled = false

    const loadProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, email, name, team, created_at, last_seen_at')
        .eq('id', session.user.id)
        .maybeSingle()
      if (cancelled) return
      if (!error) setProfile(data ?? null)

      // Best-effort last_seen update
      supabase.from('profiles')
        .update({ last_seen_at: new Date().toISOString() })
        .eq('id', session.user.id)
        .then(() => {})
    }

    const loadAdmin = async () => {
      const { data } = await supabase
        .from('admins')
        .select('email')
        .eq('email', session.user.email)
        .maybeSingle()
      if (cancelled) return
      setIsAdmin(Boolean(data))
    }

    loadProfile()
    loadAdmin()
    return () => { cancelled = true }
  }, [session])

  const signInWithMagicLink = useCallback(async (email, metadata = {}) => {
    if (!isSupabaseReady()) {
      return { error: { message: 'Auth is not configured. Set Supabase env vars.' } }
    }
    const normalized = email.trim().toLowerCase()
    if (!isAllowedEmail(normalized)) {
      return { error: { message: 'Only @visma.com email addresses are allowed.' } }
    }
    return supabase.auth.signInWithOtp({
      email: normalized,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          name: metadata.name || null,
          team: metadata.team || null
        }
      }
    })
  }, [])

  const updateProfile = useCallback(async (updates) => {
    if (!session?.user) return { error: { message: 'Not authenticated' } }
    const allowed = {}
    if (typeof updates.name !== 'undefined') allowed.name = updates.name
    if (typeof updates.team !== 'undefined') allowed.team = updates.team
    allowed.updated_at = new Date().toISOString()
    const { data, error } = await supabase
      .from('profiles')
      .update(allowed)
      .eq('id', session.user.id)
      .select()
      .maybeSingle()
    if (!error && data) setProfile(data)
    return { data, error }
  }, [session])

  const signOut = useCallback(async () => {
    if (!isSupabaseReady()) return
    await supabase.auth.signOut()
    setSession(null)
    setProfile(null)
    setIsAdmin(false)
  }, [])

  const value = {
    session,
    user: session?.user ?? null,
    profile,
    isAdmin,
    loading,
    signInWithMagicLink,
    updateProfile,
    signOut
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
