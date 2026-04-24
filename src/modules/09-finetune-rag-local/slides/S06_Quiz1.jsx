import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'Your customer support bot keeps giving outdated answers about a product feature that changed 3 months ago. Your knowledge base hasn\'t been updated. Which strategy solves this?',
    options: [
      'Fine-tune the model on a dataset of correct answers about the new feature',
      'Update the documents in your RAG knowledge base with the current feature information',
      'Add a rule to the system prompt: "Never answer questions about [old feature name]"',
      'Switch to a newer base model that was trained after the feature change',
    ],
    correct: 1,
  },
  es: {
    question: 'Tu bot de soporte al cliente sigue dando respuestas desactualizadas sobre una funcionalidad de producto que cambió hace 3 meses. Tu base de conocimiento no ha sido actualizada. ¿Qué estrategia resuelve esto?',
    options: [
      'Hacer fine-tune del modelo en un dataset de respuestas correctas sobre la nueva funcionalidad',
      'Actualizar los documentos en tu base de conocimiento RAG con la información actual de la funcionalidad',
      'Agregar una regla al system prompt: "Nunca respondas preguntas sobre [nombre de la funcionalidad vieja]"',
      'Cambiar a un modelo base más nuevo que fue entrenado después del cambio de funcionalidad',
    ],
    correct: 1,
  }
}

export default function S06_Quiz1({ lang, onQuizPass }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[60vh]">
      <QuizCard question={c.question} options={c.options} correctIndex={c.correct} onPass={onQuizPass} />
    </div>
  )
}
