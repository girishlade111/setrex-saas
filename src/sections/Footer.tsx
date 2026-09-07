import { Container } from '../components/ui/Container'
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react'

const footerLinks = {
  Company: ['About', 'Careers', 'Blog', 'Press'],
  Services: ['Web Design', 'Development', 'Branding', 'Strategy'],
  Resources: ['Documentation', 'Case Studies', 'FAQ', 'Support'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
}

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Github, label: 'GitHub' },
  { icon: Instagram, label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-background py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-black">
                S
              </div>
              Setrex
            </a>
            <p className="mt-4 text-sm text-white/50">
              Premium web design and development for ambitious brands.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {category}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Setrex. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/60 transition-colors hover:border-white/20 hover:text-white"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
