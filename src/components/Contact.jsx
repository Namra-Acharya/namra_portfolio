import { Mail, MessageSquare, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: '', email: '', message: '' })
    }, 3000)
  }

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'namra.acharya@example.com', link: 'mailto:namra.acharya@example.com' },
    { icon: MessageSquare, label: 'LinkedIn', value: 'linkedin.com/in/namra-acharya', link: 'https://www.linkedin.com/in/namra-acharya-b28490358/' }
  ]

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Build Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Have a project for NexusGroups? Let's turn your idea into a working product.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon
            return (
              <a
                key={idx}
                href={method.link}
                className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/20 hover:border-blue-400/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-400/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{method.label}</h3>
                    <p className="text-gray-400 group-hover:text-blue-400 transition-colors">{method.value}</p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-lg focus:outline-none focus:border-blue-400/50 transition-colors text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-lg focus:outline-none focus:border-blue-400/50 transition-colors text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-lg focus:outline-none focus:border-blue-400/50 transition-colors text-white h-32 resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
            >
              {submitted ? (
                <span className="text-green-300">✓ Message sent!</span>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
