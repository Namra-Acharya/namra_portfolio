export default function Skills() {
  const skills = [
    {
      title: 'Python Scientific Stack',
      desc: '90%+ proficiency in NumPy, Pandas, and Matplotlib. Expert-level data manipulation, numerical computing, and visualization.',
      subskills: ['NumPy (95%)', 'Pandas (95%)', 'Matplotlib (90%)', 'SciPy'],
      level: 'Expert',
      icon: '🐍'
    },
    {
      title: 'EEG Signal Processing & Analysis',
      desc: 'Deep expertise in brain signal processing. Pre-processing, artifact removal, feature extraction, and real-time signal pipelines.',
      subskills: ['EEG Pre-processing', 'FFT/Wavelets', 'Feature Extraction', 'Real-time Processing'],
      level: 'Expert',
      icon: '🧠'
    },
    {
      title: 'Machine Learning',
      desc: 'Currently learning ML fundamentals with focus on classification algorithms, feature engineering, and model evaluation.',
      subskills: ['Classification Algorithms', 'Feature Engineering', 'Model Evaluation', 'Cross-validation'],
      level: 'Learning',
      icon: '📊'
    },
    {
      title: 'Deep Learning (Future Focus)',
      desc: 'Planning to advance into Deep Learning. Focus will be on neural networks for BCI applications.',
      subskills: ['CNNs', 'RNNs', 'Attention Mechanisms', 'Transfer Learning'],
      level: 'Future',
      icon: '🤖'
    },
    {
      title: 'Neural Decoding & BCI Algorithms',
      desc: 'Designing algorithms for brain-computer interfaces. Signal-to-intent mapping, decoder training, and adaptation strategies.',
      subskills: ['Decoding Algorithms', 'Pattern Recognition', 'Calibration', 'Real-time Classification'],
      level: 'Expert',
      icon: '⚡'
    },
    {
      title: 'Web Development & Deployment',
      desc: 'Building web interfaces for BCI systems and data dashboards. Full-stack development and cloud deployment.',
      subskills: ['React', 'Real-time Dashboards', 'WebSockets', 'Cloud Deployment'],
      level: 'Proficient',
      icon: '💻'
    }
  ]

  const getLevelBgColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-green-500/20 text-green-400'
      case 'Learning': return 'bg-yellow-500/20 text-yellow-400'
      case 'Future': return 'bg-purple-500/20 text-purple-400'
      default: return 'bg-blue-500/20 text-blue-400'
    }
  }

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-slate-700/50 bg-slate-800/20 backdrop-blur-sm hover:border-blue-400/50 transition-all"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>

              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold">{skill.title}</h3>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${getLevelBgColor(skill.level)}`}>
                  {skill.level}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">{skill.desc}</p>

              {skill.subskills && (
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-700/30">
                  {skill.subskills.map((subskill, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/30">
                      {subskill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
