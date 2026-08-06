import { useLanguage } from '../i18n/useLanguage'
import { IconCheck } from './icons'

export default function Pricing() {
  const { t } = useLanguage()

  return (
    <section id="precios" className="relative overflow-hidden py-24 lg:py-32">
      <div className="glow pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[700px] -translate-x-1/2 opacity-40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            {t.pricing.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">{t.pricing.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlight
                  ? 'border-indigo-400/50 bg-gradient-to-b from-indigo-500/15 to-white/[0.02] shadow-xl shadow-indigo-500/10'
                  : 'border-white/10 bg-white/[0.02]'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-indigo-500/30">
                  {t.pricing.popular}
                </span>
              )}

              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {!plan.period && <span className="text-sm text-gray-500">{t.pricing.perMonth}</span>}
              </div>
              {plan.period && <div className="mt-1 text-sm text-indigo-300">{plan.period}</div>}

              <p className="mt-3 text-sm leading-relaxed text-gray-400">{plan.desc}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#top"
                className={`mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-semibold transition ${
                  plan.highlight
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                    : 'border border-white/15 text-white hover:border-white/30 hover:bg-white/5'
                }`}
              >
                {plan.period ? t.pricing.ctaTrial : t.pricing.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
