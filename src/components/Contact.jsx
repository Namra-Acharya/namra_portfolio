import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MessageSquare, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'namra.acharya@example.com', link: 'mailto:namra.acharya@example.com' },
    { icon: MessageSquare, label: 'LinkedIn', value: 'linkedin.com/in/namra-acharya', link: 'https://www.linkedin.com/in/namra-acharya-b28490358/' }
  ]

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                Let's Build Together
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Have a project for NexusGroups? Let's turn your idea into a working product.</p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div className="grid md:grid-cols-2 gap-6 mb-12" variants={itemVariants}>
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={idx}
                  href={method.link}
                  className="p-6 rounded-xl border border-secondary/50 bg-secondary/20 hover:border-accent/50 transition-colors group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent flex-shrink-0"
                      whileHover={{ rotate: 20, scale: 1.1 }}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold mb-1">{method.label}</h3>
                      <p className="text-gray-400 group-hover:text-accent transition-colors">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-secondary/30 border border-secondary/50 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-primary/50 border border-secondary/50 rounded-lg focus:outline-none focus:border-accent/50 transition-colors text-white"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-primary/50 border border-secondary/50 rounded-lg focus:outline-none focus:border-accent/50 transition-colors text-white"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-primary/50 border border-secondary/50 rounded-lg focus:outline-none focus:border-accent/50 transition-colors text-white h-32 resize-none"
                  placeholder="Your message..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-300"
                  >
                    ✓ Message sent!
                  </motion.span>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
