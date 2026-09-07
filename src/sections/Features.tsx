import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { ScrollReveal } from '../components/ScrollReveal'
import { Zap, Headphones } from 'lucide-react'

export function Features() {
  return (
    <section id="features" className="py-20 md:py-24 lg:py-section-desktop">
      <Container>
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Create websites like never before.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/65">
            A complete design and development partnership for teams that want to move fast without sacrificing quality.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="mb-6 p-8 md:p-12" glow>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-white md:text-4xl">
                  Design that converts visitors into customers.
                </h3>
                <p className="mt-4 text-lg text-white/65">
                  We combine strategic UX, premium visuals, and performance engineering to build pages that load fast and convert faster.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-surface-300 to-black">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 top-4 rounded-xl border border-white/10 bg-surface-200/80 p-4">
                  <div className="h-2 w-1/3 rounded bg-white/10" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="h-16 rounded bg-white/5" />
                    <div className="h-16 rounded bg-white/5" />
                    <div className="h-16 rounded bg-white/5" />
                  </div>
                  <div className="mt-3 h-24 rounded bg-white/5" />
                </div>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <Card className="p-8 md:p-10" glow>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-black">
                <Zap size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white md:text-2xl">
                Easy Integration
              </h3>
              <p className="mt-3 text-white/65">
                Drop our components into your existing stack. React, Next.js, or any modern framework — we adapt to you.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="p-8 md:p-10" glow>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-black">
                <Headphones size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white md:text-2xl">
                Dedicated Support Team
              </h3>
              <p className="mt-3 text-white/65">
                A senior designer and engineer assigned to your project from kickoff through launch and beyond.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
