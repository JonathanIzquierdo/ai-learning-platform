import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'You ask AI to generate a function that processes user payment data. The code looks correct and handles the main flow. What is the most important next step?',
    options: [
      'Ship it \u2014 it looks correct and AI rarely makes mistakes with straightforward logic',
      'Run it through your CI/CD pipeline, check for security vulnerabilities (input sanitization, auth, data exposure in logs), and verify edge cases like null/empty inputs',
      'Ask the AI "is this code secure?" and trust its answer',
      'Rewrite it from scratch \u2014 you should never use AI-generated code for payments',
    ],
    correct: 1,
  },
  es: {
    question: 'Le ped\u00eds a la IA que genere una funci\u00f3n que procesa datos de pago de usuarios. El c\u00f3digo se ve correcto y maneja el flujo principal. \u00bfCu\u00e1l es el siguiente paso m\u00e1s importante?',
    options: [
      'Shippearlo \u2014 se ve correcto y la IA raramente comete errores con l\u00f3gica directa',
      'Pasarlo por tu pipeline CI/CD, verificar vulnerabilidades de seguridad (sanitizaci\u00f3n de input, auth, exposici\u00f3n de datos en logs), y verificar edge cases como null/empty inputs',
      'Preguntarle a la IA "\u00bfeste c\u00f3digo es seguro?" y confiar en su respuesta',
      'Reescribirlo desde cero \u2014 nunca deber\u00edas usar c\u00f3digo generado por IA para pagos',
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
