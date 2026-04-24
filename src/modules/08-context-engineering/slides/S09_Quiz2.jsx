import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'You build a customer support bot backed by your product documentation (RAG). Users report that the bot is giving correct answers about features that were deprecated 6 months ago. What is the root cause and fix?',
    options: [
      'The instructions layer is wrong — add a rule telling the model to ignore deprecated features',
      'The knowledge layer has staleness issues — the deprecated docs are still in the knowledge base. Remove or update them, and add freshness metadata so the model knows document age.',
      'The examples layer is biased — your few-shot examples include old feature behavior',
      'The model\'s training data includes old product info — you need to fine-tune on current docs',
    ],
    correct: 1,
  },
  es: {
    question: 'Construíste un bot de soporte al cliente respaldado por tu documentación de producto (RAG). Los usuarios reportan que el bot da respuestas correctas sobre funcionalidades que fueron deprecadas hace 6 meses. ¿Cuál es la causa raíz y la solución?',
    options: [
      'La capa de instrucciones está mal — agréga una regla diciendóle al modelo que ignore las funcionalidades deprecadas',
      'La capa de conocimiento tiene problemas de obsolescencia — los docs deprecados aún están en la base de conocimiento. Eliminálos o actualizálos, y agréga metadatos de frescura para que el modelo conozca la antigüedad del documento.',
      'La capa de ejemplos está sesgada — tus ejemplos few-shot incluyen comportamiento de funcionalidades antiguas',
      'Los datos de entrenamiento del modelo incluyen información vieja del producto — necesitás hacer fine-tune con docs actuales',
    ],
    correct: 1,
  }
}

export default function S09_Quiz2({ lang, onQuizPass }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[60vh]">
      <QuizCard question={c.question} options={c.options} correctIndex={c.correct} onPass={onQuizPass} />
    </div>
  )
}
