import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es'],

  // Used when no locale matches
  defaultLocale: 'en',

  // The `pathnames` object maps a pathname to an object
  // with the localized pathnames for each locale.
  pathnames: {
    '/': '/',
    // Add more route mappings here if needed
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];