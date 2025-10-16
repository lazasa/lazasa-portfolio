'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ProjectCard } from './project-card'
import { type Experience } from '@/components/experience/data/experiences'

interface ExperienceCarouselProps {
  experience: Experience
}

export function ExperienceCarousel({ experience }: ExperienceCarouselProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const t = useTranslations('experience')

  const nextProject = () => {
    setCurrentProjectIndex(prev =>
      prev === experience.projects.length - 1 ? 0 : prev + 1
    )
  }

  const prevProject = () => {
    setCurrentProjectIndex(prev =>
      prev === 0 ? experience.projects.length - 1 : prev - 1
    )
  }

  const goToProject = (index: number) => {
    setCurrentProjectIndex(index)
  }

  // If only one project, show it without carousel controls
  if (experience.projects.length === 1) {
    return <ProjectCard project={experience.projects[0]} />
  }

  return (
    <div className="relative">
      <ProjectCard project={experience.projects[currentProjectIndex]} />

      {/* Carousel Controls */}
      <div className="flex items-center justify-between mt-4">
        {/* Previous Button */}
        <button
          onClick={prevProject}
          className="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full bg-secondary/50 border border-border hover:bg-hover transition-colors duration-200"
          aria-label="Previous project"
        >
          <svg
            className="w-4 h-4 text-text"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-3">
          {experience.projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-110 ${
                index === currentProjectIndex
                  ? 'bg-violet scale-110'
                  : 'bg-border hover:bg-violet/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextProject}
          className="flex items-center cursor-pointer justify-center w-8 h-8 rounded-full bg-secondary/50 border border-border hover:bg-hover transition-colors duration-200"
          aria-label="Next project"
        >
          <svg
            className="w-4 h-4 text-text"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
