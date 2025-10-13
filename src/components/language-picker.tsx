'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { routing, type Locale } from '@/i18n/routing'

export default function LanguagePicker() {
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const currentLocale = params.locale as Locale

  // Get the current path without locale prefix
  const getLocalizedPath = (locale: Locale) => {
    const segments = pathname.split('/')
    const pathWithoutLocale = segments.slice(2).join('/')
    return `/${locale}/${pathWithoutLocale}`
  }

  // Handle language switch with SPA navigation
  const handleLanguageSwitch = (locale: Locale) => {
    const newPath = getLocalizedPath(locale)

    startTransition(() => {
      router.push(newPath)
      // Refresh to ensure the locale context updates
      router.refresh()
    })
  }

  return (
    <div className="inline-flex items-center gap-2 scale-150">
      {routing.locales.toReversed().map(locale => {
        const isActive = locale === currentLocale

        return (
          <button
            key={locale}
            onClick={() => handleLanguageSwitch(locale)}
            className={`inline-flex items-center rounded-full border border-border px-3 py-1 text-xs shadow-sm transition-all duration-150 cursor-pointer ${
              isActive
                ? 'bg-gradient-to-b from-[#723185] to-[#4C2882] text-white font-semibold'
                : 'bg-primary text-text hover:bg-hover'
            } ${isPending ? 'opacity-50 cursor-none' : ''}`}
            disabled={isActive || isPending}
          >
            {locale.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
