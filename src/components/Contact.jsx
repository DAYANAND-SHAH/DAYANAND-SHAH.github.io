import { Reveal, RevealItem } from './Reveal.jsx'
import { GitHubIcon, LinkedInIcon, MediumIcon } from './icons.jsx'
import { profile, education } from '../data/content.js'

export default function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="relative overflow-hidden px-6 pb-16 pt-24 md:pt-32">
      {/* Closing glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[40vh] w-[90vw] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]"
      />

      <Reveal stagger={0.12} className="relative z-10 mx-auto max-w-3xl text-center">
        <RevealItem as="p" className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
          What&rsquo;s next
        </RevealItem>

        <RevealItem as="h2" className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
          <span id="contact-title">
            Let&rsquo;s build systems that <span className="text-glow-gradient">think</span>.
          </span>
        </RevealItem>

        <RevealItem as="p" className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          From OCR pipelines to autonomous agents — the next chapter is the most interesting one.
          If you&rsquo;re hiring for Generative AI, RAG or agentic systems, I&rsquo;d love to talk.
        </RevealItem>

        <RevealItem className="mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-9 py-4 font-display text-base font-semibold text-white shadow-glow-cyan transition-transform hover:scale-105"
          >
            {profile.email}
          </a>
        </RevealItem>

        <RevealItem className="mt-8 flex items-center justify-center gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"
            className="text-slate-400 transition-colors hover:text-cyan-300">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"
            className="text-slate-400 transition-colors hover:text-cyan-300">
            <LinkedInIcon />
          </a>
          <a href={profile.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium blog"
            className="text-slate-400 transition-colors hover:text-cyan-300">
            <MediumIcon />
          </a>
        </RevealItem>

        <RevealItem as="p" className="mt-12 text-sm text-slate-600">
          {education.degree} · {education.school} ({education.period})
        </RevealItem>

        <RevealItem as="p" className="mt-3 text-xs text-slate-700">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </RevealItem>
      </Reveal>
    </footer>
  )
}
