import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'AI workflows for Finance teams.',
    subtitle: 'Finance is one of the highest-ROI areas for AI — but most gains come from augmenting judgment, not replacing it.',
    useCases: [
      {
        icon: '📊', title: 'Monthly variance analysis',
        before: 'Pull data from SAP → format in Excel → write narrative manually → 2-3 hours',
        after: 'Paste the numbers into AI with context → AI drafts the narrative with anomaly flags → you review and refine → 30 minutes',
        prompt: 'Example prompt: "Here is our Q1 vs Q2 cost comparison by category [paste data]. Draft a 3-paragraph executive narrative highlighting the 3 biggest variances, their likely causes, and what we should watch in Q3. Assume the reader is a non-finance executive."'
      },
      {
        icon: '📝', title: 'Budget presentation narratives',
        before: 'Translate spreadsheet numbers into story — time-consuming, easy to miss the insight',
        after: 'Feed the key figures to AI → get a structured narrative draft with a clear story arc → edit for accuracy',
        prompt: 'Example prompt: "Our budget for next year is [X]. Key investments are [list]. Key constraints are [list]. Write a 5-minute presentation narrative that starts with the business context, explains the allocation logic, and ends with what success looks like."'
      },
      {
        icon: '🔍', title: 'Invoice and contract review',
        before: 'Read through 20-page contracts looking for payment terms, penalties, and risk clauses — 40+ minutes each',
        after: 'Paste contract text into AI → ask for a structured summary with red flags → review the summary instead of the full document',
        prompt: 'Example prompt: "Review this contract excerpt and extract: 1) Payment terms, 2) Penalty clauses, 3) Renewal conditions, 4) Any unusual or high-risk clauses. Flag anything that deviates from standard terms. [paste contract]"'
      },
      {
        icon: '📧', title: 'Stakeholder communication',
        before: 'Writing the same "budget explanation" email to different stakeholders with different levels of financial literacy',
        after: 'Write once → ask AI to adapt tone and complexity for each audience',
        prompt: 'Example prompt: "Rewrite this financial update for a non-finance audience. Remove jargon, explain any technical terms in one sentence, and end with a clear call to action. [paste original]"'
      },
    ],
    tip: 'AI cannot access your internal financial systems directly. Always paste or type the relevant data — never share confidential details beyond what the task requires.'
  },
  es: {
    title: 'Flujos de trabajo de IA para equipos de Finanzas.',
    subtitle: 'Finanzas es una de las áreas de mayor ROI para la IA — pero la mayoría de las ganancias provienen de aumentar el juicio, no de reemplazarlo.',
    useCases: [
      {
        icon: '📊', title: 'Análisis de variaciones mensuales',
        before: 'Extraer datos de SAP → formatear en Excel → escribir narrativa manualmente → 2-3 horas',
        after: 'Pegar los números en la IA con contexto → la IA redacta la narrativa con alertas de anomalías → vos revisás y refinás → 30 minutos',
        prompt: 'Prompt de ejemplo: "Acá está nuestra comparación de costos Q1 vs Q2 por categoría [pegar datos]. Redactá una narrativa ejecutiva de 3 párrafos destacando las 3 variaciones más grandes, sus posibles causas y qué deberíamos monitorear en Q3. Asumi que el lector es un ejecutivo no-financiero."'
      },
      {
        icon: '📝', title: 'Narrativas para presentaciones de presupuesto',
        before: 'Traducir números de planilla en historia — consume tiempo y es fácil perder el insight',
        after: 'Alimentar las cifras clave a la IA → obtener un borrador de narrativa estructurado con un arco argumental claro → editar para precisión',
        prompt: 'Prompt de ejemplo: "Nuestro presupuesto para el próximo año es [X]. Las inversiones clave son [lista]. Las restricciones clave son [lista]. Escribí una narrativa de presentación de 5 minutos que empiece con el contexto de negocio, explique la lógica de asignación y termine con cómo se ve el éxito."'
      },
      {
        icon: '🔍', title: 'Revisión de facturas y contratos',
        before: 'Leer contratos de 20 páginas buscando términos de pago, penalidades y cláusulas de riesgo — 40+ minutos cada uno',
        after: 'Pegar texto del contrato en la IA → pedir un resumen estructurado con alertas → revisar el resumen en lugar del documento completo',
        prompt: 'Prompt de ejemplo: "Revisá este extracto de contrato y extraé: 1) Términos de pago, 2) Cláusulas de penalidad, 3) Condiciones de renovación, 4) Cualquier cláusula inusual o de alto riesgo. Marcá cualquier cosa que se desvsíe de términos estándar. [pegar contrato]"'
      },
      {
        icon: '📧', title: 'Comunicación con stakeholders',
        before: 'Escribir el mismo email de "explicación de presupuesto" para diferentes stakeholders con diferentes niveles de alfabetización financiera',
        after: 'Escribir una vez → pedir a la IA que adapte el tono y la complejidad para cada audiencia',
        prompt: 'Prompt de ejemplo: "Reescribí esta actualización financiera para una audiencia no-financiera. Eliminá la jerga, explicá cualquier término técnico en una oración y terminá con un llamado a la acción claro. [pegar original]"'
      },
    ],
    tip: 'La IA no puede acceder a tus sistemas financieros internos directamente. Siempre pegá o escribí los datos relevantes — nunca compartas detalles confidenciales más allá de lo que la tarea requiere.'
  }
}

export default function S04_Finance({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-5 mb-8">
        {c.useCases.map((uc, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{uc.icon}</span>
              <p className="text-white font-semibold text-sm">{uc.title}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-2 mb-3">
              <div className="bg-red-500/8 rounded-lg p-2">
                <p className="text-red-400 text-xs font-semibold mb-1">Before</p>
                <p className="text-slate-400 text-xs leading-relaxed">{uc.before}</p>
              </div>
              <div className="bg-green-500/8 rounded-lg p-2">
                <p className="text-green-400 text-xs font-semibold mb-1">After</p>
                <p className="text-slate-300 text-xs leading-relaxed">{uc.after}</p>
              </div>
            </div>
            <div className="bg-slate-900 rounded-lg px-3 py-2">
              <p className="text-cyan-400 text-xs italic leading-relaxed">{uc.prompt}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        ⚠️ {c.tip}
      </div>
    </div>
  )
}
