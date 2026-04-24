import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  return (
    <div className="flex gap-1">
      {[{ code: 'en', label: 'EN' }, { code: 'es', label: 'ES' }].map(l => (
        <button
          key={l.code}
          onClick={() => i18n.changeLanguage(l.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            i18n.language.startsWith(l.code) ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >{l.label}</button>
      ))}
    </div>
  )
}
