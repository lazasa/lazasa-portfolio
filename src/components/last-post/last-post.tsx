'use client'
import { Post } from './utils/rss-parser'
import { useTranslations } from 'next-intl'
import { FormattedDate } from '@/components/last-post/formatted-date'

export default function LastPost({
  post,
  locale
}: {
  post: Post | null
  locale: string
}) {
  const t = useTranslations('last_post')

  if (!post) {
    return null
  }

  return (
    <div>
      <h3 className="text-3xl text-violet font-bold mb-4">{t('title')}</h3>
      <a href={post.link} target="_blank">
        <article className="p-4 pb-6 my-4 rounded-md hover:shadow-lg transition-shadow duration-200 border-violet border-b-[1px] relative">
          <h4 className="text-xl font-bold text-violet mb-2">{post.title}</h4>
          <p className="opacity-80 text-base">{post.description}</p>
          <span className="absolute bottom-1 right-2">
            <FormattedDate date={new Date(post.pubDate)} lang={locale} />
          </span>
        </article>
      </a>
    </div>
  )
}
