import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

// This should match the secret key in the API route
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key-here';
const PRODUCTION_URL = 'https://occoto.com';
const DEVELOPMENT_URL = 'http://127.0.0.1:4000';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Determine if we're in production
  const isProduction = process.env.NODE_ENV === 'production';
  const allowedOrigin = isProduction ? PRODUCTION_URL : DEVELOPMENT_URL;

  // Add CORS headers for API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  }

  // Secure dashboard protection
  if (request.nextUrl.pathname.startsWith('/secure-dashboard')) {
    const token = request.cookies.get('secureAccessToken')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/magic', request.url));
    }

    try {
      verify(token, SECRET_KEY);
      
      // Add security headers for protected routes
      response.headers.set('X-Frame-Options', 'DENY');
      response.headers.set('X-Content-Type-Options', 'nosniff');
      response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
      response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
      
      if (isProduction) {
        response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
      }
      
      return response;
    } catch (error) {
      return NextResponse.redirect(new URL('/magic', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ['/api/:path*', '/secure-dashboard/:path*']
}; 