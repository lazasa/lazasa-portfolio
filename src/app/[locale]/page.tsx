import Header from '@/components/header'
import About from '@/components/about'
import LastPost from '@/components/last-post'

export const dynamic = 'force-dynamic'

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const { locale } = resolvedParams

  return (
    <main className="flex flex-col gap-[4rem]">
      <Header />
      <About />
      <LastPost locale={locale} />
    </main>
  )
}
