import { useEffect, useState } from 'react'
import './App.css'
import { eventInfo } from './data/eventData'
import Program from './components/Program'
import Speakers from './components/Speakers'
import FAQ from './components/FAQ'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import { useI18n } from './i18n/I18nContext'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import VenueMap from './components/VenueMap'
import SocialShare from './components/SocialShare'

function Header({ registrantName }) {
  const { lang, setLang, t } = useI18n()
  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__logo">EPAM Tech Conference 2026</span>
        <div className="header__right">
          <nav>
            <ul className="header__nav">
              <li><a href="#program">{t('nav.program')}</a></li>
              <li><a href="#speakers">{t('nav.speakers')}</a></li>
              <li><a href="#gallery">{t('nav.gallery')}</a></li>
              <li><a href="#faq">{t('nav.faq')}</a></li>
              <li><a href="#venue">{t('nav.venue')}</a></li>
              <li><a href="#register">{t('nav.register')}</a></li>
            </ul>
          </nav>
          <div className="lang-switcher" role="group" aria-label="Language">
            <button
              className={`lang-switcher__btn${lang === 'en' ? ' lang-switcher__btn--active' : ''}`}
              onClick={() => setLang('en')}
            >EN</button>
            <span className="lang-switcher__sep" aria-hidden="true">|</span>
            <button
              className={`lang-switcher__btn${lang === 'ru' ? ' lang-switcher__btn--active' : ''}`}
              onClick={() => setLang('ru')}
            >RU</button>
          </div>
          {registrantName && (
            <a href="#register" className="header__badge">
              ✓ {registrantName}
            </a>
          )}
        </div>
      </div>
    </header>
  )
}

const EVENT_DATE = new Date('2026-09-20T10:00:00')

function useCountdown(target) {
  const calc = () => {
    const diff = target - Date.now()
    if (diff <= 0) return null
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000)  / 60000),
      seconds: Math.floor((diff % 60000)    / 1000),
    }
  }

  const [remaining, setRemaining] = useState(calc)

  useEffect(() => {
    const id = setInterval(() => setRemaining(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  return remaining
}

function Countdown() {
  const remaining = useCountdown(EVENT_DATE)
  const { t } = useI18n()

  if (!remaining) {
    return <p className="countdown__started">{t('hero.started')}</p>
  }

  const units = [
    { value: remaining.days,    label: t('countdown.days') },
    { value: remaining.hours,   label: t('countdown.hours') },
    { value: remaining.minutes, label: t('countdown.min') },
    { value: remaining.seconds, label: t('countdown.sec') },
  ]

  return (
    <div className="countdown" aria-label="Time until event">
      {units.map(({ value, label }) => (
        <div key={label} className="countdown__unit">
          <span className="countdown__value">{String(value).padStart(2, '0')}</span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  )
}

const CAPACITY = 120
const BASELINE = 92

function SpotsLeft({ isRegistered }) {
  const { t } = useI18n()
  const n = CAPACITY - BASELINE - (isRegistered ? 1 : 0)
  const variant = n <= 10 ? 'red' : n <= 40 ? 'amber' : 'green'
  return (
    <span className={`spots-badge spots-badge--${variant}`}>
      {t('spots.left', { n })}
    </span>
  )
}

function Hero({ isRegistered }) {
  const { lang, t } = useI18n()
  const info = eventInfo[lang]
  return (
    <section className="hero">
      <div className="container">
        <span className="hero__eyebrow">{t('hero.eyebrow')}</span>
        <h1 className="hero__title">{info.title}</h1>
        <p className="hero__subtitle">{info.description}</p>
        <div className="hero__meta">
          <span>📅 {info.date}</span>
          <span>📍 {info.location}</span>
          <span>🕙 {info.time}</span>
        </div>
        <Countdown />
        <SpotsLeft isRegistered={isRegistered} />
        <div className="hero__actions">
          <a href="#register" className="btn btn-primary">{t('hero.cta.register')}</a>
          <a href="#program" className="btn btn-outline">{t('hero.cta.program')}</a>
        </div>
        <SocialShare variant="hero" />
      </div>
    </section>
  )
}

function App() {
  const { t } = useI18n()
  useRevealOnScroll()

  const [registrantName, setRegistrantName] = useState(() => {
    try {
      const raw = localStorage.getItem('eventRegistration')
      return raw ? JSON.parse(raw).name : null
    } catch { return null }
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const targetId = params.has('tag') ? 'program'
                   : params.has('q')   ? 'speakers'
                   : null
    if (!targetId) return

    const section = document.getElementById(targetId)
    if (!section) return

    const headerHeight = document.querySelector('.header')?.offsetHeight ?? 0
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - 16

    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Header registrantName={registrantName} />
      <Hero isRegistered={!!registrantName} />

      <section id="program" className="reveal">
        <div className="container">
          <h2 className="section-title">{t('section.program.title')}</h2>
          <p className="section-subtitle">{t('section.program.subtitle')}</p>
          <Program />
        </div>
      </section>

      <section id="speakers" className="reveal">
        <div className="container">
          <h2 className="section-title">{t('section.speakers.title')}</h2>
          <p className="section-subtitle">{t('section.speakers.subtitle')}</p>
          <Speakers />
        </div>
      </section>

      <section id="gallery" className="reveal">
        <div className="container">
          <h2 className="section-title">{t('section.gallery.title')}</h2>
          <p className="section-subtitle">{t('section.gallery.subtitle')}</p>
          <Gallery />
        </div>
      </section>

      <section id="faq" className="reveal">
        <div className="container">
          <h2 className="section-title">{t('section.faq.title')}</h2>
          <p className="section-subtitle">{t('section.faq.subtitle')}</p>
          <FAQ />
        </div>
      </section>

      <section id="venue" className="reveal">
        <div className="container">
          <h2 className="section-title">{t('section.venue.title')}</h2>
          <p className="section-subtitle">{t('section.venue.subtitle')}</p>
          <VenueMap />
        </div>
      </section>

      <section id="register" className="reveal">
        <div className="container">
          <h2 className="section-title">{t('section.register.title')}</h2>
          <p className="section-subtitle">{t('section.register.subtitle')}</p>
          <div className="section-spots">
            <SpotsLeft isRegistered={!!registrantName} />
          </div>
          <RegistrationForm
            onRegister={name => setRegistrantName(name)}
            onClear={() => setRegistrantName(null)}
          />
        </div>
      </section>
      <Footer className="reveal" />
    </>
  )
}

export default App
