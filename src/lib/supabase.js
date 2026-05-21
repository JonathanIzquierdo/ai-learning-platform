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

// We use sessionStorage (instead of the default localStorage) so the AccessGate
// is shown again whenever the user opens a brand-new browser session. Auth uses
// a 6-digit OTP code typed in the same tab, so there is no PKCE flow and no
// cross-tab redirect to worry about — sessionStorage is sufficient for the
// session token alone.
const safeSessionStorage = (typeof window !== 'undefined' && window.sessionStorage)
  ? window.sessionStorage
  : undefined

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        // No URL-based session detection: with OTP the code is typed in-app,
        // so there is nothing to detect in the address bar.
        detectSessionInUrl: false,
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
