import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'Your agent is running a loop and has been retrying a failing test for 20 minutes. What should you do?',
    options: [
      'Let it run — the model will eventually figure it out',
      'Stop the session, review what failed, and restart with a targeted prompt',
      'Switch to a bigger model so it can solve the problem faster',
      'Open a new parallel session to tackle it from another angle',
    ],
    correct: 1,
  },
  es: {
    question: 'Tu agente está en un loop y lleva 20 minutos reintentando un test que falla. ¿Qué hacés?',
    options: [
      'Lo dejo correr — el modelo eventualmente lo va a resolver',
      'Paro la sesión, reviso qué falló y reinicio con un prompt específico',
      'Cambio a un modelo más grande para que lo resuelva más rápido',
      'Abro una sesión paralela para atacarlo desde otro ángulo',
    ],
    correct: 1,
  }
}

export default function S07_Quiz2({ lang, onQuizPass }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[60vh]">
      <QuizCard
        question={c.question}
        options={c.options}
        correctIndex={c.correct}
        onPass={onQuizPass}
      />
    </div>
  )
}
