import { ArrowUp } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext.jsx'
import BrandLogo from './BrandLogo.jsx'
import FacebookIcon from './FacebookIcon.jsx'
import { FACEBOOK_URL } from '../config.js'

export default function Footer() {
  const { dict } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" aria-label="SpearHawk — Home" className="footer-logo-link">
              <BrandLogo variant="footer" />
            </a>
            <p className="footer-description">{dict.footer.description}</p>
            <div className="footer-social">
              <a
                className="footer-social-link"
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SpearHawk on Facebook"
                title="Facebook"
              >
                <FacebookIcon size={17} />
              </a>
            </div>
          </div>

          <nav className="footer-column" aria-label={dict.footer.quickLinksTitle}>
            <h3 className="footer-heading">{dict.footer.quickLinksTitle}</h3>
            <ul className="footer-links">
              {dict.footer.quickLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-column" aria-label={dict.footer.servicesTitle}>
            <h3 className="footer-heading">{dict.footer.servicesTitle}</h3>
            <ul className="footer-links">
              {dict.footer.serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} SpearHawk. {dict.footer.copyright}
          </p>
          <a className="back-to-top" href="#home">
            {dict.footer.backToTop}
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
