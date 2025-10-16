'use client'

import { useTranslations } from 'next-intl'
import {
  experiences,
  type Experience
} from '@/components/experience/data/experiences'
import { ExperienceCarousel } from './experience-carousel'

export default function Experience() {
  const t = useTranslations('experience')

  return (
    <section className="mx-auto">
      <h3 className="mb-4">{t('title')}</h3>

      <div className="space-y-12">
        {experiences.map(experience => (
          <div key={experience.id} className="relative">
            {/* Company Header */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold text-violet">
                  {experience.company}
                </h3>
                <div className="text-base font-medium text-text bg-secondary/50 px-3 py-1 rounded-full">
                  {experience.startDate}{' '}
                  {experience.endDate
                    ? `- ${experience.endDate}`
                    : `- ${t('present')}`}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 text-paragraph-text">
                <span className="font-medium">{experience.position}</span>
                <span className="hidden sm:inline">•</span>
                <span>{experience.location}</span>
              </div>
            </div>

            {/* Projects */}
            <ExperienceCarousel experience={experience} />
          </div>
        ))}
      </div>
    </section>
  )
}
