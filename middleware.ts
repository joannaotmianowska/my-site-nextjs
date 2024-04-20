//middleware.ts
import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ['pl', 'en'],

  // Default locale if no match
  defaultLocale: 'pl',
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pl|en)/:page*'],
};
