import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Planet } from '../components/Planet'
import { ParticleField } from '../components/ParticleField'
import { Badge } from '../components/ui/Badge'

const logos = ['Acme', 'Globex', 'Hooli', 'Initech', 'Massive']

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(215,255,63,0.08) 0%, transparent 50%)',
        }}
      />

      <ParticleField count={80} className="absolute inset-0" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="pointer-events-none absolute top-[-20%] left-1/2 -translate-x-1/2 md:top-[-30%]">
        <Planet size={700} className="opacity-90 md:size-[900px]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <Badge variant="muted" className="mb-6">
            Web Design & Development Agency
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="max-w-[800px] text-4xl font-extrabold leading-[1.05] text-white md:text-6xl lg:text-hero"
        >
          Turn your big idea into a stunning website
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="mt-6 max-w-[620px] text-lg text-white/65"
        >
          We craft premium, high-converting digital experiences for ambitious brands ready to lead their market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg">
            Let's Connect
          </Button>
          <Button variant="secondary" size="lg">
            View Plans
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          className="mt-16 w-full"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            Trusted by forward thinking companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-lg font-bold text-white/70 transition-opacity duration-300 hover:opacity-100"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
