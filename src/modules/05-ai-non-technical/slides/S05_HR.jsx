import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'AI workflows for HR & People teams.',
    subtitle: 'HR has the most human-centered work in any organization. AI handles the volume so you can focus on the humans.',
    useCases: [
      {
        icon: '👥', title: 'Job description writing',
        before: 'Writing JDs from scratch — 30-60 min each, often inconsistent, hard to make inclusive',
        after: 'Provide role title, key responsibilities, and team context → AI drafts a consistent, inclusive JD → you review and localize',
        prompt: 'Example prompt: "Write a job description for a Senior Finance Analyst at Visma LATAM. The role reports to the CFO, is based in Buenos Aires, and requires 5+ years in FP&A. Make it engaging, gender-neutral, and focused on impact rather than task lists. Include a section on what makes Visma a great place to work."'
      },
      {
        icon: '📝', title: 'Interview question design',
        before: 'Reusing the same interview questions for every candidate — or scrambling to write new ones',
        after: 'Feed the JD and competency framework to AI → get a structured set of behavioral and situational questions → customize per candidate',
        prompt: 'Example prompt: "Based on this job description [paste JD], create 8 behavioral interview questions that assess: leadership, problem-solving, collaboration, and adaptability. For each question, include what a strong answer looks like."'
      },
      {
        icon: '📊', title: 'Employee survey analysis',
        before: 'Reading through 200 open-text responses to extract themes — hours of manual analysis',
        after: 'Paste survey responses into AI → ask for theme analysis, sentiment summary, and top 5 actionable insights → review and present',
        prompt: 'Example prompt: "Here are 50 employee responses to the question \'What\'s one thing we could do to improve your day-to-day experience?\' [paste responses]. Identify the 5 most common themes, the overall sentiment, and the 3 most actionable recommendations for leadership."'
      },
      {
        icon: '🔄', title: 'Onboarding material creation',
        before: 'Writing welcome documents, FAQ guides, and first-week schedules from scratch every time',
        after: 'Describe the role, team, and company context → AI generates a structured onboarding guide → you personalize and update',
        prompt: 'Example prompt: "Create a first-week onboarding guide for a new Marketing Manager at Visma LATAM. Include: company overview, team structure, tools to set up, key meetings to schedule in week 1, and 5 things they should know about our culture."'
      },
    ],
    reminder: 'Never paste personally identifiable information (PII) into AI tools — no employee names, IDs, salaries, or performance scores. Always anonymize before using AI for people analytics.'
  },
  es: {
    title: 'Flujos de trabajo de IA para equipos de RRHH y Personas.',
    subtitle: 'RRHH tiene el trabajo más centrado en humanos de cualquier organización. La IA maneja el volumen para que vos puedas enfocarte en las personas.',
    useCases: [
      {
        icon: '👥', title: 'Redacción de descripciones de puestos',
        before: 'Escribir JDs desde cero — 30-60 min cada una, a menudo inconsistentes, difíciles de hacer inclusivas',
        after: 'Proporcionar título del rol, responsabilidades clave y contexto del equipo → la IA redacta una JD consistente e inclusiva → vos revisás y localizas',
        prompt: 'Prompt de ejemplo: "Escribí una descripción de puesto para un Analista Senior de Finanzas en Visma LATAM. El rol reporta al CFO, tiene base en Buenos Aires y requiere 5+ años en FP&A. Hacélo atractivo, con lenguaje de género neutro y enfocado en impacto más que en listas de tareas."'
      },
      {
        icon: '📝', title: 'Diseño de preguntas de entrevista',
        before: 'Reusar las mismas preguntas de entrevista para todos los candidatos — o escribir nuevas a las apuradas',
        after: 'Alimentar la JD y el framework de competencias a la IA → obtener un conjunto estructurado de preguntas conductuales y situacionales → personalizar por candidato',
        prompt: 'Prompt de ejemplo: "Basado en esta descripción de puesto [pegar JD], creá 8 preguntas de entrevista conductual que evaluîn: liderazgo, resolución de problemas, colaboración y adaptabilidad. Para cada pregunta, incluí cómo se ve una respuesta sólida."'
      },
      {
        icon: '📊', title: 'Análisis de encuestas de empleados',
        before: 'Leer 200 respuestas de texto abierto para extraer temas — horas de análisis manual',
        after: 'Pegar respuestas de encuesta en la IA → pedir análisis de temas, resumen de sentimiento y los 5 insights más accionables → revisar y presentar',
        prompt: 'Prompt de ejemplo: "Acá hay 50 respuestas de empleados a la pregunta \'\u00bfQué es una cosa que podríamos hacer para mejorar tu experiencia diaria?\' [pegar respuestas]. Identificá los 5 temas más comunes, el sentimiento general y las 3 recomendaciones más accionables para el liderazgo."'
      },
      {
        icon: '🔄', title: 'Creación de materiales de onboarding',
        before: 'Escribir documentos de bienvenida, guías de FAQ y cronogramas de primera semana desde cero cada vez',
        after: 'Describir el rol, equipo y contexto de la empresa → la IA genera una guía de onboarding estructurada → vos personalizas y actualizas',
        prompt: 'Prompt de ejemplo: "Creá una guía de onboarding para la primera semana de un nuevo Gerente de Marketing en Visma LATAM. Incluí: descripción general de la empresa, estructura del equipo, herramientas para configurar, reuniones clave para agendar en la semana 1 y 5 cosas que deberían saber sobre nuestra cultura."'
      },
    ],
    reminder: 'Nunca pegues información de identificación personal (PII) en herramientas de IA — sin nombres de empleados, IDs, salarios ni puntajes de desempeño. Siempre anonimizá antes de usar IA para análisis de personas.'
  }
}

export default function S05_HR({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-5 mb-8">
        {c.useCases.map((uc, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{uc.icon}</span>
              <p className="text-white font-semibold text-sm">{uc.title}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-2 mb-3">
              <div className="bg-red-500/8 rounded-lg p-2">
                <p className="text-red-400 text-xs font-semibold mb-1">Before</p>
                <p className="text-slate-400 text-xs leading-relaxed">{uc.before}</p>
              </div>
              <div className="bg-green-500/8 rounded-lg p-2">
                <p className="text-green-400 text-xs font-semibold mb-1">After</p>
                <p className="text-slate-300 text-xs leading-relaxed">{uc.after}</p>
              </div>
            </div>
            <div className="bg-slate-900 rounded-lg px-3 py-2">
              <p className="text-cyan-400 text-xs italic leading-relaxed">{uc.prompt}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-sm text-red-200">
        🛡️ {c.reminder}
      </div>
    </div>
  )
}
