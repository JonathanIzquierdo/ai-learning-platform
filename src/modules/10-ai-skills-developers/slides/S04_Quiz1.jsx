import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'You need the model to classify 10,000 support tickets into categories (bug, feature_request, question, billing). Which prompting pattern is most appropriate?',
    options: [
      'Chain-of-Thought \u2014 ask the model to reason through each ticket step by step',
      'Zero-shot with constrained output \u2014 clear instruction + restrict output to only the 4 valid categories',
      'Few-shot with 50 examples \u2014 show as many examples as possible',
      'Just pass the tickets and let the model figure it out',
    ],
    correct: 1,
  },
  es: {
    question: 'Necesit\u00e1s que el modelo clasifique 10.000 tickets de soporte en categor\u00edas (bug, feature_request, question, billing). \u00bfQu\u00e9 pattern de prompting es m\u00e1s apropiado?',
    options: [
      'Chain-of-Thought \u2014 pedir al modelo que razone paso a paso cada ticket',
      'Zero-shot con output restringido \u2014 instrucci\u00f3n clara + restringir output a solo las 4 categor\u00edas v\u00e1lidas',
      'Few-shot con 50 ejemplos \u2014 mostrar tantos ejemplos como sea posible',
      'Simplemente pasar los tickets y dejar que el modelo se arregle',
    ],
    correct: 1,
  }
}

export default function S04_Quiz1({ lang, onQuizPass }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[60vh]">
      <QuizCard question={c.question} options={c.options} correctIndex={c.correct} onPass={onQuizPass} />
    </div>
  )
}
