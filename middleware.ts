import {authMiddleware} from '@clerk/nextjs';
import {NextResponse} from 'next/server';

export default authMiddleware({
  afterAuth(auth, req, evt) {
    if (auth.userId && auth.isPublicRoute) {
      const dashboardUrl = new URL('/', req.url);
      return NextResponse.redirect(dashboardUrl);
    }
  },
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};
