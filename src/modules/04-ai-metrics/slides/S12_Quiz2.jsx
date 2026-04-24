import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'Your HR team wants to measure the impact of an AI tool they deployed for candidate screening 3 months ago. They have data on: time-to-first-interview, number of candidates screened per week, and recruiter satisfaction. They have NO baseline data from before deployment. What should they do?',
    options: [
      'Compare current metrics to industry benchmarks — that\'s a good enough baseline',
      'Acknowledge the missing baseline, start capturing it now, and add quality-of-hire at 90 days as a forward-looking measure',
      'The data they have is enough — just report the current numbers as success metrics',
      'Redo the deployment with a control group to get clean data',
    ],
    correct: 1,
  },
  es: {
    question: 'Tu equipo de RRHH quiere medir el impacto de una herramienta de IA que desplegaron hace 3 meses para screening de candidatos. Tienen datos sobre: tiempo hasta la primera entrevista, cantidad de candidatos evaluados por semana y satisfacción del reclutador. NO tienen datos de baseline previos al despliegue. ¿Qué deberían hacer?',
    options: [
      'Comparar las métricas actuales con benchmarks de la industria — eso es un baseline suficientemente bueno',
      'Reconocer el baseline faltante, empezar a capturarlo ahora y agregar la calidad de contratación a los 90 días como medida prospectiva',
      'Los datos que tienen son suficientes — solo reportar los números actuales como métricas de éxito',
      'Rehacer el despliegue con un grupo de control para obtener datos limpios',
    ],
    correct: 1,
  }
}

export default function S12_Quiz2({ lang, onQuizPass }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[60vh]">
      <QuizCard question={c.question} options={c.options} correctIndex={c.correct} onPass={onQuizPass} />
    </div>
  )
}
