import { Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // For demo: just show a confirmation. In production, post to backend.
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60rem_35rem_at_80%_90%,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in touch</h2>
          <p className="text-sky-200/85">We’re here to help you choose the right course.</p>
          <div className="flex items-center gap-3 text-sky-200/90">
            <Phone className="w-5 h-5 text-sky-400" />
            <a href="tel:03188212726" className="hover:text-white transition">0318 8212726</a>
          </div>
          <div className="flex items-center gap-3 text-sky-200/90">
            <MapPin className="w-5 h-5 text-sky-400" />
            <span>Hazara Town</span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sky-200/80 text-sm mb-2">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sky-200/80 text-sm mb-2">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} required className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Your phone" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sky-200/80 text-sm mb-2">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="How can we help?" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500/90 px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:bg-sky-400 transition">
              <Send className="w-4 h-4" />
              Send Message
            </button>
            {sent && <p className="mt-3 text-sky-200/90">Thanks! We’ll contact you shortly.</p>}
          </form>
        </div>
      </div>

      {/* Sticky Call button on mobile */}
      <a href="tel:03188212726" className="fixed sm:hidden bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-white shadow-lg">
        <Phone className="w-4 h-4" /> Call Now
      </a>
    </section>
  )
}
