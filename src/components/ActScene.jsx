import { Reveal, RevealItem } from './Reveal.jsx'
import Motif from './Motif.jsx'
import Counter from './Counter.jsx'

/**
 * One full-screen "scene" of the three-act story.
 * Layout alternates left/right per act; a glowing timeline rail with the
 * year range anchors each scene to the career arc.
 */
export default function ActScene({ act, index }) {
  const flip = index % 2 === 1

  return (
    <section
      id={act.id}
      aria-labelledby={`${act.id}-title`}
      className="relative mx-auto max-w-6xl px-6 py-24 md:py-36"
    >
      {/* Timeline rail (decorative) */}
      <div
        aria-hidden="true"
        className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent lg:block"
      />

      <div className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20 ${flip ? 'lg:flex-row-reverse' : ''}`}>
        {/* Evolving motif */}
        <Reveal className="flex shrink-0 justify-center lg:w-1/3">
          <Motif stage={act.motif} />
        </Reveal>

        {/* Story content */}
        <Reveal stagger={0.12} className="lg:flex-1">
          <RevealItem as="p" className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            {act.act} · {act.years}
          </RevealItem>

          <RevealItem as="h2" className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            <span id={`${act.id}-title`}>{act.title}</span>
          </RevealItem>

          <RevealItem as="p" className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {act.intro}
          </RevealItem>

          {/* Roles */}
          <div className="mt-8 space-y-6">
            {act.roles.map((role) => (
              <RevealItem key={role.company} className="glass-panel p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {role.position} · <span className="text-cyan-300">{role.company}</span>
                  </h3>
                  <span className="text-sm text-slate-500">{role.period}</span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {role.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                      {h}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </div>

          {/* Headline stat (Act II's 40%) */}
          {act.stat && (
            <RevealItem className="mt-8 flex items-center gap-5 rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6">
              <Counter
                value={act.stat.value}
                suffix={act.stat.suffix}
                className="font-display text-5xl font-bold text-violet-300"
              />
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">{act.stat.label}</p>
            </RevealItem>
          )}

          {/* Stack chips */}
          <RevealItem className="mt-8 flex flex-wrap gap-2">
            {act.stack.map((tech) => (
              <span key={tech} className="chip">{tech}</span>
            ))}
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
