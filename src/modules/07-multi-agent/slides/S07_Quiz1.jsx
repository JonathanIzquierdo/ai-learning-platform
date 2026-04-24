import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'Your team wants to build an AI system that analyzes monthly financial reports for all 8 Visma LATAM companies and produces a unified regional summary. Each company\'s analysis is independent. Which pattern is most appropriate?',
    options: [
      'Sequential — analyze each company one after the other, then summarize',
      'Parallel — run 8 agents simultaneously (one per company), then aggregate results',
      'Loop — keep refining the summary until quality score is high enough',
      'Handoff — pass from company to company as each analysis completes',
    ],
    correct: 1,
  },
  es: {
    question: 'Tu equipo quiere construir un sistema de IA que analice los reportes financieros mensuales de las 8 empresas Visma LATAM y produzca un resumen regional unificado. El análisis de cada empresa es independiente. ¿Qué patrón es más apropiado?',
    options: [
      'Secuencial — analizar cada empresa una tras otra, luego resumir',
      'Paralelo — correr 8 agentes simultáneamente (uno por empresa), luego agregar resultados',
      'Loop — seguir refinando el resumen hasta que la puntuación de calidad sea suficientemente alta',
      'Handoff — pasar de empresa en empresa a medida que cada análisis se completa',
    ],
    correct: 1,
  }
}

export default function S07_Quiz1({ lang, onQuizPass }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[60vh]">
      <QuizCard question={c.question} options={c.options} correctIndex={c.correct} onPass={onQuizPass} />
    </div>
  )
}
