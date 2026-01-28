import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Zap } from 'lucide-react'

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const skills = [
    {
      icon: Code,
      title: 'Python Scientific Stack',
      desc: '90%+ proficiency in NumPy, Pandas, and Matplotlib. Expert-level data manipulation, numerical computing, and visualization. Strong foundation for signal processing and data analysis work.',
      color: 'from-green-400 to-emerald-400',
      subskills: ['NumPy (95%)', 'Pandas (95%)', 'Matplotlib (90%)', 'SciPy'],
      level: 'Expert'
    },
    {
      icon: Zap,
      title: 'EEG Signal Processing & Analysis',
      desc: 'Deep expertise in brain signal processing. Pre-processing, artifact removal, feature extraction, time-frequency analysis, and real-time signal pipelines for BCI systems.',
      color: 'from-cyan-400 to-blue-400',
      subskills: ['EEG Pre-processing', 'FFT/Wavelets', 'Feature Extraction', 'Real-time Processing'],
      level: 'Expert'
    },
    {
      icon: Code,
      title: 'Machine Learning',
      desc: 'Currently learning ML fundamentals with focus on classification algorithms, feature engineering, and model evaluation. Building knowledge for BCI signal classification tasks.',
      color: 'from-yellow-400 to-amber-400',
      subskills: ['Classification Algorithms', 'Feature Engineering', 'Model Evaluation', 'Cross-validation'],
      level: 'Learning'
    },
    {
      icon: Palette,
      title: 'Deep Learning (Future Focus)',
      desc: 'Planning to advance into Deep Learning. Focus will be on neural networks for BCI applications: CNNs for spatial patterns, RNNs for temporal dynamics, and attention mechanisms.',
      color: 'from-purple-400 to-pink-400',
      subskills: ['CNNs', 'RNNs', 'Attention Mechanisms', 'Transfer Learning'],
      level: 'Future'
    },
    {
      icon: Zap,
      title: 'Neural Decoding & BCI Algorithms',
      desc: 'Designing algorithms for brain-computer interfaces. Signal-to-intent mapping, decoder training, and adaptation strategies. Combining signal processing with ML for practical BCI solutions.',
      color: 'from-indigo-400 to-purple-400',
      subskills: ['Decoding Algorithms', 'Pattern Recognition', 'Calibration', 'Real-time Classification'],
      level: 'Expert'
    },
    {
      icon: Code,
      title: 'Web Development & Deployment',
      desc: 'Building web interfaces for BCI systems and data dashboards. Full-stack development, real-time data visualization, and cloud deployment for neurotechnology applications.',
      color: 'from-blue-400 to-cyan-400',
      subskills: ['React', 'Real-time Dashboards', 'WebSockets', 'Cloud Deployment'],
      level: 'Proficient'
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

                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold">{skill.title}</h3>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          skill.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                          skill.level === 'Learning' ? 'bg-yellow-500/20 text-yellow-400' :
                          skill.level === 'Future' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
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
