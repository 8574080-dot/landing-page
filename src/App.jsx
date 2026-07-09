import { useEffect, useState } from 'react'
import './App.css'
import { eventInfo } from './data/eventData'
import Program from './components/Program'
import Speakers from './components/Speakers'
import FAQ from './components/FAQ'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function Header({ registrantName }) {
  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__logo">EPAM Tech Conference 2026</span>
        <div className="header__right">
          <nav>
            <ul className="header__nav">
              <li><a href="#program">Program</a></li>
              <li><a href="#speakers">Speakers</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#register">Register</a></li>
            </ul>
          </nav>
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

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <span className="hero__eyebrow">Annual Event</span>
        <h1 className="hero__title">{eventInfo.title}</h1>
        <p className="hero__subtitle">{eventInfo.description}</p>
        <div className="hero__meta">
          <span>📅 {eventInfo.date}</span>
          <span>📍 {eventInfo.location}</span>
          <span>🕙 {eventInfo.time}</span>
        </div>
        <div className="hero__actions">
          <a href="#register" className="btn btn-primary">Register Now</a>
          <a href="#program" className="btn btn-outline">View Program</a>
        </div>
      </div>
    </section>
  )
}

function App() {
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
      <Hero />

      <section id="program">
        <div className="container">
          <h2 className="section-title">Program</h2>
          <p className="section-subtitle">Full-day schedule of talks and workshops</p>
          <Program />
        </div>
      </section>

      <section id="speakers">
        <div className="container">
          <h2 className="section-title">Speakers</h2>
          <p className="section-subtitle">Meet the experts sharing their knowledge</p>
          <Speakers />
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <h2 className="section-title">FAQ</h2>
          <p className="section-subtitle">Common questions answered</p>
          <FAQ />
        </div>
      </section>

      <section id="register">
        <div className="container">
          <h2 className="section-title">Register</h2>
          <p className="section-subtitle">Secure your spot today</p>
          <RegistrationForm
            onRegister={name => setRegistrantName(name)}
            onClear={() => setRegistrantName(null)}
          />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
