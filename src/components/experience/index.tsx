'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import {
  experiences,
  type Experience
} from '@/components/experience/data/experiences'
import { ExperienceCarousel } from './experience-carousel'

export default function Experience() {
  const t = useTranslations('experience')
  const [showAll, setShowAll] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const hasMoreExperiences = experiences.length > 1
  const additionalExperiences = experiences.slice(1)

  const handleToggle = () => {
    if (showAll) {
      // Closing animation - reverse the curtain effect
      setIsAnimating(true)
      setTimeout(() => {
        setShowAll(false)
        setIsAnimating(false)
      }, 400) // Slightly longer for smoother close
    } else {
      // Opening animation - curtain reveal effect
      setShowAll(true)
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
      }, 600) // Longer for staggered animations
    }
  }

  return (
    <section className="mx-auto">
      <h3 className="mb-4">{t('title')}</h3>

      <div className="space-y-10">
        {/* First Experience - Always Visible */}
        <div className="relative">
          {/* Company Header */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h4 className="font-bold text-violet underline">
                {experiences[0].company}
              </h4>
              <div className="text-base font-medium text-text py-1 rounded-full">
                {experiences[0].startDate}{' '}
                {experiences[0].endDate
                  ? `- ${experiences[0].endDate}`
                  : `- ${t('present')}`}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 text-paragraph-text">
              <span className="font-medium">{experiences[0].position}</span>
              <span className="hidden sm:inline">•</span>
              <span>{experiences[0].location}</span>
            </div>
          </div>

          {/* Projects */}
          <ExperienceCarousel experience={experiences[0]} />
        </div>

        {/* Additional Experiences with Curtain Animation */}
        <div className="relative overflow-hidden">
          <div
            className={`transition-all duration-700 ease-in-out transform ${
              showAll
                ? 'max-h-[5000px] opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 translate-y-6'
            }`}
            style={{
              transitionProperty: 'max-height, opacity, transform',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="space-y-12 pt-4">
              {additionalExperiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative transition-all duration-300 ease-out ${
                    showAll
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: showAll ? `${index * 100}ms` : '0ms'
                  }}
                >
                  {/* Curtain Overlay Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b from-primary via-primary to-transparent transition-all duration-500 ease-out pointer-events-none ${
                      showAll && !isAnimating
                        ? 'opacity-0 translate-y-full'
                        : 'opacity-100 translate-y-0'
                    }`}
                    style={{
                      transitionDelay: showAll
                        ? `${200 + index * 100}ms`
                        : '0ms'
                    }}
                  />

                  {/* Company Header */}
                  <div className="mb-6 relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="font-bold text-violet underline">
                        {experience.company}
                      </h4>
                      <div className="text-base font-medium text-text px-3 py-1 rounded-full">
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
                  <div className="relative z-10">
                    <ExperienceCarousel experience={experience} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* See More / See Less Button */}
      {hasMoreExperiences && (
        <div className="flex justify-center">
          <button
            onClick={handleToggle}
            disabled={isAnimating}
            className="group px-4 cursor-pointer py-2 bg-violet/10 hover:bg-violet/20 border border-violet/30 hover:border-violet/50 rounded-full text-violet text-sm font-medium transition-all duration-200 flex items-center gap-1.5 hover:scale-105 hover:shadow-lg hover:shadow-violet/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {showAll ? (
              <>
                {t('showLess')}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isAnimating
                      ? 'animate-pulse'
                      : 'group-hover:-translate-y-0.5'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </>
            ) : (
              <>
                {t('seeMore')} ({experiences.length - 1})
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isAnimating
                      ? 'animate-pulse'
                      : 'group-hover:translate-y-0.5'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  )
}
