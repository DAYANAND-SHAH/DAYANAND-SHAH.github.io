import { motion, useReducedMotion } from 'framer-motion'

// Fixed node layout shared by all three stages so the motif visibly
// *evolves* rather than changing into something unrelated.
const NODES = [
  { x: 30, y: 40 }, { x: 95, y: 22 }, { x: 160, y: 55 }, { x: 60, y: 105 },
  { x: 135, y: 120 }, { x: 25, y: 165 }, { x: 100, y: 185 }, { x: 170, y: 165 },
  { x: 200, y: 95 }, { x: 215, y: 180 },
]

// Edges appear in stage 2 (reasoning) and carry pulses in stage 3 (agency)
const EDGES = [
  [0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [3, 5], [5, 6], [4, 6],
  [6, 7], [2, 8], [8, 9], [7, 9], [4, 8],
]

/**
 * The evolving story motif:
 *  - "perception": scattered, gently pulsing dots (raw signal)
 *  - "reasoning":  the same dots, now connected into a graph
 *  - "agency":     the graph alive — pulses travelling along its edges
 * Decorative only (aria-hidden).
 */
export default function Motif({ stage }) {
  const reduced = useReducedMotion()
  const showEdges = stage === 'reasoning' || stage === 'agency'
  const showPulses = stage === 'agency' && !reduced

  return (
    <svg
      viewBox="0 0 240 210"
      aria-hidden="true"
      className="w-full max-w-[280px] md:max-w-[340px]"
      fill="none"
    >
      {/* Edges draw themselves in as the scene enters view */}
      {showEdges &&
        EDGES.map(([a, b], i) => (
          <motion.line
            key={`e-${i}`}
            x1={NODES[a].x} y1={NODES[a].y}
            x2={NODES[b].x} y2={NODES[b].y}
            stroke={stage === 'agency' ? 'rgba(167,139,250,0.45)' : 'rgba(34,211,238,0.35)'}
            strokeWidth="1"
            initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease: 'easeOut' }}
          />
        ))}

      {/* Nodes */}
      {NODES.map((n, i) => (
        <motion.circle
          key={`n-${i}`}
          cx={n.x} cy={n.y}
          r={stage === 'perception' ? 3 : 3.5}
          fill={stage === 'agency' ? '#a78bfa' : '#22d3ee'}
          initial={{ opacity: 0, scale: reduced ? 1 : 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
          // Idle pulse in stage 1 evokes raw blinking signal
          animate={
            stage === 'perception' && !reduced
              ? { opacity: [0.4, 1, 0.4], transition: { duration: 2.4, repeat: Infinity, delay: i * 0.3 } }
              : undefined
          }
        />
      ))}

      {/* Stage 3: autonomous pulses travelling the network */}
      {showPulses &&
        EDGES.filter((_, i) => i % 3 === 0).map(([a, b], i) => (
          <circle key={`p-${i}`} r="2.2" fill="#e9d5ff">
            <animateMotion
              dur={`${2.4 + i * 0.5}s`}
              repeatCount="indefinite"
              path={`M ${NODES[a].x} ${NODES[a].y} L ${NODES[b].x} ${NODES[b].y}`}
            />
          </circle>
        ))}
    </svg>
  )
}
