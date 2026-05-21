import { createClient } from '@supabase/supabase-js'

const supabaseUrl     = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // Don't crash the app in case the env is missing — log clearly so it's obvious.
  console.error(
    '[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. ' +
    'Auth and persistence will be disabled. Add them to .env.local (dev) or Vercel env vars (prod).'
  )
}

// Use sessionStorage instead of the default localStorage so that the AccessGate
// is shown again whenever the user opens a brand-new browser session (closing
// every tab/window of the site clears the session). Inside the same session,
// the user navigates everything (modules, events, etc.) without being asked
// for the email again — the magic-link redirect lands them already authenticated.
const safeSessionStorage = (typeof window !== 'undefined' && window.sessionStorage)
  ? window.sessionStorage
  : undefined

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: 'pkce',
        storage: safeSessionStorage,
        storageKey: 'visma-ai-learning-auth'
      }
    })
  : null

export const isSupabaseReady = () => supabase !== null

export const ALLOWED_DOMAINS =
  (import.meta.env.VITE_ALLOWED_EMAIL_DOMAINS || 'visma.com')
    .split(',')
    .map((d) => d.trim().toLowerCase())
    .filter(Boolean)

export const isAllowedEmail = (email) => {
  if (!email || typeof email !== 'string') return false
  const domain = email.split('@')[1]?.toLowerCase()
  return Boolean(domain && ALLOWED_DOMAINS.includes(domain))
}
