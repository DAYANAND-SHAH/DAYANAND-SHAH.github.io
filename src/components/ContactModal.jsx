import { useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { MailIcon, GitHubIcon, LinkedInIcon, MediumIcon } from './icons.jsx'
import { profile } from '../data/content.js'

const LINKS = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
    cmd: 'mail --compose',
  },
  {
    label: 'GitHub',
    value: 'DAYANAND-SHAH',
    href: profile.github,
    icon: GitHubIcon,
    cmd: 'git clone',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'in/dayanandshah',
    href: profile.linkedin,
    icon: LinkedInIcon,
    cmd: 'network --connect',
    external: true,
  },
  {
    label: 'Medium',
    value: 'dayanand-shah',
    href: profile.medium,
    icon: MediumIcon,
    cmd: 'blog --read',
    external: true,
  },
]

/**
 * Terminal-styled contact dialog opened from the "Get in touch" buttons.
 * Closes on Escape, backdrop click, or the window ✕.
 */
export default function ContactModal({ open, onClose }) {
  const reduced = useReducedMotion()
  const panelRef = useRef(null)

  // Escape to close + lock page scroll while open
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Contact Dayanand Shah"
            tabIndex={-1}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-cyan-400/25 bg-panel shadow-glow-cyan outline-none"
            initial={{ opacity: 0, scale: reduced ? 1 : 0.92, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reduced ? 1 : 0.95, y: reduced ? 0 : 8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal title bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 font-mono text-xs text-slate-500">dayanand@portfolio: ~/contact</span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close contact dialog"
                className="rounded px-2 py-0.5 font-mono text-sm text-slate-500 transition-colors hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {/* Status line */}
              <p className="flex items-center gap-2 font-mono text-xs text-green-400">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                status: open to opportunities
              </p>

              <h2 className="mt-3 font-display text-2xl font-bold text-white">
                Let&rsquo;s <span className="text-glow-gradient">connect</span>
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Pick a channel — fastest response on email and LinkedIn.
              </p>

              {/* Channel cards */}
              <ul className="mt-6 space-y-3">
                {LINKS.map(({ label, value, href, icon: Icon, cmd, external }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: reduced ? 0 : -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
                  >
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5"
                    >
                      <span className="text-cyan-300 transition-transform group-hover:scale-110 motion-reduce:transform-none">
                        <Icon size={20} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-white">{label}</span>
                        <span className="block truncate text-xs text-slate-500">{value}</span>
                      </span>
                      <span className="hidden font-mono text-[10px] text-slate-600 transition-colors group-hover:text-cyan-400/70 sm:block">
                        $ {cmd}
                      </span>
                      <span aria-hidden="true" className="text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:text-cyan-300">
                        →
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom glow strip */}
            <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
