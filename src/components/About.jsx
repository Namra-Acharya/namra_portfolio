export default function About() {
  const pillars = [
    {
      icon: '🎓',
      title: 'Background',
      points: [
        'Computer Science (B.Tech 2024-2027)',
        'CGPA: 8.78/10',
        '4+ years hands-on learning',
        'Daily practice & deep focus'
      ]
    },
    {
      icon: '🎯',
      title: 'Primary Focus',
      points: [
        'Brain-Computer Interfaces (BCI)',
        'EEG Signal Processing',
        'Neural Decoding Algorithms',
        'Advancing neurotechnology'
      ]
    },
    {
      icon: '⚡',
      title: 'Current Work',
      points: [
        'Freelance BCI Researcher',
        'Working with real clients',
        'Custom AI Solutions',
        'Solving hard neurotechnology problems'
      ]
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
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A Computer Science student passionate about advancing Brain-Computer Interface technology through rigorous signal processing and innovative AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-slate-700/50 hover:border-blue-400/50 transition-all"
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <div className="space-y-3">
                {pillar.points.map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-blue-400 flex-shrink-0">→</span>
                    <p className="text-gray-300 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-blue-400/30">
          <p className="text-xl text-gray-200 leading-relaxed text-center">
            <span className="font-bold text-blue-400">Vision:</span> I'm committed to advancing Brain-Computer Interface technology by developing robust signal processing pipelines, intelligent neural decoding algorithms, and practical BCI applications that solve real-world problems.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-10 text-center">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((skill, idx) => {
              const getStatusColor = (status) => {
                switch (status) {
                  case 'Expert': return 'text-green-400'
                  case 'Learning': return 'text-yellow-400'
                  case 'Future Focus': return 'text-purple-400'
                  default: return 'text-gray-400'
                }
              }

              const getProgressColor = (status) => {
                switch (status) {
                  case 'Expert': return 'bg-green-400'
                  case 'Learning': return 'bg-yellow-400'
                  case 'Future Focus': return 'bg-purple-400'
                  default: return 'bg-blue-400'
                }
              }

              return (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-semibold text-gray-300">{skill.name}</span>
                      <span className={`ml-2 text-xs font-bold ${getStatusColor(skill.status)}`}>
                        {skill.status}
                      </span>
                    </div>
                    <span className="text-blue-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getProgressColor(skill.status)} rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
