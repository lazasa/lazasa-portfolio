'use client'

import { useParams, usePathname } from 'next/navigation'
import { routing, type Locale } from '../i18n/routing'
import Link from 'next/link'

export default function LanguagePicker() {
  const params = useParams()
  const pathname = usePathname()

  const currentLocale = params.locale as Locale

  // Get the current path without locale prefix
  const getLocalizedPath = (locale: Locale) => {
    const segments = pathname.split('/')
    const pathWithoutLocale = segments.slice(2).join('/')
    return `/${locale}/${pathWithoutLocale}`
  }

  return (
    <div className="inline-flex items-center gap-2 scale-150">
      {routing.locales.toReversed().map(locale => {
        const isActive = locale === currentLocale

        return (
          <Link
            key={locale}
            href={getLocalizedPath(locale)}
            className={`inline-flex items-center rounded-full border border-border px-3 py-1 text-xs shadow-sm transition-colors duration-150 ${
              isActive
                ? 'bg-gradient-to-b from-[#723185] to-[#4C2882] text-white font-semibold'
                : 'bg-primary text-text hover:bg-hover'
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        )
      })}
    </div>
  )
}
