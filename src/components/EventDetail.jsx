import { useState } from 'react'
import { motion } from 'framer-motion'
import { WORKSHOPS, TALKS, CONTACT_EMAIL, CONTACT_NAME } from '../data/events'
import { useAuth } from '../lib/auth'
import { supabase, isSupabaseReady } from '../lib/supabase'
import AuthModal from './AuthModal'

export default function EventDetail({ kind, id, lang, onBack }) {
  const items = kind === 'workshops' ? WORKSHOPS : TALKS
  const item = items.find((x) => x.id === id)

  const { user, profile } = useAuth()
  const [formOpen, setFormOpen]     = useState(false)
  const [name, setName]             = useState('')
  const [team, setTeam]             = useState('')
  const [note, setNote]             = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted]   = useState(false)
  const [authModal, setAuthModal]   = useState(false)
  const [errorMsg, setErrorMsg]     = useState('')

  if (!item) return null

  const t = {
    en: {
      back: '← Back',
      duration: 'Duration',
      level: 'Level',
      audience: 'Audience',
      groupSize: 'Group size',
      objectives: 'Objectives',
      agenda: 'Program',
      topics: 'Topics',
      keyMessage: 'Key message',
      requestWorkshop: 'I’m interested',
      requestTalk: 'Request this talk',
      moreInfo: 'For more information, contact',
      formTitle: 'Request this talk',
      formSubtitle: 'Your request will be sent to {name}. He will get back to you at {email}.',
      yourName: 'Your name',
      yourTeam: 'Team / Area (optional)',
      yourNote: 'Anything else? (optional)',
      send: 'Send request',
      sending: 'Sending…',
      cancel: 'Cancel',
      thanks: 'Thanks — your request was received.',
      thanksSub: 'We will be in touch shortly.',
      genericError: 'Something went wrong. Please try again.',
      workshopSent: 'Logged your interest — opening registration…',
      signInToRequest: 'Sign in to request'
    },
    es: {
      back: '← Volver',
      duration: 'Duración',
      level: 'Nivel',
      audience: 'Audiencia',
      groupSize: 'Tamaño de grupo',
      objectives: 'Objetivos',
      agenda: 'Programa',
      topics: 'Temas',
      keyMessage: 'Mensaje clave',
      requestWorkshop: 'Me interesa',
      requestTalk: 'Solicitar esta charla',
      moreInfo: 'Para más información, contactar a',
      formTitle: 'Solicitar esta charla',
      formSubtitle: 'Tu solicitud se va a enviar a {name}. Se contactará con vos a {email}.',
      yourName: 'Tu nombre',
      yourTeam: 'Equipo / Área (opcional)',
      yourNote: '¿Algo más? (opcional)',
      send: 'Enviar solicitud',
      sending: 'Enviando…',
      cancel: 'Cancelar',
      thanks: '¡Gracias! Recibimos tu solicitud.',
      thanksSub: 'Te vamos a contactar pronto.',
      genericError: 'Algo salió mal. Intentá de nuevo.',
      workshopSent: 'Registramos tu interés — abriendo inscripción…',
      signInToRequest: 'Iniciá sesión para solicitar'
    }
  }[lang]

  const isWorkshop = kind === 'workshops'

  // ---------- Workshop CTA -------------------------------------------------
  const handleWorkshopRequest = async () => {
    if (!user) { setAuthModal(true); return }
    setSubmitting(true); setErrorMsg('')
    if (isSupabaseReady()) {
      const { error } = await supabase.from('workshop_interests').insert({
        user_id: user.id, workshop_id: item.id
      })
      if (error) console.warn('[workshop_interests] insert error', error)
    }
    setSubmitting(false)
    if (item.requestUrl) window.open(item.requestUrl, '_blank', 'noopener')
  }

  // ---------- Talk request submission --------------------------------------
  const openTalkForm = () => {
    if (!user) { setAuthModal(true); return }
    setName(profile?.name || '')
    setTeam(profile?.team || '')
    setNote('')
    setSubmitted(false)
    setErrorMsg('')
    setFormOpen(true)
  }

  const handleSendTalk = async (e) => {
    e.preventDefault()
    if (!user || !isSupabaseReady()) return
    setSubmitting(true); setErrorMsg('')
    const { error } = await supabase.from('talk_requests').insert({
      user_id: user.id,
      talk_id: item.id,
      name: name || null,
      team: team || null,
      message: note || null
    })
    setSubmitting(false)
    if (error) { setErrorMsg(t.genericError); console.warn('[talk_requests] insert error', error); return }
    setSubmitted(true)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <AuthModal open={authModal} onClose={() => setAuthModal(false)} lang={lang} reason="event" />

      <button onClick={onBack}
        className="text-slate-400 hover:text-white text-sm font-medium mb-6 transition-colors">
        {t.back}
      </button>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="mb-8 p-8 rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${item.color}22, ${item.color}08)`, border: `1px solid ${item.color}44` }}>
        <div className="flex items-start gap-4 mb-4">
          <span className="text-5xl">{item.icon}</span>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
              {item.title[lang]}
            </h1>
            <p className="text-slate-300 text-lg">{item.tagline[lang]}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 text-sm">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">{t.duration}</div>
            <div className="text-white font-medium">{item.duration[lang]}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">{t.level}</div>
            <div className="text-white font-medium">{item.level[lang]}</div>
          </div>
          {item.groupSize && (
            <div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">{t.groupSize}</div>
              <div className="text-white font-medium">{item.groupSize[lang]}</div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Description + Audience */}
      <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
        className="mb-8">
        <p className="text-slate-300 leading-relaxed mb-5">{item.description[lang]}</p>
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-widest text-slate-500 mr-1 self-center">{t.audience}:</span>
          {item.audience[lang].map((a) => (
            <span key={a} className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 ring-1 ring-slate-700">{a}</span>
          ))}
        </div>
      </motion.section>

      {/* Objectives (workshops) */}
      {item.objectives && (
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-8 p-6 rounded-xl bg-slate-800/50 ring-1 ring-slate-700/60">
          <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-4">{t.objectives}</h2>
          <ul className="space-y-2">
            {item.objectives[lang].map((o) => (
              <li key={o} className="text-slate-200 flex gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Agenda (workshops) */}
      {item.agenda && (
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="mb-8">
          <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-4">{t.agenda}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.agenda[lang].map((block) => (
              <div key={block.day} className="p-5 rounded-xl bg-slate-800/50 ring-1 ring-slate-700/60">
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: item.color }}>
                  {block.day}
                </div>
                <ul className="space-y-1.5">
                  {block.items.map((s) => (
                    <li key={s} className="text-sm text-slate-300">· {s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Topics (talks) */}
      {item.topics && (
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-8 p-6 rounded-xl bg-slate-800/50 ring-1 ring-slate-700/60">
          <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-4">{t.topics}</h2>
          <div className="flex flex-wrap gap-2">
            {item.topics[lang].map((tp) => (
              <span key={tp} className="text-sm px-3 py-1.5 rounded-lg bg-slate-900/60 text-slate-200 ring-1 ring-slate-700">
                {tp}
              </span>
            ))}
          </div>
        </motion.section>
      )}

      {/* Key message */}
      <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="mb-10 p-6 rounded-xl"
        style={{ background: `${item.color}15`, borderLeft: `3px solid ${item.color}` }}>
        <div className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: item.color }}>
          {t.keyMessage}
        </div>
        <p className="text-white text-lg leading-snug italic">“{item.keyMessage[lang]}”</p>
      </motion.section>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="mb-6">
        {isWorkshop ? (
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <button onClick={handleWorkshopRequest} disabled={submitting}
              className="flex-1 px-6 py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60"
              style={{ background: item.color }}>
              {submitting ? t.sending : (user ? t.requestWorkshop : t.signInToRequest)} →
            </button>
            <div className="text-sm text-slate-400 sm:text-right">
              {t.moreInfo}{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-white font-medium hover:underline">
                {CONTACT_NAME}
              </a>
            </div>
          </div>
        ) : !formOpen ? (
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <button onClick={openTalkForm}
              className="flex-1 px-6 py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: item.color }}>
              {user ? t.requestTalk : t.signInToRequest} →
            </button>
            <div className="text-sm text-slate-400 sm:text-right">
              {t.moreInfo}{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-white font-medium hover:underline">
                {CONTACT_NAME}
              </a>
            </div>
          </div>
        ) : submitted ? (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30 text-center">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="text-xl font-bold text-white mb-1">{t.thanks}</h3>
            <p className="text-sm text-slate-300">{t.thanksSub}</p>
          </motion.div>
        ) : (
          <motion.form initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSendTalk}
            className="p-6 rounded-xl bg-slate-800/60 ring-1 ring-slate-700/60">
            <h3 className="text-xl font-bold text-white mb-1">{t.formTitle}</h3>
            <p className="text-sm text-slate-400 mb-5">
              {t.formSubtitle.replace('{name}', CONTACT_NAME).replace('{email}', user?.email || '')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder={t.yourName}
                className="px-4 py-3 rounded-lg bg-slate-900 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
              <input type="text" value={team} onChange={(e) => setTeam(e.target.value)}
                placeholder={t.yourTeam}
                className="px-4 py-3 rounded-lg bg-slate-900 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <textarea value={note} onChange={(e) => setNote(e.target.value)}
              placeholder={t.yourNote} rows={3}
              className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none mb-3 resize-none" />

            {errorMsg && <p className="text-xs text-red-400 mb-3">{errorMsg}</p>}

            <div className="flex gap-3">
              <button type="submit" disabled={submitting}
                className="flex-1 px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90 disabled:opacity-60"
                style={{ background: item.color }}>
                {submitting ? t.sending : t.send + ' →'}
              </button>
              <button type="button" onClick={() => setFormOpen(false)}
                className="px-6 py-3 rounded-lg font-medium text-slate-300 hover:text-white transition-colors">
                {t.cancel}
              </button>
            </div>
          </motion.form>
        )}
      </motion.div>
    </div>
  )
}
