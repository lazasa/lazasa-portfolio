import { useTranslations } from 'next-intl'
import LanguagePicker from './language-picker'

export default function Header() {
  const t = useTranslations('header')

  return (
    <header>
      <nav className="w-full min-h-[5vh] pt-8 grid place-content-center">
        <LanguagePicker />
      </nav>
      <div className="my-8 text-center">
        <h1 className="text-4xl text-violet font-bold mb-2">{t('title')}</h1>
        <h2 className="text-xl text-gray-600">{t('subtitle')}</h2>
      </div>
    </header>
  )
}
