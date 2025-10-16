'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { STACK_DATA, type StackItem } from './data/stack'

interface HoverState {
  item: StackItem | null
  position: { x: number; y: number }
}

export default function Stack() {
  const t = useTranslations('stack')
  const [hoverState, setHoverState] = useState<HoverState>({
    item: null,
    position: { x: 0, y: 0 }
  })

  const handleMouseEnter = (item: StackItem, event: React.MouseEvent) => {
    // Only set hover state if the item has certificates
    if (item.imageUrls && item.imageUrls.length > 0) {
      const rect = event.currentTarget.getBoundingClientRect()
      setHoverState({
        item,
        position: {
          x: rect.left + rect.width / 2,
          y: rect.top - 10
        }
      })
    }
  }

  const handleMouseLeave = () => {
    setHoverState({ item: null, position: { x: 0, y: 0 } })
  }

  const sections = [
    {
      key: 'frontend',
      title: t('sections.frontend'),
      items: STACK_DATA.frontend
    },
    { key: 'backend', title: t('sections.backend'), items: STACK_DATA.backend },
    {
      key: 'databases',
      title: t('sections.databases'),
      items: STACK_DATA.databases
    },
    {
      key: 'cloud_devops',
      title: t('sections.cloud_devops'),
      items: STACK_DATA.cloud_devops
    },
    {
      key: 'system_networking',
      title: t('sections.system_networking'),
      items: STACK_DATA.system_networking
    },
    {
      key: 'tooling_workflow',
      title: t('sections.tooling_workflow'),
      items: STACK_DATA.tooling_workflow
    },
    {
      key: 'learning',
      title: t('sections.learning'),
      items: STACK_DATA.learning
    }
  ]

  return (
    <section className="w-full">
      <h3 className="text-2xl font-medium text-text mb-8">{t('title')}</h3>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sections.map(section => (
          <div key={section.key} className="space-y-4">
            <h4 className="text-lg font-medium text-violet mb-4">
              {section.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {section.items.map((item, index) => {
                const hasCertificates =
                  item.imageUrls && item.imageUrls.length > 0
                return (
                  <span
                    key={index}
                    className={`inline-flex items-center gap-2 px-3 py-2 bg-secondary/40 text-paragraph-text text-sm rounded-lg border border-border/30 hover:bg-secondary/60 hover:border-border/50 transition-all duration-200 ${
                      hasCertificates ? 'cursor-pointer' : 'cursor-default'
                    }`}
                    onMouseEnter={e => handleMouseEnter(item, e)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Technology icon with certificate indicator */}
                    <div className="w-4 h-4 bg-violet/20 rounded-sm flex-shrink-0 relative">
                      {hasCertificates && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-violet rounded-full" />
                      )}
                    </div>
                    <span className="whitespace-nowrap">{item.name}</span>
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Preview on Hover */}
      {hoverState.item &&
        hoverState.item.imageUrls &&
        hoverState.item.imageUrls.length > 0 && (
          <div
            className="fixed z-50 pointer-events-none transition-opacity duration-200"
            style={{
              left: hoverState.position.x,
              top: hoverState.position.y,
              transform: 'translate(-50%, -100%)'
            }}
          >
            <div className="bg-primary border border-border rounded-[0.75rem] shadow-custom p-1 max-w-4xl">
              {/* Display all certificates side by side */}
              <div className="flex gap-1 items-start justify-center flex-wrap">
                {hoverState.item.imageUrls.map((imageUrl, index) => (
                  <div key={index} className="">
                    <Image
                      src={imageUrl}
                      alt={`${hoverState.item!.name} ${index + 1}`}
                      width={200}
                      height={140}
                      className="w-[200px] h-auto rounded"
                    />
                  </div>
                ))}
              </div>

              <p className="text-xs text-sub-text mt-2 text-center">
                {hoverState.item.name}
              </p>
            </div>
          </div>
        )}
    </section>
  )
}
