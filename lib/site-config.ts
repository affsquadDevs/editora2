/**
 * Production: set NEXT_PUBLIC_SITE_URL in .env (e.g. https://pdfiles.io)
 */
export const SITE_URL = (
  typeof process.env.NEXT_PUBLIC_SITE_URL === 'string'
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'http://localhost:3000'
).replace(/\/$/, '')

export const SITE_NAME = 'pdfiles'

/** Public GitHub repo URL for nav / JSON-LD — production repository link */
export const GITHUB_REPO_URL = 'https://github.com/affsquadDevs/editora2'

export const CONTACT_EMAIL = 'hello@example.com'

/** Hostname(s) allowed for IndexNow URL validation */
export function allowedSiteHostnames(): string[] {
  try {
    const host = new URL(SITE_URL).hostname
    const hosts = new Set([host, `www.${host}`])
    return Array.from(hosts).filter(Boolean)
  } catch {
    return ['localhost']
  }
}
