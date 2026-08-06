import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/useLanguage'

const antes = {
  es: [
    'Productos vencidos que nadie vio a tiempo',
    'Stock en cero descubierto cuando ya era tarde',
    'Planillas de Excel desactualizadas por sucursal',
    'Sin visibilidad de qué pasa en cada tienda',
  ],
  en: [
    'Expired products nobody caught in time',
    'Zero stock discovered when it was already too late',
    'Outdated Excel spreadsheets per branch',
    'No visibility into what is happening at each store',
  ],
}

const despues = {
  es: [
    'Alertas automáticas antes de que algo venza',
    'Stock crítico visible en tiempo real',
    'Dashboard unificado para todas tus sucursales',
    'Cada encargado ve solo lo que le corresponde',
  ],
  en: [
    'Automatic alerts before anything expires',
    'Critical stock visible in real time',
    'Unified dashboard for all your branches',
    'Each manager sees only what they are responsible for',
  ],
}

export default function Problem() {
  const { lang } = useLanguage()
  const title = lang === 'es'
    ? 'El problema que nadie quiere admitir'
    : 'The problem nobody wants to admit'
  const subtitle = lang === 'es'
    ? 'La mayoría de los negocios con múltiples sucursales pierden mercadería y dinero por falta de visibilidad en tiempo real.'
    : 'Most multi-branch businesses lose products and money due to a lack of real-time visibility.'
  const beforeLabel = lang === 'es' ? 'Sin StockAlert' : 'Without StockAlert'
  const afterLabel = lang === 'es' ? 'Con StockAlert' : 'With StockAlert'

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-400"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Sin StockAlert */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-400">✕</span>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-400">{beforeLabel}</h3>
            </div>
            <ul className="space-y-3">
              {antes[lang].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                  <span className="mt-0.5 shrink-0 text-red-500">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Con StockAlert */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-indigo-400">✓</span>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-400">{afterLabel}</h3>
            </div>
            <ul className="space-y-3">
              {despues[lang].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <span className="mt-0.5 shrink-0 text-indigo-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
