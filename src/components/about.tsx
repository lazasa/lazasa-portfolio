'use client'

import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')

  return (
    <section className="mx-auto">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">{t('para_one')}</p>
      </div>
    </section>
  )
}
