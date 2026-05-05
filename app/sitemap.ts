import { MetadataRoute } from 'next'
import { SITE_URL as baseUrl } from '@/lib/site-config'
const locales = ['en', 'fr', 'de', 'es', 'it', 'uk']

const tools = [
  // Organize & Pages
  'merge', 'split', 'delete-pages', 'extract-pages', 'reorder', 'rotate',
  'insert-blank', 'duplicate-pages', 'reverse-order', 'pdf-split-by-size-guide', 'pdf-split-by-bookmarks-guide',
  // Security & Protection
  'sign', 'redact', 'remove-hidden-data', 'certificate',
  // Convert
  'pdf-to-images', 'images-to-pdf', 'pdf-to-word', 'pdf-to-excel', 'pdf-text-extraction-guide',
  'pdf-to-csv', 'pdf-to-html-export-guide', 'pdf-to-markdown-export-guide',
  // Edit & Enhance
  'compress', 'add-watermark', 'page-numbers', 'crop', 'resize',
  'grayscale', 'invert-colors', 'flatten', 'remove-annotations',
  // Content & Media
  'extract-images', 'remove-images', 'optimize-images', 'add-qr-code',
  'add-barcode', 'add-bookmarks', 'add-hyperlinks', 'add-attachments',
]

// Blog posts
const blogPosts = [
  'pdf-editing-quickstart',
  'merge-pdf-workflow-guide',
  'split-pdf-pages-and-ranges',
  'extract-pdf-pages-fast',
  'remove-pages-from-pdf',
  'duplicate-pages-in-pdf',
  'page-numbering-for-pdf',
  'rotate-pdf-pages-guide',
  'watermark-pdf-documents',
  'online-pdf-editing-safety',
  'building-pdfiles-architecture',
  'why-pdfiles-is-open',
  'privacy-first-pdf-tech-stack',
  'contributing-to-pdfiles-guide',
  'open-vs-closed-pdf-software',
  'pdf-to-markdown-export-guide',
  'pdf-to-html-export-guide',
  'pdf-text-extraction-guide',
  'pdf-digital-signature-guide',
  'pdf-header-footer-guide',
  'pdf-compression-handbook',
  'images-to-pdf-conversion-guide',
  'pdf-tables-to-csv-guide',
  'pdf-to-excel-workflow',
  'pdf-to-word-workflow',
  'redact-sensitive-pdf-data',
  'reorder-pdf-pages-guide',
  'reverse-pdf-page-sequence',
  'pdf-sanitization-guide',
  'insert-blank-pdf-pages',
  'pdf-split-by-bookmarks-guide',
  'pdf-split-by-size-guide',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // ── Non-locale (canonical root) pages ──────────────────────────────────────
  const rootPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                    lastModified: now, changeFrequency: 'weekly',  priority: 1 },
    { url: `${baseUrl}/edit`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${baseUrl}/tools`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${baseUrl}/how-it-works`,  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${baseUrl}/faq`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`,lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/terms`,         lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]

  // ── Locale-prefixed main pages ──────────────────────────────────────────────
  const localizedMainPages = [
    { path: '',               priority: 0.95, freq: 'weekly'  as const },
    { path: '/edit',          priority: 0.9,  freq: 'weekly'  as const },
    { path: '/tools',         priority: 0.9,  freq: 'weekly'  as const },
    { path: '/how-it-works',  priority: 0.8,  freq: 'monthly' as const },
    { path: '/about',         priority: 0.75, freq: 'monthly' as const },
    { path: '/blog',          priority: 0.75, freq: 'weekly'  as const },
    { path: '/faq',           priority: 0.75, freq: 'monthly' as const },
    { path: '/contact',       priority: 0.65, freq: 'monthly' as const },
    { path: '/privacy-policy',priority: 0.45, freq: 'monthly' as const },
    { path: '/terms',         priority: 0.45, freq: 'monthly' as const },
  ]

  const localizedPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    localizedMainPages.map(({ path, priority, freq }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
    }))
  )

  // ── Non-locale tool pages ───────────────────────────────────────────────────
  const toolUrls: MetadataRoute.Sitemap = tools.map((toolId) => ({
    url: `${baseUrl}/tools/${toolId}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // ── Non-locale blog posts ───────────────────────────────────────────────────
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...rootPages,
    ...localizedPages,
    ...toolUrls,
    ...blogUrls,
  ]
}
