import React from 'react'

const skills = [
  { name: 'Marketing', note: 'Strategy, campaigns, growth' },
  { name: 'Design', note: 'Visual identity, layout' },
  { name: 'AI', note: 'Workflows, automation, tools' },
  { name: 'Editing', note: 'Photo, video, content polish' },
  { name: 'Research', note: 'Market & competitor analysis' },
  { name: 'GitHub', note: 'Version control, deployment' },
  { name: 'Social Media', note: 'Content, scheduling, growth' },
  { name: 'Copywriting', note: 'Web, ads, proposals' },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section__head">
        <span className="section__num">01</span>
        <h2>Skills</h2>
      </div>

      <ul className="skills__list">
        {skills.map((s, i) => (
          <li key={s.name} className="skills__item">
            <span className="skills__index">{String(i + 1).padStart(2, '0')}</span>
            <span className="skills__name">{s.name}</span>
            <span className="skills__note">{s.note}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
