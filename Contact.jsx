import React, { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'sendmailsonusah@gmail.com'

  const copyEmail = () => {
    navigator.clipboard?.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section id="contact" className="contact">
      <div className="section__head">
        <span className="section__num">03</span>
        <h2>Contact</h2>
      </div>

      <div className="contact__grid">
        <p className="contact__lead">
          Have a project, a proposal, or just want to say hello —
          reach out directly.
        </p>

        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${email}`}>Email me</a>
          <button className="btn btn--ghost" onClick={copyEmail}>
            {copied ? 'Copied ✓' : email}
          </button>
        </div>
      </div>
    </section>
  )
}
