import { motion, useScroll, useTransform } from 'framer-motion'

const courses = [
  {
    name: 'English',
    desc: 'Speaking, writing, grammar, and IELTS exam preparation with real-world practice.'
  },
  {
    name: 'German',
    desc: 'A1–B2 levels, conversation drills, and Goethe exam strategies.'
  },
  {
    name: 'Swedish',
    desc: 'Pronunciation, everyday dialogue, and progressive grammar focus.'
  },
  {
    name: 'French',
    desc: 'Beginner to intermediate, DELF/DALF basics, and writing clarity.'
  },
  {
    name: 'Chinese',
    desc: 'Pinyin, tones, characters, and HSK-focused learning path.'
  },
  {
    name: 'Turkish',
    desc: 'Practical speaking, essential grammar, and cultural context.'
  }
]

export default function Courses() {
  return (
    <section id="courses" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_80%_20%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Languages & Courses</h2>
          <p className="mt-3 text-sky-200/80">Focused tracks for speaking, writing, and exam success.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md overflow-hidden hover:border-sky-400/40 transition"
            >
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(40rem_20rem_at_0%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
              <h3 className="text-xl font-semibold text-white">{c.name}</h3>
              <p className="mt-3 text-sky-200/80 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
