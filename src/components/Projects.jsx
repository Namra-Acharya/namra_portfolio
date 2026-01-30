import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'NexusGroups.app - Learning Platform',
      desc: 'Own product: Live student learning platform with 10K+ active users. Features AI-powered agent for learning, group collaboration hub, community forum.',
      tags: ['AI Agent', 'Group Hub', 'Community', 'AdSense', '10K+ Users'],
      image: '🚀',
      link: 'https://nexusgroups.app',
      featured: true,
      income: 'AdSense Revenue'
    },
    {
      title: 'Hospital Management System (HMS)',
      desc: 'Client Project: Complete solution serving a healthcare practice. Full-featured patient management, appointment scheduling, medical records, and billing.',
      tags: ['Full-Stack', 'Healthcare', 'Database', 'Client Project', 'Live'],
      image: '🏥',
      link: '#'
    },
    {
      title: 'SignifyPro - PDF Signing Platform',
      desc: 'Product: Easy-to-use document signing solution. Secure PDF signing, digital signatures, and document management.',
      tags: ['React', 'PDF Processing', 'Security', 'Web App', 'Product'],
      image: '✍️',
      link: '#'
    },
    {
      title: 'AI Personal Assistant',
      desc: 'Personal project: Intelligent conversational AI agent built in Python. Demonstrates advanced LLM integration and agent reasoning capabilities.',
      tags: ['Python', 'LLM', 'NLP', 'Conversational AI', 'Personal Project'],
      image: '🤖',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my best work and creative solutions</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden ${
                project.featured
                  ? 'border-2 border-purple-500/50 bg-gradient-to-r from-purple-900/20 to-pink-900/10'
                  : 'border border-slate-700/50'
              }`}
            >
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                <div className={`flex-shrink-0 w-32 h-32 rounded-xl flex items-center justify-center text-5xl border ${
                  project.featured
                    ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/20 border-purple-400/50'
                    : 'bg-gradient-to-br from-blue-500/20 to-blue-500/10 border-blue-400/30'
                }`}>
                  {project.image}
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className={`text-2xl md:text-3xl font-bold ${
                      project.featured ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' : ''
                    }`}>
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 text-xs font-semibold bg-purple-500/30 border border-purple-500/50 rounded-full text-purple-300">
                        ⭐ Featured
                      </span>
                    )}
                    {project.income && (
                      <span className="px-3 py-1 text-xs font-semibold bg-green-500/30 border border-green-500/50 rounded-full text-green-300">
                        💰 {project.income}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-lg mb-4 leading-relaxed">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 justify-center md:justify-start">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        <ExternalLink size={18} />
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
