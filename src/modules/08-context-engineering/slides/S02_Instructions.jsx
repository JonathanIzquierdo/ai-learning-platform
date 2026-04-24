import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Layer 1: Instructions.',
    subtitle: 'Instructions are the foundation. They define who the model is, what it does, and how it behaves. Most people write them wrong.',
    levels: [
      {
        level: 'Weak instructions', color: '#DE350B',
        example: '"You are a helpful assistant."',
        problem: 'Zero specificity. The model must guess your goals, your audience, your format preferences, your constraints. It will guess wrong.'
      },
      {
        level: 'Better instructions', color: '#FF991F',
        example: '"You are a financial analyst assistant. Answer questions about finance."',
        problem: 'Role defined, domain defined. But still missing: tone, format, constraints, what to do when uncertain.'
      },
      {
        level: 'Strong instructions', color: '#36B37E',
        example: '"You are a financial analysis assistant for Visma LATAM. Your audience is finance professionals. Always structure responses with: 1) Direct answer, 2) Key assumptions, 3) Confidence level. When uncertain, say so explicitly. Never fabricate numbers. Use formal Spanish unless asked otherwise."',
        problem: ''
      },
    ],
    anatomy: {
      label: 'Anatomy of strong instructions',
      components: [
        { part: 'Role', what: 'Who the model is in this context', example: '"You are a senior finance analyst assistant"' },
        { part: 'Audience', what: 'Who the model is talking to', example: '"Your users are CFOs and FP&A managers"' },
        { part: 'Goal', what: 'What success looks like for this assistant', example: '"Help users make faster, more accurate financial decisions"' },
        { part: 'Format', what: 'How outputs should be structured', example: '"Always use bullet points for lists. Summaries under 150 words."' },
        { part: 'Constraints', what: 'Hard rules the model must always follow', example: '"Never share salary data. Always flag assumptions."' },
        { part: 'Edge cases', what: 'What to do when the request is unclear or out of scope', example: '"If asked something outside finance, say you can\'t help with that."' },
      ]
    },
    tip: 'The best instructions are written iteratively. Start with the role and goal. Run 10 tests. Find where it fails. Add a constraint or clarification. Repeat.'
  },
  es: {
    title: 'Capa 1: Instrucciones.',
    subtitle: 'Las instrucciones son la base. Definen quién es el modelo, qué hace y cómo se comporta. La mayoría de la gente las escribe mal.',
    levels: [
      {
        level: 'Instrucciones débiles', color: '#DE350B',
        example: '"Sos un asistente útil."',
        problem: 'Cero especificidad. El modelo debe adivinar tus objetivos, tu audiencia, tus preferencias de formato y tus restricciones. Va a adivinar mal.'
      },
      {
        level: 'Instrucciones mejores', color: '#FF991F',
        example: '"Sos un asistente de análisis financiero. Respondé preguntas sobre finanzas."',
        problem: 'Rol definido, dominio definido. Pero aún falta: tono, formato, restricciones, qué hacer cuando hay incertidumbre.'
      },
      {
        level: 'Instrucciones fuertes', color: '#36B37E',
        example: '"Sos un asistente de análisis financiero para Visma LATAM. Tu audiencia son profesionales de finanzas. Siempre estructurá las respuestas con: 1) Respuesta directa, 2) Supuestos clave, 3) Nivel de confianza. Cuando estés inseguro, decilo explícitamente. Nunca fabriques números. Usá español formal salvo que se indique lo contrario."',
        problem: ''
      },
    ],
    anatomy: {
      label: 'Anatomía de instrucciones fuertes',
      components: [
        { part: 'Rol', what: 'Quién es el modelo en este contexto', example: '"Sos un asistente senior de análisis financiero"' },
        { part: 'Audiencia', what: 'Con quién habla el modelo', example: '"Tus usuarios son CFOs y gerentes de FP&A"' },
        { part: 'Objetivo', what: 'Cómo se ve el éxito para este asistente', example: '"Ayudar a los usuarios a tomar decisiones financieras más rápidas y precisas"' },
        { part: 'Formato', what: 'Cómo deben estructurarse los outputs', example: '"Siempre usá bullets para listas. Resúmenes de menos de 150 palabras."' },
        { part: 'Restricciones', what: 'Reglas estrictas que el modelo siempre debe seguir', example: '"Nunca compartas datos salariales. Siempre marcá los supuestos."' },
        { part: 'Casos extremos', what: 'Qué hacer cuando la solicitud no está clara o fuera de alcance', example: '"Si preguntan algo fuera de finanzas, decí que no podés ayudar con eso."' },
      ]
    },
    tip: 'Las mejores instrucciones se escriben iterativamente. Empezá con el rol y el objetivo. Corré  10 pruebas. Encontrá dónde falla. Agréga una restricción o aclaración. Repetí.'
  }
}

export default function S02_Instructions({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-green-600/20 text-green-400 text-xs font-black px-2 py-1 rounded">Layer 1</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-3 mb-8">
        {c.levels.map((l, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
            className="rounded-xl border p-4" style={{ borderColor: l.color + '40', background: l.color + '0D' }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: l.color }}>{l.level}</p>
            <div className="bg-slate-900/60 rounded-lg px-3 py-2 mb-2">
              <p className="text-slate-300 text-xs font-mono leading-relaxed">{l.example}</p>
            </div>
            {l.problem && <p className="text-slate-500 text-xs italic">⚠️ {l.problem}</p>}
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-3">{c.anatomy.label}</p>
        <div className="flex flex-col gap-2">
          {c.anatomy.components.map((comp, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 items-start py-1.5 border-b border-slate-700/50 last:border-0">
              <p className="text-green-400 text-xs font-semibold">{comp.part}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{comp.what}</p>
              <p className="text-slate-500 text-xs italic">{comp.example}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        💡 {c.tip}
      </div>
    </div>
  )
}
