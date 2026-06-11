import { motion, useReducedMotion } from 'framer-motion'

/**
 * Shared scroll-reveal wrapper: fades + slides children in when they
 * enter the viewport. Children can be staggered by passing `stagger`.
 * Falls back to a plain fade when the user prefers reduced motion.
 */
export function Reveal({ children, className, delay = 0, stagger = 0, as = 'div' }) {
  const reduced = useReducedMotion()
  const Tag = motion[as] ?? motion.div

  const variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0.3 : 0.7,
        delay,
        ease: [0.21, 0.6, 0.35, 1],
        staggerChildren: stagger,
      },
    },
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </Tag>
  )
}

/** Child item for use inside a staggered <Reveal>. */
export function RevealItem({ children, className, as = 'div' }) {
  const reduced = useReducedMotion()
  const Tag = motion[as] ?? motion.div

  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 20 },
        visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0.3 : 0.55, ease: 'easeOut' } },
      }}
    >
      {children}
    </Tag>
  )
}
