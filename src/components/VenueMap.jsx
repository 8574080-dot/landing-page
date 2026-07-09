import { useI18n } from '../i18n/I18nContext'
import { eventInfo } from '../data/eventData'

const MAPS_EMBED = 'https://www.google.com/maps?q=EPAM+Systems+Minsk+Belarus&output=embed'
const MAPS_LINK  = 'https://maps.google.com/maps?q=EPAM+Systems+Minsk+Belarus'

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function IconVideo() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="23 7 16 12 23 17 23 7"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  )
}

export default function VenueMap() {
  const { lang, t } = useI18n()
  const info = eventInfo[lang]

  return (
    <div className="venue">
      <div className="venue__map-wrap">
        <div className="venue__map-fallback" aria-hidden="true">
          <IconPin />
          <span>EPAM Systems, Minsk</span>
        </div>
        <iframe
          className="venue__iframe"
          src={MAPS_EMBED}
          title={t('venue.mapTitle')}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="venue__info">
        <ul className="venue__detail-list">
          <li className="venue__detail">
            <span className="venue__detail-icon"><IconPin /></span>
            <div>
              <span className="venue__detail-label">{t('venue.address')}</span>
              <span className="venue__detail-value">{t('venue.addressValue')}</span>
            </div>
          </li>
          <li className="venue__detail">
            <span className="venue__detail-icon"><IconCalendar /></span>
            <div>
              <span className="venue__detail-label">{t('venue.date')}</span>
              <span className="venue__detail-value">{info.date}</span>
            </div>
          </li>
          <li className="venue__detail">
            <span className="venue__detail-icon"><IconClock /></span>
            <div>
              <span className="venue__detail-label">{t('venue.time')}</span>
              <span className="venue__detail-value">{info.time}</span>
            </div>
          </li>
          <li className="venue__detail">
            <span className="venue__detail-icon"><IconVideo /></span>
            <div>
              <span className="venue__detail-label">{t('venue.format')}</span>
              <span className="venue__detail-value">{t('venue.formatValue')}</span>
            </div>
          </li>
        </ul>

        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline venue__cta"
        >
          {t('venue.directions')}
        </a>
      </div>
    </div>
  )
}
