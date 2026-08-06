import { useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'





const IMAGES = ['/images/hero.png', '/images/feature1.png', '/images/feature2.png', '/images/feature3.png']

export default function Showcase() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)

  const item = t.showcase.items[active]

  return (
    <section id="producto" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            {t.showcase.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.showcase.title}
          </h2>
        </div>

        <div className="mt-14">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b13] shadow-2xl shadow-black/50">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <img
              key={active}
              src={IMAGES[active]}
              alt={item.title}
              className="w-full animate-[fadeIn_.35s_ease]"
            />
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
            {t.showcase.items.map((tab, i) => (
              <button
                key={tab.title}
                onClick={() => setActive(i)}
                className={`rounded-xl border px-4 py-3 text-left transition ${
                  active === i
                    ? 'border-indigo-400/40 bg-indigo-500/10'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <div className={`text-sm font-semibold ${active === i ? 'text-white' : 'text-gray-300'}`}>
                  {tab.title}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-gray-500">{tab.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
