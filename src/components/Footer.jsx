import { useI18n } from '../i18n/I18nContext'

export default function Footer({ className = '' }) {
  const { t } = useI18n()
  return (
    <footer className={['footer', className].filter(Boolean).join(' ')}>
      <div className="footer__inner">
        <div className="footer__top">
          <span className="footer__copy">{t('footer.copy')}</span>
          <nav aria-label="Footer navigation">
            <ul className="footer__nav">
              <li><a href="#program">{t('nav.program')}</a></li>
              <li><a href="#speakers">{t('nav.speakers')}</a></li>
              <li><a href="#faq">{t('nav.faq')}</a></li>
              <li><a href="#register">{t('nav.register')}</a></li>
            </ul>
          </nav>
        </div>
        <div className="footer__bottom">
          {t('footer.location')} &bull; {t('footer.contact')} <a href="mailto:events@example.com" className="footer__email">events@example.com</a>
        </div>
      </div>
    </footer>
  )
}
