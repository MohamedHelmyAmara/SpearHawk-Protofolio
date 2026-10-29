import { ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext.jsx'
import HeroIllustration from './HeroIllustration.jsx'

export default function Hero() {
  const { dict } = useI18n()

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            {dict.hero.badge}
          </p>
          <h1 className="hero-title">
            {dict.hero.titleBefore}{' '}
            <span className="accent-text">{dict.hero.titleAccent}</span>
          </h1>
          <p className="hero-description">{dict.hero.description}</p>

          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="#contact">
              {dict.hero.ctaPrimary}
              <ArrowRight className="dir-icon" size={18} aria-hidden="true" />
            </a>
            <a className="btn btn-secondary btn-lg" href="#services">
              {dict.hero.ctaSecondary}
            </a>
          </div>

          <ul className="hero-chips" aria-label={dict.services.eyebrow}>
            <li>{dict.hero.chipWeb}</li>
            <li>{dict.hero.chipApps}</li>
            <li>{dict.hero.chipMobile}</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}
