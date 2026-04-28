import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'Your CLAUDE.md is 800 lines long and includes database schemas, API docs, deployment procedures, and testing commands. The agent keeps ignoring some of your instructions. What is the most likely problem and solution?',
    options: [
      'The model is too small. Switch to a bigger model with a larger context window.',
      'The file is too long and contains too many task-specific instructions. Move specialized docs into separate SKILL.md files and keep CLAUDE.md under 300 lines with only universal rules and pointers.',
      'Add "IMPORTANT:" before every instruction to make the model pay attention.',
      'Duplicate the instructions at the bottom of the file since models pay more attention to the end.',
    ],
    correct: 1,
  },
  es: {
    question: 'Tu CLAUDE.md tiene 800 l\u00edneas e incluye schemas de base de datos, docs de API, procedimientos de deploy y comandos de testing. El agente sigue ignorando algunas de tus instrucciones. \u00bfCu\u00e1l es el problema m\u00e1s probable y la soluci\u00f3n?',
    options: [
      'El modelo es muy chico. Cambiar a un modelo m\u00e1s grande con mayor context window.',
      'El archivo es muy largo y tiene muchas instrucciones espec\u00edficas. Mover docs especializados a archivos SKILL.md separados y mantener CLAUDE.md bajo 300 l\u00edneas con solo reglas universales y punteros.',
      'Agregar "IMPORTANTE:" antes de cada instrucci\u00f3n para que el modelo preste atenci\u00f3n.',
      'Duplicar las instrucciones al final del archivo ya que los modelos prestan m\u00e1s atenci\u00f3n al final.',
    ],
    correct: 1,
  }
}

export default function S07_Quiz2({ lang, onQuizPass }) {
  const c = content[lang]
  return (
    <div className="py-12 flex flex-col justify-center min-h-[60vh]">
      <QuizCard question={c.question} options={c.options} correctIndex={c.correct} onPass={onQuizPass} />
    </div>
  )
}
