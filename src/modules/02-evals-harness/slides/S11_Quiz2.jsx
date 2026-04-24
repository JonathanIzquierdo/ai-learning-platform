import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'Your team built a RAG-powered support bot. Users are complaining the answers are sometimes completely wrong. What should you investigate first?',
    options: [
      'Switch to a more powerful LLM — it will hallucinate less',
      'Check Context Relevance and Faithfulness — the retriever may be fetching wrong documents',
      'Increase the temperature to get more creative answers',
      'Add more data to the vector database',
    ],
    correct: 1,
  },
  es: {
    question: 'Tu equipo construyó un bot de soporte con RAG. Los usuarios se quejan de que las respuestas a veces son completamente incorrectas. ¿Qué deberías investigar primero?',
    options: [
      'Cambiar a un LLM más potente — va a alucinar menos',
      'Revisar Relevancia del Contexto y Fidelidad — el retriever puede estar trayendo documentos incorrectos',
      'Aumentar la temperatura para obtener respuestas más creativas',
      'Agregar más datos a la base de datos vectorial',
    ],
    correct: 1,
  }
}

export default function S11_Quiz2({ lang, onQuizPass }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[60vh]">
      <QuizCard question={c.question} options={c.options} correctIndex={c.correct} onPass={onQuizPass} />
    </div>
  )
}
