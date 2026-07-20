import React, { useState, useMemo } from 'react'

const CATEGORIES = ['All', 'Marketing', 'Design', 'AI', 'Web', 'Social Media', 'Copywriting', 'Research']

function formatDate(d) {
  const [y, m] = d.split('-')
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return `${months[parseInt(m, 10) - 1]} ${y}`
}

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`card ${open ? 'card--open' : ''}`}>
      <button className="card__head" onClick={() => setOpen(!open)}>
        <span className="card__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="card__title">{project.title}</span>
        <span className="card__meta">
          <span className="card__category">{project.category}</span>
          <span className="card__date">{formatDate(project.date)}</span>
        </span>
        <span className="card__toggle">{open ? '−' : '+'}</span>
      </button>

      <p className="card__summary">{project.summary}</p>

      {open && (
        <div className="card__body">
          <div className="card__field">
            <span className="card__label">What it is</span>
            <p>{project.what}</p>
          </div>
          <div className="card__field">
            <span className="card__label">Why it exists</span>
            <p>{project.why}</p>
          </div>
          <div className="card__field">
            <span className="card__label">Result</span>
            <p>{project.result}</p>
          </div>
          {project.tags?.length > 0 && (
            <div className="card__tags">
              {project.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="card__link">
              View project →
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter]
  )

  return (
    <section id="work" className="work">
      <div className="section__head">
        <span className="section__num">02</span>
        <h2>Work Log</h2>
      </div>

      <div className="work__filters">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={`chip ${filter === c ? 'chip--active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="work__list">
        {filtered.length === 0 && (
          <p className="work__empty">No entries in this category yet.</p>
        )}
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
