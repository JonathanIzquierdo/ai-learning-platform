import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'You\'re building a customer support bot for Visma. Users keep getting inconsistent answers on edge cases — sometimes classified as billing questions, sometimes as technical. Which context layer should you improve first?',
    options: [
      'Layer 1 (Instructions) — add clearer classification rules to the system prompt',
      'Layer 5 (Examples) — add 5-10 labeled examples of how edge cases should be classified',
      'Layer 3 (Knowledge) — add more documentation to the knowledge base',
      'Layer 4 (Tools) — add a tool to search for related tickets',
    ],
    correct: 1,
  },
  es: {
    question: 'Estás construyendo un bot de soporte al cliente para Visma. Los usuarios siguen recibiendo respuestas inconsistentes en casos extremos — a veces clasificados como preguntas de facturación, a veces como técnicas. ¿Qué capa de contexto deberías mejorar primero?',
    options: [
      'Capa 1 (Instrucciones) — agregar reglas de clasificación más claras al system prompt',
      'Capa 5 (Ejemplos) — agregar 5-10 ejemplos etiquetados de cómo deben clasificarse los casos extremos',
      'Capa 3 (Conocimiento) — agregar más documentación a la base de conocimiento',
      'Capa 4 (Herramientas) — agregar una herramienta para buscar tickets relacionados',
    ],
    correct: 1,
  }
}

export default function S06_Quiz1({ lang, onQuizPass }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[60vh]">
      <QuizCard question={c.question} options={c.options} correctIndex={c.correct} onPass={onQuizPass} />
    </div>
  )
}
