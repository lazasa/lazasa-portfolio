import { useTranslations } from 'next-intl'

export default function Header() {
  const t = useTranslations('header')

  return (
    <header className="block m-auto text-center">
      <h1 className="text-4xl text-violet font-bold mb-2">{t('title')}</h1>
    </header>
  )
}
