import { useLanguage } from '../i18n/useLanguage'
import { LogoMark } from './icons'
import { CONTACT_EMAIL, WHATSAPP_PHONE } from '../config'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()
  const displayPhone = `+${WHATSAPP_PHONE.slice(0, 2)} ${WHATSAPP_PHONE.slice(2, 4)} ${WHATSAPP_PHONE.slice(4, 6)} ${WHATSAPP_PHONE.slice(6)}`

  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <span className="text-base font-semibold text-white">StockAlert</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.footer.product}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-500">
              <li>
                <a href="#features" className="hover:text-gray-300">
                  {t.footer.links.features}
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-gray-300">
                  {t.footer.links.pricing}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gray-300">
                  {t.footer.links.faq}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.footer.contact}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-500">
              <li>{displayPhone}</li>
              <li className="break-all">{CONTACT_EMAIL}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-600 sm:flex-row">
          <span>
            © {year} StockAlert. {t.footer.rights}
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">
              {t.footer.links.privacy}
            </a>
            <a href="#" className="hover:text-gray-400">
              {t.footer.links.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
