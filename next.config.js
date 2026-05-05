/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO & Performance optimizations
  compress: true, // Enable gzip compression
  
  // Enable React strict mode for better error handling
  reactStrictMode: true,
  
  // Power-only features for optimization
  poweredByHeader: false, // Remove X-Powered-By header for security
  
  // Performance optimizations
  swcMinify: true, // Use SWC for faster minification
  
  // Experimental features for better performance
  experimental: {
    // Do not use optimizePackageImports for pdf-lib / pdfjs-dist — it breaks webpack
    // chunk paths (e.g. Cannot find module './vendor-chunks/pdf-lib.js').
    // NOTE: optimizeCss requires the optional dependency `critters`.
    // It breaks `next export` if `critters` isn't installed, especially on /404 and /500 prerender.
    // Keep disabled unless you explicitly add `critters` to dependencies.
    optimizeCss: false,
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console logs in production for smaller bundle
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true, // Allow SVG images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Headers for SEO and security
  async redirects() {
    return [
      { source: '/blog/how-to-edit-a-pdf-online', destination: '/blog/pdf-editing-quickstart', permanent: true },
      { source: '/blog/how-to-merge-pdf-files-online', destination: '/blog/merge-pdf-workflow-guide', permanent: true },
      { source: '/blog/how-to-split-pdf-files-online', destination: '/blog/split-pdf-pages-and-ranges', permanent: true },
      { source: '/blog/how-to-extract-pages-from-pdf-online', destination: '/blog/extract-pdf-pages-fast', permanent: true },
      { source: '/blog/how-to-delete-pages-from-pdf', destination: '/blog/remove-pages-from-pdf', permanent: true },
      { source: '/blog/how-to-insert-duplicate-pages-in-pdf', destination: '/blog/duplicate-pages-in-pdf', permanent: true },
      { source: '/blog/how-to-add-page-numbers-to-pdf', destination: '/blog/page-numbering-for-pdf', permanent: true },
      { source: '/blog/how-to-rotate-pdf-pages-online', destination: '/blog/rotate-pdf-pages-guide', permanent: true },
      { source: '/blog/how-to-add-watermark-to-pdf-online', destination: '/blog/watermark-pdf-documents', permanent: true },
      { source: '/blog/is-it-safe-to-edit-pdfs-online', destination: '/blog/online-pdf-editing-safety', permanent: true },
      { source: '/blog/how-we-built-open-source-pdf-editor', destination: '/blog/building-pdfiles-architecture', permanent: true },
      { source: '/blog/why-we-made-pdfiles-open-source', destination: '/blog/why-pdfiles-is-open', permanent: true },
      { source: '/blog/technology-behind-privacy-first-pdf-editing', destination: '/blog/privacy-first-pdf-tech-stack', permanent: true },
      { source: '/blog/contributing-to-open-source-beginners-guide', destination: '/blog/contributing-to-pdfiles-guide', permanent: true },
      { source: '/blog/open-source-vs-closed-source-pdf-editors', destination: '/blog/open-vs-closed-pdf-software', permanent: true },
      { source: '/blog/how-to-convert-images-to-pdf-online', destination: '/blog/images-to-pdf-conversion-guide', permanent: true },
      { source: '/blog/how-to-convert-pdf-to-csv-online', destination: '/blog/pdf-tables-to-csv-guide', permanent: true },
      { source: '/blog/how-to-convert-pdf-to-excel-online', destination: '/blog/pdf-to-excel-workflow', permanent: true },
      { source: '/blog/how-to-convert-pdf-to-word-online', destination: '/blog/pdf-to-word-workflow', permanent: true },
      { source: '/blog/how-to-redact-pdf-online', destination: '/blog/redact-sensitive-pdf-data', permanent: true },
      { source: '/blog/how-to-add-headers-and-footers-to-pdf', destination: '/blog/pdf-header-footer-guide', permanent: true },
      { source: '/blog/how-to-compress-pdf-online', destination: '/blog/pdf-compression-handbook', permanent: true },
      { source: '/blog/how-to-insert-blank-pages-in-pdf', destination: '/blog/insert-blank-pdf-pages', permanent: true },
      { source: '/blog/how-to-reorder-pdf-pages', destination: '/blog/reorder-pdf-pages-guide', permanent: true },
      { source: '/blog/how-to-reverse-pdf-page-order', destination: '/blog/reverse-pdf-page-sequence', permanent: true },
      { source: '/blog/how-to-sanitize-pdf', destination: '/blog/pdf-sanitization-guide', permanent: true },
      { source: '/blog/pdf-to-html', destination: '/blog/pdf-to-html-export-guide', permanent: true },
      { source: '/blog/pdf-to-markdown', destination: '/blog/pdf-to-markdown-export-guide', permanent: true },
      { source: '/blog/pdf-to-text', destination: '/blog/pdf-text-extraction-guide', permanent: true },
      { source: '/blog/digital-signature', destination: '/blog/pdf-digital-signature-guide', permanent: true },
      { source: '/blog/split-by-bookmarks', destination: '/blog/pdf-split-by-bookmarks-guide', permanent: true },
      { source: '/blog/split-by-size', destination: '/blog/pdf-split-by-size-guide', permanent: true },
    ]
  },

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      }
    ]
  },
  
  webpack: (config, { isServer }) => {
    // Fix for pdfjs-dist worker in Next.js
    config.resolve.alias.canvas = false;
    
    // Ignore problematic modules that aren't used
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'emitter': false,
        'batch': false,
      };
    }
    
    return config;
  },
}

module.exports = nextConfig
