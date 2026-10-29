# SpearHawk — Agency Landing Page

A bilingual (English / Arabic), dual-theme (light / dark) landing page for
**SpearHawk**, a digital agency specializing in website, web application, and
mobile application design & development.

Built with **React + JavaScript (JSX)** on **Vite**. No TypeScript.

## Quick start

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
```

Other scripts:

```bash
npm run build    # production build → dist/
npm run preview  # serve the production build locally
npm run lint     # ESLint over src/
```

## Features

- **Bilingual**: EN / AR switcher in the header; the full page (nav, sections,
  form validation, status messages, footer) translates instantly without a
  reload. Preference persists in `localStorage` and `<html lang/dir>` update
  dynamically (RTL for Arabic, LTR for English). English is the default.
- **Theming**: light / dark toggle driven by CSS custom properties on
  `<html data-theme>`. First visit respects `prefers-color-scheme`; the choice
  persists. An inline script in `index.html` applies the stored theme and
  language *before* first paint to avoid flashing.
- **Sections**: sticky responsive navigation with mobile menu, hero with a
  CSS-built illustration (browser + phone mockups), services, conceptual
  product showcase (clearly labeled as conceptual — not client work),
  four-step process timeline, principles, about, contact section with a
  Facebook call-to-action, footer.
- **Accessibility**: semantic landmarks, keyboard-accessible controls, visible
  focus states, `prefers-reduced-motion` support, logical CSS properties for
  RTL.
- **Typography**: Inter (Latin) + Cairo (Arabic) via Google Fonts, with system
  fallbacks.

## Project structure

```
index.html                  # meta/SEO, fonts, no-flash theme+lang script
public/logo.png             # SpearHawk logo (nav, footer, favicon)
src/
  main.jsx                  # entry point
  App.jsx                   # providers + page composition
  index.css                 # design tokens (light/dark) + all styles
  config.js                 # FACEBOOK_URL (contact link)
  i18n/
    translations.js         # complete EN + AR dictionaries
    LanguageContext.jsx     # language provider + useI18n()
  theme/
    ThemeContext.jsx        # theme provider + useTheme()
  components/
    Navbar.jsx  Hero.jsx  HeroIllustration.jsx
    Services.jsx  Showcase.jsx  ConceptPreviews.jsx
    Process.jsx  WhySpearhawk.jsx  About.jsx
    ContactForm.jsx (Facebook contact section)  Footer.jsx  FacebookIcon.jsx
```

## Contact channel

Contact is handled through the official SpearHawk Facebook page — the header
"Contact" button, the contact section, and the footer social icon all open it
in a new tab:

```
https://www.facebook.com/spearhawk.dev
```

The URL is defined once in `src/config.js` (`FACEBOOK_URL`); update it there
if the page address ever changes. There is intentionally no contact form, so
no backend or form-delivery configuration is needed.

## Notes

- `public/logo.png` is the supplied SpearHawk logo, used unmodified (never
  mirrored or recolored; on dark surfaces it sits on a light plate so the navy
  mark stays visible).
- The showcase previews are illustrative concepts built in HTML/CSS and are
  labeled as such in both languages. The site intentionally contains no
  fabricated clients, testimonials, or statistics.
