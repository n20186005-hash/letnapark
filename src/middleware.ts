import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const CANONICAL_HOST = 'letnapark.com';

// The canonical hostname is the apex domain (https://letnapark.com).
// Every `www.` (and any other host alias) request is 301-redirected, so search
// signals are not split between two hostnames.
export default function middleware(request: NextRequest) {
  const host = (request.headers.get('host') || '').toLowerCase();

  if (host !== CANONICAL_HOST && (host === `www.${CANONICAL_HOST}` || host.endsWith(`.${CANONICAL_HOST}`))) {
    const url = request.nextUrl.clone();
    url.protocol = 'https';
    url.host = CANONICAL_HOST;
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
