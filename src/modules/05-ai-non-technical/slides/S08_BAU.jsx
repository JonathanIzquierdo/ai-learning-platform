import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Redesign your BAU with AI.',
    subtitle: 'BAU (Business As Usual) is where most time gets lost. These are the tasks you do every week on autopilot. AI can transform them.',
    what: 'BAU tasks are perfect for AI because they are repetitive, have a clear format, and don\'t require deep creativity. The goal isn\'t to stop doing them — it\'s to do them in 20% of the time so you can spend the other 80% on the work that actually requires your brain.',
    audit: {
      label: 'Step 1: Do a BAU audit',
      desc: 'List every recurring task you do weekly. For each one, ask:',
      questions: [
        'Does this task follow a pattern or template?',
        'Is most of the thinking already done — am I mostly filling in blanks?',
        'Would a well-briefed colleague be able to do a decent first draft?',
        'Am I the only one who can review and approve the final version?',
      ],
      conclusion: 'If you answered YES to the first three and NO to the last — AI can do the first 80% of this task.'
    },
    examples: [
      { task: 'Weekly status update email', aiDoes: 'Drafts from your bullet points', youDo: 'Edit tone, add context, send' },
      { task: 'Meeting agenda preparation', aiDoes: 'Structures agenda from your notes', youDo: 'Add priorities, confirm with team' },
      { task: 'Monthly report narrative', aiDoes: 'Writes narrative from data you provide', youDo: 'Verify accuracy, add insights' },
      { task: 'Onboarding new team member', aiDoes: 'Creates checklist, welcome message, FAQ doc', youDo: 'Personalize, add cultural context' },
      { task: 'Summarizing a long document', aiDoes: 'Extracts key points and action items', youDo: 'Confirm nothing critical was missed' },
      { task: 'Preparing for a difficult conversation', aiDoes: 'Suggests talking points, anticipates objections', youDo: 'Adapt to the actual person and context' },
    ],
    principle: 'The rule: AI does the draft, you do the judgment. Drafts are cheap. Judgment is what you\'re paid for.'
  },
  es: {
    title: 'Rediseñá tu BAU con IA.',
    subtitle: 'El BAU (Business As Usual) es donde se pierde la mayoría del tiempo. Son las tareas que hacés cada semana en piloto automático. La IA puede transformarlas.',
    what: 'Las tareas de BAU son perfectas para la IA porque son repetitivas, tienen un formato claro y no requieren creatividad profunda. El objetivo no es dejar de hacerlas — es hacerlas en el 20% del tiempo para poder pasar el otro 80% en el trabajo que realmente requiere tu cerebro.',
    audit: {
      label: 'Paso 1: Hacé una auditoría de BAU',
      desc: 'Listá cada tarea recurrente que hacés semanalmente. Para cada una, pregúntaté:',
      questions: [
        '¿Esta tarea sigue un patrón o plantilla?',
        '¿Ya está hecho la mayor parte del pensamiento — principalmente estoy completando espacios en blanco?',
        '¿Un colega bien informado podría hacer un primer borrador decente?',
        '¿Soy el único que puede revisar y aprobar la versión final?',
      ],
      conclusion: 'Si respondiste SÍ a las primeras tres y NO a la última — la IA puede hacer el primer 80% de esta tarea.'
    },
    examples: [
      { task: 'Email de actualización semanal de estado', aiDoes: 'Redacta desde tus bullets', youDo: 'Editá el tono, agréga contexto, envía' },
      { task: 'Preparación de agenda de reuniones', aiDoes: 'Estructura la agenda desde tus notas', youDo: 'Agréga prioridades, confirmá con el equipo' },
      { task: 'Narrativa del reporte mensual', aiDoes: 'Escribe la narrativa desde los datos que proporcionás', youDo: 'Verificá la precisión, agréga insights' },
      { task: 'Onboarding de nuevo miembro del equipo', aiDoes: 'Crea checklist, mensaje de bienvenida, doc de FAQ', youDo: 'Personalizá, agréga contexto cultural' },
      { task: 'Resumir un documento largo', aiDoes: 'Extrae puntos clave e ítems de acción', youDo: 'Confirmá que no se perdió nada crítico' },
      { task: 'Prepararse para una conversación difícil', aiDoes: 'Sugiere puntos de conversación, anticipa objeciones', youDo: 'Adaptá a la persona y contexto real' },
    ],
    principle: 'La regla: la IA hace el borrador, vos hacés el juicio. Los borradores son baratos. El juicio es por lo que te pagan.'
  }
}

export default function S08_BAU({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-6 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-slate-400 text-sm mb-8 leading-relaxed">{c.what}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.audit.label}</p>
        <p className="text-slate-300 text-sm mb-3">{c.audit.desc}</p>
        {c.audit.questions.map((q, i) => (
          <p key={i} className="text-slate-400 text-xs mb-1.5 flex items-start gap-2">
            <span className="text-amber-400">{i + 1}.</span>{q}
          </p>
        ))}
        <div className="mt-3 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
          <p className="text-green-300 text-xs font-semibold">{c.audit.conclusion}</p>
        </div>
      </motion.div>
      <div className="flex flex-col gap-2 mb-6">
        {c.examples.map((ex, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.07 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 grid grid-cols-3 gap-2 items-start">
            <p className="text-white text-xs font-semibold">{ex.task}</p>
            <div><p className="text-cyan-400 text-xs font-semibold mb-0.5">AI does</p><p className="text-slate-400 text-xs">{ex.aiDoes}</p></div>
            <div><p className="text-amber-400 text-xs font-semibold mb-0.5">You do</p><p className="text-slate-300 text-xs">{ex.youDo}</p></div>
          </motion.div>
        ))}
      </div>
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-sm font-semibold text-purple-200">
        💡 {c.principle}
      </div>
    </div>
  )
}
