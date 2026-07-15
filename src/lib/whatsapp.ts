export const WHATSAPP_NUMBER = '2607636700777';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppWithMessage(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}
