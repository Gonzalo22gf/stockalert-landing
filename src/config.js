export const WHATSAPP_PHONE = '5491140751630'
export const CONTACT_EMAIL = 'hola@mistockalert.com'
export const APP_URL = 'https://app.mistockalert.com'

export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`
}
