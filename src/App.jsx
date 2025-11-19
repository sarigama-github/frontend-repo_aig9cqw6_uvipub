import Hero from './components/Hero'
import Courses from './components/Courses'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import PaperPenAnimation from './components/PaperPenAnimation'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 scroll-smooth">
      {/* Top nav */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-white font-bold tracking-tight text-lg">
            FOUNDATION <span className="text-sky-400">ONE</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sky-200/90">
            <a href="#courses" className="hover:text-white">Courses</a>
            <a href="#languages-anim" className="hover:text-white">Our Languages</a>
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-xl bg-sky-500/90 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:bg-sky-400">
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
