import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, link: 'https://github.com/Namra-Acharya', label: 'GitHub' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/namra-acharya-b28490358/', label: 'LinkedIn' },
    { icon: Twitter, link: '#', label: 'Twitter' }
  ]

  return (
    <footer className="relative py-12 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon
              return (
                <a
                  key={idx}
                  href={social.link}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full border-2 border-blue-400/30 flex items-center justify-center text-blue-400 hover:border-blue-400 hover:bg-blue-400/10 transition-all"
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              © {currentYear} Namra Acharya. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Crafted with ❤️ using React & Vite
            </p>
          </div>

          <a
            href="#home"
            className="px-6 py-2 text-blue-400 border border-blue-400/50 rounded-full hover:border-blue-400 hover:bg-blue-400/10 transition-all text-sm"
          >
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  )
}
