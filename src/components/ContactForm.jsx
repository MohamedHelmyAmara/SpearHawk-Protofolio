import { useI18n } from '../i18n/LanguageContext.jsx'
import { FACEBOOK_URL } from '../config.js'
import FacebookIcon from './FacebookIcon.jsx'

/**
 * Contact section: a direct call-to-action that opens the official
 * SpearHawk Facebook page in a new tab (no form backend required).
 */
export default function Contact() {
  const { dict } = useI18n()
  const displayUrl = FACEBOOK_URL.replace(/^https?:\/\//, '')

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">{dict.contact.eyebrow}</p>
          <h2 className="section-title">{dict.contact.title}</h2>
          <p className="section-lead">{dict.contact.lead}</p>
        </header>

        <div className="contact-cta">
          <span className="contact-cta-icon" aria-hidden="true">
            <FacebookIcon size={30} />
          </span>
          <a
            className="btn btn-primary btn-lg contact-cta-button"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon size={18} />
            {dict.contact.ctaButton}
          </a>
          <p className="contact-cta-url" dir="ltr">
            {displayUrl}
          </p>
          <p className="contact-cta-note">{dict.contact.ctaNote}</p>
        </div>
      </div>
    </section>
  )
}
