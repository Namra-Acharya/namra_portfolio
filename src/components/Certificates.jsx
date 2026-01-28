import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, X, Download } from 'lucide-react'
import { useState } from 'react'

export default function Certificates() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
      id: 1,
      title: 'Web Development Internship',
      issuer: 'Labmentix Pvt. Ltd',
      date: 'June - July 2025',
      description: 'Successfully completed 2-month Web Development internship',
      color: 'from-blue-500 to-cyan-500',
      icon: '🌐',
      pdfFile: 'Acharya Namra Sharad Bhai Certificate.pdf'
    },
    {
      id: 2,
      title: 'Artificial Intelligence Beginners Guide',
      issuer: 'Simplilearn',
      date: 'January 7, 2026',
      description: 'Demonstrated initiative in advancing AI skills',
      color: 'from-purple-500 to-pink-500',
      icon: '🤖',
      pdfFile: 'AI_Certificate.pdf'
    },
    {
      id: 3,
      title: 'Introduction to Data Mining',
      issuer: 'Simplilearn',
      date: 'January 9, 2026',
      description: 'Successfully completed data mining fundamentals',
      color: 'from-orange-500 to-red-500',
      icon: '📊',
      pdfFile: 'Data_Mining_Certi.pdf'
    },
    {
      id: 4,
      title: 'CCNA: Switching, Routing & Wireless',
      issuer: 'Cisco Networking Academy',
      date: 'November 5, 2025',
      description: 'Professional networking certification',
      color: 'from-blue-600 to-blue-400',
      icon: '🔗',
      pdfFile: 'Cisco_Certificate.pdf'
    },
    {
      id: 5,
      title: 'Introduction to Python',
      issuer: 'DataCamp',
      date: 'February 25, 2025',
      description: '4-hour comprehensive Python fundamentals course',
      color: 'from-green-500 to-emerald-500',
      icon: '🐍',
      pdfFile: 'FP_DataCamp_Certificate.pdf'
    },
    {
      id: 6,
      title: 'Python 101 for Data Science',
      issuer: 'IBM Developer Skills Network',
      date: 'February 6, 2025',
      description: 'Advanced Python for data science applications',
      color: 'from-indigo-500 to-blue-500',
      icon: '📈',
      pdfFile: 'IBM_Python.pdf'
    },
    {
      id: 7,
      title: 'Java Fundamentals',
      issuer: 'IBM Developer Skills Network',
      date: 'November 19, 2024',
      description: 'Comprehensive Java programming fundamentals',
      color: 'from-red-500 to-orange-500',
      icon: '☕',
      pdfFile: 'IBM JAVA CERTIFICATE .pdf'
    },
    {
      id: 8,
      title: 'Karma Foundation Internship',
      issuer: 'Karma Foundation',
      date: 'December 2-14, 2024',
      description: 'Internship completion certificate',
      color: 'from-teal-500 to-cyan-500',
      icon: '🌱',
      pdfFile: 'Namra Acharaya_compressed.pdf'
    },
    {
      id: 9,
      title: '21st Century Employability Skills',
      issuer: 'Wadhwani Foundation',
      date: 'March 20, 2024',
      description: 'Advanced professional development program',
      color: 'from-amber-500 to-yellow-500',
      icon: '💼',
      pdfFile: 'Wadhwani Foundation Certificate - 65fa7778676ef3934d647408.pdf'
    },
    {
      id: 10,
      title: 'Java Fundamentals',
      issuer: 'IBM Developer Skills Network',
      date: 'November 19, 2024',
      description: 'Comprehensive Java fundamentals course',
      color: 'from-violet-500 to-purple-500',
      icon: '🏆',
      pdfFile: 'Java certi.pdf'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="certificates" className="py-24 px-4 relative">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
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
            <Award className="text-accent" size={24} />
            <span className="text-accent font-semibold">Certifications & Achievements</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Professional Certificates
            </span>
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto rounded-full"
            layoutId="accent-bar"
          />
          <p className="text-gray-400 mt-6 text-lg">
            Certifications and achievements from leading platforms and institutions
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card Background with gradient border */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur`}
              />

              <motion.div
                className="relative h-full p-8 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-secondary/50 group-hover:border-accent/50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Icon */}
                <motion.div
                  className={`text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                >
                  {cert.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>

                <p className={`bg-gradient-to-r ${cert.color} bg-clip-text text-transparent font-semibold mb-3`}>
                  {cert.issuer}
                </p>

                <p className="text-gray-400 text-sm mb-4">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-secondary/50">
                  <span className="text-accent text-sm font-medium">
                    {cert.date}
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-accent group-hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300`}
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
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : "hidden"}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            Click on any certificate to view the full PDF. Continuously learning and growing. Certificates showcase dedication to professional development and skill enhancement.
          </p>
        </motion.div>
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-primary border-2 border-accent/50 rounded-2xl overflow-hidden w-[95vw] h-[95vh] max-w-6xl flex flex-col"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-secondary/50 bg-secondary/30">
                <h2 className="text-2xl font-bold text-white">
                  {selectedCert.title}
                </h2>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <X className="text-accent" size={24} />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-secondary/20">
                <iframe
                  src={`${import.meta.env.BASE_URL}public/${encodeURIComponent(selectedCert.pdfFile)}`}
                  className="w-full h-full"
                  title={selectedCert.title}
                />
              </div>

              {/* Footer with Download */}
              <div className="p-4 border-t border-secondary/50 bg-secondary/30 flex items-center justify-between">
                <p className="text-gray-400">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
                <motion.a
                  href={`${import.meta.env.BASE_URL}public/${encodeURIComponent(selectedCert.pdfFile)}`}
                  download={selectedCert.pdfFile}
                  className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} />
                  Download PDF
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
