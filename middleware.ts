// Protecting routes with next-auth
// https://next-auth.js.org/configuration/nextjs#middleware
// https://nextjs.org/docs/app/building-your-application/routing/middleware

import NextAuth from 'next-auth';
import authConfig from './auth.config';

const { auth } = NextAuth(authConfig);

const productionUrl = 'https://radium.vercel.app';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

  if (isOnDashboard && !isLoggedIn) {
    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? productionUrl
        : `${nextUrl.protocol}//${nextUrl.host}`;
    return Response.redirect(baseUrl);
  }
});

export const config = { matcher: ['/dashboard/:path*'] };
