import { useState, useEffect } from 'react'

// ─── Lily SVG ─────────────────────────────────────────────────────────────────
// 6 petals radiating from centre, alternating blush/lavender, with stamens.
// The petal path starts at (0,0) and extends ~58px in the -Y direction.
// Rotating each <g> by 60° increments places petals evenly around the centre.

const PETALS = [
  { rotation: 0,   fill: '#F3E4E6', stroke: '#B78496' },
  { rotation: 60,  fill: '#D8CFDD', stroke: '#9C8695' },
  { rotation: 120, fill: '#F3E4E6', stroke: '#B78496' },
  { rotation: 180, fill: '#D8CFDD', stroke: '#9C8695' },
  { rotation: 240, fill: '#F3E4E6', stroke: '#B78496' },
  { rotation: 300, fill: '#D8CFDD', stroke: '#9C8695' },
]

// 6 stamens offset by 30° from petals (between each petal pair)
const STAMENS = [30, 90, 150, 210, 270, 330].map(deg => {
  const r = (deg - 90) * (Math.PI / 180)
  return { x: Math.cos(r) * 18, y: Math.sin(r) * 18 }
})

function LilySVG() {
  return (
    <svg
      viewBox="-62 -68 124 128"
      width="136"
      height="140"
      aria-hidden="true"
      style={{ filter: 'drop-shadow(0 6px 18px rgba(192, 96, 122, 0.22))' }}
    >
      {/* Petals — each rotated around (0,0) */}
      {PETALS.map(({ rotation, fill, stroke }) => (
        <g key={rotation} transform={`rotate(${rotation})`}>
          {/* Petal: wide at base, tapers to a point */}
          <path
            d="M 0 0 C -14 -6, -16 -36, -7 -53 Q 0 -61, 7 -53 C 16 -36, 14 -6, 0 0"
            fill={fill}
            stroke={stroke}
            strokeWidth="0.6"
            opacity="0.92"
          />
          {/* Subtle centre vein */}
          <line
            x1="0" y1="-4"
            x2="0" y2="-50"
            stroke="rgba(192, 96, 122, 0.18)"
            strokeWidth="0.5"
          />
        </g>
      ))}

      {/* Stamens — filaments */}
      {STAMENS.map(({ x, y }, i) => (
        <line
          key={i}
          x1="0" y1="0"
          x2={x * 0.72} y2={y * 0.72}
          stroke="#8B5E70"
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.55"
        />
      ))}

      {/* Stamen anthers (tips) */}
      {STAMENS.map(({ x, y }, i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="1.9"
          fill="#8B5E70"
          opacity="0.65"
        />
      ))}

      {/* Centre circle */}
      <circle cx="0" cy="0" r="8"  fill="#FAF6F3" />
      <circle cx="0" cy="0" r="5"  fill="#F3E4E6" opacity="0.85" />
      <circle cx="0" cy="0" r="2"  fill="#B78496" opacity="0.5" />
    </svg>
  )
}

// ─── Reduced-motion check (evaluated once at module load) ────────────────────
const PREFERS_REDUCED =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// ─── IntroAnimation ───────────────────────────────────────────────────────────
//
// Phase timeline (normal motion):
//   hidden  → drifting  (50 ms)   — lily enters from above
//   drifting → blooming (950 ms)  — lily pops open
//   blooming → naming  (2 100 ms) — business name fades in
//   naming   → fading  (2 950 ms) — overlay fades out
//   fading   → [done]  (4 000 ms) — component unmounts, site revealed

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState('hidden')

  useEffect(() => {
    if (PREFERS_REDUCED) {
      onComplete()
      return
    }

    const ids = [
      setTimeout(() => setPhase('drifting'),  50),
      setTimeout(() => setPhase('blooming'),  950),
      setTimeout(() => setPhase('naming'),    2100),
      setTimeout(() => setPhase('fading'),    2950),
      setTimeout(() => onComplete(),          4000),
    ]
    return () => ids.forEach(clearTimeout)
  }, [onComplete])

  const flowerVisible = phase !== 'hidden'
  const flowerOpen    = phase === 'blooming' || phase === 'naming' || phase === 'fading'
  const nameVisible   = phase === 'naming'   || phase === 'fading'
  const overlayOut    = phase === 'fading'

  return (
    <div
      aria-hidden="true"
      style={{
        position:       'fixed',
        inset:          0,
        zIndex:         9999,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        background:     'linear-gradient(135deg, #FAF6F3 0%, #D8CFDD 58%, #F3E4E6 100%)',
        opacity:    overlayOut ? 0 : 1,
        transition: overlayOut ? 'opacity 1.05s ease' : 'none',
        pointerEvents: overlayOut ? 'none' : 'auto',
      }}
    >
      {/* Soft radial glow behind the flower */}
      <div
        style={{
          position:     'absolute',
          width:        '380px',
          height:       '380px',
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(216,208,236,0.45) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Flower ── */}
      <div
        style={{
          // Drift down from above
          transform:  flowerVisible ? 'translateY(0)'    : 'translateY(-150px)',
          opacity:    flowerVisible ? 1                  : 0,
          transition: 'transform 0.95s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.7s ease',
        }}
      >
        {/* Bloom: scale up with a gentle spring */}
        <div
          style={{
            transform:  flowerOpen ? 'scale(1)' : 'scale(0.07)',
            transition: flowerOpen
              ? 'transform 0.78s cubic-bezier(0.34, 1.56, 0.64, 1)'
              : 'none',
          }}
        >
          <LilySVG />
        </div>
      </div>

      {/* ── Business name ── */}
      <div
        style={{
          marginTop:  '2rem',
          textAlign:  'center',
          opacity:    nameVisible ? 1 : 0,
          transform:  nameVisible ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.85s ease, transform 0.85s ease',
        }}
      >
        <p
          style={{
            margin:      0,
            fontFamily:  "'Cormorant Garamond', Georgia, serif",
            fontSize:    'clamp(1.1rem, 3vw, 1.6rem)',
            fontWeight:  500,
            color:       '#42373D',
            letterSpacing: '0.07em',
          }}
        >
          Stephanie Anne Counselling
        </p>
        {/* Decorative rule under the name */}
        <div
          style={{
            width:      '2.8rem',
            height:     '1px',
            margin:     '0.85rem auto 0',
            background: 'linear-gradient(90deg, transparent, #B78496, transparent)',
            opacity:    nameVisible ? 1 : 0,
            transition: 'opacity 0.5s ease 0.5s',
          }}
        />
      </div>
    </div>
  )
}
