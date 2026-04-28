import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'Your team uses Claude Code, Cursor, and GitHub Copilot. You need all three tools to follow the same project conventions. What is the best approach?',
    options: [
      'Write separate CLAUDE.md, .cursorrules, and copilot-instructions.md files with the same content',
      'Write an AGENTS.md file (cross-tool standard) and create symlinks from CLAUDE.md and other tool-specific files to it',
      'Put all instructions in the README.md since every tool reads it',
      'Only configure CLAUDE.md since it is the most powerful tool',
    ],
    correct: 1,
  },
  es: {
    question: 'Tu equipo usa Claude Code, Cursor y GitHub Copilot. Necesit\u00e1s que las tres herramientas sigan las mismas convenciones del proyecto. \u00bfCu\u00e1l es el mejor enfoque?',
    options: [
      'Escribir archivos separados CLAUDE.md, .cursorrules y copilot-instructions.md con el mismo contenido',
      'Escribir un archivo AGENTS.md (est\u00e1ndar cross-tool) y crear symlinks desde CLAUDE.md y otros archivos espec\u00edficos a \u00e9l',
      'Poner todas las instrucciones en el README.md ya que toda herramienta lo lee',
      'Solo configurar CLAUDE.md ya que es la herramienta m\u00e1s poderosa',
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
