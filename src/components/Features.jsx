import { useLanguage } from '../i18n/useLanguage'
import { IconBell, IconStore, IconBox, IconChart, IconUsers, IconClock } from './icons'

const ICONS = [IconBell, IconStore, IconBox, IconChart, IconUsers, IconClock]

export default function Features() {
  const { t } = useLanguage()

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            {t.features.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">{t.features.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-indigo-400/30 hover:bg-white/[0.04]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
