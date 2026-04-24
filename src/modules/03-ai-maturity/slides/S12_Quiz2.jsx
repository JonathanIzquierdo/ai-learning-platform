import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'A team has Claude Code opening PRs automatically. But when they ask "why did the agent write it this way?", nobody knows. The PRs look fine but they\'ve had two regressions in the last month they couldn\'t trace back to a specific cause. What level are they at and what\'s the root problem?',
    options: [
      'Level 4 — they have orchestration but need better models',
      'Level 3 without Level 2 foundations — they\'re delegating without evals, observability, or clear instructions',
      'Level 2 — they\'re supervising outputs correctly but need more evals',
      'Level 1 — they should stop using agent mode until they understand it better',
    ],
    correct: 1,
  },
  es: {
    question: 'Un equipo tiene Claude Code abriendo PRs automáticamente. Pero cuando preguntan "¿por qué el agente lo escribió de esta forma?", nadie lo sabe. Los PRs se ven bien pero tuvieron dos regresiones el último mes que no pudieron rastrear a una causa específica. ¿En qué nivel están y cuál es el problema raiz?',
    options: [
      'Nivel 4 — tienen orquestación pero necesitan mejores modelos',
      'Nivel 3 sin bases del Nivel 2 — están delegando sin evals, observabilidad ni instrucciones claras',
      'Nivel 2 — están supervisando outputs correctamente pero necesitan más evals',
      'Nivel 1 — deberían dejar de usar el agent mode hasta que lo entiendan mejor',
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
