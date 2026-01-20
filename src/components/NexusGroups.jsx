import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Users, Zap, Globe } from 'lucide-react'

export default function NexusGroups() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const features = [
    { icon: BookOpen, title: 'Python Mastery', desc: 'From basics to advanced concepts' },
    { icon: Zap, title: 'NumPy Expertise', desc: 'High-performance numerical computing' },
    { icon: Globe, title: 'AI & ML', desc: 'Machine learning and AI agent systems' },
    { icon: Users, title: 'Community', desc: 'Connect with learners worldwide' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="nexusgroups" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div className="inline-block mb-4">
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm font-semibold">
                Flagship Product by NexusGroups
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                NexusGroups.app - Learning Platform
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A thriving student learning hub with 10K+ active users. AI-powered teaching, community collaboration, and integrated tools. Monetized with AdSense.
            </p>
          </motion.div>

          {/* Main Hub Card */}
          <motion.div
            variants={itemVariants}
            className="relative mb-16"
          >
            <motion.div
              className="relative rounded-3xl border-2 border-purple-500/30 p-12 md:p-16 overflow-hidden cursor-pointer"
              whileHover={{ borderColor: 'rgba(168, 85, 247, 0.6)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/5 to-transparent"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <div className="flex-1">
                  <motion.h3 className="text-3xl font-bold mb-6">
                    Your Gateway to AI & Data Science Excellence
                  </motion.h3>
                  <motion.p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    NexusGroups is more than a learning platform—it's a vibrant community where aspiring data scientists, AI developers, and Python enthusiasts come together. Access comprehensive courses, hands-on projects, and real-world applications.
                  </motion.p>
                  <motion.ul className="space-y-3 mb-8">
                    {[
                      'Structured learning paths for all levels',
                      'Interactive NumPy and Python tutorials',
                      'AI agent architecture and implementation',
                      'Real-time community support',
                      'Project portfolios and certifications'
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <motion.div className="w-2 h-2 bg-purple-400 rounded-full" />
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.a
                    href="https://nexusgroups.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit NexusGroups →
                  </motion.a>
                </div>

                {/* Right - Icon showcase */}
                <motion.div
                  className="flex-1 flex justify-center"
                  variants={itemVariants}
                >
                  <motion.div
                    className="relative w-72 h-72 rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/20 border-2 border-purple-400/50 rounded-2xl backdrop-blur-sm flex items-center justify-center text-7xl">
                      🚀
                    </div>
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-2xl"
                      animate={{
                        borderColor: [
                          'rgba(168, 85, 247, 0.3)',
                          'rgba(236, 72, 153, 0.6)',
                          'rgba(168, 85, 247, 0.3)'
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  variants={featureVariants}
                  className="group"
                >
                  <motion.div
                    className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-all cursor-pointer"
                    whileHover={{ y: -8, borderColor: 'rgba(168, 85, 247, 0.7)' }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <h4 className="font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 pt-8 border-t border-secondary/30"
            variants={containerVariants}
          >
            {[
              { number: '10K+', label: 'Active Learners' },
              { number: '500+', label: 'Learning Resources' },
              { number: '50+', label: 'Expert Contributors' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={featureVariants}
                className="text-center"
              >
                <motion.div
                  className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
