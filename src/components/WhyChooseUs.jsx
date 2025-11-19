import { Check } from 'lucide-react'

const points = [
  'Qualified, experienced teachers',
  'Small groups for personal attention',
  'Friendly, supportive environment',
  'Focused multi-language programs',
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60rem_35rem_at_20%_10%,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Choose Us</h2>
          <p className="mt-4 text-sky-200/85">
            We combine expert teaching with a modern, welcoming atmosphere so you can learn confidently and effectively.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sky-100/90">
                <Check className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_25px_80px_rgba(168,85,247,0.25)]">
            <p className="text-sky-200/90">
              FOUNDATION ONE is an educational hub built on trust and results. Our programs are designed around real-life usage and exam excellence.
            </p>
            <p className="mt-4 text-white font-medium">Directed by <span className="text-sky-300">Zaki Hidayat</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
