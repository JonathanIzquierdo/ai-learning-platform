import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'A product manager asks: "Can we just connect our AI assistant to our internal knowledge base so it can answer questions about our product?" What technology makes this possible?',
    options: [
      'Fine-tuning — retrain the model on our internal documents',
      'RAG — retrieve relevant documents at query time and add them to the model\'s context',
      'MCP — connect the model to all our internal services',
      'Just increase the context window so it can hold all our documents',
    ],
    correct: 1,
  },
  es: {
    question: 'Una product manager pregunta: "¿Podemos conectar nuestro asistente de IA a nuestra base de conocimiento interna para que pueda responder preguntas sobre nuestro producto?" ¿Qué tecnología hace esto posible?',
    options: [
      'Fine-tuning — reentrenar el modelo en nuestros documentos internos',
      'RAG — recuperar documentos relevantes en el momento de la consulta y agregarlos al contexto del modelo',
      'MCP — conectar el modelo a todos nuestros servicios internos',
      'Solo aumentar la context window para que pueda contener todos nuestros documentos',
    ],
    correct: 1,
  }
}

export default function S13_Quiz2({ lang, onQuizPass }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[60vh]">
      <QuizCard question={c.question} options={c.options} correctIndex={c.correct} onPass={onQuizPass} />
    </div>
  )
}
