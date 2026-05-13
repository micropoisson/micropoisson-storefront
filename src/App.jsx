import React, { useState } from 'react'
import './index.css'

const COPY = {
  fr: {
    badge:      'Bientôt disponible',
    tagline:    'Artisanal, équitable, livré au Québec.',
    sub:        'Le meilleur du garde-manger marin : Espagne, Italie, Japon et Québec.',
    notifyLabel:'Soyez le premier à savoir quand nous ouvrons.',
    placeholder:'votre@courriel.com',
    btn:        'Me notifier',
    success:    'Vous êtes sur la liste. On se revoit bientôt.',
    igLabel:    'Suivez-nous sur Instagram',
    city:       'Montréal, QC',
  },
  en: {
    badge:      'Coming soon',
    tagline:    'Artisan, Equitable, Delivered in Québec.',
    sub:        'The finest from the marine pantry: Spain, Italy, Japan, and Québec.',
    notifyLabel:'Be the first to know when we open.',
    placeholder:'your@email.com',
    btn:        'Notify me',
    success:    '✓ You\'re on the list. We\'ll be in touch soon.',
    igLabel:    'Follow us on Instagram',
    city:       'Montréal, QC',
  },
}

function App() {
  const [lang, setLang]           = useState('fr')
  const [email, setEmail]         = useState('')
  const [submitted, setSubmitted] = useState(false)

  const t = COPY[lang]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div className="coming-soon-page">

      {/* ── Soft background blobs ── */}
      <div className="coming-soon-bg" aria-hidden="true">
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-blob bg-blob-3" />
      </div>

      {/* ── Language Toggle ── */}
      <div className="lang-toggle" role="group" aria-label="Language / Langue">
        <button
          id="lang-fr-btn"
          className={`lang-btn${lang === 'fr' ? ' lang-btn--active' : ''}`}
          onClick={() => setLang('fr')}
          aria-pressed={lang === 'fr'}
        >
          FR
        </button>
        <span className="lang-sep">|</span>
        <button
          id="lang-en-btn"
          className={`lang-btn${lang === 'en' ? ' lang-btn--active' : ''}`}
          onClick={() => setLang('en')}
          aria-pressed={lang === 'en'}
        >
          EN
        </button>
      </div>

      <div className="coming-soon-content">

        {/* ── Badge ── */}
        <div className="brand-badge">{t.badge}</div>

        {/* ── Logo ── */}
        <div className="coming-soon-logo-container">
          <img src="/logo.png" alt="MicroPoisson Logo" className="coming-soon-logo" />
        </div>

        {/* ── Tagline ── */}
        <p className="coming-soon-tagline">{t.tagline}</p>

        {/* ── Sub-copy ── */}
        <p className="coming-soon-sub">{t.sub}</p>

        <div className="coming-soon-divider"><span>✦</span></div>

        {/* ── Email capture ── */}
        {!submitted ? (
          <form className="notify-form" onSubmit={handleSubmit}>
            <p className="notify-label">{t.notifyLabel}</p>
            <div className="notify-row">
              <input
                id="notify-email"
                type="email"
                required
                placeholder={t.placeholder}
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="notify-input"
              />
              <button type="submit" id="notify-submit-btn" className="notify-btn">
                {t.btn}
              </button>
            </div>
          </form>
        ) : (
          <div className="notify-success" role="status">
            {t.success}
          </div>
        )}

        {/* ── Social links ── */}
        <div className="social-bar">
          <a
            id="social-instagram"
            href="https://www.instagram.com/micropoisson.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={t.igLabel}
          >
            <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
            <span>@micropoisson.ca</span>
          </a>
        </div>

        {/* ── Footer ── */}
        <footer className="coming-soon-footer">
          <a href="mailto:bonjour@micropoisson.ca" id="footer-email-link">bonjour@micropoisson.ca</a>
          <span>·</span>
          <span>{t.city}</span>
        </footer>

      </div>
    </div>
  )
}

export default App
