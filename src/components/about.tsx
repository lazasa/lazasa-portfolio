'use client'

import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')

  return (
    <section className="mx-auto">
      {/* About Title */}
      <div className="mb-8 text-left">
        <h3 className="text-3xl text-violet font-bold mb-4">{t('title')}</h3>
      </div>

      {/* About Content */}
      <div className="space-y-6">
        {/* First Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed">{t('para_one')}</p>

        {/* Second Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed">{t('para_two')}</p>
      </div>
    </section>
  )
}
