import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { useScrollPosition } from '../hooks/useScrollPosition'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#features' },
  { label: 'About', href: '#testimonial' },
  { label: 'Pricing', href: '#pricing' },
]

export function Header() {
  const scrollY = useScrollPosition()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrolled = scrollY > 50

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 ${
        isScrolled
          ? 'border-b border-white/[0.08] bg-background/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <Container size="container" className="flex h-full items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-black">
            S
          </div>
          Setrex
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button variant="primary" size="sm">
            Book a Call
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/[0.08] bg-background/95 backdrop-blur-xl md:hidden"
          >
            <Container size="container" className="flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-white/80 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Button variant="ghost">Login</Button>
                <Button variant="primary">Book a Call</Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
