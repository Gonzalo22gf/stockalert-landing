import { useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import { IconChevronDown } from './icons'

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.faq.title}
          </h2>
        </div>

        <div className="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-white sm:text-base">{item.q}</span>
                  <IconChevronDown
                    className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-gray-400">{item.a}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
