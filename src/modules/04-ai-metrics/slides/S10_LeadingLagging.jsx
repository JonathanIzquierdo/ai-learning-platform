import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Leading vs. lagging indicators.',
    subtitle: 'Most AI metrics are lagging — they tell you what happened. Leading indicators tell you what\'s about to happen. You need both.',
    explain: {
      lagging: {
        label: 'Lagging indicators',
        desc: 'Measure outcomes after they happen. Slow to change, but definitive.',
        examples: ['Revenue impact', 'Customer churn', 'Defect rate', 'Cost savings', 'NPS'],
        color: '#888780'
      },
      leading: {
        label: 'Leading indicators',
        desc: 'Predict future outcomes. Change faster, allow earlier course correction.',
        examples: ['AI tool adoption rate', 'Acceptance rate of AI output', 'Employee confidence in AI', 'Eval pass rate', 'Time saved on routine tasks'],
        color: '#36B37E'
      }
    },
    aiSpecific: {
      label: 'AI-specific leading indicators worth tracking',
      indicators: [
        {
          indicator: 'Weekly active usage rate', why: 'If people aren\'t using the tools consistently, no other metric matters. Adoption below 60% after 90 days is a red flag.',
          lag: 'Revenue impact from AI', color: '#0052CC'
        },
        {
          indicator: 'AI output acceptance rate trend', why: 'If people are increasingly rejecting AI output, quality is degrading or trust is eroding. Catch this before rework costs spike.',
          lag: 'Rework cost and defect rate', color: '#36B37E'
        },
        {
          indicator: 'Prompt quality score (self-assessed)', why: 'Teams that invest in prompt engineering and skills see compounding returns. Teams that don\'t plateau fast.',
          lag: 'Time-to-completion and output quality', color: '#6554C0'
        },
        {
          indicator: 'Exception and escalation rate', why: 'Rising exceptions in automated workflows predict failures before they hit customers or auditors.',
          lag: 'SLA violations and error rate', color: '#FF991F'
        },
        {
          indicator: 'AI confidence index', why: 'Teams with low confidence use AI poorly or not at all. This predicts adoption failure 60-90 days out.',
          lag: 'Adoption rate and productivity impact', color: '#00B8D9'
        },
      ]
    },
    cadence: {
      label: 'Measurement cadence',
      items: [
        { freq: 'Weekly', metrics: 'Adoption rate, token costs, acceptance rate, eval pass rate' },
        { freq: 'Monthly', metrics: 'Cycle time, quality metrics, satisfaction scores, exception rates' },
        { freq: 'Quarterly', metrics: 'ROI per use case, skill development, NPS/CSAT trend, cost per outcome' },
      ]
    }
  },
  es: {
    title: 'Indicadores adelantados vs. rezagados.',
    subtitle: 'La mayoría de las métricas de IA son rezagadas — te dicen lo que pasó. Los indicadores adelantados te dicen lo que está por pasar. Necesitás ambos.',
    explain: {
      lagging: {
        label: 'Indicadores rezagados',
        desc: 'Miden resultados después de que ocurren. Lentos para cambiar, pero definitivos.',
        examples: ['Impacto en ingresos', 'Churn de clientes', 'Tasa de defectos', 'Ahorro de costos', 'NPS'],
        color: '#888780'
      },
      leading: {
        label: 'Indicadores adelantados',
        desc: 'Predicen resultados futuros. Cambian más rápido, permiten corrección de rumbo más temprana.',
        examples: ['Tasa de adopción de herramientas de IA', 'Tasa de aceptación del output de IA', 'Confianza de empleados en IA', 'Tasa de éxito de evals', 'Tiempo ahorrado en tareas rutinarias'],
        color: '#36B37E'
      }
    },
    aiSpecific: {
      label: 'Indicadores adelantados específicos de IA que vale la pena rastrear',
      indicators: [
        {
          indicator: 'Tasa de uso activo semanal', why: 'Si la gente no usa las herramientas de forma consistente, ningún otra métrica importa. Una adopción por debajo del 60% después de 90 días es una señal de alerta.',
          lag: 'Impacto en ingresos por IA', color: '#0052CC'
        },
        {
          indicator: 'Tendencia de tasa de aceptación del output de IA', why: 'Si la gente rechaza cada vez más el output de IA, la calidad está degradando o la confianza erodándose. Detectá esto antes de que los costos de retrabajo suban.',
          lag: 'Costo de retrabajo y tasa de defectos', color: '#36B37E'
        },
        {
          indicator: 'Puntaje de calidad de prompts (autoevaluado)', why: 'Los equipos que invierten en ingeniería de prompts y habilidades ven retornos compuestos. Los que no, se estancan rápido.',
          lag: 'Tiempo de completación y calidad del output', color: '#6554C0'
        },
        {
          indicator: 'Tasa de excepciones y escalaciones', why: 'Las excepciones crecientes en flujos automatizados predicen fallos antes de que lleguen a clientes o auditores.',
          lag: 'Violaciones de SLA y tasa de errores', color: '#FF991F'
        },
        {
          indicator: 'Índice de confianza en IA', why: 'Los equipos con baja confianza usan IA mal o no la usan. Esto predice fallos de adopción con 60-90 días de anticipación.',
          lag: 'Tasa de adopción e impacto en productividad', color: '#00B8D9'
        },
      ]
    },
    cadence: {
      label: 'Cadencia de medición',
      items: [
        { freq: 'Semanal', metrics: 'Tasa de adopción, costos de tokens, tasa de aceptación, tasa de éxito de evals' },
        { freq: 'Mensual', metrics: 'Tiempo de ciclo, métricas de calidad, puntajes de satisfacción, tasas de excepción' },
        { freq: 'Trimestral', metrics: 'ROI por caso de uso, desarrollo de habilidades, tendencia NPS/CSAT, costo por resultado' },
      ]
    }
  }
}

export default function S10_LeadingLagging({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[c.explain.lagging, c.explain.leading].map((side, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className="rounded-xl border p-4" style={{ borderColor: side.color + '40', background: side.color + '0D' }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: side.color }}>{side.label}</p>
            <p className="text-slate-300 text-xs mb-3">{side.desc}</p>
            {side.examples.map((ex, j) => (
              <p key={j} className="text-xs text-slate-400 mb-1 flex items-center gap-2">
                <span style={{ color: side.color }}>‣</span>{ex}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">{c.aiSpecific.label}</p>
      <div className="flex flex-col gap-2 mb-8">
        {c.aiSpecific.indicators.map((ind, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3">
            <div className="flex items-start justify-between gap-2 mb-1">
              <p className="text-xs font-semibold" style={{ color: ind.color }}>{ind.indicator}</p>
              <span className="text-slate-600 text-xs whitespace-nowrap">→ {ind.lag}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">{ind.why}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-4">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">{c.cadence.label}</p>
        {c.cadence.items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 mb-2">
            <span className="text-cyan-400 font-bold text-xs w-20 shrink-0">{item.freq}</span>
            <p className="text-slate-400 text-xs">{item.metrics}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
