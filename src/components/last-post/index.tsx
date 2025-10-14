import LastPost from './last-post'
import { parseRSSFeed } from './utils/rss-parser'

export default async function ServerLastPost({ locale }: { locale: string }) {
  try {
    const BLOG_URL = 'https://blog.lazajs.site/rss.xml'
    const res = await fetch(BLOG_URL, {
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!res.ok) {
      return <LastPost locale={locale} post={null} />
    }

    const rssText = await res.text()
    const post = await parseRSSFeed(rssText, locale)

    return <LastPost locale={locale} post={post} />
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
  }

  return null
}
