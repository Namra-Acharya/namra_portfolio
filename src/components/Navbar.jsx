import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Resume', 'Certificates', 'Contact']

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-primary/80 backdrop-blur-md border-b border-secondary z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Namra
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-accent transition-colors relative group"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navVariants}
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-secondary border-t border-secondary px-4 py-4"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-gray-300 hover:text-accent"
              whileHover={{ x: 10 }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
