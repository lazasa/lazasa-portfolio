'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import LanguagePicker from './language-picker'
import CVModal from './cv-modal'

export default function Header() {
  const t = useTranslations('header')
  const [isCVModalOpen, setIsCVModalOpen] = useState(false)

  return (
    <header>
      <nav className="w-full min-h-[5vh] pt-8 grid place-content-center">
        <LanguagePicker />
      </nav>
      <div className="my-8 text-center">
        <h1 className="text-4xl text-violet font-bold mb-2">{t('title')}</h1>
        <h2 className="text-xl text-gray-600">{t('subtitle')}</h2>
      </div>

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src="/images/me.png"
                alt="Profile picture"
                width={120}
                height={120}
                className="rounded-full border-4 border-violet-500 shadow-lg object-cover"
                priority
              />
            </div>
          </div>

          {/* Description and Social Links */}
          <div className="flex-1 text-center md:text-left">
            {/* Description */}
            <div className="mb-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t('description')}
              </p>
              <p className="text-gray-600">{t('bio')}</p>
            </div>

            {/* Social Links and CV Download */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {/* LinkedIn */}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/lazasa/"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
                LinkedIn
              </a>

              {/* X (Twitter) */}
              <a
                href="https://twitter.com/lazassa"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-200"
                aria-label="X Profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11.751 8.017L18.257 1h-1.543L11.015 6.956 6.674 1H1.5l6.818 9.934L1.5 19h1.543l5.988-6.962L13.326 19H18.5l-6.749-10.983zm-2.121 2.467l-.694-.992L3.27 2.187h2.376l4.442 6.35.694.992 5.787 8.282h-2.376l-4.713-6.735z" />
                </svg>
                X
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/lazasa"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <svg
                  className="w-5 h-5"
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

              {/* Preview CV */}
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors duration-200"
                aria-label="Preview CV"
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                {t('cv')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CV Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </header>
  )
}
