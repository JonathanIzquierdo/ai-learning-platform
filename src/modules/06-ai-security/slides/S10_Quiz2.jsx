import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'A colleague asks you to review some code they pasted into Claude to debug a database connection issue. Looking at the conversation, you can see the code contains a live production database connection string with username and password. What should you do?',
    options: [
      'Nothing — Claude\'s enterprise tier doesn\'t store conversations so it\'s fine',
      'Tell them to immediately rotate the database credentials and remind them never to paste credentials into AI tools, even with enterprise protections',
      'Delete the Claude conversation history and tell them it\'s fixed',
      'Only flag it if they were using a personal Claude account, not the company one',
    ],
    correct: 1,
  },
  es: {
    question: 'Un colega te pide que revises código que pegó en Claude para debuguear un problema de conexión a base de datos. Al mirar la conversación, ves que el código contiene un string de conexión de base de datos de producción activo con usuario y contraseña. ¿Qué deberías hacer?',
    options: [
      'Nada — el tier enterprise de Claude no almacena conversaciones, así que está bien',
      'Decirle que rote inmediatamente las credenciales de base de datos y recordarle que nunca debe pegar credenciales en herramientas de IA, incluso con protecciones enterprise',
      'Eliminar el historial de conversación de Claude y decirle que está resuelto',
      'Solo marcarlo si estaba usando una cuenta de Claude personal, no la de la empresa',
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
