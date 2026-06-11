import { Reveal, RevealItem } from './Reveal.jsx'
import { projects } from '../data/content.js'

const ACCENTS = {
  cyan: { border: 'hover:border-cyan-400/40', shadow: 'hover:shadow-glow-cyan', text: 'text-cyan-300' },
  violet: { border: 'hover:border-violet-400/40', shadow: 'hover:shadow-glow-violet', text: 'text-violet-300' },
}

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-400">{children}</p>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
          Selected work
        </p>
        <h2 id="projects-title" className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Featured projects
        </h2>
      </Reveal>

      <Reveal stagger={0.15} className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((p) => {
          const accent = ACCENTS[p.accent]
          return (
            <RevealItem
              key={p.name}
              as="article"
              className={`glass-panel flex flex-col gap-5 p-6 transition-all duration-300 ${accent.border} ${accent.shadow}`}
            >
              <header>
                <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                <p className={`mt-1 text-sm font-medium ${accent.text}`}>{p.tagline}</p>
              </header>

              <Field label="Problem">{p.problem}</Field>
              <Field label="Build">{p.build}</Field>
              <Field label="Result">{p.result}</Field>

              <footer className="mt-auto flex flex-wrap gap-2 pt-2">
                {p.stack.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </footer>
            </RevealItem>
          )
        })}
      </Reveal>
    </section>
  )
}
