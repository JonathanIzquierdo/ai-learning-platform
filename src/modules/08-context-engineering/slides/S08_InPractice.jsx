import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Context Engineering in practice.',
    subtitle: 'Abstract layers are useful. Real examples are more useful. Here\'s how context engineering applies to three real Visma scenarios.',
    scenarios: [
      {
        title: 'Scenario: Finance report assistant', color: '#FF991F',
        goal: 'An assistant that helps FP&A analysts draft monthly variance reports',
        layers: [
          { layer: 'Instructions', content: 'Role: senior finance analyst assistant. Output format: executive narrative (3 paragraphs). Always flag assumptions. Language: formal Spanish.' },
          { layer: 'Memory', content: 'User name, preferred currency format (ARS/USD), which companies they cover, their manager\'s reporting preferences.' },
          { layer: 'Knowledge', content: 'RAG over: previous month\'s report (for comparison), GL chart of accounts, company budget targets.' },
          { layer: 'Tools', content: 'Query financial database for actuals, calculate variances.' },
          { layer: 'Examples', content: '2 examples of well-written variance narratives from previous months.' },
        ]
      },
      {
        title: 'Scenario: HR policy assistant', color: '#6554C0',
        goal: 'An assistant that helps employees find answers to HR policy questions',
        layers: [
          { layer: 'Instructions', content: 'Role: HR policy assistant. Only answer from provided documents. Never speculate on policy. Always cite the source document and section.' },
          { layer: 'Memory', content: 'Employee country (policies vary by country), contract type, seniority level.' },
          { layer: 'Knowledge', content: 'RAG over: employee handbook, leave policies, benefits documentation, country-specific addenda.' },
          { layer: 'Tools', content: 'None — this is a read-only assistant. No actions needed.' },
          { layer: 'Examples', content: '3 examples of how to answer policy questions: question + answer with citation.' },
        ]
      },
      {
        title: 'Scenario: Code review assistant', color: '#0052CC',
        goal: 'An agent that reviews PRs for quality, security, and documentation',
        layers: [
          { layer: 'Instructions', content: 'Role: senior code reviewer. Evaluate: functionality, security (OWASP), readability, test coverage. Output: structured review with severity ratings.' },
          { layer: 'Memory', content: 'Repository language and framework, team coding standards, past review decisions for consistency.' },
          { layer: 'Knowledge', content: 'RAG over: team coding standards doc, OWASP Top 10, project architecture documentation.' },
          { layer: 'Tools', content: 'Read PR diff, read test files, check if tests cover changed code.' },
          { layer: 'Examples', content: '3 example reviews — one for a good PR, one for a security issue, one for missing tests.' },
        ]
      },
    ]
  },
  es: {
    title: 'Context Engineering en la práctica.',
    subtitle: 'Las capas abstractas son útiles. Los ejemplos reales son más útiles. Así es como el context engineering aplica a tres escenarios reales de Visma.',
    scenarios: [
      {
        title: 'Escenario: Asistente de reportes financieros', color: '#FF991F',
        goal: 'Un asistente que ayuda a analistas de FP&A a redactar reportes de variaciones mensuales',
        layers: [
          { layer: 'Instrucciones', content: 'Rol: asistente senior de análisis financiero. Formato de output: narrativa ejecutiva (3 párrafos). Siempre marcar supuestos. Idioma: español formal.' },
          { layer: 'Memoria', content: 'Nombre del usuario, formato de moneda preferido (ARS/USD), qué empresas cubre, preferencias de reporte de su gerente.' },
          { layer: 'Conocimiento', content: 'RAG sobre: reporte del mes anterior (para comparación), plan de cuentas GL, objetivos de presupuesto de la empresa.' },
          { layer: 'Herramientas', content: 'Consultar base de datos financiera para datos reales, calcular variaciones.' },
          { layer: 'Ejemplos', content: '2 ejemplos de narrativas de variaciones bien escritas de meses anteriores.' },
        ]
      },
      {
        title: 'Escenario: Asistente de políticas de RRHH', color: '#6554C0',
        goal: 'Un asistente que ayuda a los empleados a encontrar respuestas a preguntas sobre políticas de RRHH',
        layers: [
          { layer: 'Instrucciones', content: 'Rol: asistente de políticas de RRHH. Solo responder desde los documentos provistos. Nunca especular sobre políticas. Siempre citar el documento fuente y la sección.' },
          { layer: 'Memoria', content: 'País del empleado (las políticas varían por país), tipo de contrato, nivel de antigüedad.' },
          { layer: 'Conocimiento', content: 'RAG sobre: manual del empleado, políticas de licencias, documentación de beneficios, adendas específicas por país.' },
          { layer: 'Herramientas', content: 'Ninguna — este es un asistente de solo lectura. No se necesitan acciones.' },
          { layer: 'Ejemplos', content: '3 ejemplos de cómo responder preguntas de políticas: pregunta + respuesta con cita.' },
        ]
      },
      {
        title: 'Escenario: Asistente de revisión de código', color: '#0052CC',
        goal: 'Un agente que revisa PRs por calidad, seguridad y documentación',
        layers: [
          { layer: 'Instrucciones', content: 'Rol: revisor senior de código. Evaluar: funcionalidad, seguridad (OWASP), legibilidad, cobertura de pruebas. Output: revisión estructurada con calificaciones de severidad.' },
          { layer: 'Memoria', content: 'Lenguaje y framework del repositorio, estándares de codificación del equipo, decisiones de revisión anteriores para consistencia.' },
          { layer: 'Conocimiento', content: 'RAG sobre: documento de estándares de codificación del equipo, OWASP Top 10, documentación de arquitectura del proyecto.' },
          { layer: 'Herramientas', content: 'Leer diff del PR, leer archivos de prueba, verificar si las pruebas cubren el código cambiado.' },
          { layer: 'Ejemplos', content: '3 revisiones de ejemplo — una para un buen PR, una para un problema de seguridad, una para pruebas faltantes.' },
        ]
      },
    ]
  }
}

export default function S08_InPractice({ lang }) {
  const c = content[lang]
  const layerColors = { Instructions: '#36B37E', Memory: '#0052CC', Knowledge: '#6554C0', Tools: '#FF991F', Examples: '#00B8D9', Instrucciones: '#36B37E', Memoria: '#0052CC', Conocimiento: '#6554C0', Herramientas: '#FF991F', Ejemplos: '#00B8D9' }
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-6">
        {c.scenarios.map((sc, si) => (
          <motion.div key={si} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: si * 0.15 }}
            className="rounded-2xl border p-5" style={{ borderColor: sc.color + '40', background: sc.color + '0D' }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: sc.color }}>{sc.title}</p>
            <p className="text-slate-400 text-xs italic mb-4">🎯 {sc.goal}</p>
            <div className="flex flex-col gap-2">
              {sc.layers.map((l, li) => (
                <div key={li} className="flex items-start gap-3 bg-slate-800/60 rounded-lg px-3 py-2">
                  <p className="text-xs font-semibold w-24 shrink-0" style={{ color: layerColors[l.layer] || '#888' }}>{l.layer}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{l.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
