import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Pattern 04: Loop / Feedback',
    subtitle: 'An agent generates output, an evaluator scores it, and the loop continues until quality meets the threshold. Self-improving iteration.',
    when: 'Use when first-attempt quality is often insufficient and improvement is measurable. The loop runs until done — but always set a max iteration limit to prevent infinite loops.',
    loopSteps: [
      { step: 'Generate', desc: 'Agent produces an initial output', icon: '✏️' },
      { step: 'Evaluate', desc: 'Evaluator scores against criteria', icon: '🔍' },
      { step: 'Pass?', desc: 'If score ≥ threshold → exit loop', icon: '✅' },
      { step: 'Refine', desc: 'If score < threshold → agent revises with feedback', icon: '🔄' },
    ],
    visma: {
      label: 'Visma example: Contract clause generation with legal review',
      flow: [
        'Writer agent generates a contract clause for a new SaaS agreement',
        'Legal evaluator agent scores: compliance (0-10), clarity (0-10), enforceability (0-10)',
        'If average score < 8: feedback sent to writer with specific weaknesses',
        'Writer revises. Loop repeats. Max 5 iterations.',
        'When score ≥ 8 OR 5 iterations reached: human legal review of final version',
      ],
      result: 'Contracts that required 3 rounds of back-and-forth with legal now arrive at human review already at 85% quality.'
    },
    warning: 'Always set a max iteration limit. An unconstrained loop is a runaway cost event. Claude Code sessions have been known to loop for hours when the exit condition is unclear.',
    tradeoffs: {
      pros: ['Produces higher quality output than single-pass', 'Self-correcting — explicit feedback guides improvement', 'Works well when quality is objectively measurable'],
      cons: ['Most expensive pattern — multiple LLM calls per output', 'Requires a reliable evaluator (garbage eval = garbage loop)', 'Can loop endlessly without a proper exit condition']
    }
  },
  es: {
    title: 'Patrón 04: Loop / Feedback',
    subtitle: 'Un agente genera output, un evaluador lo punta, y el loop continúa hasta que la calidad cumple el umbral. Iteración auto-mejorante.',
    when: 'Usá cuando la calidad del primer intento suele ser insuficiente y la mejora es medible. El loop corre hasta terminar — pero siempre establecé un límite máximo de iteraciones para prevenir loops infinitos.',
    loopSteps: [
      { step: 'Generar', desc: 'El agente produce un output inicial', icon: '✏️' },
      { step: 'Evaluar', desc: 'El evaluador punta contra criterios', icon: '🔍' },
      { step: '¿Pasa?', desc: 'Si puntaje ≥ umbral → salir del loop', icon: '✅' },
      { step: 'Refinar', desc: 'Si puntaje < umbral → el agente revisa con feedback', icon: '🔄' },
    ],
    visma: {
      label: 'Ejemplo Visma: Generación de cláusulas de contrato con revisión legal',
      flow: [
        'El agente escritor genera una cláusula de contrato para un nuevo acuerdo SaaS',
        'El agente evaluador legal punta: cumplimiento (0-10), claridad (0-10), ejecutabilidad (0-10)',
        'Si puntaje promedio < 8: feedback enviado al escritor con debilidades específicas',
        'El escritor revisa. El loop se repite. Máximo 5 iteraciones.',
        'Cuando puntaje ≥ 8 O se alcanzan 5 iteraciones: revisión legal humana de la versión final',
      ],
      result: 'Los contratos que requerían 3 rondas de ida y vuelta con legal ahora llegan a la revisión humana ya con 85% de calidad.'
    },
    warning: 'Siempre establecé un límite máximo de iteraciones. Un loop sin restricciones es un evento de costo descontrolado. Las sesiones de Claude Code se han conocido por loopearse durante horas cuando la condición de salida no está clara.',
    tradeoffs: {
      pros: ['Produce output de mayor calidad que el paso único', 'Auto-correctivo — el feedback explícito guía la mejora', 'Funciona bien cuando la calidad es objetivamente medible'],
      cons: ['Patrón más costoso — múltiples llamadas LLM por output', 'Requiere un evaluador confiable (eval basura = loop basura)', 'Puede loopearse indefinidamente sin una condición de salida adecuada']
    }
  }
}

export default function S05_Loop({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-orange-600/20 text-orange-400 text-xs font-black px-2 py-1 rounded">04</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-3 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-orange-400 text-xs italic mb-8">📍 {c.when}</p>

      {/* Loop diagram */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {c.loopSteps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="bg-orange-600/15 border border-orange-500/30 rounded-xl p-3 text-center w-28">
                <span className="text-lg block mb-1">{s.icon}</span>
                <p className="text-orange-300 text-xs font-bold mb-0.5">{s.step}</p>
                <p className="text-slate-500 text-xs leading-snug">{s.desc}</p>
              </div>
              {i < c.loopSteps.length - 1 && <span className="text-orange-400">→</span>}
            </div>
          ))}
          <span className="text-orange-400 text-lg">↩</span>
        </div>
      </div>

      <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 mb-6">
        <p className="text-red-400 text-xs">⚠️ {c.warning}</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-5 mb-6">
        <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">{c.visma.label}</p>
        {c.visma.flow.map((f, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-start gap-2">
            <span className="text-orange-400 shrink-0">{i + 1}.</span>{f}
          </p>
        ))}
        <div className="mt-3 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
          <p className="text-green-300 text-xs">✓ {c.visma.result}</p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-500/8 border border-green-500/20 rounded-xl p-4">
          <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">Pros</p>
          {c.tradeoffs.pros.map((p, i) => <p key={i} className="text-slate-300 text-xs mb-1">✓ {p}</p>)}
        </div>
        <div className="bg-red-500/8 border border-red-500/20 rounded-xl p-4">
          <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">Cons</p>
          {c.tradeoffs.cons.map((p, i) => <p key={i} className="text-slate-400 text-xs mb-1">✗ {p}</p>)}
        </div>
      </div>
    </div>
  )
}
