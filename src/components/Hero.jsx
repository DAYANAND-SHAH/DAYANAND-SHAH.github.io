import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import NeuralBackground from './NeuralBackground.jsx'
import ContactModal from './ContactModal.jsx'
import Counter from './Counter.jsx'
import { profile, acts } from '../data/content.js'

// First scene of the story (the page is ordered most-recent-first)
const FIRST_SCENE = `#${acts[0].id}`

/** Type-writer that cycles through the three specialties. */
function useTypewriter(words, reduced) {
  const [text, setText] = useState(reduced ? words[0] : '')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return // static text — no animation
    const word = words[wordIdx % words.length]
    const atEnd = !deleting && text === word
    const atStart = deleting && text === ''

    const delay = atEnd ? 1800 : deleting ? 40 : 75
    const timer = setTimeout(() => {
      if (atEnd) return setDeleting(true)
      if (atStart) {
        setDeleting(false)
        return setWordIdx((i) => i + 1)
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, wordIdx, words, reduced])

  return text
}

export default function Hero() {
  const reduced = useReducedMotion()
  const typed = useTypewriter(profile.specialties, reduced)
  const [contactOpen, setContactOpen] = useState(false)

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.21, 0.6, 0.35, 1] },
  })

  return (
    <header className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <NeuralBackground />
      {/* Soft radial glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative z-10 max-w-4xl">
        <motion.p {...fadeUp(0)} className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300/80">
          {profile.location}
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p {...fadeUp(0.25)} className="mt-5 font-display text-xl font-medium text-slate-200 sm:text-2xl">
          {profile.title}
        </motion.p>

        {/* Morphing specialty line */}
        <motion.p {...fadeUp(0.35)} className="mt-3 h-8 font-display text-lg sm:text-xl" aria-live="off">
          <span className="text-glow-gradient font-semibold">{typed}</span>
          <span className="typing-caret" aria-hidden="true" />
        </motion.p>

        <motion.p {...fadeUp(0.5)} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          <Counter value={profile.yearsOfExperience} decimals={1} suffix="+" className="font-semibold text-cyan-300" />{' '}
          years turning language models into production systems that{' '}
          <span className="text-slate-200">read</span>, <span className="text-slate-200">reason</span>, and{' '}
          <span className="text-slate-200">act</span>.
        </motion.p>

        <motion.div {...fadeUp(0.65)} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-7 py-3 font-display text-sm font-semibold text-white shadow-glow-cyan transition-transform hover:scale-105"
          >
            Get in touch
          </button>
          <a
            href={FIRST_SCENE}
            className="rounded-full border border-white/15 px-7 py-3 font-display text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-200"
          >
            Read the story
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href={FIRST_SCENE}
        aria-label="Scroll to the story"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-500 hover:text-cyan-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.svg
          width="24" height="36" viewBox="0 0 24 36" fill="none" aria-hidden="true"
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="1" y="1" width="22" height="34" rx="11" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="11" r="3" fill="currentColor" />
        </motion.svg>
      </motion.a>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  )
}
