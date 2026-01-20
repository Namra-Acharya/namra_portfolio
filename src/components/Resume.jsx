import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Code2, Briefcase, GraduationCap } from 'lucide-react'

export default function Resume() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Namra_Acharya_Resume.pdf'
    link.download = 'Namra_Acharya_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const skillsData = [
    {
      category: 'Programming & Data',
      skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
      icon: <Code2 className="text-accent" size={24} />
    },
    {
      category: 'Machine Learning',
      skills: ['Data Preprocessing', 'Feature Engineering', 'ML Fundamentals', 'Signal Analysis'],
      icon: <Briefcase className="text-blue-400" size={24} />
    },
    {
      category: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'Deployment & Hosting', 'SEO'],
      icon: <Code2 className="text-cyan-400" size={24} />
    },
    {
      category: 'AI & Automation',
      skills: ['AI Agents', 'Voice Automation', 'System Integration'],
      icon: <Briefcase className="text-purple-400" size={24} />
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git/GitHub', 'VS Code', 'Cursor', 'Figma', 'Linux'],
      icon: <Briefcase className="text-green-400" size={24} />
    }
  ]

  const experience = [
    {
      title: 'Product Creator & Software Developer',
      company: 'NexusGroups - Self-Founded',
      period: 'Ongoing',
      points: [
        'Built and deployed NexusGroups.app - a student learning platform with 10K+ active users',
        'Integrated Google AdSense for monetization and revenue generation',
        'Designed and deployed Hospital Management Website for healthcare client',
        'Developed AI Voice Assistant (Nexus) with voice I/O capabilities',
        'Managed full lifecycle: planning → development → deployment → maintenance'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Labmentix Pvt. Ltd',
      period: 'June - July 2025',
      points: [
        'Completed professional 2-month web development internship',
        'Demonstrated consistency and dedication in real-world projects',
        'Gained practical experience in production website development'
      ]
    }
  ]

  const education = [
    {
      degree: 'B.Tech - Computer Science & Engineering',
      school: 'ICT, Ganpat University',
      period: '2024 - 2027',
      cgpa: 'CGPA: 8.78/10'
    },
    {
      degree: 'Diploma - Computer Engineering',
      school: 'GTU (Gujarat Technological University)',
      period: 'Completed',
      cgpa: 'CGPA: 8.98/10'
    }
  ]

  return (
    <section id="resume" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div className="inline-flex items-center gap-3 mb-6 px-6 py-2 bg-accent/10 rounded-full border border-accent/30">
            <FileText className="text-accent" size={24} />
            <span className="text-accent font-semibold">My Resume</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Professional Profile
            </span>
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto rounded-full"
            layoutId="accent-bar"
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Left - Download Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : "hidden"}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 space-y-6">
              {/* Download Card */}
              <motion.div
                className="p-8 rounded-2xl bg-gradient-to-br from-accent/20 to-blue-500/20 border-2 border-accent/50 backdrop-blur-sm"
                whileHover={{ borderColor: '#3b82f6' }}
              >
                <motion.button
                  onClick={handleDownload}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-accent to-blue-500 text-white font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="group-hover:translate-y-1 transition-transform" size={24} />
                  Download Resume
                </motion.button>

                <p className="text-gray-400 text-sm text-center mt-4">
                  PDF Format • One-click download
                </p>
              </motion.div>

              {/* Quick Stats */}
              <div className="space-y-3">
                <motion.div
                  className="p-4 rounded-xl bg-secondary/50 border border-secondary/50 hover:border-accent/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-400 text-sm">Experience</p>
                  <p className="text-white font-bold text-lg">4+ Years</p>
                </motion.div>

                <motion.div
                  className="p-4 rounded-xl bg-secondary/50 border border-secondary/50 hover:border-accent/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-400 text-sm">Projects Completed</p>
                  <p className="text-white font-bold text-lg">10+</p>
                </motion.div>

                <motion.div
                  className="p-4 rounded-xl bg-secondary/50 border border-secondary/50 hover:border-accent/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-400 text-sm">Active Users (Platform)</p>
                  <p className="text-white font-bold text-lg">10K+</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : "hidden"}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Education */}
            <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-accent" size={28} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </motion.div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="p-6 rounded-xl bg-secondary/30 border border-secondary/50 hover:border-accent/50 transition-all hover:bg-secondary/50"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <span className="text-accent text-sm font-semibold">{edu.period}</span>
                    </div>
                    <p className="text-gray-300 mb-1">{edu.school}</p>
                    <p className="text-accent text-sm">{edu.cgpa}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </motion.div>

              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="p-6 rounded-xl bg-secondary/30 border border-secondary/50 hover:border-blue-400/50 transition-all hover:bg-secondary/50"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                      <span className="text-blue-400 text-sm font-semibold">{exp.period}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                          <span className="text-accent flex-shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : "hidden"}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div className="flex items-center gap-3 mb-8">
            <Code2 className="text-cyan-400" size={28} />
            <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skillsData.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-xl bg-secondary/30 border border-secondary/50 hover:border-accent/50 transition-all group hover:bg-secondary/50"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {skillGroup.icon}
                  <h4 className="font-bold text-white">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm border border-accent/30 hover:bg-accent/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
