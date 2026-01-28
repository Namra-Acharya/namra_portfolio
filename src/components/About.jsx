import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Zap, Target } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

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

  const pillars = [
    {
      icon: Brain,
      title: 'Background',
      points: [
        'Computer Science (B.Tech 2024-2027)',
        'CGPA: 8.78/10',
        '4+ years hands-on learning',
        'Daily practice & deep focus'
      ],
      color: 'from-cyan-400 to-blue-400'
    },
    {
      icon: Target,
      title: 'Primary Focus',
      points: [
        'Brain-Computer Interfaces (BCI)',
        'EEG Signal Processing',
        'Neural Decoding Algorithms',
        'Advancing neurotechnology'
      ],
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Zap,
      title: 'Current Work',
      points: [
        'Freelance BCI Researcher',
        'Working with real clients',
        'Custom AI Solutions',
        'Solving hard neurotechnology problems'
      ],
      color: 'from-amber-400 to-orange-400'
    }
  ]

  const expertise = [
    { name: 'NumPy', level: 95, status: 'Expert' },
    { name: 'Pandas', level: 95, status: 'Expert' },
    { name: 'Matplotlib', level: 90, status: 'Expert' },
    { name: 'EEG Signal Processing', level: 90, status: 'Expert' },
    { name: 'Machine Learning', level: 70, status: 'Learning' },
    { name: 'Deep Learning', level: 40, status: 'Future Focus' }
  ]

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden" data-motion>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={itemVariants}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A Computer Science student passionate about advancing Brain-Computer Interface technology through rigorous signal processing and innovative AI solutions.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-secondary/50 group-hover:border-accent/50 transition-all"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white mb-4`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>

                  {/* Points */}
                  <div className="space-y-3">
                    {pillar.points.map((point, i) => (
                      <div key={i} className="flex gap-3">
                        <span className={`text-xl flex-shrink-0 bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent font-bold`}>→</span>
                        <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    animate={{
                      boxShadow: [
                        `0 0 20px rgba(59, 130, 246, 0)`,
                        `0 0 40px rgba(59, 130, 246, 0.2)`,
                        `0 0 20px rgba(59, 130, 246, 0)`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          variants={itemVariants}
          className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-accent/30"
        >
          <p className="text-xl text-gray-200 leading-relaxed text-center">
            <span className="font-bold text-accent">Vision:</span> I'm committed to advancing Brain-Computer Interface technology by developing robust signal processing pipelines, intelligent neural decoding algorithms, and practical BCI applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Expertise Chart */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold mb-10 text-center">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((skill, idx) => {
              const getStatusColor = (status) => {
                switch(status) {
                  case 'Expert': return 'text-green-400'
                  case 'Learning': return 'text-yellow-400'
                  case 'Future Focus': return 'text-purple-400'
                  default: return 'text-gray-400'
                }
              }

              const getProgressColor = (status) => {
                switch(status) {
                  case 'Expert': return 'from-green-400 to-emerald-400'
                  case 'Learning': return 'from-yellow-400 to-amber-400'
                  case 'Future Focus': return 'from-purple-400 to-pink-400'
                  default: return 'from-accent to-cyan-400'
                }
              }

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-semibold text-gray-300">{skill.name}</span>
                      <span className={`ml-2 text-xs font-bold ${getStatusColor(skill.status)}`}>{skill.status}</span>
                    </div>
                    <span className="text-accent font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${getProgressColor(skill.status)} rounded-full`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <h3 className="text-3xl font-bold mb-10 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🎓', title: 'Academic Excellence', desc: 'Strong CGPA with consistent performance in core CS subjects' },
              { icon: '🧠', title: 'BCI Research', desc: 'Deep focus on signal processing and neural decoding' },
              { icon: '💼', title: 'Real Client Work', desc: 'Freelancing solutions in neurotechnology and AI' },
              { icon: '🚀', title: '10K+ Users', desc: 'NexusGroups.app platform reaching thousands of students' }
            ].map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-xl bg-secondary/30 border border-secondary/50 hover:border-accent/50 transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{achievement.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-gray-100">{achievement.title}</h4>
                <p className="text-gray-400 text-sm">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  )
}
