import React, { useState } from 'react'
import './index.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div className="coming-soon-page">
      <div className="coming-soon-bg" aria-hidden="true">
        <div className="bg-circle bg-circle-1" />
        <div className="bg-circle bg-circle-2" />
        <div className="bg-circle bg-circle-3" />
      </div>

      <div className="coming-soon-content">
        <div className="brand-badge">Bientôt disponible</div>

        <h1 className="coming-soon-title">
          Micro<span className="title-accent">Poisson</span>.ca
        </h1>

        <p className="coming-soon-tagline">
          Conservas artisanales. Luxury affordable. Livré au Québec.
        </p>

        <p className="coming-soon-sub">
          We're carefully curating the finest tinned fish from Portugal, Spain, Italy, and Japan —
          and building something worth waiting for.
        </p>

        <div className="coming-soon-divider">
          <span>✦</span>
        </div>

        {!submitted ? (
          <form className="notify-form" onSubmit={handleSubmit}>
            <p className="notify-label">Be the first to know when we open.</p>
            <div className="notify-row">
              <input
                id="notify-email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="notify-input"
              />
              <button type="submit" className="notify-btn">Notify me</button>
            </div>
          </form>
        ) : (
          <div className="notify-success">
            ✓ &nbsp; You're on the list. We'll be in touch soon.
          </div>
        )}

        <footer className="coming-soon-footer">
          <a href="mailto:info@micropoisson.ca">info@micropoisson.ca</a>
          <span>·</span>
          <span>Montréal, QC</span>
        </footer>
      </div>
    </div>
  )
}

export default App
