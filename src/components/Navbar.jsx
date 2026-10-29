import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { useTheme } from '../theme/ThemeContext.jsx'
import BrandLogo from './BrandLogo.jsx'
import FacebookIcon from './FacebookIcon.jsx'
import { FACEBOOK_URL } from '../config.js'

const NAV_LINKS = [
  { key: 'home', href: '#home' },
  { key: 'services', href: '#services' },
  { key: 'process', href: '#process' },
  { key: 'about', href: '#about' },
]

export default function Navbar() {
  const { lang, dict, setLang } = useI18n()
  const { isDark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close the mobile menu when the viewport grows to desktop size.
  useEffect(() => {
    const media = window.matchMedia('(min-width: 901px)')
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">
        {dict.nav.skipToContent}
      </a>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="SpearHawk — Home">
            <BrandLogo variant="header" />
          </a>

          <nav className="desktop-nav" aria-label={dict.nav.primaryNav}>
            <ul className="desktop-nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a className="nav-link" href={link.href}>
                    {dict.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <div
              className="lang-switch"
              role="group"
              aria-label={dict.nav.languageLabel}
            >
              <button
                type="button"
                className={`lang-option ${lang === 'en' ? 'is-active' : ''}`}
                aria-pressed={lang === 'en'}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-option ${lang === 'ar' ? 'is-active' : ''}`}
                aria-pressed={lang === 'ar'}
                onClick={() => setLang('ar')}
              >
                AR
              </button>
            </div>

            <button
              type="button"
              className="icon-button"
              onClick={toggleTheme}
              aria-label={isDark ? dict.nav.switchToLight : dict.nav.switchToDark}
              title={isDark ? dict.nav.switchToLight : dict.nav.switchToDark}
            >
              {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>

            <a
              className="btn btn-primary btn-sm header-cta"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon size={15} />
              {dict.nav.contact}
            </a>

            <button
              type="button"
              className="icon-button menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        >
          <nav className="container mobile-nav" aria-label={dict.nav.primaryNav}>
            <ul className="mobile-nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a className="mobile-nav-link" href={link.href} onClick={closeMenu}>
                    {dict.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="btn btn-primary mobile-cta"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon size={16} />
              {dict.nav.contact}
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
