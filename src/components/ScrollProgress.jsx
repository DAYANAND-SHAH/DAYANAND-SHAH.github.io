import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin glowing bar at the top of the viewport tracking scroll progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-cyan-400 to-violet-400"
      style={{ scaleX }}
    />
  )
}
