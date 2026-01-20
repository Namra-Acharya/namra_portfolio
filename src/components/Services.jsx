import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Globe, TrendingUp, Layers } from 'lucide-react'

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const services = [
    {
      icon: Globe,
      title: 'Custom Website & Web Apps',
      desc: 'Build full-featured web platforms from scratch. Healthcare systems, educational tools, business management platforms—delivered fast, deployed right. Proven track record with billable client projects.',
      features: ['Full-stack development', 'Database design', 'Production deployment', 'Ongoing support']
    },
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      desc: 'Intelligent systems that set you apart. From conversational AI agents to smart automation, I integrate cutting-edge AI to solve real business problems and improve efficiency.',
      features: ['AI agent integration', 'Automation workflows', 'Intelligent features', 'LLM APIs']
    },
    {
      icon: TrendingUp,
      title: 'Monetized Products & SaaS',
      desc: 'Build products that earn. I help create platforms like NexusGroups.app (10K+ users, AdSense enabled). From ideation to revenue generation, I deliver end-to-end.',
      features: ['Product architecture', 'Monetization strategies', 'User growth', 'Revenue optimization']
    },
    {
      icon: Layers,
      title: 'Rapid Development with AI',
      desc: 'Speed without compromise. Leveraging AI tools strategically, I accelerate your project timeline dramatically. Get to market faster. Launch, iterate, scale. Your advantage: rapid execution.',
      features: ['Fast turnaround', 'Cost-effective', 'Quality maintained', 'Scalable solutions']
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
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
            <motion.span className="inline-block px-4 py-2 bg-accent/20 border border-accent/50 rounded-full text-accent text-sm font-semibold mb-4">
              NexusGroups - Software Development Company
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                Custom Web Solutions For Your Business
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I build complete platforms that generate real ROI. From client websites to custom business systems, here's what NexusGroups delivers
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative"
                >
                  <motion.div
                    className="relative p-8 rounded-2xl border border-secondary/50 bg-secondary/20 backdrop-blur-sm overflow-hidden h-full"
                    whileHover={{ y: -10, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/30 to-blue-500/20 flex items-center justify-center text-white mb-4"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Icon size={28} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.desc}</p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <motion.li
                          key={fidx}
                          className="flex items-start gap-3 text-gray-400 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + fidx * 0.1 }}
                        >
                          <motion.div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border border-transparent pointer-events-none opacity-0 group-hover:opacity-100"
                      animate={{
                        boxShadow: ['0 0 0 rgba(59, 130, 246, 0)', '0 0 30px rgba(59, 130, 246, 0.3)', '0 0 0 rgba(59, 130, 246, 0)']
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project with NexusGroups →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
