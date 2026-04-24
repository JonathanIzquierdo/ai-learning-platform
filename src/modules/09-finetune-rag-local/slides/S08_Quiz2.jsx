import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'A Visma engineering team wants to build a coding assistant that generates code in their internal proprietary framework (not publicly known). The assistant needs to follow very specific coding conventions and produce output in a format unique to their codebase. Prompting with examples produces inconsistent results. What is the most appropriate strategy?',
    options: [
      'RAG — add the internal framework documentation to a knowledge base',
      'Fine-tuning — train on examples of correct code in the proprietary framework to internalize the style, conventions, and patterns',
      'Local model — run the model on-premise for privacy',
      'More few-shot examples — keep adding examples until it works',
    ],
    correct: 1,
  },
  es: {
    question: 'Un equipo de ingeniería de Visma quiere construir un asistente de código que genere código en su framework propietario interno (no conocido públicamente). El asistente necesita seguir convenciones de codificación muy específicas y producir output en un formato único para su codebase. El prompting con ejemplos produce resultados inconsistentes. ¿Cuál es la estrategia más apropiada?',
    options: [
      'RAG — agregar la documentación del framework interno a una base de conocimiento',
      'Fine-tuning — entrenar en ejemplos de código correcto en el framework propietario para internalizar el estilo, convenciones y patrones',
      'Modelo local — correr el modelo on-premise por privacidad',
      'Más ejemplos few-shot — seguir agregando ejemplos hasta que funcione',
    ],
    correct: 1,
  }
}

export default function S08_Quiz2({ lang, onQuizPass }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[60vh]">
      <QuizCard question={c.question} options={c.options} correctIndex={c.correct} onPass={onQuizPass} />
    </div>
  )
}
