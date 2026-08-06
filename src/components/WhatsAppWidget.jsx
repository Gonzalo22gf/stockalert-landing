import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import { buildWhatsAppLink } from '../config'
import { IconWhatsApp, IconClose } from './icons'

export default function WhatsAppWidget() {
  const { t } = useLanguage()
  const [showBubble, setShowBubble] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {showBubble && !dismissed && (
        <div className="relative max-w-[240px] rounded-2xl rounded-br-sm border border-white/10 bg-[#12121c] p-4 pr-8 text-sm text-gray-200 shadow-xl shadow-black/40 animate-[fadeIn_.3s_ease]">
          <button
            onClick={() => setDismissed(true)}
            className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full text-gray-500 hover:text-gray-300"
            aria-label="Cerrar"
          >
            <IconClose className="h-3.5 w-3.5" />
          </button>
          {t.whatsapp.tooltip}
        </div>
      )}

      <a
        href={buildWhatsAppLink(t.whatsapp.message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105 hover:bg-[#20bd5a]"
      >
        <IconWhatsApp className="h-7 w-7" />
      </a>
    </div>
  )
}
