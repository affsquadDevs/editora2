import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '../../components/Header';
import ToolsPanel from '../../components/ToolsPanel';
import { toolsMeta } from '../../data/toolsMeta';
import { supportedLocales } from '../../../i18n/config';
import { SITE_URL as siteUrl } from '@/lib/site-config'

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = params.locale;
  const url = `${siteUrl}/${locale}/tools`;

  const hreflangAlternates: Record<string, string> = {
    'x-default': `${siteUrl}/tools`,
    ...Object.fromEntries(
      supportedLocales.map((code) => [code, `${siteUrl}/${code}/tools`])
    ),
  };

  return {
    title: 'pdfiles Tool Library — Browser PDF Operations',
    description: 'Explore the pdfiles tool library for editing, structure changes, conversion, and security operations in a single browser workflow.',
    openGraph: {
      type: 'website',
      url,
      title: 'pdfiles Tool Library — Browser PDF Operations',
      description: 'Explore the pdfiles tool library for editing, structure changes, conversion, and security operations in a single browser workflow.',
      siteName: 'pdfiles',
      images: [{ url: `${siteUrl}/og/og-image.png`, width: 1200, height: 630, alt: 'pdfiles — Free PDF Tools' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'pdfiles Tool Library',
      description: 'Run complete PDF operations online with local-first processing.',
      images: [`${siteUrl}/og/og-image.png`],
    },
    alternates: {
      canonical: url,
      languages: hreflangAlternates,
    },
    robots: { index: true, follow: true },
  };
}

export default function LocaleToolsPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale;
  const url = `${siteUrl}/${locale}/tools`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumbs`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'PDF Tools', item: url },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${url}#toollist`,
    name: 'pdfiles Tool Library',
    description: 'Catalog of browser-based PDF operations available in pdfiles',
    url,
    numberOfItems: Object.keys(toolsMeta).length,
    itemListElement: Object.values(toolsMeta).map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: tool.title,
      description: tool.description,
      url: `${siteUrl}/${locale}/tools/${tool.id}`,
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <main className="min-h-screen flex flex-col" role="main">
        <Header />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-5xl w-full">
            <section className="card p-6 md:p-8 mb-6 bg-gradient-to-br from-surface-800/75 via-surface-800/55 to-surface-900/80 border border-primary-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start">
                <div className="lg:col-span-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary-300 mb-3">
                    {locale === 'uk' ? 'центр операцій pdfiles' : 'pdfiles operations center'}
                  </p>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {locale === 'uk' ? 'Бібліотека PDF-операцій pdfiles' : 'pdfiles PDF Operations Library'}
                  </h1>
                  <p className="text-surface-300 max-w-3xl">
                    {locale === 'uk'
                      ? 'Ця сторінка об\'єднує інструменти для редагування, структурування, конвертації та захисту документів в одному робочому процесі.'
                      : 'This page groups editing, structure, conversion, and protection tools into one browser workflow.'}
                  </p>
                  <p className="text-sm text-surface-500 mt-3">
                    {locale === 'uk'
                      ? 'Логіка роботи: завантажити файл, застосувати потрібні операції, перевірити результат і експортувати фінальну версію.'
                      : 'Execution model: load file, apply required operations, verify output, and export final version.'}
                  </p>
                </div>
                <div className="lg:col-span-2 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-primary-500/25 bg-primary-500/10 p-3">
                    <p className="text-xs text-primary-300 uppercase tracking-wide mb-1">{locale === 'uk' ? 'Модель' : 'Model'}</p>
                    <p className="text-sm text-surface-200">{locale === 'uk' ? 'Локальна обробка' : 'Local-first processing'}</p>
                  </div>
                  <div className="rounded-xl border border-accent-500/25 bg-accent-500/10 p-3">
                    <p className="text-xs text-accent-300 uppercase tracking-wide mb-1">{locale === 'uk' ? 'Потік' : 'Flow'}</p>
                    <p className="text-sm text-surface-200">{locale === 'uk' ? 'Імпорт -> дія -> експорт' : 'Import -> operate -> export'}</p>
                  </div>
                  <div className="rounded-xl border border-success-500/25 bg-success-500/10 p-3 col-span-2">
                    <p className="text-xs text-success-300 uppercase tracking-wide mb-1">{locale === 'uk' ? 'Навіщо' : 'Outcome'}</p>
                    <p className="text-sm text-surface-200">{locale === 'uk' ? 'Швидкий і передбачуваний результат без зайвих перемикань між сервісами.' : 'Fast, predictable output without jumping between multiple services.'}</p>
                  </div>
                </div>
              </div>
            </section>
            <ToolsPanel />
          </div>
        </div>
      </main>
    </>
  );
}
