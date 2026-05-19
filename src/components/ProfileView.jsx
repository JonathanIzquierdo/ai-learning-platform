import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../lib/auth'

export default function ProfileView({ lang, onBack }) {
  const { user, profile, updateProfile, isAdmin } = useAuth()
  const [name, setName] = useState('')
  const [team, setTeam] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  // Initialize fields from profile when it loads
  useEffect(() => {
    if (profile) {
      setName(profile.name || '')
      setTeam(profile.team || '')
    }
  }, [profile])

  const t = {
    en: {
      back: '← Back',
      title: 'Your profile',
      subtitle: 'Keep your details up to date. This helps us tailor content and contact you for requested talks.',
      email: 'Email',
      emailHint: 'Your email is fixed and tied to your account.',
      name: 'Name',
      namePh: 'e.g. Jonathan Izquierdo',
      team: 'Team / Area',
      teamPh: 'e.g. AI Engineering, Product, QA, HR…',
      save: 'Save changes',
      saving: 'Saving…',
      saved: 'Saved ✓',
      adminBadge: 'Admin',
      memberSince: 'Member since',
      genericError: 'Something went wrong. Please try again.',
      incomplete: 'Your profile is incomplete. Please add your name and team.'
    },
    es: {
      back: '← Volver',
      title: 'Tu perfil',
      subtitle: 'Mantenemos tus datos al día. Nos ayuda a personalizar el contenido y a contactarte para charlas solicitadas.',
      email: 'Email',
      emailHint: 'Tu email está fijo y vinculado a tu cuenta.',
      name: 'Nombre',
      namePh: 'ej. Jonathan Izquierdo',
      team: 'Equipo / Área',
      teamPh: 'ej. AI Engineering, Producto, QA, RRHH…',
      save: 'Guardar cambios',
      saving: 'Guardando…',
      saved: 'Guardado ✓',
      adminBadge: 'Admin',
      memberSince: 'Miembro desde',
      genericError: 'Algo salió mal. Intentá de nuevo.',
      incomplete: 'Tu perfil está incompleto. Agregá tu nombre y equipo.'
    }
  }[lang]

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true); setError(''); setSaved(false)
    const { error: err } = await updateProfile({
      name: name.trim() || null,
      team: team.trim() || null
    })
    setSaving(false)
    if (err) { setError(t.genericError); return }
    setSaved(true)
    setTimeout(() => setSaved(false), 2200)
  }

  if (!user) return null

  const isIncomplete = !profile?.name || !profile?.team
  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString(
        lang === 'es' ? 'es-AR' : 'en-US',
        { year: 'numeric', month: 'long', day: 'numeric' }
      )
    : null

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <button onClick={onBack}
        className="text-slate-400 hover:text-white text-sm font-medium mb-6 transition-colors">
        {t.back}
      </button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{t.title}</h1>
          {isAdmin && (
            <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold">
              {t.adminBadge}
            </span>
          )}
        </div>
        <p className="text-slate-400 text-base leading-relaxed">{t.subtitle}</p>
      </motion.div>

      {isIncomplete && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-xl bg-amber-500/10 ring-1 ring-amber-500/40 text-amber-200 text-sm">
          ⚠️ {t.incomplete}
        </motion.div>
      )}

      <motion.form initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
        onSubmit={handleSave}
        className="space-y-5 p-6 rounded-2xl bg-slate-800/50 ring-1 ring-slate-700/60">

        {/* Email (read-only) */}
        <div>
          <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 block">
            {t.email}
          </label>
          <input type="email" value={user.email} disabled
            className="w-full px-4 py-3 rounded-lg bg-slate-900/60 text-slate-400 ring-1 ring-slate-800 cursor-not-allowed" />
          <p className="text-[11px] text-slate-500 mt-1.5">{t.emailHint}</p>
        </div>

        {/* Name */}
        <div>
          <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 block">
            {t.name}
          </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            placeholder={t.namePh} autoFocus={!profile?.name}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>

        {/* Team */}
        <div>
          <label className="text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 block">
            {t.team}
          </label>
          <input type="text" value={team} onChange={(e) => setTeam(e.target.value)}
            placeholder={t.teamPh}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>

        {error && <p className="text-xs text-red-400">{error}</p>}

        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="text-[11px] text-slate-500">
            {memberSince && <>{t.memberSince}: <span className="text-slate-400">{memberSince}</span></>}
          </div>
          <button type="submit" disabled={saving}
            className="px-6 py-2.5 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all disabled:opacity-60">
            {saving ? t.saving : (saved ? t.saved : t.save)}
          </button>
        </div>
      </motion.form>
    </div>
  )
}
