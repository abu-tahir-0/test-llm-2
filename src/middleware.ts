import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Check if the path starts with /admin
  if (pathname.startsWith('/admin')) {
    // Check for an auth token in cookies
    const token = request.cookies.get('auth-token');

    if (!token) {
      // Redirect to login if no token is found
      const loginUrl = new URL('/login', request.url);
      
      // Store the original destination including query parameters to redirect back after login
      // We use encodeURIComponent to ensure the 'from' parameter is correctly encoded
      const fullPath = pathname + search;
      loginUrl.searchParams.set('from', fullPath);
      
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Configure the middleware to only run on specific paths
export const config = {
  matcher: ['/admin/:path*'],
};
