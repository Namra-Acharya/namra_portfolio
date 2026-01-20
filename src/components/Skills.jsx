import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Zap } from 'lucide-react'

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const skills = [
    {
      icon: Code,
      title: 'AI-Powered Product Building',
      desc: 'Leverage AI tools to design, develop & deploy full-featured platforms rapidly. Product architecture, UX design, end-to-end delivery. Built NexusGroups.app with 10K+ users.',
      color: 'from-blue-400 to-cyan-400',
      subskills: ['Product Design', 'UI/UX', 'Figma', 'Rapid Prototyping']
    },
    {
      icon: Zap,
      title: 'AI Agent Development',
      desc: 'Build intelligent conversational agents with Python. Voice-based automation, LLM integration, reasoning, multi-turn interactions, personal AI assistants',
      color: 'from-purple-400 to-pink-400',
      subskills: ['Voice I/O', 'System Integration', 'Automation', 'AI Orchestration']
    },
    {
      icon: Palette,
      title: 'Python & Data Analysis',
      desc: 'Python mastery with NumPy arrays, vectorization, Pandas data manipulation, Matplotlib visualization. Strong command through daily usage and extensive practice.',
      color: 'from-green-400 to-emerald-400',
      subskills: ['NumPy', 'Pandas', 'Matplotlib', 'Data Transformation']
    },
    {
      icon: Code,
      title: 'Machine Learning & Signal Processing',
      desc: 'Data preprocessing, feature engineering, ML fundamentals. Currently learning with focus on signal-based and neural data analysis for BCI applications.',
      color: 'from-pink-400 to-red-400',
      subskills: ['Data Prep', 'Feature Engineering', 'Neural Signals', 'Signal Analysis']
    },
    {
      icon: Zap,
      title: 'Web Platform Development',
      desc: 'Full-stack platforms: student learning hubs, healthcare management, educational tools. HTML, CSS, JavaScript, React integration, responsive design, deployment & scaling.',
      color: 'from-yellow-400 to-orange-400',
      subskills: ['HTML/CSS', 'JavaScript', 'Deployment', 'Hosting & SEO']
    },
    {
      icon: Palette,
      title: 'Brain-Computer Interface (BCI)',
      desc: 'Foundational knowledge in BCI & neurotechnology. Understanding brain signals (Alpha, Beta, Gamma, Theta, Delta), EEG data representation, and ML applications in neural systems.',
      color: 'from-indigo-400 to-blue-400',
      subskills: ['EEG Analysis', 'Neural Signals', 'Signal Processing', 'Neurotechnology']
    }
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                My Skills
              </span>
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, idx) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="group relative"
                >
                  <motion.div
                    className="relative p-8 rounded-2xl border border-secondary/50 bg-secondary/20 backdrop-blur-sm overflow-hidden cursor-pointer"
                    whileHover={{ y: -10, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${skill.color} transition-opacity duration-300`}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Content */}
                    <motion.div
                      className="relative z-10"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 text-white`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon size={32} />
                      </motion.div>

                      <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{skill.desc}</p>

                      {skill.subskills && (
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-secondary/30">
                          {skill.subskills.map((subskill, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
                              {subskill}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>

                    {/* Glowing border on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
                      animate={{
                        borderColor: [
                          'rgba(59, 130, 246, 0)',
                          'rgba(59, 130, 246, 0.5)',
                          'rgba(59, 130, 246, 0)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
