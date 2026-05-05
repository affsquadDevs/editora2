import type { Metadata } from 'next'
import TermsLocalePage, { generateMetadata as generateLocaleMetadata } from '../[locale]/terms/page'

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: { locale: 'en' } })
}

export default function TermsPage() {
  return <TermsLocalePage params={{ locale: 'en' }} />
}
