export const gtmId = process.env.GTM_ID || ''

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}