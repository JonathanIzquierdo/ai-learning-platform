import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const langs = [{ code: 'en', label: 'EN' }, { code: 'es', label: 'ES' }]

  return (
    <div className="flex gap-1">
      {langs.map(l => (
        <button
          key={l.code}
          onClick={() => i18n.changeLanguage(l.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            i18n.language.startsWith(l.code)
              ? 'bg-visma-blue text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
