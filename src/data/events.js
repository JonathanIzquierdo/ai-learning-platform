// Catálogo de Workshops y Talks ofrecidos por Visma LATAM AI
// Workshops: redirigen a Space para inscripción
// Talks: abren cliente de mail prellenado a jonathan.izquierdo@visma.com

export const CONTACT_EMAIL = 'jonathan.izquierdo@visma.com'
export const CONTACT_NAME = 'Jonathan Izquierdo'

export const WORKSHOPS = [
  {
    id: 'ai-master-class',
    icon: '🚀',
    color: '#0052CC',
    duration: { en: '2 days · ~4 h/day', es: '2 días · ~4 h/día' },
    level: { en: 'Intermediate → Advanced', es: 'Intermedio → Avanzado' },
    groupSize: { en: '~20 people', es: '~20 personas' },
    audience: {
      en: ['Technical teams', 'Developers', 'QA Engineers', 'Technical Leaders', 'Product teams'],
      es: ['Equipos técnicos', 'Developers', 'QA Engineers', 'Technical Leaders', 'Equipos de Producto']
    },
    title: { en: 'AI Master Class', es: 'AI Master Class' },
    tagline: {
      en: 'Practical AI adoption and modern AI tooling — continuously updated.',
      es: 'Adopción práctica de IA y herramientas modernas — actualizado continuamente.'
    },
    description: {
      en: 'A continuously evolving workshop focused on practical AI adoption and modern AI tooling. The content is updated frequently to reflect changes in AI capabilities and tools such as Copilot, MCPs and agent workflows.',
      es: 'Un workshop en evolución continua, enfocado en adopción práctica de IA y herramientas modernas. El contenido se actualiza con frecuencia para reflejar los cambios en capacidades y herramientas como Copilot, MCPs y agent workflows.'
    },
    objectives: {
      en: [
        'Build a common understanding of AI concepts',
        'Understand the current AI ecosystem',
        'Apply AI in real workflows',
        'Move from assistance to delegation patterns'
      ],
      es: [
        'Construir un entendimiento común de los conceptos de IA',
        'Entender el ecosistema actual de IA',
        'Aplicar IA en flujos de trabajo reales',
        'Pasar de asistencia a patrones de delegación'
      ]
    },
    agenda: {
      en: [
        { day: 'Day 1', items: ['LLM fundamentals', 'Tokens', 'Prompt strategies', 'AI modes and commands', 'Copilot ecosystem updates', 'Copilot CLI', 'AI evolution and practical impact'] },
        { day: 'Day 2', items: ['Custom Instructions', 'Skills and Memory', 'Context Engineering', 'MCP implementation', 'Real-world team use cases', 'Agentic workflows', 'Event-driven agents', 'Evals and Harness', 'Claude/Codex integrations', 'Orchestration and sub-agents'] }
      ],
      es: [
        { day: 'Día 1', items: ['Fundamentos de LLMs', 'Tokens', 'Estrategias de prompting', 'Modos y comandos de IA', 'Novedades del ecosistema Copilot', 'Copilot CLI', 'Evolución de IA e impacto práctico'] },
        { day: 'Día 2', items: ['Custom Instructions', 'Skills y Memory', 'Context Engineering', 'Implementación de MCP', 'Casos de uso reales', 'Agentic workflows', 'Agents event-driven', 'Evals y Harness', 'Integraciones con Claude/Codex', 'Orquestación y sub-agents'] }
      ]
    },
    keyMessage: {
      en: 'AI adoption is not about learning prompts; it is about learning how to build systems around AI.',
      es: 'La adopción de IA no se trata de aprender prompts: se trata de aprender a construir sistemas alrededor de la IA.'
    },
    requestUrl: 'https://space.visma.com/pagesv2/1jed7r8fd3a04ldhg2/AIMasterclass/1jfvtkqaq06ik4ruhi'
  },
  {
    id: 'ai-in-testing',
    icon: '🧪',
    color: '#36B37E',
    duration: { en: '1 day · ~5–6 h', es: '1 día · ~5–6 h' },
    level: { en: 'Intermediate → Advanced', es: 'Intermedio → Avanzado' },
    groupSize: { en: '~20 people', es: '~20 personas' },
    audience: {
      en: ['QA Engineers', 'Test Automation Engineers', 'Developers', 'Technical Teams'],
      es: ['QA Engineers', 'Test Automation Engineers', 'Developers', 'Equipos técnicos']
    },
    title: { en: 'AI in Testing', es: 'AI in Testing' },
    tagline: {
      en: 'Integrate AI into the quality system itself — not just as an assistant.',
      es: 'Integrar IA al sistema de calidad — no sólo como asistente.'
    },
    description: {
      en: 'Workshop focused on integrating AI into the quality system itself, not only as an assistant. Covers AI-enabled testing, agents, pipelines, evaluation systems and governance.',
      es: 'Workshop enfocado en integrar IA al sistema de calidad, no sólo como asistente. Cubre testing potenciado por IA, agentes, pipelines, sistemas de evaluación y governance.'
    },
    objectives: {
      en: [
        'Use AI across the SDLC, not just at code level',
        'Build agents and pipelines that participate in QA',
        'Evaluate AI-driven quality with Evals and Harness',
        'Apply governance and manage risk'
      ],
      es: [
        'Usar IA en todo el SDLC, no sólo a nivel código',
        'Construir agentes y pipelines que participen en QA',
        'Evaluar calidad asistida por IA con Evals y Harness',
        'Aplicar governance y gestionar riesgos'
      ]
    },
    agenda: {
      en: [
        { day: 'Topics', items: ['Testing in the AI era', 'Prompting and Context Engineering', 'AI across the SDLC', 'Event-driven agents', 'Agentic workflows', 'Delegation patterns', 'Evals and Harness', 'Copilot ecosystem', 'MCP', 'Playwright + AI', 'Integrated hands-on exercise', 'Governance and risk management'] },
        { day: 'Hands-on', items: ['Test generation', 'Agent execution', 'Pipeline decisions', 'Automated evaluations'] }
      ],
      es: [
        { day: 'Temas', items: ['Testing en la era de IA', 'Prompting y Context Engineering', 'IA a lo largo del SDLC', 'Agents event-driven', 'Agentic workflows', 'Patrones de delegación', 'Evals y Harness', 'Ecosistema Copilot', 'MCP', 'Playwright + IA', 'Ejercicio integrador hands-on', 'Governance y gestión de riesgos'] },
        { day: 'Hands-on', items: ['Generación de tests', 'Ejecución de agentes', 'Decisiones en pipelines', 'Evaluaciones automatizadas'] }
      ]
    },
    keyMessage: {
      en: 'AI should become part of the quality system, not just another tool.',
      es: 'La IA tiene que ser parte del sistema de calidad, no sólo otra herramienta más.'
    },
    requestUrl: 'https://space.visma.com/pagesv2/1jed7r8fd3a04ldhg2/AIInTesting/1jfvtlb3l3kmr5bb4a?locale=en&q=Ai'
  }
]

