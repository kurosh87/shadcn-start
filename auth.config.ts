import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

const productionUrl = 'https://radium.vercel.app';

const authConfig = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? ''
    }),
    CredentialProvider({
      credentials: {
        email: {
          type: 'email'
        },
        password: {
          type: 'password'
        }
      },
      async authorize(credentials, req) {
        const user = {
          id: '1',
          name: 'John',
          email: credentials?.email as string,
          emailVerified: null
        };
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  pages: {
    signIn: '/',
    error: '/',
    signOut: '/'
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Use the consistent production URL in production
      const finalBaseUrl =
        process.env.NODE_ENV === 'production' ? productionUrl : baseUrl;

      // Handle relative URLs
      if (url.startsWith('/')) {
        return `${finalBaseUrl}${url}`;
      }
      // Handle subpath URLs
      else if (url.startsWith(baseUrl) || url.startsWith(productionUrl)) {
        return url;
      }
      // Default redirect to dashboard
      return `${finalBaseUrl}/dashboard/overview`;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as any;
      }
      return session;
    }
  },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true
} satisfies NextAuthConfig;

export default authConfig;
