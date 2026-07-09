import './App.css'
import Program from './components/Program'
import Speakers from './components/Speakers'
import FAQ from './components/FAQ'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__logo">EPAM Tech Conference 2026</span>
        <nav>
          <ul className="header__nav">
            <li><a href="#program">Program</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#register">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <span className="hero__eyebrow">Annual Event</span>
        <h1 className="hero__title">Engineering the Future<br />Together</h1>
        <p className="hero__subtitle">
          Join industry leaders, engineers, and innovators for a full day of
          talks, workshops, and networking.
        </p>
        <div className="hero__meta">
          <span>📅 September 20, 2026</span>
          <span>📍 Kyiv, Ukraine</span>
          <span>🕙 10:00 – 18:00</span>
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
  return (
    <>
      <Header />
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
          <RegistrationForm />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
