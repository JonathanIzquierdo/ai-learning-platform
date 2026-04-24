import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'Your engineering team just deployed an AI coding assistant. After 4 weeks, you see a 40% increase in PRs opened per week. What should you conclude?',
    options: [
      'The team is 40% more productive — the AI is clearly working',
      'Nothing yet — PR volume can be inflated by agents and means nothing without acceptance rate, code quality, and cycle time data',
      'The team is opening too many PRs — they should slow down',
      'You should double the number of AI licenses to keep scaling this up',
    ],
    correct: 1,
  },
  es: {
    question: 'Tu equipo de ingeniería acaba de desplegar un asistente de código con IA. Después de 4 semanas, ves un aumento del 40% en PRs abiertos por semana. ¿Qué deberías concluir?',
    options: [
      'El equipo es un 40% más productivo — la IA claramente está funcionando',
      'Nada todavía — el volumen de PRs puede ser inflado por agentes y no significa nada sin datos de tasa de aceptación, calidad de código y tiempo de ciclo',
      'El equipo está abriendo demasiados PRs — deberían ir más despacio',
      'Deberías duplicar el número de licencias de IA para seguir escalando esto',
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
