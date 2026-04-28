import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Skill 4',
    title: 'Debugging with AI',
    body: 'AI is an incredible debugging partner \u2014 if you give it the right context. Most people dump an error message and expect magic. Here is how to actually get results.',
    framework: [
      { step: '1. Error + Context', detail: 'Share the full error message, the relevant code (not the whole codebase), and what you expected to happen vs what happened.' },
      { step: '2. Reproduction steps', detail: 'Tell the model how to trigger the bug. "It crashes sometimes" is useless. "It crashes when the input array is empty" is actionable.' },
      { step: '3. What you tried', detail: 'List what you already checked. This prevents the model from suggesting things you already ruled out and forces deeper analysis.' },
      { step: '4. Constraints', detail: 'Specify your stack, versions, and constraints. "I can\u2019t change the database schema" or "This must work on Node 18" matters.' },
    ],
    donts: [
      'Pasting 500 lines of code and saying "fix this"',
      'Sharing production data in error logs (strip PII first!)',
      'Accepting the first suggestion without understanding it',
      'Copy-pasting fixes without running tests',
    ],
  },
  es: {
    eyebrow: 'Skill 4',
    title: 'Debugging con IA',
    body: 'La IA es un compa\u00f1ero de debugging incre\u00edble \u2014 si le das el contexto correcto. La mayor\u00eda de la gente tira un mensaje de error y espera magia. As\u00ed es como realmente se obtienen resultados.',
    framework: [
      { step: '1. Error + Contexto', detail: 'Compart\u00ed el mensaje de error completo, el c\u00f3digo relevante (no todo el codebase), y qu\u00e9 esperabas que pasara vs qu\u00e9 pas\u00f3.' },
      { step: '2. Pasos de reproducci\u00f3n', detail: 'Decile al modelo c\u00f3mo triggear el bug. "Se rompe a veces" es in\u00fatil. "Se rompe cuando el array de input est\u00e1 vac\u00edo" es accionable.' },
      { step: '3. Qu\u00e9 probaste', detail: 'List\u00e1 lo que ya verificaste. Esto evita que el modelo sugiera cosas que ya descartaste y fuerza un an\u00e1lisis m\u00e1s profundo.' },
      { step: '4. Restricciones', detail: 'Especific\u00e1 tu stack, versiones y restricciones. "No puedo cambiar el schema de la base" o "Esto debe funcionar en Node 18" importa.' },
    ],
    donts: [
      'Pegar 500 l\u00edneas de c\u00f3digo y decir "arregl\u00e1 esto"',
      'Compartir datos de producci\u00f3n en logs de error (strip PII primero!)',
      'Aceptar la primera sugerencia sin entenderla',
      'Copiar y pegar fixes sin correr tests',
    ],
  }
}

export default function S06_Debugging({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-6 max-w-xl">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-slate-800 border border-cyan-500/30 rounded-xl p-5 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase mb-3">{lang === 'es' ? 'Framework de 4 pasos' : '4-Step Framework'}</p>
        <div className="space-y-3">
          {c.framework.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
              className="border-l-2 border-cyan-500/40 pl-3">
              <p className="text-white text-sm font-semibold mb-1">{f.step}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{f.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="bg-red-500/5 border border-red-500/30 rounded-xl p-4">
        <p className="text-red-400 text-xs font-bold uppercase mb-2">{String.fromCodePoint(0x1F6AB)} {lang === 'es' ? 'No hagas esto' : 'Don\u2019t do this'}</p>
        <div className="space-y-1">
          {c.donts.map((d, i) => (
            <p key={i} className="text-slate-400 text-sm flex items-start gap-2">
              <span className="text-red-400 mt-0.5">{String.fromCodePoint(0x274C)}</span> {d}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
