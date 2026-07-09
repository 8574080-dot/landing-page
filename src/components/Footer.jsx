export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <span className="footer__copy">© 2026 EPAM Tech Conference</span>
          <nav aria-label="Footer navigation">
            <ul className="footer__nav">
              <li><a href="#program">Program</a></li>
              <li><a href="#speakers">Speakers</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#register">Register</a></li>
            </ul>
          </nav>
        </div>
        <div className="footer__bottom">
          Minsk, Belarus &bull; Contact: <a href="mailto:events@example.com" className="footer__email">events@example.com</a>
        </div>
      </div>
    </footer>
  )
}
