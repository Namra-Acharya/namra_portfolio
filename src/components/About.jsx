import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

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

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <motion.div 
              className="w-20 h-1 bg-accent mx-auto rounded-full"
              layoutId="accent-bar"
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-accent/30"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-6xl">💻</div>
                </div>
                
                <svg
                  className="w-full h-full p-12 text-accent opacity-20"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M30 50 Q50 30 70 50" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Right - Text */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-3">Who I Am</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a <motion.span className="text-blue-400 font-semibold">Computer Science student</motion.span> (B.Tech 2024-2027, CGPA 8.78/10) with 4+ years of continuous, self-driven learning and hands-on building experience. I practice daily, maintain long focus hours, and treat learning as a routine—not a motivation-dependent activity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent mb-3">What I Do</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I work as a <motion.span className="text-accent font-semibold">freelance BCI researcher and developer</motion.span>, working with real clients to build custom solutions in neurotechnology and AI. I combine rigorous signal processing, neural decoding algorithms, and AI to develop practical BCI applications. I understand the complexities of brain signal analysis, have strong product architecture knowledge, and deliver solutions that address real client needs.
                </p>
                <div className="mt-4 space-y-2 text-gray-300">
                  <p className="flex gap-3"><span className="text-accent font-bold">✓</span> <span><strong>NexusGroups.app</strong> - Student learning platform with 10K+ active users and AdSense revenue</span></p>
                  <p className="flex gap-3"><span className="text-blue-400 font-bold">✓</span> <span><strong>Hospital Management Website</strong> - Production healthcare solution for real clients</span></p>
                  <p className="flex gap-3"><span className="text-cyan-400 font-bold">✓</span> <span><strong>AI Voice Assistant (Nexus)</strong> - Python-based automation with voice I/O capabilities</span></p>
                  <p className="flex gap-3"><span className="text-purple-400 font-bold">✓</span> <span><strong>Multiple client projects</strong> in development pipeline</span></p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent mb-3">My Specialization</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-cyan-400">Brain-Computer Interfaces (BCI):</strong> My primary focus. Signal processing, EEG analysis, neural decoding, and human-computer interaction through brain activity</p>
                  <p><strong className="text-green-400">Signal Processing & Neural Data:</strong> EEG signal analysis, feature extraction, time-frequency analysis, real-time signal processing</p>
                  <p><strong className="text-blue-400">Machine Learning for Neural Data:</strong> Deep learning models for BCI applications, classification algorithms for brain signals, pattern recognition</p>
                  <p><strong className="text-purple-400">Python & Scientific Computing:</strong> NumPy, Pandas, Matplotlib, SciPy - deep expertise with neuroscience applications</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent mb-3">My Philosophy & Vision</h3>
                <p className="text-lg text-gray-300 leading-relaxed italic border-l-4 border-accent pl-4">
                  "BCI is not just a technology—it's the future of human-computer interaction. I'm committed to advancing the field by building robust signal processing pipelines, developing intelligent decoding algorithms, and creating practical BCI applications. This is a hard problem that requires deep understanding, relentless experimentation, and tolerance for uncertainty. That's exactly where I thrive."
                </p>
              </div>

              <motion.div className="grid grid-cols-2 gap-3 pt-4">
                {['EEG Signal Analysis', 'Neural Decoding', 'Python/NumPy', 'Deep Learning', 'BCI Algorithms', 'Real-time Processing', 'AI Integration', 'Neuroscience'].map((skill) => (
                  <motion.div
                    key={skill}
                    className="p-3 bg-gradient-to-r from-accent/10 to-cyan-500/10 rounded-lg border border-accent/30 text-center hover:border-accent/60 hover:from-accent/20 hover:to-cyan-500/20 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className="text-sm font-semibold text-gray-200">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
