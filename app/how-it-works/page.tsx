import type { Metadata } from 'next'
import HowItWorksLocalePage, { generateMetadata as generateLocaleMetadata } from '../[locale]/how-it-works/page'

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: { locale: 'en' } })
}

export default function HowItWorksPage() {
  return <HowItWorksLocalePage params={{ locale: 'en' }} />
}
