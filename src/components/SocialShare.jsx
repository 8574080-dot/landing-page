import { useI18n } from '../i18n/I18nContext'
import { eventInfo } from '../data/eventData'

function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-.994-.646-.35-1.001.218-1.581.149-.155 2.734-2.506 2.784-2.718.006-.026.012-.12-.048-.169-.059-.05-.146-.033-.208-.019-.09.02-1.524.968-4.304 2.845-.407.28-.776.417-1.107.41-.364-.009-1.064-.206-1.584-.376-.638-.209-1.146-.32-1.102-.678.023-.186.338-.375.944-.567 3.7-1.611 6.166-2.673 7.395-3.187 3.522-1.467 4.252-1.723 4.727-1.731z"/>
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export default function SocialShare({ variant = 'hero' }) {
  const { lang, t } = useI18n()
  const info = eventInfo[lang]

  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(`${info.title} — ${info.date}, ${info.location}`)

  const telegramHref = `https://t.me/share/url?url=${url}&text=${text}`
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`

  return (
    <div className={`share share--${variant}`}>
      <span className="share__label">{t('share.title')}</span>
      <div className="share__btns">
        <a
          href={telegramHref}
          target="_blank"
          rel="noreferrer"
          className="share__btn share__btn--telegram"
          aria-label={t('share.telegram')}
        >
          <IconTelegram />
        </a>
        <a
          href={linkedinHref}
          target="_blank"
          rel="noreferrer"
          className="share__btn share__btn--linkedin"
          aria-label={t('share.linkedin')}
        >
          <IconLinkedIn />
        </a>
      </div>
    </div>
  )
}
