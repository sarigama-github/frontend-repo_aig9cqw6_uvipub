import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(60rem_40rem_at_10%_20%,rgba(59,130,246,0.2),transparent_60%),radial-gradient(50rem_30rem_at_100%_0%,rgba(168,85,247,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide text-sky-200/90 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              FOUNDATION ONE • Language Center
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              FOUNDATION ONE – Learn Languages, Open Worlds
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-sky-200/90 max-w-2xl">
              Master English, German, Swedish, French, Chinese, and Turkish with expert guidance and a modern curriculum designed for speaking, writing, and exam success.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="group inline-flex items-center justify-center rounded-xl bg-sky-500/90 px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:bg-sky-400 transition">
                Contact Us
              </a>
              <a href="#courses" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition">
                Enroll Now
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sky-200/90">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-sky-400" />
                <a href="tel:03188212726" className="hover:text-white transition">0318 8212726</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-sky-400" />
                <span>Hazara Town</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_25px_80px_rgba(59,130,246,0.25)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(80rem_50rem_at_-10%_-20%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(50rem_40rem_at_120%_10%,rgba(168,85,247,0.15),transparent_60%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center px-6">
                  <p className="text-sky-200/90">Directed by</p>
                  <p className="mt-1 text-2xl font-semibold text-white">Zaki Hidayat</p>
                  <p className="mt-6 text-sm text-sky-300/80 max-w-sm mx-auto">
                    A trusted, modern hub for multilingual education in the heart of Hazara Town.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
