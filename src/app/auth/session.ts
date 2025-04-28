import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { SessionPayload } from '@/app/auth/definitions'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from "next/server";
import pool from '../../../utils/db'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('300s')
      .sign(encodedKey)
  }
   
export async function decrypt(session: string | undefined = '') {
try {
    const { payload } = await jwtVerify(session, encodedKey, {
    algorithms: ['HS256'],
    })
    return payload
} catch (error) {
    console.log('Failed to verify session')
}
}

export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ userId, expiresAt })
    const cookieStore = await cookies()

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    })
}

export async function getSession() {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return;
  
    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    if (!parsed || typeof parsed !== 'object') return;

    parsed.expires = new Date(Date.now() + 10 * 1000);
    const res = NextResponse.next();

    res.cookies.set("session", await encrypt(parsed as SessionPayload), {
      httpOnly: true,
      expires: parsed.expires as Date,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });
    return res;
  }

export async function logout() {
    // Destroy the session
    const cookieStore = await cookies();
    cookieStore.set("session", "", { expires: new Date(0) });
    return NextResponse.redirect('/login');
}

export async function login(formData: FormData) {
    // Verify credentials && get the user
  
    const user = { email: formData.get("email"), name: "John" };

    const data = await pool.query('SELECT * FROM users WHERE email = $1', [user.email])
    

    const fetchedUser = data.rows[0];

    const fetchedUserDetails = fetchedUser[0];

    if (!fetchedUserDetails) {
      return { message: "Invalid credentials" };
    }

    // Create the session
    const expiresAt = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ userId: fetchedUserDetails.id, expiresAt });

    // Save the session in a cookie
    const cookieStore = await cookies();
    cookieStore.set("session", session, { expires: expiresAt, httpOnly: true });

    // Redirect to the home page
    return NextResponse.redirect("/web3");
}