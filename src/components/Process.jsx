import { Code, Compass, PenTool, Rocket } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext.jsx'

const STEP_ICONS = [Compass, PenTool, Code, Rocket]

export default function Process() {
  const { dict } = useI18n()

  return (
    <section id="process" className="section section-alt">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">{dict.process.eyebrow}</p>
          <h2 className="section-title">{dict.process.title}</h2>
          <p className="section-lead">{dict.process.lead}</p>
        </header>

        <ol className="process-steps">
          {dict.process.steps.map((step, index) => {
            const Icon = STEP_ICONS[index] ?? Compass
            const stepNumber = String(index + 1).padStart(2, '0')
            return (
              <li className="process-step" key={step.title}>
                <div className="process-marker" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <span className="process-number" aria-hidden="true">{stepNumber}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
