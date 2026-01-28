import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Zap } from 'lucide-react'

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const skills = [
    {
      icon: Code,
      title: 'EEG Signal Processing & Analysis',
      desc: 'Advanced signal processing for brain signals. Pre-processing, artifact removal, feature extraction, time-frequency analysis, real-time processing. Deep expertise in EEG data pipelines.',
      color: 'from-cyan-400 to-blue-400',
      subskills: ['EEG Pre-processing', 'Artifact Detection', 'FFT/Wavelets', 'Real-time Processing']
    },
    {
      icon: Zap,
      title: 'Neural Decoding & BCI Algorithms',
      desc: 'Designing and implementing algorithms for brain-computer interfaces. Feature classification, signal-to-intent mapping, decoder training, calibration & adaptation strategies.',
      color: 'from-purple-400 to-pink-400',
      subskills: ['Signal Classification', 'Decoding Algorithms', 'Pattern Recognition', 'Calibration']
    },
    {
      icon: Palette,
      title: 'Deep Learning for Neural Data',
      desc: 'Applying neural networks to brain signals. CNNs for spatial-temporal patterns, RNNs for temporal dynamics, attention mechanisms for selective processing of EEG data.',
      color: 'from-indigo-400 to-purple-400',
      subskills: ['CNNs', 'RNNs', 'Attention Mechanisms', 'Transfer Learning']
    },
    {
      icon: Code,
      title: 'Python & Scientific Computing',
      desc: 'Expert-level Python with NumPy, SciPy, Pandas. Data manipulation, mathematical operations, statistical analysis. Optimized code for real-time BCI applications.',
      color: 'from-green-400 to-emerald-400',
      subskills: ['NumPy/SciPy', 'Pandas', 'Scientific Computing', 'Performance Optimization']
    },
    {
      icon: Zap,
      title: 'Data Visualization & Analysis',
      desc: 'Communicating complex neural data through visualizations. Matplotlib, signal plotting, heatmaps, frequency analysis plots. Making research insights accessible and actionable.',
      color: 'from-yellow-400 to-orange-400',
      subskills: ['Matplotlib', 'Signal Visualization', 'Statistical Plots', 'Report Generation']
    },
    {
      icon: Palette,
      title: 'Web Development & Deployment',
      desc: 'Building web interfaces for BCI systems. Full-stack development, real-time data dashboards, cloud deployment. Creating platforms for neurotechnology applications.',
      color: 'from-blue-400 to-cyan-400',
      subskills: ['React', 'Backend APIs', 'WebSockets', 'Cloud Deployment']
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
