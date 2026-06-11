import { Reveal, RevealItem } from './Reveal.jsx'
import { skillGroups } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-violet-300/80">
          Toolkit
        </p>
        <h2 id="skills-title" className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Skills &amp; technologies
        </h2>
      </Reveal>

      <Reveal stagger={0.1} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <RevealItem key={group.group} className="glass-panel p-6">
            <h3 className="font-display text-base font-semibold text-white">{group.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="chip">{skill}</li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  )
}
