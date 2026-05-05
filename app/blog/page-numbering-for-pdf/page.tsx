import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import { SITE_URL } from '@/lib/site-config'

const slug = 'page-numbering-for-pdf'
const articleTitle = 'Add Page Numbers to Any PDF'
const articleDescription = 'Apply clean numbering styles for print-ready or review-ready docs.'

export const metadata: Metadata = {
  title: `${articleTitle} | pdfiles Blog`,
  description: articleDescription,
  alternates: {
    canonical: `${SITE_URL}/blog/${slug}`,
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <article className="flex-1 p-6 py-12">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-surface-400 mb-6">
            <Link href="/blog" className="hover:text-primary-400 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-surface-300">Add Page Numbers to Any PDF</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Add Page Numbers to Any PDF</h1>
            <p className="text-lg text-surface-300">Apply clean numbering styles for print-ready or review-ready docs.</p>
          </header>

          <div className="prose prose-invert max-w-none">
            <p>
              This guide is part of the pdfiles practical series. It focuses on fast results, predictable quality,
              and privacy-first workflows that run directly in your browser.
            </p>
            <h2>Quick workflow</h2>
            <ul>
              <li>Open the relevant tool in pdfiles and add your file.</li>
              <li>Adjust options with a visual preview before exporting.</li>
              <li>Download the updated PDF and verify final output.</li>
            </ul>
            <h2>Best practices</h2>
            <p>
              Keep originals untouched, export with clear file names, and always perform a short visual check after
              processing. For sensitive documents, prefer local editing and avoid uploading files to unknown services.
            </p>
            <h2>Final note</h2>
            <p>
              The objective is simple: less friction, cleaner documents, and full control over your files.
              Explore related guides in the blog for deeper workflows.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/blog" className="btn-secondary btn-md">Back to Blog</Link>
          </div>
        </div>
      </article>
      <div className="fixed inset-0 bg-mesh -z-10" aria-hidden="true" />
      <div className="fixed inset-0 bg-grid opacity-30 -z-10" aria-hidden="true" />
    </main>
  )
}
