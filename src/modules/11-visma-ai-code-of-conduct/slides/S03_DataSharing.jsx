import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Principle 2',
    title: 'Know What Data You Share',
    body: 'When you connect any tool to company systems, you may be giving it access to everything in scope. AI permissions follow your individual access rights and don\u2019t automatically account for sensitivity.',
    categories: [
      { icon: String.fromCodePoint(0x1F464), label: 'Personal Data', rule: 'Do NOT include personal data about colleagues, customers, or anyone else unless the tool has a compliant data processing agreement.', color: 'border-red-500/40 bg-red-500/5' },
      { icon: String.fromCodePoint(0x1F4BC), label: 'Customer Production Data', rule: 'Do NOT include unless your customer contract explicitly allows it AND the AI tool is listed as a sub-processor. Note: some tools (including Claude) transfer data outside the EU.', color: 'border-orange-500/40 bg-orange-500/5' },
      { icon: String.fromCodePoint(0x1F512), label: 'Confidential Information', rule: 'Do NOT enter trade secrets, unpublished financials, M&A info into AI tools unless the vendor contract includes confidentiality clauses and prohibits training use.', color: 'border-yellow-500/40 bg-yellow-500/5' },
    ],
    golden: 'Treat AI access like any new supplier relationship \u2014 start with the minimum scope needed and expand only when trust is established.',
    analogy: '"If you would meet a stranger on the street pitching a good idea, would you immediately share your entire Drive with him?"',
  },
  es: {
    eyebrow: 'Principio 2',
    title: 'Conoc\u00e9 Qu\u00e9 Datos Compart\u00eds',
    body: 'Cuando conect\u00e1s cualquier herramienta a sistemas de la empresa, podr\u00edas estar d\u00e1ndole acceso a todo lo que est\u00e9 en alcance. Los permisos de IA siguen tus derechos de acceso individuales y no consideran autom\u00e1ticamente la sensibilidad.',
    categories: [
      { icon: String.fromCodePoint(0x1F464), label: 'Datos Personales', rule: 'NO incluir datos personales de colegas, clientes o cualquier persona salvo que la herramienta tenga un acuerdo de procesamiento de datos conforme.', color: 'border-red-500/40 bg-red-500/5' },
      { icon: String.fromCodePoint(0x1F4BC), label: 'Datos de Producci\u00f3n de Clientes', rule: 'NO incluir salvo que tu contrato con el cliente lo permita expl\u00edcitamente Y la herramienta de IA est\u00e9 listada como sub-procesador. Nota: algunas herramientas (incluido Claude) transfieren datos fuera de la UE.', color: 'border-orange-500/40 bg-orange-500/5' },
      { icon: String.fromCodePoint(0x1F512), label: 'Informaci\u00f3n Confidencial', rule: 'NO ingresar secretos comerciales, financieros no publicados, info de M&A en herramientas de IA salvo que el contrato del vendor incluya cl\u00e1usulas de confidencialidad y proh\u00edba uso para entrenamiento.', color: 'border-yellow-500/40 bg-yellow-500/5' },
    ],
    golden: 'Trat\u00e1 el acceso de IA como cualquier nueva relaci\u00f3n con un proveedor \u2014 empez\u00e1 con el alcance m\u00ednimo necesario y expand\u00ed solo cuando se establezca confianza.',
    analogy: '"\u00bfSi un desconocido en la calle te propone una buena idea, le compartir\u00edas inmediatamente todo tu Drive?"',
  }
}

export default function S03_DataSharing({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-4">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-8 max-w-xl">{c.body}</motion.p>
      <div className="space-y-3 mb-8">
        {c.categories.map((cat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className={`border rounded-xl p-4 ${cat.color}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{cat.icon}</span>
              <span className="text-white text-sm font-semibold">{cat.label}</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{cat.rule}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-4">
        <p className="text-green-200 text-sm font-medium">{String.fromCodePoint(0x2705)} {c.golden}</p>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="text-slate-400 text-sm italic">{c.analogy}</motion.p>
    </div>
  )
}
