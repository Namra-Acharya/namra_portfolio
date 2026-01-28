import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const projects = [
    {
      title: 'NexusGroups.app - Learning Platform',
      desc: 'Own product: Live student learning platform with 10K+ active users. Features AI-powered agent for learning, group collaboration hub, community forum, and integrated tools (calculator, translator, smart notes). AdSense monetization enabled.',
      tags: ['AI Agent', 'Group Hub', 'Community', 'AdSense', '10K+ Users'],
      image: '🚀',
      link: 'https://nexusgroups.app',
      github: '#',
      featured: true,
      income: 'AdSense Revenue'
    },
    {
      title: 'Hospital Management System (HMS)',
      desc: 'Client Project: Complete solution currently serving a small healthcare practice. Full-featured patient management, appointment scheduling, medical records, billing, and reporting system. Production deployment for actual medical use.',
      tags: ['Full-Stack', 'Healthcare', 'Database', 'Client Project', 'Live'],
      image: '🏥',
      link: '#',
      github: '#'
    },
    {
      title: 'SignifyPro - PDF Signing Platform',
      desc: 'Product: Easy-to-use document signing solution. Secure PDF signing, digital signatures, document management. Built with focus on user experience and security for individual and business users.',
      tags: ['React', 'PDF Processing', 'Security', 'Web App', 'Product'],
      image: '✍️',
      link: '#',
      github: '#'
    },
    {
      title: 'AI Personal Assistant',
      desc: 'Personal project: Intelligent conversational AI agent built in Python. Trained to understand context, maintain conversation flow, provide helpful responses. Demonstrates advanced LLM integration and agent reasoning capabilities.',
      tags: ['Python', 'LLM', 'NLP', 'Conversational AI', 'Personal Project'],
      image: '🤖',
      link: '#',
      github: '#'
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

  const projectVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="projects" className="py-24 px-4 relative">
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
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Showcasing my best work and creative solutions</p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={projectVariants}
                className="group"
              >
                <motion.div
                  className={`relative rounded-2xl overflow-hidden cursor-pointer ${
                    project.featured
                      ? 'border-2 border-purple-500/50 bg-gradient-to-r from-purple-900/20 to-pink-900/10'
                      : 'border border-secondary/50'
                  }`}
                  whileHover={{
                    borderColor: project.featured ? 'rgba(168, 85, 247, 0.8)' : 'rgba(59, 130, 246, 0.5)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background */}
                  <div className={`absolute inset-0 ${
                    project.featured
                      ? 'bg-gradient-to-r from-purple-600/10 via-pink-600/5 to-transparent'
                      : 'bg-gradient-to-r from-secondary/50 to-transparent'
                  }`} />

                  {/* Content */}
                  <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                    {/* Image */}
                    <motion.div
                      className={`flex-shrink-0 w-32 h-32 rounded-xl flex items-center justify-center text-5xl border ${
                        project.featured
                          ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/20 border-purple-400/50'
                          : 'bg-gradient-to-br from-accent/20 to-blue-500/20 border-accent/30'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image}
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className={`text-2xl md:text-3xl font-bold ${
                          project.featured ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' : ''
                        }`}>{project.title}</h3>
                        {project.featured && (
                          <motion.span
                            className="px-3 py-1 text-xs font-semibold bg-purple-500/30 border border-purple-500/50 rounded-full text-purple-300"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            ⭐ Featured
                          </motion.span>
                        )}
                        {project.income && (
                          <motion.span
                            className="px-3 py-1 text-xs font-semibold bg-green-500/30 border border-green-500/50 rounded-full text-green-300"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            💰 {project.income}
                          </motion.span>
                        )}
                      </div>
                      <p className="text-gray-400 text-lg mb-4 leading-relaxed">{project.desc}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                        {project.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            className="px-3 py-1 text-sm bg-accent/10 border border-accent/30 rounded-full text-accent"
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 justify-center md:justify-start">
                        {project.link !== '#' && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={18} />
                            View Project
                          </motion.a>
                        )}
                        {project.github !== '#' && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={18} />
                            Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
                    whileHover={{
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
