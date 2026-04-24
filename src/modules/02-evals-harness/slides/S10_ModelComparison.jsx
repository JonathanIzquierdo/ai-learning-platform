import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Using evals to compare models.',
    subtitle: 'This is where the harness pays off. Instead of "let\'s try GPT-5 and see how it feels", you run the same eval suite against multiple models and let the data decide.',
    scenario: {
      label: 'FinBot scenario',
      text: 'The team wants to evaluate whether switching from Claude Sonnet to GPT-4.1 for FinBot\'s expense summaries would improve quality or reduce costs. They run the harness on both models across 500 real (anonymized) test cases.'
    },
    table: {
      headers: ['Metric', 'Claude Sonnet', 'GPT-4.1', 'Winner'],
      rows: [
        ['Faithfulness score', '4.3 / 5', '4.1 / 5', '🟢 Sonnet'],
        ['Answer relevance', '4.5 / 5', '4.4 / 5', '🟡 Tie'],
        ['JSON schema pass rate', '99.1%', '97.8%', '🟢 Sonnet'],
        ['Avg latency (p95)', '3.1s', '2.4s', '🟢 GPT-4.1'],
        ['Avg cost / query', '$0.018', '$0.011', '🟢 GPT-4.1'],
        ['PII leak rate', '0%', '0%', '🟡 Tie'],
      ]
    },
    conclusion: 'Result: GPT-4.1 is cheaper and faster, but Sonnet scores higher on faithfulness and schema compliance — critical for a financial product. The team keeps Sonnet for summaries but switches to GPT-4.1 mini for simpler lookups.',
    principle: 'Evals turn model selection from a gut-feel decision into an evidence-based one. This is how you justify model choices to engineering leadership and finance.'
  },
  es: {
    title: 'Usar evals para comparar modelos.',
    subtitle: 'Acá es donde el harness se paga. En lugar de "probemos GPT-5 a ver cómo se siente", corrés la misma suite de evals contra múltiples modelos y dejás que los datos decidan.',
    scenario: {
      label: 'Escenario de FinBot',
      text: 'El equipo quiere evaluar si cambiar de Claude Sonnet a GPT-4.1 para los resúmenes de gastos de FinBot mejoraría la calidad o reduciría los costos. Corren el harness en ambos modelos sobre 500 casos de test reales (anonimizados).'
    },
    table: {
      headers: ['Métrica', 'Claude Sonnet', 'GPT-4.1', 'Ganador'],
      rows: [
        ['Score de fidelidad', '4.3 / 5', '4.1 / 5', '🟢 Sonnet'],
        ['Relevancia de respuesta', '4.5 / 5', '4.4 / 5', '🟡 Empate'],
        ['Pass rate JSON schema', '99.1%', '97.8%', '🟢 Sonnet'],
        ['Latencia promedio (p95)', '3.1s', '2.4s', '🟢 GPT-4.1'],
        ['Costo promedio / consulta', '$0.018', '$0.011', '🟢 GPT-4.1'],
        ['Tasa de fuga de PII', '0%', '0%', '🟡 Empate'],
      ]
    },
    conclusion: 'Resultado: GPT-4.1 es más barato y rápido, pero Sonnet punta más alto en fidelidad y compliance de schema — crítico para un producto financiero. El equipo mantiene Sonnet para resúmenes pero cambia a GPT-4.1 mini para consultas simples.',
    principle: 'Los evals convierten la selección de modelos de una decisión por intuición en una basada en evidencia. Así es como justificás las elecciones de modelos ante liderazgo de ingeniería y finanzas.'
  }
}

export default function S10_ModelComparison({ lang }) {
  const c = content[lang]
  const t = c.table
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-5 mb-8">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">{c.scenario.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.scenario.text}</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-700/50">
              {t.headers.map((h, i) => (
                <th key={i} className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/50'}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-3 text-xs ${
                    j === 0 ? 'text-slate-300 font-medium' :
                    j === 3 ? 'font-semibold' : 'text-slate-400'
                  }`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
        className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-sm text-green-200 leading-relaxed mb-4">
        📊 {c.conclusion}
      </motion.div>
      <div className="text-slate-400 text-sm leading-relaxed italic">{c.principle}</div>
    </div>
  )
}
