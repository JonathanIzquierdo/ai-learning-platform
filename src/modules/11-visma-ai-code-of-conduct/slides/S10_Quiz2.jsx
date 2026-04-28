import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'Your team lead asks you to set up a Slack AI integration that generates weekly reports on each team member\u2019s message frequency, response times, and after-hours activity to \u201cimprove team efficiency.\u201d What should you do?',
    options: [
      'Set it up \u2014 the data is already in Slack so there\u2019s no privacy issue',
      'Set it up but anonymize the results so no individual names appear',
      'Refuse. This constitutes employee monitoring/profiling using AI, which is explicitly prohibited by the Visma AI Code of Conduct, GDPR, and the EU AI Act.',
      'Ask each team member for verbal consent before setting it up',
    ],
    correct: 2,
  },
  es: {
    question: 'Tu team lead te pide configurar una integraci\u00f3n de Slack AI que genere reportes semanales sobre la frecuencia de mensajes, tiempos de respuesta y actividad fuera de horario de cada miembro del equipo para \u201cmejorar la eficiencia.\u201d \u00bfQu\u00e9 deber\u00edas hacer?',
    options: [
      'Configurarlo \u2014 los datos ya est\u00e1n en Slack as\u00ed que no hay problema de privacidad',
      'Configurarlo pero anonimizar los resultados para que no aparezcan nombres individuales',
      'Rechazar. Esto constituye monitoreo/perfilamiento de empleados usando IA, que est\u00e1 expl\u00edcitamente prohibido por el C\u00f3digo de Conducta IA de Visma, GDPR y el EU AI Act.',
      'Pedir consentimiento verbal a cada miembro del equipo antes de configurarlo',
    ],
    correct: 2,
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
