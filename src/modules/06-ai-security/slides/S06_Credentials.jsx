import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Protecting credentials & secrets.',
    subtitle: 'The single most common AI security failure is credentials ending up where they shouldn\'t. Here\'s how to prevent it.',
    problem: {
      label: 'How credentials leak through AI tools',
      scenarios: [
        { scenario: 'Pasting a config file into Claude to debug it', risk: 'The file contains database connection strings, API keys, or passwords' },
        { scenario: 'Asking AI to help set up an MCP server', risk: 'The setup instructions end up including real credentials instead of placeholders' },
        { scenario: 'Sharing a .env file or code snippet', risk: 'Environment variables with real secrets are included' },
        { scenario: 'Describing a production issue with full context', risk: 'Service account tokens or internal endpoints get exposed' },
      ]
    },
    practices: [
      {
        practice: 'Never hardcode credentials', icon: '🚫',
        desc: 'Use environment variables, secret managers (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault). If you paste code to AI, replace real values with placeholders like [YOUR_API_KEY].'
      },
      {
        practice: 'Use short-lived tokens', icon: '⏱️',
        desc: 'Long-lived tokens with broad access are the biggest risk. Use tokens that expire in hours, not months. If stolen, the damage window is limited.'
      },
      {
        practice: 'Apply principle of least privilege', icon: '🔑',
        desc: 'An AI agent doing code review doesn\'t need write access to your production database. Always scope permissions to exactly what the task requires.'
      },
      {
        practice: 'Rotate credentials after exposure', icon: '🔄',
        desc: 'If you accidentally shared a credential in an AI conversation, rotate it immediately. Don\'t wait to see if anything bad happens.'
      },
      {
        practice: 'Use secret scanning in your repos', icon: '🔍',
        desc: 'Tools like GitHub\'s secret scanning, GitGuardian, or TruffleHog automatically detect committed credentials. Enable them on all repositories.'
      },
      {
        practice: 'Never use production credentials in development/testing', icon: '🧪',
        desc: 'Use separate test accounts and synthetic data for any AI-assisted development. Production credentials should never leave production environments.'
      },
    ],
    gitignore: {
      label: 'Always .gitignore (and never paste into AI)',
      files: ['.env', '.env.local', '*.pem', '*.key', 'credentials.json', 'service-account.json', 'config/secrets.yml', 'secrets/', '*_rsa', '*.p12']
    }
  },
  es: {
    title: 'Proteger credenciales y secretos.',
    subtitle: 'El fallo de seguridad de IA más común es que las credenciales terminan donde no deberían. Así es cómo prevenirlo.',
    problem: {
      label: 'Cómo se filtran las credenciales a través de herramientas de IA',
      scenarios: [
        { scenario: 'Pegar un archivo de configuración en Claude para debuguearlo', risk: 'El archivo contiene strings de conexión a base de datos, API keys o contraseñas' },
        { scenario: 'Pedir a la IA que ayude a configurar un servidor MCP', risk: 'Las instrucciones de configuración terminan incluyendo credenciales reales en lugar de placeholders' },
        { scenario: 'Compartir un archivo .env o fragmento de código', risk: 'Se incluyen variables de entorno con secretos reales' },
        { scenario: 'Describir un problema de producción con contexto completo', risk: 'Se exponen tokens de cuentas de servicio o endpoints internos' },
      ]
    },
    practices: [
      {
        practice: 'Nunca hardcodees credenciales', icon: '🚫',
        desc: 'Usá variables de entorno, gestores de secretos (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault). Si pegás código a la IA, reemplazá los valores reales con placeholders como [TU_API_KEY].'
      },
      {
        practice: 'Usá tokens de corta duración', icon: '⏱️',
        desc: 'Los tokens de larga duración con acceso amplio son el mayor riesgo. Usá tokens que expiren en horas, no en meses. Si son robados, la ventana de daño es limitada.'
      },
      {
        practice: 'Aplicá el principio de mínimo privilegio', icon: '🔑',
        desc: 'Un agente de IA que hace code review no necesita acceso de escritura a tu base de datos de producción. Siempre acotá los permisos exactamente a lo que la tarea requiere.'
      },
      {
        practice: 'Rotá credenciales después de una exposición', icon: '🔄',
        desc: 'Si compartiste accidentalmente una credencial en una conversación de IA, rotála inmediatamente. No esperes a ver si pasa algo malo.'
      },
      {
        practice: 'Usá secret scanning en tus repos', icon: '🔍',
        desc: 'Herramientas como el secret scanning de GitHub, GitGuardian o TruffleHog detectan automáticamente credenciales commiteadas. Activálas en todos los repositorios.'
      },
      {
        practice: 'Nunca uses credenciales de producción en desarrollo/testing', icon: '🧪',
        desc: 'Usá cuentas de prueba separadas y datos sintéticos para cualquier desarrollo asistido por IA. Las credenciales de producción nunca deberían salir de los entornos de producción.'
      },
    ],
    gitignore: {
      label: 'Siempre en .gitignore (y nunca pegar en IA)',
      files: ['.env', '.env.local', '*.pem', '*.key', 'credentials.json', 'service-account.json', 'config/secrets.yml', 'secrets/', '*_rsa', '*.p12']
    }
  }
}

export default function S06_Credentials({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.problem.label}</p>
        {c.problem.scenarios.map((s, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <span className="text-red-400 text-xs mt-0.5">‣</span>
            <div><span className="text-slate-300 text-xs">{s.scenario} — </span><span className="text-red-400 text-xs">{s.risk}</span></div>
          </div>
        ))}
      </motion.div>
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {c.practices.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 flex gap-3">
            <span className="text-xl shrink-0">{p.icon}</span>
            <div>
              <p className="text-white text-xs font-semibold mb-1">{p.practice}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-4">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.gitignore.label}</p>
        <div className="flex flex-wrap gap-2">
          {c.gitignore.files.map((f, i) => (
            <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded font-mono">{f}</span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
