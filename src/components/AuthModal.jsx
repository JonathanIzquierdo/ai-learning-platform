import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../lib/auth'
import { isSupabaseReady, ALLOWED_DOMAINS } from '../lib/supabase'

export default function AuthModal({ open, onClose, lang = 'en', reason = 'module' }) {
  const { signInWithMagicLink } = useAuth()
  const [email, setEmail] = useState('')
  const [name, setName]   = useState('')
  const [team, setTeam]   = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (!open) {
      setStatus('idle'); setErrorMsg('')
      setEmail(''); setName(''); setTeam('')
    }
  }, [open])

  const t = {
    en: {
      title: 'Sign in to continue',
      subtitleModule: 'To start a module and keep your progress across devices, sign in with your Visma email.',
      subtitleEvent:  'To request a session, sign in with your Visma email.',
      emailLabel: 'Email',
      nameLabel:  'Name (optional)',
      teamLabel:  'Team / Area (optional)',
      send:       'Send magic link',
      sending:    'Sending…',
      sentTitle:  'Check your inbox',
      sentBody:   'We sent a magic link to {email}. Click it to sign in. It expires in 1 hour.',
      close:      'Close',
      onlyDomain: 'Only emails from {domains} are allowed.',
      configError: 'Sign-in is not configured. Contact the project owner.',
      footer:     'No password. We send you a one-time link.'
    },
    es: {
      title: 'Iniciá sesión para continuar',
      subtitleModule: 'Para empezar un módulo y mantener tu progreso entre dispositivos, iniciá sesión con tu email de Visma.',
      subtitleEvent:  'Para solicitar una sesión, iniciá sesión con tu email de Visma.',
      emailLabel: 'Email',
      nameLabel:  'Nombre (opcional)',
      teamLabel:  'Equipo / Área (opcional)',
      send:       'Enviar enlace mágico',
      sending:    'Enviando…',
      sentTitle:  'Revisá tu bandeja',
      sentBody:   'Te enviamos un enlace mágico a {email}. Hacé click para entrar. Expira en 1 hora.',
      close:      'Cerrar',
      onlyDomain: 'Sólo se permiten emails de {domains}.',
      configError: 'El inicio de sesión no está configurado. Contactá al owner del proyecto.',
      footer:     'Sin contraseña. Te enviamos un link de un solo uso.'
    }
  }[lang]

  const subtitle = reason === 'event' ? t.subtitleEvent : t.subtitleModule
  const domainsLabel = ALLOWED_DOMAINS.map((d) => '@' + d).join(', ')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isSupabaseReady()) {
      setStatus('error'); setErrorMsg(t.configError); return
    }
    if (!email) return
    setStatus('sending'); setErrorMsg('')
    const { error } = await signInWithMagicLink(email, { name, team })
    if (error) { setStatus('error'); setErrorMsg(error.message || 'Error') }
    else setStatus('sent')
  }

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
        onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md bg-slate-900 ring-1 ring-slate-700 rounded-2xl p-8 shadow-2xl">
          {status !== 'sent' ? (
            <>
              <h2 className="text-2xl font-bold text-white mb-2">{t.title}</h2>
              <p className="text-slate-400 text-sm mb-6">{subtitle}</p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 block">
                    {t.emailLabel}
                  </label>
                  <input type="email" required value={email} autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={`you${domainsLabel.split(',')[0]}`}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 block">{t.nameLabel}</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 block">{t.teamLabel}</label>
                    <input type="text" value={team} onChange={(e) => setTeam(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>

                <button type="submit" disabled={status === 'sending' || !email}
                  className="w-full mt-2 px-6 py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed">
                  {status === 'sending' ? t.sending : t.send + ' →'}
                </button>

                {status === 'error' && (
                  <p className="text-xs text-red-400 mt-2">{errorMsg}</p>
                )}
                <p className="text-[11px] text-slate-500 text-center mt-3">
                  {t.onlyDomain.replace('{domains}', domainsLabel)} · {t.footer}
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="text-5xl mb-4">📬</div>
              <h2 className="text-2xl font-bold text-white mb-3">{t.sentTitle}</h2>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {t.sentBody.replace('{email}', email)}
              </p>
              <button onClick={onClose}
                className="px-6 py-2.5 rounded-lg font-medium text-slate-300 hover:text-white bg-slate-800 transition-all">
                {t.close}
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
