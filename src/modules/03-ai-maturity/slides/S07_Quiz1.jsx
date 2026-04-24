import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'A developer uses Claude to explain a complex function, then writes the fix herself. She also uses Copilot autocomplete while coding. What level is she operating at?',
    options: [
      'Level 2 — she\'s supervising the agent with explicit instructions',
      'Level 1 — she\'s using AI as assistance, reviewing every output before it ships',
      'Level 3 — she\'s delegating execution to the AI',
      'Level 4 — she has multiple agents running in parallel',
    ],
    correct: 1,
  },
  es: {
    question: 'Una desarrolladora usa Claude para explicar una función compleja, luego escribe ella misma la corrección. También usa el autocompletado de Copilot mientras codifica. ¿En qué nivel está operando?',
    options: [
      'Nivel 2 — está supervisando el agente con instrucciones explícitas',
      'Nivel 1 — está usando IA como asistencia, revisando cada output antes de que llegue a producción',
      'Nivel 3 — está delegando la ejecución a la IA',
      'Nivel 4 — tiene múltiples agentes corriendo en paralelo',
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
