import type { Metadata } from 'next'
import './globals.css'

type Props = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'lazasa',
  description:
    'Full-Stack Developer with a Linux core and a love for clean, secure systems.'
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/atkinson-regular.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/atkinson-bold.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
      </head>
      <body className="max-w-[120ch] min-h-[90vh] mx-auto px-[1rem] font-atkinson">
        {children}
      </body>
    </html>
  )
}
