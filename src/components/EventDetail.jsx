import { useState } from 'react'
import { motion } from 'framer-motion'
import { WORKSHOPS, TALKS, CONTACT_EMAIL, CONTACT_NAME } from '../data/events'

export default function EventDetail({ kind, id, lang, onBack }) {
  const items = kind === 'workshops' ? WORKSHOPS : TALKS
  const item = items.find((x) => x.id === id)
  const [formOpen, setFormOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [team, setTeam] = useState('')
  const [note, setNote] = useState('')
  const [copied, setCopied] = useState(false)

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
      formSubtitle: 'Fill in your details and pick how you want to send the request.',
      yourEmail: 'Your email',
      yourName: 'Your name',
      yourTeam: 'Team / Area (optional)',
      yourNote: 'Anything else? (optional)',
      sendGmail: 'Send via Gmail',
      sendMail: 'Open in mail client',
      copy: 'Copy email text',
      copied: 'Copied to clipboard ✓',
      cancel: 'Cancel',
      hint: 'Use Gmail if your work email is on Google. Use “mail client” for Outlook/Apple Mail. Or copy the text and paste it anywhere.',
      emailToCopy: 'To',
      subjectToCopy: 'Subject'
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
      formSubtitle: 'Completá tus datos y elegí cómo querés enviar la solicitud.',
      yourEmail: 'Tu email',
      yourName: 'Tu nombre',
      yourTeam: 'Equipo / Área (opcional)',
      yourNote: '¿Algo más? (opcional)',
      sendGmail: 'Enviar por Gmail',
      sendMail: 'Abrir en cliente de email',
      copy: 'Copiar texto del email',
      copied: 'Copiado al portapapeles ✓',
      cancel: 'Cancelar',
      hint: 'Usá Gmail si tu correo corporativo es de Google. Usá “cliente de email” para Outlook/Apple Mail. O copiá el texto y pegalo donde quieras.',
      emailToCopy: 'Para',
      subjectToCopy: 'Asunto'
    }
  }[lang]

  const handleWorkshopRequest = () => {
    if (item.requestUrl) window.open(item.requestUrl, '_blank', 'noopener')
  }

  // ---- Mensaje base ---------------------------------------------------------
  const buildEmailParts = () => {
    const title = item.title[lang]
    const subject = lang === 'es'
      ? `Solicitud de charla: ${title}`
      : `Talk request: ${title}`
    const body = lang === 'es'
      ? `Hola Jonathan,\n\nMe interesa la charla: "${title}".\n\nDatos de contacto:\n• Nombre: ${name || '(no indicado)'}\n• Email: ${email}\n• Equipo / Área: ${team || '(no indicado)'}\n\nComentarios:\n${note || '(sin comentarios)'}\n\n¿Podríamos coordinar una sesión?\n\nGracias!`
      : `Hi Jonathan,\n\nI'm interested in the talk: "${title}".\n\nContact info:\n• Name: ${name || '(not provided)'}\n• Email: ${email}\n• Team / Area: ${team || '(not provided)'}\n\nNotes:\n${note || '(no notes)'}\n\nCould we coordinate a session?\n\nThanks!`
    return { subject, body }
  }

  // ---- Gmail compose URL (funciona en gmail web) ----------------------------
  const buildGmailUrl = () => {
    const { subject, body } = buildEmailParts()
    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      to: CONTACT_EMAIL,
      su: subject,
      body: body,
      cc: email
    })
    return `https://mail.google.com/mail/?${params.toString()}`
  }

  // ---- mailto fallback (Outlook / Apple Mail / cliente nativo) --------------
  const buildMailto = () => {
    const { subject, body } = buildEmailParts()
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&cc=${encodeURIComponent(email)}`
  }

  // ---- Handlers de envío ----------------------------------------------------
  const handleSendGmail = (e) => {
    e.preventDefault()
    if (!email) return
    window.open(buildGmailUrl(), '_blank', 'noopener')
  }

  const handleSendMailto = () => {
    if (!email) return
    window.location.href = buildMailto()
  }

  const handleCopy = async () => {
    if (!email) return
    const { subject, body } = buildEmailParts()
    const text = `${t.emailToCopy}: ${CONTACT_EMAIL}\n${t.subjectToCopy}: ${subject}\n\n${body}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      // fallback ultra-defensivo si clipboard API no está disponible
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch { /* noop */ }
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  const isWorkshop = kind === 'workshops'

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
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
            <button onClick={handleWorkshopRequest}
              className="flex-1 px-6 py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: item.color }}>
              {t.requestWorkshop} →
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
            <button onClick={() => setFormOpen(true)}
              className="flex-1 px-6 py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: item.color }}>
              {t.requestTalk} →
            </button>
            <div className="text-sm text-slate-400 sm:text-right">
              {t.moreInfo}{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-white font-medium hover:underline">
                {CONTACT_NAME}
              </a>
            </div>
          </div>
        ) : (
          <motion.form initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSendGmail}
            className="p-6 rounded-xl bg-slate-800/60 ring-1 ring-slate-700/60">
            <h3 className="text-xl font-bold text-white mb-1">{t.formTitle}</h3>
            <p className="text-sm text-slate-400 mb-5">{t.formSubtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder={t.yourEmail}
                className="px-4 py-3 rounded-lg bg-slate-900 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder={t.yourName}
                className="px-4 py-3 rounded-lg bg-slate-900 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <input type="text" value={team} onChange={(e) => setTeam(e.target.value)}
              placeholder={t.yourTeam}
              className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none mb-3" />
            <textarea value={note} onChange={(e) => setNote(e.target.value)}
              placeholder={t.yourNote} rows={3}
              className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none mb-2 resize-none" />
            <p className="text-xs text-slate-500 mb-5">{t.hint}</p>

            {/* Primario: Gmail */}
            <button type="submit" disabled={!email}
              className="w-full px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed mb-3 flex items-center justify-center gap-2"
              style={{ background: item.color }}>
              <span aria-hidden>✉️</span> {t.sendGmail} →
            </button>

            {/* Secundario: mailto + copiar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              <button type="button" onClick={handleSendMailto} disabled={!email}
                className="px-4 py-2.5 rounded-lg font-medium text-slate-200 bg-slate-900/60 ring-1 ring-slate-700 hover:ring-slate-500 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed text-sm">
                {t.sendMail}
              </button>
              <button type="button" onClick={handleCopy} disabled={!email}
                className="px-4 py-2.5 rounded-lg font-medium text-slate-200 bg-slate-900/60 ring-1 ring-slate-700 hover:ring-slate-500 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed text-sm">
                {copied ? t.copied : t.copy}
              </button>
            </div>

            <button type="button" onClick={() => setFormOpen(false)}
              className="w-full px-6 py-2 rounded-lg font-medium text-slate-400 hover:text-white transition-colors text-sm">
              {t.cancel}
            </button>
          </motion.form>
        )}
      </motion.div>
    </div>
  )
}
