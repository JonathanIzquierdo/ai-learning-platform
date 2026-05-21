import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../lib/auth'
import { isSupabaseReady, ALLOWED_DOMAINS } from '../lib/supabase'

// ──────────────────────────────────────────────────────────────────────────
// AccessGate
// Wraps the whole app. While there is no session, it renders the children
// behind a strong blur + dark overlay and shows a centered access panel.
//
// Auth flow (2-step OTP, same tab):
//   1. User types email      → requestOtpCode → email sent with a numeric code
//   2. User types the code   → verifyOtpCode  → SIGNED_IN
//   3. justSignedIn flips    → 3s of confetti rain + blur fades 12px → 0px
//   4. From then on, no further prompts until the browser session ends.
//
// The code length must match what Supabase is configured to send (this project
// is on 8). If you change it in Supabase Dashboard → Auth → Providers → Email,
// update OTP_LENGTH below to match.
// ──────────────────────────────────────────────────────────────────────────

const REVEAL_MS  = 3000
const OTP_LENGTH = 8

// Build the visual placeholder ("00000000") and a copy-friendly textual form
// ("8-digit") from OTP_LENGTH so every reference to length stays in sync.
const OTP_PLACEHOLDER = '0'.repeat(OTP_LENGTH)

const COPY = {
  en: {
    title: 'Welcome to the AI Learning Platform',
    subtitle: 'Sign in with your Visma email to access courses, workshops and talks.',
    emailLabel: 'Email',
    nameLabel:  'Name (optional)',
    teamLabel:  'Team / Area (optional)',
    sendCode:   'Send code',
    sending:    'Sending…',
    codeStepTitle: 'Enter your code',
    codeStepBody:  `We sent a ${OTP_LENGTH}-digit code to {email}. Paste or type it below — it expires in 10 minutes.`,
    codeLabel:  `${OTP_LENGTH}-digit code`,
    verify:     'Verify and enter',
    verifying:  'Verifying…',
    again:      'Use a different email',
    resend:     'Resend code',
    onlyDomain: 'Only emails from {domains} are allowed.',
    footer:     'No password. One-time code, expires in 10 minutes.',
    configError:'Sign-in is not configured. Contact the project owner.',
    reveal:     'Access granted',
    invalidCode:'Invalid or expired code. Please try again.'
  },
  es: {
    title: 'Bienvenido a la Plataforma de Aprendizaje de IA',
    subtitle: 'Ingresá con tu mail de Visma para acceder a los cursos, workshops y charlas.',
    emailLabel: 'Email',
    nameLabel:  'Nombre (opcional)',
    teamLabel:  'Equipo / Área (opcional)',
    sendCode:   'Enviar código',
    sending:    'Enviando…',
    codeStepTitle: 'Ingresá el código',
    codeStepBody:  `Te enviamos un código de ${OTP_LENGTH} dígitos a {email}. Pegalo o escribilo abajo — expira en 10 minutos.`,
    codeLabel:  `Código de ${OTP_LENGTH} dígitos`,
    verify:     'Verificar y entrar',
    verifying:  'Verificando…',
    again:      'Usar otro email',
    resend:     'Reenviar código',
    onlyDomain: 'Sólo se permiten emails de {domains}.',
    footer:     'Sin contraseña. Código de un solo uso, expira en 10 minutos.',
    configError:'El inicio de sesión no está configurado. Contactá al owner del proyecto.',
    reveal:     'Acceso concedido',
    invalidCode:'Código inválido o expirado. Probá de nuevo.'
  }
}

// Drop a few cascading confetti bursts from the top of the screen for `ms`.
// We treat canvas-confetti as optional — if it's missing we skip silently.
function rainConfetti(ms = REVEAL_MS) {
  const confetti = typeof window !== 'undefined' ? window.confetti : null
  if (!confetti) return

  const end = Date.now() + ms
  const colors = ['#00B8D9', '#0052CC', '#6554C0', '#36B37E', '#FF991F', '#DE350B', '#ffffff']

  // Light continuous rain across the top.
  const tick = () => {
    const remaining = end - Date.now()
    if (remaining <= 0) return
    confetti({
      particleCount: 6,
      angle: 270,             // straight down
      spread: 120,
      startVelocity: 18,      // gentle launch
      gravity: 0.55,          // slow fall — "paper rain" feel
      ticks: 260,
      origin: { x: Math.random(), y: -0.05 },
      colors,
      scalar: 1.05,
      shapes: ['square', 'circle']
    })
    requestAnimationFrame(tick)
  }
  tick()

  // Two celebratory bursts at the start, from the corners.
  setTimeout(() => {
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 70,
      startVelocity: 45,
      gravity: 0.9,
      origin: { x: 0, y: 0.4 },
      colors
    })
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 70,
      startVelocity: 45,
      gravity: 0.9,
      origin: { x: 1, y: 0.4 },
      colors
    })
  }, 100)
}

