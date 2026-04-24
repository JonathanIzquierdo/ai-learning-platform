import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Performance evaluators: cost, speed, and reliability.',
    subtitle: 'Quality is not enough. A correct answer that takes 30 seconds and costs $2 is not production-ready.',
    metrics: [
      {
        icon: '⏱️', name: 'Latency', color: '#0052CC',
        what: 'Time from request to first token (TTFT) and total response time.',
        eval: 'Set thresholds: e.g., p95 < 3s for interactive, p95 < 30s for batch.',
        finbot: 'FinBot dashboard queries should respond in < 2s. Anomaly detection reports can take up to 15s.'
      },
      {
        icon: '🪙', name: 'Token consumption', color: '#6554C0',
        what: 'Input tokens + output tokens per request, per session, per user.',
        eval: 'Alert when a request exceeds 2× the average. Track per-feature baselines.',
        finbot: 'A simple balance query should use ~500 tokens. If a request hits 50k, something is wrong.'
      },
      {
        icon: '💰', name: 'Cost per query', color: '#36B37E',
        what: 'Token cost × model price. Compute per feature, per user tier, per day.',
        eval: 'Set budget alerts. Track cost/query over time — it should be stable or decreasing.',
        finbot: 'FinBot target: < $0.02 per query. If a new model integration spikes this to $0.15, block the deploy.'
      },
      {
        icon: '🟢', name: 'Reliability / Error rate', color: '#FF991F',
        what: 'Rate of failed requests, timeouts, malformed outputs, and safety filter triggers.',
        eval: 'Track error rate per eval suite. A new model should not increase error rate by > 5%.',
        finbot: 'FinBot baseline: 0.3% error rate. Regression threshold: flag if > 1%.'
      },
      {
        icon: '🔄', name: 'Consistency', color: '#00B8D9',
        what: 'Does the model give the same answer to the same question across runs? (non-determinism check)',
        eval: 'Run each test case 3-5 times. Measure output variance. LLMs with temperature > 0 will vary.',
        finbot: 'FinBot with temperature=0 should give identical formatted summaries for the same input.'
      },
    ],
    tip: 'These metrics should be part of your CI/CD pipeline. Every PR that touches a prompt, a model version, or a retrieval config should automatically run the performance eval suite.'
  },
  es: {
    title: 'Evaluadores de performance: costo, velocidad y confiabilidad.',
    subtitle: 'La calidad no alcanza. Una respuesta correcta que tarda 30 segundos y cuesta $2 no está lista para producción.',
    metrics: [
      {
        icon: '⏱️', name: 'Latencia', color: '#0052CC',
        what: 'Tiempo desde la solicitud hasta el primer token (TTFT) y tiempo total de respuesta.',
        eval: 'Definí umbrales: ej. p95 < 3s para interactivo, p95 < 30s para batch.',
        finbot: 'Las consultas del dashboard de FinBot deben responder en < 2s. Los reportes de anomalías pueden tardar hasta 15s.'
      },
      {
        icon: '🪙', name: 'Consumo de tokens', color: '#6554C0',
        what: 'Tokens de input + output por request, por sesión, por usuario.',
        eval: 'Alertá cuando un request supera 2× el promedio. Rastrea baselines por feature.',
        finbot: 'Una consulta simple de saldo debería usar ~500 tokens. Si un request llega a 50k, algo está mal.'
      },
      {
        icon: '💰', name: 'Costo por consulta', color: '#36B37E',
        what: 'Costo de tokens × precio del modelo. Calculado por feature, por tier de usuario, por día.',
        eval: 'Configurá alertas de presupuesto. Rastreá costo/consulta en el tiempo — debería ser estable o decrecer.',
        finbot: 'Target de FinBot: < $0.02 por consulta. Si una nueva integración de modelo sube esto a $0.15, bloquéa el deploy.'
      },
      {
        icon: '🟢', name: 'Confiabilidad / Tasa de error', color: '#FF991F',
        what: 'Tasa de requests fallidos, timeouts, outputs malformados y filtros de seguridad activados.',
        eval: 'Rastreá tasa de error por suite de evals. Un nuevo modelo no debería aumentar la tasa de error en > 5%.',
        finbot: 'Baseline de FinBot: 0.3% de tasa de error. Umbral de regresión: alertar si > 1%.'
      },
      {
        icon: '🔄', name: 'Consistencia', color: '#00B8D9',
        what: '¿El modelo da la misma respuesta a la misma pregunta en distintas ejecuciones? (check de no-determinismo)',
        eval: 'Corré cada test case 3-5 veces. Medí la varianza del output. Los LLMs con temperatura > 0 varían.',
        finbot: 'FinBot con temperature=0 debería dar resúmenes formateados idénticos para el mismo input.'
      },
    ],
    tip: 'Estas métricas deben ser parte de tu pipeline de CI/CD. Cada PR que toque un prompt, una versión de modelo o una config de retrieval debería correr automáticamente la suite de evals de performance.'
  }
}

export default function S09_Performance({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-4 mb-8">
        {c.metrics.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{m.icon}</span>
              <p className="font-semibold text-sm" style={{ color: m.color }}>{m.name}</p>
            </div>
            <p className="text-white text-sm mb-2">{m.what}</p>
            <p className="text-slate-400 text-xs mb-2"><span className="text-slate-500">Eval: </span>{m.eval}</p>
            <div className="bg-slate-900 rounded-lg px-3 py-2 text-xs text-slate-400">
              <span className="text-cyan-400 font-semibold">FinBot › </span>{m.finbot}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-sm text-purple-200 leading-relaxed">
        💡 {c.tip}
      </div>
    </div>
  )
}
