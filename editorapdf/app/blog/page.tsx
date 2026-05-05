import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import { SITE_URL } from '@/lib/site-config'

const posts = [
    { slug: 'pdf-editing-quickstart', title: 'How to Edit a PDF in Minutes', excerpt: 'A practical walkthrough for fast edits with no extra apps.' },
    { slug: 'merge-pdf-workflow-guide', title: 'Merge PDF Files Without Losing Quality', excerpt: 'Combine reports, scans, and appendices into one clean document.' },
    { slug: 'split-pdf-pages-and-ranges', title: 'Split a PDF by Pages or Ranges', excerpt: 'Break big files into smaller parts that are easier to share.' },
    { slug: 'extract-pdf-pages-fast', title: 'Extract Specific PDF Pages', excerpt: 'Pull only the pages you need for clients, school, or legal workflows.' },
    { slug: 'remove-pages-from-pdf', title: 'Delete Unwanted PDF Pages', excerpt: 'Remove draft pages, blanks, and duplicates in a few clicks.' },
    { slug: 'duplicate-pages-in-pdf', title: 'Duplicate PDF Pages Quickly', excerpt: 'Reuse templates, repeated forms, and standardized sections.' },
    { slug: 'page-numbering-for-pdf', title: 'Add Page Numbers to Any PDF', excerpt: 'Apply clean numbering styles for print-ready or review-ready docs.' },
    { slug: 'rotate-pdf-pages-guide', title: 'Rotate PDF Pages the Right Way', excerpt: 'Fix scan orientation across one page or the entire file.' },
    { slug: 'watermark-pdf-documents', title: 'Add Watermarks to Protect PDFs', excerpt: 'Stamp ownership, status, or confidentiality on every page.' },
    { slug: 'online-pdf-editing-safety', title: 'Is Online PDF Editing Safe?', excerpt: 'Understand local processing, privacy risks, and safer habits.' },
    { slug: 'building-pdfiles-architecture', title: 'How We Built pdfiles', excerpt: 'Architecture notes and trade-offs behind a browser-first editor.' },
    { slug: 'why-pdfiles-is-open', title: 'Why pdfiles Is Open Source', excerpt: 'Why transparency and user trust matter for document tools.' },
    { slug: 'privacy-first-pdf-tech-stack', title: 'Technology Behind Privacy-First Editing', excerpt: 'How client-side rendering and export keep files local.' },
    { slug: 'contributing-to-pdfiles-guide', title: 'A Beginner Guide to Contributing', excerpt: 'Simple ways to help improve pdfiles, even on day one.' },
    { slug: 'open-vs-closed-pdf-software', title: 'Open vs Closed PDF Editors', excerpt: 'What changes for security, cost, and long-term control.' },
    { slug: 'pdf-to-markdown-export-guide', title: 'Convert PDF to Markdown', excerpt: 'Turn static pages into editable content for docs and wikis.' },
    { slug: 'pdf-to-html-export-guide', title: 'Convert PDF to HTML', excerpt: 'Publish PDF content to the web with cleaner structure.' },
    { slug: 'pdf-text-extraction-guide', title: 'Extract Text from PDF', excerpt: 'Capture searchable text for notes, analysis, and automation.' },
    { slug: 'pdf-digital-signature-guide', title: 'Sign PDFs with Confidence', excerpt: 'Apply signatures and verify intent in simple workflows.' },
    { slug: 'pdf-header-footer-guide', title: 'Add Headers and Footers to PDF', excerpt: 'Standardize files with labels, dates, and custom text.' },
    { slug: 'pdf-compression-handbook', title: 'Compress PDF Files Smartly', excerpt: 'Reduce file size while keeping readability and layout intact.' },
    { slug: 'images-to-pdf-conversion-guide', title: 'Convert Images into a PDF', excerpt: 'Bundle photos and scans into one shareable document.' },
    { slug: 'pdf-tables-to-csv-guide', title: 'Convert PDF Tables to CSV', excerpt: 'Extract structured rows for spreadsheets and reporting.' },
    { slug: 'pdf-to-excel-workflow', title: 'Convert PDF to Excel', excerpt: 'Move table data from PDF into editable workbook format.' },
    { slug: 'pdf-to-word-workflow', title: 'Convert PDF to Word', excerpt: 'Bring document text into DOCX for deeper edits.' },
    { slug: 'redact-sensitive-pdf-data', title: 'Redact Sensitive PDF Content', excerpt: 'Permanently remove private data before sharing files.' },
    { slug: 'reorder-pdf-pages-guide', title: 'Reorder PDF Pages Fast', excerpt: 'Rebuild document flow without recreating the file.' },
    { slug: 'reverse-pdf-page-sequence', title: 'Reverse PDF Page Order', excerpt: 'Flip page sequence for scans and print-related tasks.' },
    { slug: 'pdf-sanitization-guide', title: 'Sanitize a PDF Before Sending', excerpt: 'Strip metadata and hidden artifacts for cleaner distribution.' },
    { slug: 'insert-blank-pdf-pages', title: 'Insert Blank PDF Pages', excerpt: 'Add separators, covers, or writing space exactly where needed.' },
    { slug: 'pdf-split-by-bookmarks-guide', title: 'Split PDF by Bookmarks', excerpt: 'Create chapter files automatically from document structure.' },
    { slug: 'pdf-split-by-size-guide', title: 'Split PDF by File Size', excerpt: 'Prepare upload-ready chunks for strict file-size limits.' }
]

export const metadata: Metadata = {
  title: 'pdfiles Blog - Guides and Workflows',
  description: 'Fresh tutorials and practical workflows for editing and managing PDFs with pdfiles.',
  alternates: { canonical: `${SITE_URL}/blog` },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 p-6 py-12">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">pdfiles Blog</h1>
            <p className="text-surface-300 max-w-2xl mx-auto">
              New practical content for faster, safer, and cleaner PDF workflows.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 hover:scale-[1.02] transition-transform duration-200">
                <h2 className="text-xl font-semibold text-white mb-3">{post.title}</h2>
                <p className="text-sm text-surface-400 mb-4">{post.excerpt}</p>
                <span className="text-primary-400 text-sm font-medium">Open article</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="fixed inset-0 bg-mesh -z-10" aria-hidden="true" />
      <div className="fixed inset-0 bg-grid opacity-30 -z-10" aria-hidden="true" />
    </main>
  )
}
