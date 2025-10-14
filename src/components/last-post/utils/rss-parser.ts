import { parseString } from 'xml2js'
import { promisify } from 'util'

const parseXML = promisify(parseString)

export interface Post {
  title: string
  link: string
  description: string
  pubDate: string
  id: string
  language: string
}

interface RSSResult {
  rss?: {
    channel?: Array<{
      item?: Array<{
        title?: string[]
        link?: string[]
        description?: string[]
        pubDate?: string[]
        guid?: Array<{ _?: string } | string>
        language?: string[]
      }>
      language?: string[]
    }>
  }
}

export async function parseRSSFeed(rssText: string, targetLocale: string): Promise<Post | null> {
  try {
    const result = await parseXML(rssText) as RSSResult
    
    if (!result?.rss?.channel?.[0]?.item) {
      return null
    }

    const items = result.rss.channel[0].item
    const channelLanguage = result.rss.channel[0].language?.[0] || targetLocale

    const parsedPosts: Post[] = items.map((item) => {
      // Handle guid which can be a string or object
      let id = ''
      if (item.guid?.[0]) {
        const guid = item.guid[0]
        if (typeof guid === 'string') {
          id = guid
        } else if (guid._ && typeof guid._ === 'string') {
          id = guid._
        }
      }

      return {
        title: item.title?.[0] || '',
        link: item.link?.[0] || '',
        description: item.description?.[0] || '',
        pubDate: item.pubDate?.[0] || '',
        id,
        language: item.language?.[0] || channelLanguage
      }
    })

    // Sort by date (newest first)
    const sortedPosts = parsedPosts.sort((a, b) => {
      return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    })

    // Find post matching locale or return the most recent one
    return sortedPosts.find(post => post.language === targetLocale) || sortedPosts[0] || null

  } catch (error) {
    console.error('Error parsing RSS feed:', error)
    return null
  }
}