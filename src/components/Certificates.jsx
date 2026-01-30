import { Award, Download, X } from 'lucide-react'
import { useState } from 'react'

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
      id: 1,
      title: 'Web Development Internship',
      issuer: 'Labmentix Pvt. Ltd',
      date: 'June - July 2025',
      description: 'Successfully completed 2-month Web Development internship',
      icon: '🌐',
      pdfFile: 'Acharya Namra Sharad Bhai Certificate.pdf'
    },
    {
      id: 2,
      title: 'Artificial Intelligence Beginners Guide',
      issuer: 'Simplilearn',
      date: 'January 7, 2026',
      description: 'Demonstrated initiative in advancing AI skills',
      icon: '🤖',
      pdfFile: 'AI_Certificate.pdf'
    },
    {
      id: 3,
      title: 'Introduction to Data Mining',
      issuer: 'Simplilearn',
      date: 'January 9, 2026',
      description: 'Successfully completed data mining fundamentals',
      icon: '📊',
      pdfFile: 'Data_Mining_Certi.pdf'
    },
    {
      id: 4,
      title: 'CCNA: Switching, Routing & Wireless',
      issuer: 'Cisco Networking Academy',
      date: 'November 5, 2025',
      description: 'Professional networking certification',
      icon: '🔗',
      pdfFile: 'Cisco_Certificate.pdf'
    },
    {
      id: 5,
      title: 'Introduction to Python',
      issuer: 'DataCamp',
      date: 'February 25, 2025',
      description: '4-hour comprehensive Python fundamentals course',
      icon: '🐍',
      pdfFile: 'FP_DataCamp_Certificate.pdf'
    },
    {
      id: 6,
      title: 'Python 101 for Data Science',
      issuer: 'IBM Developer Skills Network',
      date: 'February 6, 2025',
      description: 'Advanced Python for data science applications',
      icon: '📈',
      pdfFile: 'IBM_Python.pdf'
    },
    {
      id: 7,
      title: 'Java Fundamentals',
      issuer: 'IBM Developer Skills Network',
      date: 'November 19, 2024',
      description: 'Comprehensive Java programming fundamentals',
      icon: '☕',
      pdfFile: 'IBM JAVA CERTIFICATE .pdf'
    },
    {
      id: 8,
      title: 'Karma Foundation Internship',
      issuer: 'Karma Foundation',
      date: 'December 2-14, 2024',
      description: 'Internship completion certificate',
      icon: '🌱',
      pdfFile: 'Namra Acharaya_compressed.pdf'
    },
    {
      id: 9,
      title: '21st Century Employability Skills',
      issuer: 'Wadhwani Foundation',
      date: 'March 20, 2024',
      description: 'Advanced professional development program',
      icon: '💼',
      pdfFile: 'Wadhwani Foundation Certificate - 65fa7778676ef3934d647408.pdf'
    },
    {
      id: 10,
      title: 'Java Fundamentals',
      issuer: 'IBM Developer Skills Network',
      date: 'November 19, 2024',
      description: 'Comprehensive Java fundamentals course',
      icon: '🏆',
      pdfFile: 'Java certi.pdf'
    }
  ]

  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 bg-blue-400/10 rounded-full border border-blue-400/30">
            <Award className="text-blue-400" size={24} />
            <span className="text-blue-400 font-semibold">Certifications & Achievements</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Certificates
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Certifications and achievements from leading platforms and institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 transition-all cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="text-5xl mb-4">{cert.icon}</div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>

              <p className="text-blue-400 font-semibold mb-3">
                {cert.issuer}
              </p>

              <p className="text-gray-400 text-sm mb-4">
                {cert.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <span className="text-blue-400 text-sm font-medium">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400">
            Click on any certificate to view the full PDF. Continuously learning and growing.
          </p>
        </div>
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-slate-950 border-2 border-blue-400/50 rounded-2xl overflow-hidden w-[95vw] h-[95vh] max-w-6xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-700/50 bg-slate-900/30">
              <h2 className="text-2xl font-bold text-white">
                {selectedCert.title}
              </h2>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="text-blue-400" size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-auto bg-slate-900/20">
              <iframe
                src={`${import.meta.env.BASE_URL}public/${encodeURIComponent(selectedCert.pdfFile)}`}
                className="w-full h-full"
                title={selectedCert.title}
              />
            </div>

            <div className="p-4 border-t border-slate-700/50 bg-slate-900/30 flex items-center justify-between">
              <p className="text-gray-400">
                {selectedCert.issuer} • {selectedCert.date}
              </p>
              <a
                href={`${import.meta.env.BASE_URL}public/${encodeURIComponent(selectedCert.pdfFile)}`}
                download={selectedCert.pdfFile}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
