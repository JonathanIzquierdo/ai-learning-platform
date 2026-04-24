import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'Your manager asks you to prepare the quarterly business review presentation for the board. You use AI to draft the narrative sections. Before presenting, what is your responsibility?',
    options: [
      'Nothing extra — if AI wrote it accurately, it\'s good to go',
      'Review every section for accuracy, add your own insights, verify all numbers, and ensure the tone matches your company\'s voice',
      'Disclose to the board that AI wrote the presentation',
      'Have a colleague review the AI output so you don\'t have to',
    ],
    correct: 1,
  },
  es: {
    question: 'Tu gerente te pide que prepares la presentación de revisión trimestral del negocio para el directorio. Usas IA para redactar las secciones narrativas. Antes de presentar, ¿cuál es tu responsabilidad?',
    options: [
      'Nada extra — si la IA lo escribió con precisión, está listo para usar',
      'Revisar cada sección por precisión, agregar tus propios insights, verificar todos los números y asegurarte de que el tono coincida con la voz de tu empresa',
      'Informar al directorio que la IA escribió la presentación',
      'Pedir a un colega que revise el output de IA para no tener que hacerlo vos',
    ],
    correct: 1,
  }
}

export default function S10_Quiz2({ lang, onQuizPass }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[60vh]">
      <QuizCard question={c.question} options={c.options} correctIndex={c.correct} onPass={onQuizPass} />
    </div>
  )
}
