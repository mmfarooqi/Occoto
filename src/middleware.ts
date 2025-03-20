import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

// This should match the secret key in the API route
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key-here';

export function middleware(request: NextRequest) {
  // Only protect routes that start with /secure-dashboard
  if (request.nextUrl.pathname.startsWith('/secure-dashboard')) {
    const token = request.cookies.get('secureAccessToken')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/magic', request.url));
    }

    try {
      verify(token, SECRET_KEY);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/magic', request.url));
    }
  }

  const response = NextResponse.next();

  // Add CORS headers
  response.headers.set('Access-Control-Allow-Origin', 'http://127.0.0.1:4000');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');

  return response;
}

export const config = {
  matcher: '/secure-dashboard/:path*',
}; 