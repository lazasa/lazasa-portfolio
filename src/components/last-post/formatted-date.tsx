'use client'

interface Props {
  date: Date
  lang?: string
}

export function FormattedDate({ date, lang }: Props) {
  console.log('FormattedDate props:', { date, lang })
  return (
    <time className="font-semibold text-sm" dateTime={date.toISOString()}>
      {date.toLocaleDateString(lang, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })}
    </time>
  )
}
