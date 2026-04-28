import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Skill 2',
    title: 'Getting Structured Output',
    body: 'One of the most practical skills: making the model return data in the exact format you need.',
    techniques: [
      { name: 'Explicit format instruction', example: 'Return your answer as a JSON object with keys: "summary" (string), "risk_level" (low|medium|high), "action_items" (array of strings).', tip: 'Always specify the schema. Don\u2019t just say "return JSON."' },
      { name: 'Output-first prompting', example: 'I want the output to look exactly like this:\n```\n| Feature | Priority | Effort |\n| --- | --- | --- |\n| Auth | P0 | 3d |\n```\nNow fill this table for the following requirements: ...', tip: 'Showing the exact output format first is more effective than describing it.' },
      { name: 'Constrained generation', example: 'Respond with ONLY one of these words: APPROVE, REJECT, ESCALATE. No explanation.', tip: 'For classification, constraining the output space eliminates hallucination.' },
    ],
    proTip: 'Most API providers (OpenAI, Anthropic, Google) now support structured output modes that guarantee valid JSON. Use them in production \u2014 never rely on prompt-only approaches for critical pipelines.',
  },
  es: {
    eyebrow: 'Skill 2',
    title: 'Obtener Output Estructurado',
    body: 'Una de las habilidades m\u00e1s pr\u00e1cticas: hacer que el modelo devuelva datos en el formato exacto que necesit\u00e1s.',
    techniques: [
      { name: 'Instrucci\u00f3n expl\u00edcita de formato', example: 'Devolv\u00e9 tu respuesta como un objeto JSON con las keys: "summary" (string), "risk_level" (low|medium|high), "action_items" (array de strings).', tip: 'Siempre especific\u00e1 el schema. No digas solo "devolv\u00e9 JSON."' },
      { name: 'Prompting output-first', example: 'Quiero que el output se vea exactamente as\u00ed:\n```\n| Feature | Priority | Effort |\n| --- | --- | --- |\n| Auth | P0 | 3d |\n```\nAhora complet\u00e1 esta tabla para los siguientes requerimientos: ...', tip: 'Mostrar el formato exacto de output primero es m\u00e1s efectivo que describirlo.' },
      { name: 'Generaci\u00f3n restringida', example: 'Respond\u00e9 con SOLO una de estas palabras: APPROVE, REJECT, ESCALATE. Sin explicaci\u00f3n.', tip: 'Para clasificaci\u00f3n, restringir el espacio de output elimina alucinaciones.' },
    ],
    proTip: 'La mayor\u00eda de proveedores de API (OpenAI, Anthropic, Google) ahora soportan modos de output estructurado que garantizan JSON v\u00e1lido. Usalos en producci\u00f3n \u2014 nunca conf\u00edes solo en prompts para pipelines cr\u00edticos.',
  }
}

export default function S03_StructuredOutput({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-6 max-w-xl">{c.body}</motion.p>
      <div className="space-y-4 mb-6">
        {c.techniques.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
            <p className="text-white text-sm font-semibold mb-2">{t.name}</p>
            <div className="bg-slate-900/50 rounded-lg p-3 mb-2">
              <p className="text-cyan-300 text-xs font-mono whitespace-pre-wrap">{t.example}</p>
            </div>
            <p className="text-slate-500 text-xs">{String.fromCodePoint(0x1F4A1)} {t.tip}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-sm text-cyan-200">
        {String.fromCodePoint(0x1F680)} {c.proTip}
      </motion.div>
    </div>
  )
}
