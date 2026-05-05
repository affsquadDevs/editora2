import type { Metadata } from 'next'
import PrivacyPolicyLocalePage, { generateMetadata as generateLocaleMetadata } from '../[locale]/privacy-policy/page'

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: { locale: 'en' } })
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyLocalePage params={{ locale: 'en' }} />
}
