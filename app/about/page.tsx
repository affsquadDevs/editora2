import type { Metadata } from 'next'
import AboutLocalePage, { generateMetadata as generateLocaleMetadata } from '../[locale]/about/page'

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: { locale: 'en' } })
}

export default function AboutPage() {
  return <AboutLocalePage params={{ locale: 'en' }} />
}
