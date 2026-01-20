import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, link: 'https://github.com/Namra-Acharya', label: 'GitHub' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/namra-acharya-b28490358/', label: 'LinkedIn' },
    { icon: Twitter, link: '#', label: 'Twitter' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <motion.footer
      className="relative py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Social Links */}
          <motion.div className="flex gap-4" variants={itemVariants}>
            {socialLinks.map((social, idx) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={idx}
                  href={social.link}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center text-accent hover:border-accent hover:bg-accent/10 transition-all"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Copyright Text */}
          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-gray-400">
              © {currentYear} Namra Acharya. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Crafted with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6, repeat: Infinity }}>❤️</motion.span> using React & Framer Motion
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.a
            href="#home"
            className="px-6 py-2 text-accent border border-accent/50 rounded-full hover:border-accent hover:bg-accent/10 transition-all text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            ↑ Back to Top
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </motion.footer>
  )
}
