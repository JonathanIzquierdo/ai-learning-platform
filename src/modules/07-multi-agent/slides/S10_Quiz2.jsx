import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'You built a loop pattern where an agent generates a product description and an evaluator scores it. After deploying, you notice that some pipeline runs consume 10x the expected token budget. What is the most likely cause and fix?',
    options: [
      'The evaluator is too strict — lower the quality threshold so the loop exits sooner',
      'There is no maxIterations limit — when the agent can\'t reach the threshold, the loop runs indefinitely. Add a hard iteration cap (e.g., max 5 iterations) and log each pass.',
      'The generator model is too expensive — switch to a cheaper model',
      'The evaluation prompt is too long — shorten it to reduce token usage',
    ],
    correct: 1,
  },
  es: {
    question: 'Construiste un patrón de loop donde un agente genera una descripción de producto y un evaluador la punta. Después de deployar, notás que algunas ejecuciones del pipeline consumen 10x el presupuesto de tokens esperado. ¿Cuál es la causa más probable y la solución?',
    options: [
      'El evaluador es demasiado estricto — bajá el umbral de calidad para que el loop salga antes',
      'No hay límite de maxIteraciones — cuando el agente no puede alcanzar el umbral, el loop corre indefinidamente. Agréga un tope de iteraciones estricto (ej.: máx 5 iteraciones) y registrá cada pasada.',
      'El modelo generador es demasiado caro — cambiá a un modelo más barato',
      'El prompt de evaluación es demasiado largo — acortálo para reducir el uso de tokens',
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
