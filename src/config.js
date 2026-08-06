// Centralized site config so numbers/links only need to change in one place.
export const WHATSAPP_PHONE = '5491140751630' // Argentina country code (54) + 9 + area + number, no symbols
export const CONTACT_EMAIL = 'hola@mistockalert.com'

export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`
}
