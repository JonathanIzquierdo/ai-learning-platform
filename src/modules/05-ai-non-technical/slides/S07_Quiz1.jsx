import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'You\'re an HR manager and want to use AI to analyze 150 employee satisfaction survey responses. Which approach is correct?',
    options: [
      'Paste all responses including employee names and IDs — more context gives better results',
      'Anonymize the responses first (remove names, IDs, departments that could identify individuals), then paste into AI',
      'Don\'t use AI for HR data — it\'s too sensitive',
      'Only share the responses with your personal AI account, not the company one',
    ],
    correct: 1,
  },
  es: {
    question: 'Sos gerente de RRHH y querés usar IA para analizar 150 respuestas de encuestas de satisfacción de empleados. ¿Cuál es el enfoque correcto?',
    options: [
      'Pegar todas las respuestas incluyendo nombres e IDs de empleados — más contexto da mejores resultados',
      'Anonimizar las respuestas primero (eliminar nombres, IDs, departamentos que puedan identificar individuos), luego pegar en la IA',
      'No usar IA para datos de RRHH — es demasiado sensible',
      'Solo compartir las respuestas con tu cuenta de IA personal, no la de la empresa',
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
