import type { Metadata } from 'next'
import ContactLocalePage, { generateMetadata as generateLocaleMetadata } from '../[locale]/contact/page'

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: { locale: 'en' } })
}

export default function ContactPage() {
  return <ContactLocalePage params={{ locale: 'en' }} />
}
