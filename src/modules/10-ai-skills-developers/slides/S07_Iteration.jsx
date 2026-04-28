import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Skill 5',
    title: 'Iterative Refinement',
    body: 'The biggest productivity killer: throwing away the model\u2019s output and starting over. The best developers build on each response.',
    techniques: [
      { name: 'Build, don\u2019t restart', icon: String.fromCodePoint(0x1F3D7, 0xFE0F), detail: 'If the output is 70% right, say "Good, but change X and Y." Don\u2019t re-prompt from scratch. The conversation context is your best asset.' },
      { name: 'Be specific about what\u2019s wrong', icon: String.fromCodePoint(0x1F3AF), detail: '"This is wrong" is useless. "The function handles the happy path but doesn\u2019t handle null inputs \u2014 add validation for lines 12-15" is actionable.' },
      { name: 'Use the output as input', icon: String.fromCodePoint(0x1F504), detail: 'Take the model\u2019s code, run it, paste the actual error back. This create-test-fix loop is how senior developers naturally work with AI.' },
      { name: 'Checkpoint good outputs', icon: String.fromCodePoint(0x1F4BE), detail: 'When you get a good partial result, explicitly tell the model: "This part is correct, don\u2019t change it. Now work on the next part." This prevents regression.' },
    ],
    costNote: 'Every re-prompt from scratch costs tokens. A 2000-token context re-sent 5 times = 10,000 tokens wasted. Iterating on the same conversation is cheaper AND produces better results.',
  },
  es: {
    eyebrow: 'Skill 5',
    title: 'Refinamiento Iterativo',
    body: 'El mayor asesino de productividad: tirar el output del modelo y empezar de cero. Los mejores developers construyen sobre cada respuesta.',
    techniques: [
      { name: 'Constru\u00ed, no reinicies', icon: String.fromCodePoint(0x1F3D7, 0xFE0F), detail: 'Si el output est\u00e1 70% bien, dec\u00ed "Bien, pero cambi\u00e1 X e Y." No re-promptees desde cero. El contexto de la conversaci\u00f3n es tu mejor activo.' },
      { name: 'S\u00e9 espec\u00edfico sobre qu\u00e9 est\u00e1 mal', icon: String.fromCodePoint(0x1F3AF), detail: '"Esto est\u00e1 mal" es in\u00fatil. "La funci\u00f3n maneja el happy path pero no maneja inputs null \u2014 agreg\u00e1 validaci\u00f3n en las l\u00edneas 12-15" es accionable.' },
      { name: 'Us\u00e1 el output como input', icon: String.fromCodePoint(0x1F504), detail: 'Tom\u00e1 el c\u00f3digo del modelo, ejecutalo, peg\u00e1 el error real de vuelta. Este loop de crear-testear-arreglar es como los devs senior trabajan naturalmente con IA.' },
      { name: 'Checkpoint buenos outputs', icon: String.fromCodePoint(0x1F4BE), detail: 'Cuando obten\u00e9s un buen resultado parcial, decile expl\u00edcitamente al modelo: "Esta parte est\u00e1 correcta, no la cambies. Ahora trabaj\u00e1 en la siguiente parte." Esto previene regresiones.' },
    ],
    costNote: 'Cada re-prompt desde cero cuesta tokens. Un contexto de 2000 tokens re-enviado 5 veces = 10.000 tokens desperdiciados. Iterar sobre la misma conversaci\u00f3n es m\u00e1s barato Y produce mejores resultados.',
  }
}

export default function S07_Iteration({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-6 max-w-xl">{c.body}</motion.p>
      <div className="space-y-3 mb-6">
        {c.techniques.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{t.icon}</span>
              <span className="text-white text-sm font-semibold">{t.name}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed pl-7">{t.detail}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        {String.fromCodePoint(0x1F4B0)} {c.costNote}
      </motion.div>
    </div>
  )
}
