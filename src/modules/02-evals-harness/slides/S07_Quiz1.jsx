import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'FinBot AI returns a transaction summary. You want to verify that the JSON output contains the required fields and no PII. Which evaluator type should you use?',
    options: [
      'LLM-as-a-Judge — ask a model to check the fields and PII',
      'Deterministic — JSON schema validation + regex PII detector',
      'Heuristic — BLEU score against a reference output',
      'No eval needed — the LLM is reliable enough',
    ],
    correct: 1,
  },
  es: {
    question: 'FinBot AI devuelve un resumen de transacción. Querés verificar que el JSON tenga los campos requeridos y no contenga PII. ¿Qué tipo de evaluador usarías?',
    options: [
      'LLM como Juez — pedirle a un modelo que revise los campos y el PII',
      'Determinístico — validación de JSON schema + detector de PII con regex',
      'Heurístico — puntaje BLEU contra un output de referencia',
      'Sin eval — el LLM es suficientemente confiable',
    ],
    correct: 1,
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
