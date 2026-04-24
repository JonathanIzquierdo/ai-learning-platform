import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'A colleague says: "Our AI assistant gave a completely wrong answer but sounded totally confident. What happened?" What is the most accurate explanation?',
    options: [
      'The model found incorrect information on the internet',
      'The temperature was set too low, making it too rigid',
      'The model hallucinated — it predicted a plausible-sounding next token, not a factually correct one',
      'The context window was too small to fit the right answer',
    ],
    correct: 2,
  },
  es: {
    question: 'Un colega dice: "Nuestro asistente de IA dio una respuesta completamente incorrecta pero sonó totalmente seguro. ¿Qué pasó?" ¿Cuál es la explicación más precisa?',
    options: [
      'El modelo encontró información incorrecta en internet',
      'La temperatura estaba muy baja, haciéndolo demasiado rígido',
      'El modelo aluminó — predijo el siguiente token que sonaba plausible, no uno factualmente correcto',
      'La context window era muy pequeña para contener la respuesta correcta',
    ],
    correct: 2,
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
