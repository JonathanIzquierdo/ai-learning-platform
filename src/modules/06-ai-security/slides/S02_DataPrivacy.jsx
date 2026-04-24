import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'What happens to your data when you use AI?',
    subtitle: 'Most people don\'t read the terms. Here\'s what you need to know.',
    providers: [
      {
        name: 'Claude (Anthropic)', color: '#D97706',
        api: 'API / Enterprise: prompts and outputs are NOT used for training by default. Data is not stored beyond the session.',
        consumer: 'Claude.ai free/Pro: conversations may be reviewed by Anthropic for safety. Can be opted out.',
        visma: 'Visma\'s Claude access is via API — your conversations are not used for training.'
      },
      {
        name: 'ChatGPT (OpenAI)', color: '#10B981',
        api: 'API: not used for training by default.',
        consumer: 'ChatGPT free/Plus: conversations used for training unless you opt out in settings.',
        visma: 'Always check whether you\'re using the company account or your personal account.'
      },
      {
        name: 'GitHub Copilot', color: '#6554C0',
        api: 'Enterprise: data not retained or used for training.',
        consumer: 'Individual/Business plans: telemetry collected. Code snippets may be used for improvement.',
        visma: 'Visma\'s Copilot is on Enterprise — your code is not used for model training.'
      },
      {
        name: 'Gemini (Google)', color: '#4285F4',
        api: 'Workspace API: enterprise data protection applies.',
        consumer: 'Free Gemini: conversations reviewed by human reviewers and used to improve models.',
        visma: 'Using personal Google accounts with Gemini for work tasks exposes company data.'
      },
    ],
    rules: {
      label: 'The 3 data rules for Visma employees',
      items: [
        { rule: 'Use company-provisioned tools', why: 'Personal accounts on free tiers often have weaker data protections. Company accounts have contractual guarantees.' },
        { rule: 'Assume any AI tool can see what you type', why: 'Even with enterprise protections, treat every input as potentially visible. Never share what you wouldn\'t write in an email.' },
        { rule: 'Anonymize before you analyze', why: 'If you need AI to help with data, remove names, IDs, and any identifying details first.' },
      ]
    }
  },
  es: {
    title: '¿Qué pasa con tus datos cuando usas IA?',
    subtitle: 'La mayoría de la gente no lee los términos. Esto es lo que necesitás saber.',
    providers: [
      {
        name: 'Claude (Anthropic)', color: '#D97706',
        api: 'API / Enterprise: los prompts y outputs NO se usan para entrenamiento por defecto. Los datos no se almacenan más allá de la sesión.',
        consumer: 'Claude.ai free/Pro: las conversaciones pueden ser revisadas por Anthropic por seguridad. Se puede desactivar.',
        visma: 'El acceso de Visma a Claude es vía API — tus conversaciones no se usan para entrenamiento.'
      },
      {
        name: 'ChatGPT (OpenAI)', color: '#10B981',
        api: 'API: no se usa para entrenamiento por defecto.',
        consumer: 'ChatGPT free/Plus: las conversaciones se usan para entrenamiento a menos que lo desactives en ajustes.',
        visma: 'Siempre verificá si estás usando la cuenta de empresa o tu cuenta personal.'
      },
      {
        name: 'GitHub Copilot', color: '#6554C0',
        api: 'Enterprise: datos no retenidos ni usados para entrenamiento.',
        consumer: 'Planes Individual/Business: se recopila telemetría. Los fragmentos de código pueden usarse para mejora.',
        visma: 'El Copilot de Visma es Enterprise — tu código no se usa para entrenamiento del modelo.'
      },
      {
        name: 'Gemini (Google)', color: '#4285F4',
        api: 'Workspace API: aplica la protección de datos enterprise.',
        consumer: 'Gemini gratuito: las conversaciones son revisadas por revisores humanos y usadas para mejorar modelos.',
        visma: 'Usar cuentas personales de Google con Gemini para tareas de trabajo expone datos de la empresa.'
      },
    ],
    rules: {
      label: 'Las 3 reglas de datos para empleados de Visma',
      items: [
        { rule: 'Usá las herramientas provistas por la empresa', why: 'Las cuentas personales en tiers gratuitos a menudo tienen protecciones de datos más débiles. Las cuentas de empresa tienen garantías contractuales.' },
        { rule: 'Asumió que cualquier herramienta de IA puede ver lo que escribís', why: 'Incluso con protecciones enterprise, tratá cada input como potencialmente visible. Nunca compartas lo que no escribirías en un email.' },
        { rule: 'Anonimizá antes de analizar', why: 'Si necesitás que la IA ayude con datos, eliminá nombres, IDs y cualquier detalle identificador primero.' },
      ]
    }
  }
}

export default function S02_DataPrivacy({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-4 mb-8">
        {c.providers.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
              <p className="text-white font-semibold text-sm">{p.name}</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs"><span className="text-green-400 font-semibold">API/Enterprise: </span><span className="text-slate-300">{p.api}</span></p>
              <p className="text-xs"><span className="text-amber-400 font-semibold">Consumer: </span><span className="text-slate-400">{p.consumer}</span></p>
              <p className="text-xs"><span className="text-cyan-400 font-semibold">Visma: </span><span className="text-slate-300">{p.visma}</span></p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3">{c.rules.label}</p>
        <div className="flex flex-col gap-3">
          {c.rules.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-red-400 font-bold text-xs w-4 shrink-0">{i + 1}.</span>
              <div>
                <p className="text-white text-sm font-semibold mb-0.5">{item.rule}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{item.why}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
