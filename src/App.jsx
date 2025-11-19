import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Courses from './components/Courses'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import PaperPenAnimation from './components/PaperPenAnimation'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 scroll-smooth relative overflow-x-hidden">
      {/* Subtle animated glow orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed -top-20 -left-20 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"
        animate={{ y: [0, 20, -10, 0], x: [0, 10, -5, 0], opacity: [0.35, 0.5, 0.4, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={{ y: [0, -20, 10, 0], x: [0, -10, 5, 0], opacity: [0.25, 0.4, 0.3, 0.25] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Top nav */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-white font-bold tracking-tight text-lg">
            FOUNDATION <span className="text-sky-400">ONE</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sky-200/90">
            {[
              { href: '#courses', label: 'Courses' },
              { href: '#languages-anim', label: 'Our Languages' },
              { href: '#why', label: 'Why Us' },
              { href: '#contact', label: 'Contact' }
            ].map((item) => (
              <a key={item.href} href={item.href} className="group relative hover:text-white transition">
                {item.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-sky-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-xl bg-sky-500/90 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:bg-sky-400 transition will-change-transform"
          >
            Enroll Now
          </a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <PaperPenAnimation />
        <Courses />
        <WhyChooseUs />
        <Contact />
        <footer className="py-10 text-center text-sky-300/70 border-t border-white/10">
          <p>© {new Date().getFullYear()} FOUNDATION ONE • Hazara Town • 0318 8212726</p>
        </footer>
      </main>
    </div>
  )
}

export default App
