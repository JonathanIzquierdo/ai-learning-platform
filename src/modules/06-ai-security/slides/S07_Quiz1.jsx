import QuizCard from '../../../components/QuizCard'

const content = {
  en: {
    question: 'A developer finds an MCP server on GitHub that connects Claude to their company\'s internal database. The server has 50 stars and was published 2 weeks ago by an unknown developer. They want to install it to speed up their workflow. What should they do?',
    options: [
      'Install it — 50 stars means it\'s been reviewed by the community',
      'Don\'t install it. An unofficial MCP server from an unknown developer can harvest credentials, mutate its behavior after installation, or execute arbitrary code. Request an official integration instead.',
      'Install it but only use it on a test environment first',
      'Ask the MCP server developer if it\'s safe before installing',
    ],
    correct: 1,
  },
  es: {
    question: 'Un desarrollador encuentra un servidor MCP en GitHub que conecta Claude a la base de datos interna de su empresa. El servidor tiene 50 estrellas y fue publicado hace 2 semanas por un desarrollador desconocido. Quiere instalarlo para acelerar su flujo de trabajo. ¿Qué debería hacer?',
    options: [
      'Instalarlo — 50 estrellas significa que la comunidad lo revisó',
      'No instalarlo. Un servidor MCP no oficial de un desarrollador desconocido puede cosechar credenciales, mutar su comportamiento después de la instalación, o ejecutar código arbitrario. En cambio, solicitar una integración oficial.',
      'Instalarlo pero solo usarlo en un entorno de prueba primero',
      'Preguntarle al desarrollador del servidor MCP si es seguro antes de instalarlo',
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
