import React from 'react'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__ledger" aria-hidden="true">
        <span>growth</span><span>strategy</span><span>design</span><span>AI</span><span>content</span>
      </div>

      <div className="hero__inner">
        <p className="eyebrow">Founder, Drownford — Purnia, Bihar</p>
        <h1>
          Sonu Kumar Sah
          <span className="hero__accent">builds growth,</span>
          not just websites.
        </h1>
        <p className="hero__lede">
          Marketing strategy, design, AI-driven workflows and copy —
          shipped for real businesses across the Seemanchal region.
          This is the record of that work.
        </p>
        <div className="hero__cta">
          <a href="#work" className="btn btn--primary">View the work</a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>
      </div>

      <div className="hero__index" aria-hidden="true">
        <span>01 — Marketing</span>
        <span>02 — Design</span>
        <span>03 — AI</span>
        <span>04 — Web</span>
        <span>05 — Social</span>
        <span>06 — Copy</span>
      </div>
    </section>
  )
}
