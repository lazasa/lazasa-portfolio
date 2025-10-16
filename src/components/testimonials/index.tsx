'use client'

import { TESTIMONIALS } from './data/testimonials'

export default function Testimonials() {
  // Don't render if no testimonials
  if (TESTIMONIALS.length === 0) {
    return null
  }

  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className="w-full">
      {/* <h2 className="text-2xl font-medium text-text mb-6">{t('title')}</h2> */}
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-6 animate-scroll-testimonials"
          style={{
            width: `${duplicatedTestimonials.length * 324}px` // 300px width + 24px gap
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] p-4 bg-secondary/30 rounded-lg border border-border/50 hover:bg-secondary/40 transition-colors duration-200"
            >
              <blockquote className="text-paragraph-text text-sm leading-relaxed mb-3">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              {testimonial.name && (
                <cite className="text-sub-text text-xs font-medium not-italic">
                  — {testimonial.name}
                </cite>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
