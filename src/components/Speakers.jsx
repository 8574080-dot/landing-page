import { useState, useEffect } from 'react'
import { speakers } from '../data/eventData'
import { useI18n } from '../i18n/I18nContext'

function matches(s, query) {
  const q = query.toLowerCase()
  return (
    s.name.toLowerCase().includes(q) ||
    s.role.toLowerCase().includes(q) ||
    s.company.toLowerCase().includes(q) ||
    s.topics.some(topic => topic.toLowerCase().includes(q))
  )
}

function setParam(key, value) {
  const params = new URLSearchParams(window.location.search)
  if (value) { params.set(key, value) } else { params.delete(key) }
  const qs = params.toString()
  history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname)
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function IconTwitter() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function SocialLinks({ speaker, className = '' }) {
  const { t } = useI18n()
  return (
    <div className={`speaker-social ${className}`}>
      {speaker.linkedinUrl && (
        <a
          href={speaker.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="speaker-social__link"
          aria-label={t('speakers.linkedin', { name: speaker.name })}
        >
          <IconLinkedIn />
        </a>
      )}
      {speaker.twitterUrl && (
        <a
          href={speaker.twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="speaker-social__link"
          aria-label={t('speakers.twitter', { name: speaker.name })}
        >
          <IconTwitter />
        </a>
      )}
    </div>
  )
}

function SpeakerModal({ speaker, onClose }) {
  const { lang, t } = useI18n()
  const bio = typeof speaker.bio === 'string' ? speaker.bio : (speaker.bio[lang] || speaker.bio.en)

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-speaker-name"
        onClick={e => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label={t('speakers.closeModal')}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="modal__header">
          <div
            className="modal__avatar"
            style={{ background: speaker.color }}
            aria-hidden="true"
          >
            {speaker.initials}
          </div>
          <div className="modal__header-text">
            <h2 id="modal-speaker-name" className="modal__name">{speaker.name}</h2>
            <p className="modal__role">{speaker.role} &middot; {speaker.company}</p>
          </div>
        </div>

        <p className="modal__bio">{bio}</p>

        <div className="modal__topics">
          {speaker.topics.map(topic => (
            <span key={topic} className="speaker-card__topic">{topic}</span>
          ))}
        </div>

        <SocialLinks speaker={speaker} className="modal__social" />
      </div>
    </div>
  )
}

export default function Speakers() {
  const { lang, t } = useI18n()

  const [query, setQuery] = useState(() =>
    new URLSearchParams(window.location.search).get('q') ?? ''
  )
  const [selected, setSelected] = useState(null)

  function updateQuery(value) {
    setQuery(value)
    setParam('q', value)
  }

  const filtered = query.trim() ? speakers.filter(s => matches(s, query)) : speakers

  return (
    <>
      <div className="speakers-search">
        <input
          type="search"
          className="speakers-search__input"
          placeholder={t('speakers.search.placeholder')}
          value={query}
          onChange={e => updateQuery(e.target.value)}
          aria-label={t('speakers.search.placeholder')}
        />
        <span className="speakers-search__count">
          {t('speakers.showing', { count: filtered.length, total: speakers.length })}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="speakers-empty">
          <p className="speakers-empty__text">
            {t('speakers.empty', { query })}
          </p>
          <button
            className="btn btn-primary speakers-empty__clear"
            onClick={() => updateQuery('')}
          >
            {t('speakers.clear')}
          </button>
        </div>
      ) : (
        <div className="speakers">
          {filtered.map((s) => {
            const bio = typeof s.bio === 'string' ? s.bio : (s.bio[lang] || s.bio.en)
            return (
              <div
                key={s.name}
                className="speaker-card"
                role="button"
                tabIndex={0}
                aria-label={`${t('speakers.viewProfile')}: ${s.name}`}
                onClick={() => setSelected(s)}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setSelected(s)}
              >
                <div className="speaker-card__overlay" aria-hidden="true">
                  {t('speakers.viewProfile')}
                </div>

                <div
                  className="speaker-card__avatar"
                  style={{ background: s.color }}
                  aria-hidden="true"
                >
                  {s.initials}
                </div>

                <div className="speaker-card__body">
                  <h3 className="speaker-card__name">{s.name}</h3>
                  <p className="speaker-card__role">
                    {s.role} &middot; {s.company}
                  </p>
                  <p className="speaker-card__bio">{bio}</p>
                  <div className="speaker-card__topics">
                    {s.topics.map((topic) => (
                      <span key={topic} className="speaker-card__topic">{topic}</span>
                    ))}
                  </div>
                </div>

                <div onClick={e => e.stopPropagation()}>
                  <SocialLinks speaker={s} />
                </div>
              </div>
            )
          })}
        </div>
      )}

      {selected && (
        <SpeakerModal speaker={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
