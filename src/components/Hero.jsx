export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left">
            <div className="mb-6">
              <span className="inline-block text-blue-400 font-semibold text-lg">
                🧠 BCI Researcher × Neural Signal Processing × AI Engineer
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Namra Acharya
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Welcome! I'm dedicated to advancing Brain-Computer Interface technology through rigorous signal processing, neural decoding algorithms, and AI-driven solutions. My work focuses on bridging the gap between brain activity and computational systems.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-blue-400/50 bg-gradient-to-br from-blue-500/20 to-blue-500/10">
              <svg
                className="w-full h-full p-8 text-blue-400"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="30" r="20" opacity="0.3" />
                <circle cx="30" cy="70" r="15" opacity="0.2" />
                <circle cx="70" cy="65" r="18" opacity="0.25" />
                <path d="M50 30 L30 70 L70 65 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
