'use client'

import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      {/* About Title */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl text-violet font-bold mb-4">{t('title')}</h2>
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
