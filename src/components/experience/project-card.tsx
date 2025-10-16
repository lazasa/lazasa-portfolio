'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { type Project } from '@/components/experience/data/experiences'
import { useState, useEffect } from 'react'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('experience')
  const [imageSrc, setImageSrc] = useState(project.imageUrl)
  const [imageError, setImageError] = useState(false)

  // Reset image state when project changes
  useEffect(() => {
    setImageSrc(project.imageUrl)
    setImageError(false)
  }, [project.imageUrl, project.id])

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true)
      setImageSrc('/images/projects/placeholder.svg')
    }
  }

  console.log(project.imageUrl)
  return (
    <div className="bg-secondary/30 rounded-lg p-6 border border-border h-80 lg:h-64">
      <div className="flex flex-col lg:flex-row gap-6 h-full">
        {/* Project Image */}
        <div className="flex-shrink-0">
          <div className="relative w-full lg:w-48 h-32 lg:h-32 rounded-lg overflow-hidden bg-secondary">
            <Image
              src={imageSrc}
              onError={handleImageError}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 192px"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <h4 className="text-xl font-bold text-text">{project.title}</h4>
              <div className="text-sm text-sub-text">
                {project.startDate} {project.endDate && `- ${project.endDate}`}
              </div>
            </div>

            <p className="text-paragraph-text mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-violet-light/20 text-violet rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-3 mt-auto">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-violet hover:bg-violet-light text-white rounded-lg transition-colors duration-200 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {t('viewProject')}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
