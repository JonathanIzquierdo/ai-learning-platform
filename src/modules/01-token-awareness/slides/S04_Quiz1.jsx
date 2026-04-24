import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'A teammate asks you to summarize a 10-line changelog and format it as bullet points. Which model should you reach for?',
    options: [
      'Claude Opus — it gives the most accurate summary',
      'Claude Sonnet — balanced choice for everyday tasks',
      'Claude Haiku — fast, cheap, perfect for this simple task',
      'It doesn\'t matter, they all cost the same',
    ],
    correct: 2,
  },
  es: {
    question: 'Un compañero te pide que resumas un changelog de 10 líneas y lo formatees como bullets. ¿Qué modelo usarías?',
    options: [
      'Claude Opus — da el resumen más preciso',
      'Claude Sonnet — elección balanceada para tareas del día a día',
      'Claude Haiku — rápido, barato, perfecto para esta tarea simple',
      'No importa, todos cuestan igual',
    ],
    correct: 2,
  }
}

export default function S04_Quiz1({ lang, onQuizPass }) {
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
