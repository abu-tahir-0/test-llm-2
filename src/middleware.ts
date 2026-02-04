import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path starts with /admin
  if (pathname.startsWith('/admin')) {
    // In a real application, you would check for a session cookie or JWT
    // For this basic route guard, we'll check for a placeholder 'auth-token'
    const token = request.cookies.get('auth-token');

    if (!token) {
      // Redirect to login if no token is found
      const loginUrl = new URL('/login', request.url);
      // Store the original destination to redirect back after login
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Configure the middleware to only run on specific paths
export const config = {
  matcher: ['/admin/:path*'],
};
