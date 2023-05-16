import {authMiddleware} from '@clerk/nextjs';
import {NextResponse} from 'next/server';

export default authMiddleware({
  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL('/auth/sign-in', req.url);

      return NextResponse.redirect(signInUrl);
    }

    // handle users who are authenticated
    if (auth.userId && auth.isPublicRoute) {
      const dashboardUrl = new URL('/', req.url);

      return NextResponse.redirect(dashboardUrl);
    }
  },
  publicRoutes: ['/auth/sign-in', '/auth/sign-up'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};