export const TALKS = [
  {
    id: 'challenges-leaders-ai',
    icon: '🎯',
    color: '#FF991F',
    duration: { en: '45 min', es: '45 min' },
    level: { en: 'Non-Technical / Executive', es: 'No-Técnico / Ejecutivo' },
    audience: {
      en: ['Leaders', 'Managers', 'Directors', 'Product Owners'],
      es: ['Líderes', 'Managers', 'Directores', 'Product Owners']
    },
    title: {
      en: 'Challenges for Leaders in the AI Era',
      es: 'Desafíos para Líderes en la Era de la IA'
    },
    tagline: {
      en: 'How leadership changes when AI enters the organization.',
      es: 'Cómo cambia el liderazgo cuando la IA entra en la organización.'
    },
    description: {
      en: 'Focused on how leadership changes with AI adoption, including decision making, prioritization and moving focus from output toward business value.',
      es: 'Enfocada en cómo cambia el liderazgo con la adopción de IA: toma de decisiones, priorización y mover el foco de output hacia valor de negocio.'
    },
    topics: {
      en: ['Leadership transformation', 'AI impact on teams', 'Decision making', 'Measuring value', 'Team guidance and adoption'],
      es: ['Transformación del liderazgo', 'Impacto de IA en equipos', 'Toma de decisiones', 'Medir valor', 'Guía y adopción en equipos']
    },
    keyMessage: {
      en: 'The challenge is no longer technology alone; it is helping organizations adapt.',
      es: 'El desafío ya no es solamente la tecnología: es ayudar a las organizaciones a adaptarse.'
    }
  },
  {
    id: 'ai-fundamentals-leaders',
    icon: '📚',
    color: '#00B8D9',
    duration: { en: '2 hours', es: '2 horas' },
    level: { en: 'Beginner', es: 'Principiante' },
    audience: {
      en: ['Leaders', 'Managers', 'Product Owners'],
      es: ['Líderes', 'Managers', 'Product Owners']
    },
    title: { en: 'AI Fundamentals for Leaders', es: 'Fundamentos de IA para Líderes' },
    tagline: {
      en: 'A solid AI foundation for informed decisions and realistic expectations.',
      es: 'Una base sólida de IA para decisiones informadas y expectativas realistas.'
    },
    description: {
      en: 'Provides a solid foundation of AI concepts and terminology for leaders, helping create informed decisions and realistic expectations.',
      es: 'Provee una base sólida de conceptos y terminología de IA para líderes, ayudando a tomar decisiones informadas y a fijar expectativas realistas.'
    },
    topics: {
      en: ['LLM fundamentals', 'Tokens', 'Prompting concepts', 'Capabilities and limitations', 'AI evolution', 'Current tooling ecosystem'],
      es: ['Fundamentos de LLMs', 'Tokens', 'Conceptos de prompting', 'Capacidades y limitaciones', 'Evolución de la IA', 'Ecosistema actual de herramientas']
    },
    keyMessage: {
      en: 'Leaders do not need to become AI experts, but they need enough understanding to make better decisions.',
      es: 'Los líderes no necesitan ser expertos en IA, pero sí necesitan entender lo suficiente para tomar mejores decisiones.'
    }
  },
  {
    id: 'agentic-delegation',
    icon: '🤖',
    color: '#6554C0',
    duration: { en: '1 hour', es: '1 hora' },
    level: { en: 'Intermediate', es: 'Intermedio' },
    audience: {
      en: ['Technical Teams', 'Developers', 'QA Engineers', 'Technical Leaders'],
      es: ['Equipos técnicos', 'Developers', 'QA Engineers', 'Technical Leaders']
    },
    title: { en: 'Agentic Delegation', es: 'Delegación Agéntica' },
    tagline: {
      en: 'From assistive AI to AI that actually executes.',
      es: 'De la IA que asiste a la IA que ejecuta.'
    },
    description: {
      en: 'Explains the difference between using AI as assistance versus delegating execution to AI agents. Includes practical examples and realistic adoption paths.',
      es: 'Explica la diferencia entre usar IA como asistencia y delegar ejecución a agentes de IA. Incluye ejemplos prácticos y caminos de adopción realistas.'
    },
    topics: {
      en: ['Assistive AI vs Agentic AI', 'Agent workflows', 'Delegation patterns', 'Human checkpoints', 'Measuring delegation effectiveness'],
      es: ['IA asistiva vs IA agéntica', 'Agent workflows', 'Patrones de delegación', 'Checkpoints humanos', 'Medir la efectividad de la delegación']
    },
    keyMessage: {
      en: 'Assistive AI helps. Agentic AI executes.',
      es: 'La IA asistiva ayuda. La IA agéntica ejecuta.'
    }
  },
  {
    id: 'evals-ai-systems',
    icon: '📊',
    color: '#DE350B',
    duration: { en: '1 hour', es: '1 hora' },
    level: { en: 'Intermediate → Advanced', es: 'Intermedio → Avanzado' },
    audience: {
      en: ['Technical Teams', 'Developers', 'AI Engineers', 'QA Engineers'],
      es: ['Equipos técnicos', 'Developers', 'AI Engineers', 'QA Engineers']
    },
    title: { en: 'Evals in AI Systems', es: 'Evals en Sistemas de IA' },
    tagline: {
      en: 'If you do not measure AI, you cannot trust it.',
      es: 'Si no medís la IA, no podés confiar en ella.'
    },
    description: {
      en: 'Introduction to evaluation systems for LLM-based applications and why validation becomes essential when AI participates in products.',
      es: 'Introducción a sistemas de evaluación para aplicaciones basadas en LLMs y por qué la validación es esencial cuando la IA participa en productos.'
    },
    topics: {
      en: ['Evaluators', 'Harness systems', 'LLM as a Judge', 'Quality measurement', 'Consistency checks', 'Regression prevention'],
      es: ['Evaluators', 'Sistemas de Harness', 'LLM as a Judge', 'Medición de calidad', 'Chequeos de consistencia', 'Prevención de regresiones']
    },
    keyMessage: {
      en: 'If you do not measure AI, you cannot trust it.',
      es: 'Si no medís la IA, no podés confiar en ella.'
    }
  },
  {
    id: 'ai-cost-engineering',
    icon: '💰',
    color: '#0052CC',
    duration: { en: '45–60 min', es: '45–60 min' },
    level: { en: 'Intermediate → Advanced', es: 'Intermedio → Avanzado' },
    audience: {
      en: ['Technical Teams', 'Technical Leaders', 'AI Engineers', 'Architects'],
      es: ['Equipos técnicos', 'Technical Leaders', 'AI Engineers', 'Arquitectos']
    },
    title: {
      en: 'AI Cost Engineering: Tokens, Context & Cost Optimization',
      es: 'Ingeniería de Costos en IA: Tokens, Contexto y Optimización'
    },
    tagline: {
      en: 'AI costs rarely explode because of the model — usually it is architecture.',
      es: 'Los costos de IA rara vez explotan por el modelo — casi siempre es la arquitectura.'
    },
    description: {
      en: 'Explains how AI systems generate cost and why architecture decisions often have greater impact than model pricing itself. Covers practical approaches to reduce token consumption and improve scalability.',
      es: 'Explica cómo se generan los costos en sistemas de IA y por qué las decisiones de arquitectura suelen tener más impacto que el precio del modelo. Cubre enfoques prácticos para reducir consumo de tokens y mejorar escalabilidad.'
    },
    topics: {
      en: ['Input vs Output tokens', 'Context windows', 'Context optimization', 'Prompt caching', 'RAG vs context stuffing', 'Model selection', 'Automatic model routing', 'AI gateways', 'Observability and metrics', 'Real-world optimization patterns'],
      es: ['Tokens de Input vs Output', 'Context windows', 'Optimización de contexto', 'Prompt caching', 'RAG vs context stuffing', 'Selección de modelos', 'Routing automático de modelos', 'AI gateways', 'Observabilidad y métricas', 'Patrones de optimización del mundo real']
    },
    keyMessage: {
      en: 'AI costs rarely explode because of the model itself; they usually explode because of architecture decisions.',
      es: 'Los costos de IA rara vez explotan por el modelo en sí: casi siempre explotan por decisiones de arquitectura.'
    }
  }
]
