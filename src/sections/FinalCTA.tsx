import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Planet } from '../components/Planet'
import { ParticleField } from '../components/ParticleField'
import { ScrollReveal } from '../components/ScrollReveal'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-section-desktop">
      <div className="absolute inset-0 bg-surface-100" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(215,255,63,0.08) 0%, transparent 60%)',
        }}
      />
      <ParticleField count={50} className="absolute inset-0" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="pointer-events-none absolute bottom-[-30%] left-1/2 -translate-x-1/2 opacity-60">
        <Planet size={500} />
      </div>

      <Container className="relative z-10 text-center">
        <ScrollReveal>
          <h2 className="mx-auto max-w-[800px] text-3xl font-extrabold leading-[1.05] text-white md:text-5xl lg:text-6xl">
            Turn your big idea into a stunning website
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
            Let's build a digital experience that sets your brand apart and drives real business growth.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg">
              Let's Connect
            </Button>
            <Button variant="secondary" size="lg">
              View Plans
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
