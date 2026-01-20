import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  return (
    <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="flex-1 text-left" variants={itemVariants}>
            <motion.div className="mb-6">
              <motion.span
                className="inline-block text-accent font-semibold text-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                🚀 Product Creator × AI Developer × BCI Enthusiast
              </motion.span>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span custom={0} variants={textVariants}>Hi, I'm</motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-accent via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                custom={1}
                variants={textVariants}
              >
                Namra Acharya
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-lg"
              variants={itemVariants}
            >
              I run NexusGroups—a software company that builds custom web platforms and AI solutions. Proven track record: 10K+ users on NexusGroups.app with AdSense, and multiple client projects delivered. I use AI as my development superpower to deliver fast. Python, NumPy specialist, and learning BCI.
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Floating Card */}
          <motion.div
            className="flex-1 flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-80 h-80 rounded-2xl overflow-hidden"
              variants={floatingVariants}
              animate="float"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-500/20 border-2 border-accent/50 rounded-2xl backdrop-blur-sm" />
              
              <svg
                className="w-full h-full p-8 text-accent"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="30" r="20" opacity="0.3" />
                <circle cx="30" cy="70" r="15" opacity="0.2" />
                <circle cx="70" cy="65" r="18" opacity="0.25" />
                <path d="M50 30 L30 70 L70 65 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              </svg>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl"
                animate={{
                  borderColor: ["rgba(59, 130, 246, 0.5)", "rgba(96, 165, 250, 0.8)", "rgba(59, 130, 246, 0.5)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-accent" size={32} />
        </motion.div>
      </div>
    </section>
  )
}
