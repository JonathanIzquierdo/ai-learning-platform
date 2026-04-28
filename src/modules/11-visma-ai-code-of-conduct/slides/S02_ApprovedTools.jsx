import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Principle 1',
    title: 'Use Reviewed Tools Only',
    body: 'Visma has negotiated group agreements with AI tools that meet our legal and security standards. Don\u2019t go rogue.',
    rules: [
      { icon: String.fromCodePoint(0x2705), text: 'Use tools from the Visma-reviewed list (Claude Enterprise, Gemini via Google Suite, GitHub Copilot)' },
      { icon: String.fromCodePoint(0x274C), text: 'Never connect personal/free-tier AI accounts (ChatGPT free, personal Claude) to company systems like Drive, Slack, Gmail, or Jira' },
      { icon: String.fromCodePoint(0x26A0, 0xFE0F), text: 'Under consumer terms, your inputs may be used to train models \u2014 including Visma data, colleague data, and customer data' },
      { icon: String.fromCodePoint(0x1F512), text: 'Always turn OFF \u201cUse my data to train models\u201d setting in any AI tool' },
    ],
    tiers: {
      title: 'Claude Plans at Visma',
      items: [
        { plan: 'Claude Enterprise', risk: 'Low', detail: 'Fully reviewed. No training on your data. Confidentiality safeguards. Commercial use rights.' },
        { plan: 'Claude Team', risk: 'Medium', detail: 'B2B terms with DPA. Less protection than Enterprise but much better than consumer plans.' },
        { plan: 'Claude Pro/Max', risk: 'High', detail: 'Consumer terms. Anthropic can use your input for development. No commercial use of output.' },
        { plan: 'Free ChatGPT', risk: 'Critical', detail: 'Your data trains models. No confidentiality. Never use with company data.' },
      ]
    },
    action: 'Need a new tool? Send a ticket via Employee Support or email procurement@visma.com',
  },
  es: {
    eyebrow: 'Principio 1',
    title: 'Us\u00e1 Solo Herramientas Revisadas',
    body: 'Visma negoci\u00f3 acuerdos grupales con herramientas de IA que cumplen nuestros est\u00e1ndares legales y de seguridad. No te salgas del camino.',
    rules: [
      { icon: String.fromCodePoint(0x2705), text: 'Us\u00e1 herramientas de la lista revisada por Visma (Claude Enterprise, Gemini via Google Suite, GitHub Copilot)' },
      { icon: String.fromCodePoint(0x274C), text: 'Nunca conectes cuentas personales/gratuitas de IA (ChatGPT free, Claude personal) a sistemas de la empresa como Drive, Slack, Gmail o Jira' },
      { icon: String.fromCodePoint(0x26A0, 0xFE0F), text: 'Bajo t\u00e9rminos de consumidor, tus inputs pueden ser usados para entrenar modelos \u2014 incluyendo datos de Visma, colegas y clientes' },
      { icon: String.fromCodePoint(0x1F512), text: 'Siempre desactiv\u00e1 \u201cUsar mis datos para entrenar modelos\u201d en cualquier herramienta de IA' },
    ],
    tiers: {
      title: 'Planes de Claude en Visma',
      items: [
        { plan: 'Claude Enterprise', risk: 'Bajo', detail: 'Completamente revisado. Sin entrenamiento con tus datos. Cl\u00e1usulas de confidencialidad. Derechos de uso comercial.' },
        { plan: 'Claude Team', risk: 'Medio', detail: 'T\u00e9rminos B2B con DPA. Menos protecci\u00f3n que Enterprise pero mucho mejor que planes de consumidor.' },
        { plan: 'Claude Pro/Max', risk: 'Alto', detail: 'T\u00e9rminos de consumidor. Anthropic puede usar tu input para desarrollo. Sin uso comercial del output.' },
        { plan: 'ChatGPT Gratis', risk: 'Cr\u00edtico', detail: 'Tus datos entrenan modelos. Sin confidencialidad. Nunca usar con datos de la empresa.' },
      ]
    },
    action: '\u00bfNecesit\u00e1s una herramienta nueva? Envi\u00e1 un ticket por Employee Support o email a procurement@visma.com',
  }
}

const riskColor = { Low: 'text-green-400 bg-green-500/20', Bajo: 'text-green-400 bg-green-500/20', Medium: 'text-yellow-400 bg-yellow-500/20', Medio: 'text-yellow-400 bg-yellow-500/20', High: 'text-orange-400 bg-orange-500/20', Alto: 'text-orange-400 bg-orange-500/20', Critical: 'text-red-400 bg-red-500/20', 'Cr\u00edtico': 'text-red-400 bg-red-500/20' }

export default function S02_ApprovedTools({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-4">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-6 max-w-xl">{c.body}</motion.p>
      <div className="space-y-2 mb-8">
        {c.rules.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }}
            className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3">
            <span className="text-lg shrink-0">{r.icon}</span>
            <p className="text-slate-300 text-sm leading-relaxed">{r.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6">
        <p className="text-white text-sm font-semibold mb-3">{c.tiers.title}</p>
        <div className="space-y-2">
          {c.tiers.items.map((t, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${riskColor[t.risk] || 'text-slate-400'}`}>{t.risk}</span>
              <span className="text-white font-medium w-32 shrink-0">{t.plan}</span>
              <span className="text-slate-400 text-xs">{t.detail}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 text-sm text-blue-200">
        {String.fromCodePoint(0x1F4E7)} {c.action}
      </div>
    </div>
  )
}
