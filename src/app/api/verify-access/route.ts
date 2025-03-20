import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { SignJWT } from 'jose';

// This should be stored in environment variables in production
const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key-here');
const ACCESS_PASSWORD = process.env.ACCESS_PASSWORD || 'your-secure-password-here';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    console.log('Received password:', password);
    console.log('Expected password:', ACCESS_PASSWORD);

    if (password !== ACCESS_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid access code' },
        { status: 401 }
      );
    }

    // Create a secure token using jose instead of jsonwebtoken
    const token = await new SignJWT({ authenticated: true })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(SECRET_KEY);

    // Set the token in an HTTP-only cookie
    const response = NextResponse.json(
      { success: true, token },
      { status: 200 }
    );

    response.cookies.set('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 hours
    });

    return response;
  } catch (error) {
    console.error('Error in verify-access:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 