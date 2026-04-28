import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'A colleague wants to connect their personal Claude Pro account to the team\u2019s Google Drive to help summarize client documents. What should they do?',
    options: [
      'Go ahead \u2014 Claude Pro is a paid plan so it\u2019s safe enough',
      'Stop. Claude Pro is a consumer plan where Anthropic can use input data for development. Use Claude Enterprise or Team plan instead, and only connect specific folders.',
      'It\u2019s fine as long as they turn off the training toggle',
      'Connect it but only to non-sensitive folders',
    ],
    correct: 1,
  },
  es: {
    question: 'Un colega quiere conectar su cuenta personal de Claude Pro al Google Drive del equipo para ayudar a resumir documentos de clientes. \u00bfQu\u00e9 deber\u00eda hacer?',
    options: [
      'Adelante \u2014 Claude Pro es un plan pago as\u00ed que es suficientemente seguro',
      'Detenerse. Claude Pro es un plan de consumidor donde Anthropic puede usar los datos de input para desarrollo. Usar Claude Enterprise o Team en su lugar, y conectar solo carpetas espec\u00edficas.',
      'Est\u00e1 bien mientras desactive el toggle de entrenamiento',
      'Conectarlo pero solo a carpetas no sensibles',
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
