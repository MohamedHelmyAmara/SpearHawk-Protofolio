import { ThemeProvider } from './theme/ThemeContext.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Showcase from './components/Showcase.jsx'
import Process from './components/Process.jsx'
import WhySpearhawk from './components/WhySpearhawk.jsx'
import About from './components/About.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <main id="main-content">
          <Hero />
          <Services />
          <Showcase />
          <Process />
          <WhySpearhawk />
          <About />
          <ContactForm />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  )
}