export default function AccessGate({ children, lang = 'en' }) {
  const {
    user, loading, justSignedIn, clearJustSignedIn,
    requestOtpCode, verifyOtpCode
  } = useAuth()

  // Two-step OTP form state
  const [step, setStep]   = useState('email') // 'email' | 'code'
  const [email, setEmail] = useState('')
  const [name, setName]   = useState('')
  const [team, setTeam]   = useState('')
  const [code, setCode]   = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | verifying | error
  const [errorMsg, setErrorMsg] = useState('')

  // Reveal animation state
  const [revealing, setRevealing] = useState(false)
  const revealStartedRef = useRef(false)
  const codeInputRef = useRef(null)

  const t = COPY[lang] || COPY.en
  const domainsLabel = ALLOWED_DOMAINS.map((d) => '@' + d).join(', ')

  // When the user transitions from "no session" to "session + justSignedIn",
  // play the reveal animation once.
  useEffect(() => {
    if (user && justSignedIn && !revealStartedRef.current) {
      revealStartedRef.current = true
      setRevealing(true)
      rainConfetti(REVEAL_MS)
      const timer = setTimeout(() => {
        setRevealing(false)
        clearJustSignedIn()
      }, REVEAL_MS)
      return () => clearTimeout(timer)
    }
  }, [user, justSignedIn, clearJustSignedIn])

  // Focus the code input when we move to step 2
  useEffect(() => {
    if (step === 'code' && codeInputRef.current) {
      // small delay to wait for the animation frame
      const id = setTimeout(() => codeInputRef.current?.focus(), 50)
      return () => clearTimeout(id)
    }
  }, [step])

  const handleRequest = async (e) => {
    e?.preventDefault?.()
    if (!isSupabaseReady()) {
      setStatus('error'); setErrorMsg(t.configError); return
    }
    if (!email) return
    setStatus('sending'); setErrorMsg('')
    const { error } = await requestOtpCode(email, { name, team })
    if (error) {
      setStatus('error'); setErrorMsg(error.message || 'Error')
    } else {
      setStatus('idle')
      setStep('code')
      setCode('')
    }
  }

  const handleVerify = async (codeArg) => {
    const finalCode = (codeArg ?? code).replace(/\D/g, '')
    if (finalCode.length !== OTP_LENGTH) return
    setStatus('verifying'); setErrorMsg('')
    const { error } = await verifyOtpCode(email, finalCode)
    if (error) {
      setStatus('error')
      setErrorMsg(error.message?.toLowerCase().includes('invalid')
        ? t.invalidCode
        : (error.message || t.invalidCode))
      // keep value so user can correct
    } else {
      // success — SIGNED_IN will flip via onAuthStateChange and trigger reveal
      setStatus('idle')
    }
  }

  const handleCodeChange = (raw) => {
    // strip non-digits, cap at OTP_LENGTH
    const clean = raw.replace(/\D/g, '').slice(0, OTP_LENGTH)
    setCode(clean)
    if (errorMsg) { setErrorMsg(''); setStatus('idle') }
    // auto-submit once we hit the full code length
    if (clean.length === OTP_LENGTH) {
      handleVerify(clean)
    }
  }

  const handleResend = async () => {
    if (status === 'sending') return
    setStatus('sending'); setErrorMsg('')
    const { error } = await requestOtpCode(email, { name, team })
    if (error) { setStatus('error'); setErrorMsg(error.message || 'Error') }
    else { setStatus('idle'); setCode('') }
  }

  const resetToEmail = () => {
    setStep('email')
    setCode('')
    setStatus('idle')
    setErrorMsg('')
  }

  // Initial bootstrap — avoid the flash of "blurred → instant unblur" for
  // returning users with a valid session in the same browser session.
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-slate-700 border-t-blue-500 animate-spin" />
      </div>
    )
  }

  // Authenticated AND not in the middle of the reveal → show the app crisp.
  if (user && !revealing) {
    return children
  }

  const showGate = !user
  const isSending   = status === 'sending'
  const isVerifying = status === 'verifying'

  return (
    <div className="relative min-h-screen bg-slate-900">
      {/* Underlying app — always rendered so the reveal can animate over it */}
      <motion.div
        aria-hidden={showGate}
        initial={false}
        animate={{
          filter: showGate ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{
          duration: revealing ? REVEAL_MS / 1000 : 0,
          ease: 'easeOut'
        }}
        style={{
          pointerEvents: showGate ? 'none' : 'auto',
          filter: showGate ? 'blur(12px)' : undefined,
          transformOrigin: 'center top'
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>

      {/* Dark overlay while the gate is up */}
      <AnimatePresence>
        {showGate && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-slate-950/70"
          />
        )}
      </AnimatePresence>

      {/* Centered access panel */}
      <AnimatePresence>
        {showGate && (
          <motion.div
            key="gate"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="w-full max-w-md bg-slate-900/95 ring-1 ring-slate-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">
                  Visma · LATAM
                </span>
              </div>

              <AnimatePresence mode="wait">
                {step === 'email' ? (
                  <motion.div
                    key="step-email"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {t.title}
                    </h2>
                    <p className="text-slate-400 text-sm mb-6">{t.subtitle}</p>

                    <form onSubmit={handleRequest} className="space-y-3">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 block">
                          {t.emailLabel}
                        </label>
                        <input
                          type="email" required value={email} autoFocus
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={`tu.nombre${domainsLabel.split(',')[0]}`}
                          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 block">{t.nameLabel}</label>
                          <input
                            type="text" value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 block">{t.teamLabel}</label>
                          <input
                            type="text" value={team}
                            onChange={(e) => setTeam(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit" disabled={isSending || !email}
                        className="w-full mt-2 px-6 py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {isSending ? t.sending : t.sendCode + ' →'}
                      </button>

                      {status === 'error' && (
                        <p className="text-xs text-red-400 mt-2">{errorMsg}</p>
                      )}
                      <p className="text-[11px] text-slate-500 text-center mt-3">
                        {t.onlyDomain.replace('{domains}', domainsLabel)} · {t.footer}
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step-code"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {t.codeStepTitle}
                    </h2>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      {t.codeStepBody.replace('{email}', email)}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 block">
                          {t.codeLabel}
                        </label>
                        <input
                          ref={codeInputRef}
                          type="text"
                          inputMode="numeric"
                          autoComplete="one-time-code"
                          pattern="[0-9]*"
                          maxLength={OTP_LENGTH}
                          value={code}
                          onChange={(e) => handleCodeChange(e.target.value)}
                          placeholder={OTP_PLACEHOLDER}
                          disabled={isVerifying}
                          // Tighter letter-spacing for 8 chars so it still fits
                          // comfortably on mobile (max-w-md panel).
                          className="w-full px-4 py-4 rounded-lg bg-slate-800 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none text-center text-2xl sm:text-3xl font-mono tracking-[0.35em] tabular-nums disabled:opacity-60"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => handleVerify()}
                        disabled={code.length !== OTP_LENGTH || isVerifying}
                        className="w-full mt-2 px-6 py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {isVerifying ? t.verifying : t.verify + ' →'}
                      </button>

                      {status === 'error' && (
                        <p className="text-xs text-red-400 mt-2">{errorMsg}</p>
                      )}

                      <div className="flex items-center justify-between pt-2 text-xs">
                        <button
                          type="button"
                          onClick={resetToEmail}
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          ← {t.again}
                        </button>
                        <button
                          type="button"
                          onClick={handleResend}
                          disabled={isSending}
                          className="text-blue-400 hover:text-blue-300 transition-colors disabled:opacity-40"
                        >
                          {isSending ? t.sending : t.resend}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tiny "Access granted" pill that fades in while the blur lifts */}
      <AnimatePresence>
        {revealing && (
          <motion.div
            key="reveal-pill"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full
                       bg-emerald-500/20 ring-1 ring-emerald-400/50 text-emerald-200
                       text-xs font-semibold tracking-wide backdrop-blur-md flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t.reveal}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
