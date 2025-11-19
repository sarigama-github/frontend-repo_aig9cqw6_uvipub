import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const phrases = [
  { word: 'Hallo', en: 'Hello (German)' },
  { word: 'Hej', en: 'Hello (Swedish)' },
  { word: 'Bonjour', en: 'Hello (French)' },
  { word: 'Merhaba', en: 'Hello (Turkish)' },
  { word: '你好', en: 'Hello (Chinese)' },
  { word: 'Hello', en: 'Hello (English)' },
]

export default function PaperPenAnimation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' })

  return (
    <section id="languages-anim" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(70rem_50rem_at_50%_0%,rgba(59,130,246,0.10),transparent_60%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Languages In Motion</h2>
          <p className="mt-3 text-sky-200/80">Scroll to unfold the page and watch the pen write.</p>
        </div>

        <div ref={ref} className="relative mx-auto max-w-3xl">
          {/* Paper */}
          <motion.div
            initial={{ clipPath: 'inset(100% 0% 0% 0%)', rotateX: 15, opacity: 0.7 }}
            animate={inView ? { clipPath: 'inset(0% 0% 0% 0%)', rotateX: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl bg-gradient-to-b from-white to-white/90 shadow-[0_40px_120px_rgba(0,0,0,0.45)] border border-slate-200 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_28px,rgba(2,132,199,0.08)_28px,rgba(2,132,199,0.08)_29px)]" />
            <div className="p-8 sm:p-10 min-h-[420px]">
              {phrases.map((p, i) => (
                <div key={i} className="relative h-16">
                  {/* Written word */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={inView ? { width: 'auto', opacity: 1 } : {}}
                    transition={{ duration: 0.9, delay: 0.6 + i * 0.35, ease: 'easeInOut' }}
                    className="inline-block overflow-hidden"
                  >
                    <span className="font-semibold text-slate-800 text-xl">{p.word}</span>
                  </motion.div>
                  {/* English translation */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 + i * 0.35 }}
                    className="text-slate-500 text-sm"
                  >
                    {p.en}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Pen */}
            <motion.div
              initial={{ x: -40, y: -20, rotate: -20, opacity: 0 }}
              animate={inView ? { x: '75%', y: '65%', rotate: 8, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-24 h-24 sm:w-28 sm:h-28"
              aria-hidden
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="penGrad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                {/* Simple premium-looking pen */}
                <g filter="url(#shadow)">
                  <rect x="30" y="70" width="120" height="18" rx="9" fill="url(#penGrad)" />
                  <rect x="28" y="67" width="124" height="24" rx="12" stroke="white" strokeOpacity="0.25" fill="none" />
                  <polygon points="150,79 180,89 150,97" fill="#0ea5e9" />
                </g>
                <defs>
                  <filter id="shadow" x="-50" y="-50" width="300" height="300">
                    <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="rgba(59,130,246,0.5)" />
                  </filter>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
