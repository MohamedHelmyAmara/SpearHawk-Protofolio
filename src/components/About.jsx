import { useI18n } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { dict } = useI18n()

  return (
    <section id="about" className="section section-alt">
      <div className="container about-inner">
        <div className="about-copy">
          <header className="section-header is-start">
            <p className="eyebrow">{dict.about.eyebrow}</p>
            <h2 className="section-title">{dict.about.title}</h2>
          </header>
          <p className="about-description">{dict.about.description}</p>
          <ul className="about-chips">
            {dict.about.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>

        <div className="about-visual" aria-hidden="true">
          <div className="code-card" dir="ltr">
            <div className="code-card-bar">
              <span className="chrome-dots"><i /><i /><i /></span>
              <span className="code-card-title">spearhawk.js</span>
            </div>
            <pre className="code-block">
              <code>
                <span className="tok-comment">{dict.about.codeComment}</span>
                {'\n'}
                <span className="tok-keyword">const</span>{' '}
                <span className="tok-variable">product</span>{' '}
                <span className="tok-operator">=</span>{' '}
                <span className="tok-variable">spearhawk</span>
                <span className="tok-operator">.</span>
                <span className="tok-function">build</span>
                <span className="tok-punctuation">{'({'}</span>
                {'\n  '}
                <span className="tok-property">idea</span>
                <span className="tok-punctuation">:</span>{' '}
                <span className="tok-string">"yours"</span>
                <span className="tok-punctuation">,</span>
                {'\n  '}
                <span className="tok-property">design</span>
                <span className="tok-punctuation">:</span>{' '}
                <span className="tok-string">"thoughtful"</span>
                <span className="tok-punctuation">,</span>
                {'\n  '}
                <span className="tok-property">engineering</span>
                <span className="tok-punctuation">:</span>{' '}
                <span className="tok-string">"practical"</span>
                <span className="tok-punctuation">,</span>
                {'\n'}
                <span className="tok-punctuation">{'});'}</span>
                {'\n'}
                <span className="tok-comment">{dict.about.codeResult}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
