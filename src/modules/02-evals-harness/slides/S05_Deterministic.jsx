import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Deterministic evaluators in action.',
    subtitle: 'FinBot AI needs to return structured data. These evals check hard rules — they either pass or fail, no ambiguity.',
    evalGroups: [
      {
        group: 'Output structure',
        color: '#36B37E',
        evals: [
          { name: 'JSON schema validation', input: 'FinBot returns transaction summary', check: 'Is the JSON valid and matches the expected schema?', result: 'PASS / FAIL' },
          { name: 'Required fields present', input: 'Summary object', check: 'Does it contain amount, currency, date, description?', result: 'PASS / FAIL' },
        ]
      },
      {
        group: 'Safety & compliance',
        color: '#DE350B',
        evals: [
          { name: 'No PII in response', input: 'Any FinBot response', check: 'Does output NOT contain patterns matching SSN, card numbers?', result: 'PASS / FAIL' },
          { name: 'No forbidden terms', input: 'Financial advice response', check: 'Does output NOT contain "guaranteed return", "risk-free"?', result: 'PASS / FAIL' },
        ]
      },
      {
        group: 'Factual precision',
        color: '#0052CC',
        evals: [
          { name: 'Amount exact match', input: 'Q: "What was my largest expense last month?"', check: 'Does output contain the exact amount from the DB?', result: 'PASS / FAIL' },
          { name: 'Date format regex', input: 'Any date in response', check: 'Matches DD/MM/YYYY or ISO 8601?', result: 'PASS / FAIL' },
        ]
      },
    ],
    tip: 'Deterministic evals are your first line of defense. They run in milliseconds, cost nothing, and catch the obvious failures. Always implement these before adding LLM judges.'
  },
  es: {
    title: 'Evaluadores determinísticos en acción.',
    subtitle: 'FinBot AI necesita devolver datos estructurados. Estos evals verifican reglas duras — o pasan o fallan, sin ambigüedad.',
    evalGroups: [
      {
        group: 'Estructura del output',
        color: '#36B37E',
        evals: [
          { name: 'Validación de JSON schema', input: 'FinBot devuelve resumen de transacción', check: '¿El JSON es válido y coincide con el schema esperado?', result: 'PASS / FAIL' },
          { name: 'Campos requeridos presentes', input: 'Objeto de resumen', check: '¿Contiene amount, currency, date, description?', result: 'PASS / FAIL' },
        ]
      },
      {
        group: 'Seguridad y compliance',
        color: '#DE350B',
        evals: [
          { name: 'Sin PII en la respuesta', input: 'Cualquier respuesta de FinBot', check: '¿El output NO contiene patrones de DNI, números de tarjeta?', result: 'PASS / FAIL' },
          { name: 'Sin términos prohibidos', input: 'Respuesta de asesoría financiera', check: '¿El output NO contiene "rendimiento garantizado", "sin riesgo"?', result: 'PASS / FAIL' },
        ]
      },
      {
        group: 'Precisión factual',
        color: '#0052CC',
        evals: [
          { name: 'Exact match de monto', input: 'P: "¿Cuál fue mi mayor gasto del mes pasado?"', check: '¿El output contiene el monto exacto de la BD?', result: 'PASS / FAIL' },
          { name: 'Regex de formato de fecha', input: 'Cualquier fecha en la respuesta', check: '¿Coincide con DD/MM/YYYY o ISO 8601?', result: 'PASS / FAIL' },
        ]
      },
    ],
    tip: 'Los evals determinísticos son tu primera línea de defensa. Corren en milisegundos, no cuestan nada y detectan los fallos obvios. Siempre implementálos antes de agregar jueces LLM.'
  }
}

export default function S05_Deterministic({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-6 mb-8">
        {c.evalGroups.map((group, gi) => (
          <motion.div key={gi} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: gi * 0.15 }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: group.color }}>{group.group}</p>
            <div className="flex flex-col gap-2">
              {group.evals.map((ev, ei) => (
                <div key={ei} className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-white text-sm font-semibold">{ev.name}</p>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-700 text-slate-300 whitespace-nowrap">{ev.result}</span>
                  </div>
                  <p className="text-slate-500 text-xs mb-1">Input: {ev.input}</p>
                  <p className="text-slate-400 text-xs">Check: {ev.check}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-sm text-green-200 leading-relaxed">
        💡 {c.tip}
      </div>
    </div>
  )
}
