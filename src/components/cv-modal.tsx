'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const t = useTranslations('cv')

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/files/cv.pdf'
    link.download = 'Lazaro_Sanchez_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md">
      {/* Transparent Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content - Clear and sharp */}
      <div
        className="relative rounded-lg shadow-2xl w-full h-full max-w-6xl flex flex-col"
        style={{
          backgroundColor: '#F5F5DC',
          backdropFilter: 'none',
          filter: 'none'
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 border-b"
          style={{ borderColor: '#2C181022' }}
        >
          <h2 className="text-xl font-semibold" style={{ color: '#2C1810' }}>
            {t('preview')}
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer transition-colors p-1"
            style={{ color: '#2C1810CC' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#2C1810')}
            onMouseLeave={e => (e.currentTarget.style.color = '#2C1810CC')}
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 min-h-0 p-4">
          <iframe
            src="/files/cv.pdf#toolbar=0&navpanes=0&scrollbar=0"
            className="w-full h-full border-0 rounded-lg"
            title="CV Preview"
          />
        </div>

        {/* Footer */}
        <div
          className="p-4 border-t flex justify-between items-center"
          style={{ borderColor: '#2C181022' }}
        >
          <button
            onClick={onClose}
            className="px-4 py-2 cursor-pointer transition-colors"
            style={{ color: '#4A3427' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#2C1810')}
            onMouseLeave={e => (e.currentTarget.style.color = '#4A3427')}
          >
            {t('close')}
          </button>
          <button
            onClick={handleDownload}
            className="flex cursor-pointer items-center gap-2 px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {t('download')}
          </button>
        </div>
      </div>
    </div>
  )
}
