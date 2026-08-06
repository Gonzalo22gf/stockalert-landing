import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/useLanguage'

const negocios = {
  es: [
    { emoji: '🛒', title: 'Supermercados', desc: 'Control de vencimientos por lote y sucursal' },
    { emoji: '💊', title: 'Farmacias', desc: 'Alertas de medicamentos por vencer' },
    { emoji: '📦', title: 'Mayoristas', desc: 'Inventario masivo con reportes históricos' },
    { emoji: '🏪', title: 'Kioscos y almacenes', desc: 'Control simple desde el celular' },
    { emoji: '🚚', title: 'Distribuidoras', desc: 'Multi-sucursal con roles por encargado' },
    { emoji: '🌿', title: 'Dietéticas y naturistas', desc: 'Productos con vencimiento corto bajo control' },
  ],
  en: [
    { emoji: '🛒', title: 'Supermarkets', desc: 'Expiration control by batch and branch' },
    { emoji: '💊', title: 'Pharmacies', desc: 'Alerts for soon-to-expire medicines' },
    { emoji: '📦', title: 'Wholesalers', desc: 'Bulk inventory with historical reports' },
    { emoji: '🏪', title: 'Convenience stores', desc: 'Simple control from your phone' },
    { emoji: '🚚', title: 'Distributors', desc: 'Multi-branch with manager roles' },
    { emoji: '🌿', title: 'Health food stores', desc: 'Short-shelf-life products under control' },
  ]
}

export default function ForWho() {
  const { lang } = useLanguage()
  const items = negocios[lang]
  const title = lang === 'es' ? '¿Para quién es StockAlert?' : 'Who is StockAlert for?'
  const subtitle = lang === 'es'
    ? 'Cualquier negocio que venda productos físicos con fecha de vencimiento o stock crítico.'
    : 'Any business that sells physical products with expiration dates or critical stock levels.'

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-400"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center transition hover:border-indigo-400/30 hover:bg-white/[0.04]"
            >
              <span className="text-3xl">{item.emoji}</span>
              <h3 className="mt-3 text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
