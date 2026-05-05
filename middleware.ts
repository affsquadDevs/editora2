import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED_LOCALES = new Set(['en', 'uk', 'de', 'es', 'fr', 'it']);
const DEFAULT_LOCALE = 'en';
const LOCALE_AWARE_PATHS = new Set([
	'/',
	'/about',
	'/contact',
	'/tools',
	'/edit',
	'/how-it-works',
	'/blog',
	'/faq',
	'/terms',
	'/privacy-policy'
]);

export function middleware(req: NextRequest) {
	try {
		const { pathname } = req.nextUrl;

		// Skip public files and API routes
		if (
			PUBLIC_FILE.test(pathname) ||
			pathname.startsWith('/api') ||
			pathname.startsWith('/_next') ||
			pathname.startsWith('/favicon') ||
			pathname.startsWith('/og') ||
			pathname.startsWith('/robots') ||
			pathname.startsWith('/sitemap')
		) {
			return NextResponse.next();
		}

		const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value?.toLowerCase();
		const headerLocale = req.headers.get('accept-language')?.split(',')[0]?.split('-')[0]?.trim().toLowerCase();
		const detected = SUPPORTED_LOCALES.has(cookieLocale ?? '')
			? (cookieLocale as string)
			: SUPPORTED_LOCALES.has(headerLocale ?? '')
				? (headerLocale as string)
				: DEFAULT_LOCALE;

		// Normalize locale-aware non-prefixed routes into the preferred locale path.
		if (LOCALE_AWARE_PATHS.has(pathname)) {
			const redirectPath = pathname === '/' ? `/${detected}` : `/${detected}${pathname}`;
			const redirectUrl = new URL(redirectPath, req.url);
			return NextResponse.redirect(redirectUrl);
		}

		// If URL already has locale prefix, forward with x-locale and x-pathname headers
		// so server components and generateMetadata can access locale + pathname.
		const pathLocale = pathname.split('/')[1];
		const activeLocale = SUPPORTED_LOCALES.has(pathLocale) ? pathLocale : detected;

		const requestHeaders = new Headers(req.headers);
		requestHeaders.set('x-locale', activeLocale);
		requestHeaders.set('x-pathname', pathname);

		return NextResponse.next({
			request: { headers: requestHeaders },
		});
	} catch (error) {
		console.error('middleware error', error);
		return NextResponse.next();
	}
}

export const config = {
	matcher: [
		/*
		 * Match all pathnames except for:
		 * - /_next (Next.js internals)
		 * - /api (API routes)
		 * - /static (static files)
		 * - all files with an extension (e.g. .png, .jpg, .css, .js)
		 */
		'/((?!api|_next|static|.*\\..*).*)'
	]
};
