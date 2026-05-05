import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { generateFAQSchema } from '../data/faq'
import FAQ from '../components/FAQ'
import Header from '../components/Header'
import { SITE_URL as siteUrl } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'pdfiles FAQ — Product, Privacy, and Workflow Questions',
  description: 'Get direct answers about pdfiles features, local processing model, file handling, and practical usage scenarios.',
  openGraph: {
    title: 'pdfiles FAQ',
    description: 'Answers on product behavior, privacy model, and PDF workflows in pdfiles.',
    url: `${siteUrl}/faq`,
  },
}

export default function FAQPage() {
  const faqSchema = generateFAQSchema(siteUrl)

  return (
    <>
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 p-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">FAQ</h1>
              <p className="text-lg text-surface-400 max-w-2xl mx-auto">
                Common questions about pdfiles workflows, limits, and privacy behavior.
                <Link href="/contact" className="text-primary-400 hover:text-primary-300 underline ml-1">Need a specific answer?</Link>
              </p>
            </div>

            <FAQ />

            <div className="mt-12 card p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
              <p className="text-surface-400 mb-6">Contact the team or open a project issue with your scenario.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary btn-md inline-flex">Contact Team</Link>
                <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-md inline-flex">Project Repository</a>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 bg-mesh -z-10" aria-hidden="true" />
        <div className="fixed inset-0 bg-grid opacity-30 -z-10" aria-hidden="true" />
      </main>
    </>
  )
}
