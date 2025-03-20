import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

// This should match the secret key in the API route
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key-here';

export function middleware(request: NextRequest) {
  // Only protect routes that start with /dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('accessToken')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/magic', request.url));
    }

    try {
      verify(token, SECRET_KEY);
      return NextResponse.next();
    } catch (error) {
      console.error('Token verification failed:', error);
      return NextResponse.redirect(new URL('/magic', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
}; 