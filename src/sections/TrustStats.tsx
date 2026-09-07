import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { ScrollReveal } from '../components/ScrollReveal'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { Quote } from 'lucide-react'

export function TrustStats() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <Card className="flex h-full flex-col justify-between p-8 md:p-12" glow>
              <Quote className="h-10 w-10 text-accent" />
              <p className="mt-6 text-2xl font-medium leading-relaxed text-white md:text-3xl">
                "Setrex transformed our entire digital presence. The attention to detail and conversion focus exceeded every expectation."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-accent to-accent-secondary" />
                <div>
                  <p className="font-semibold text-white">Sarah Chen</p>
                  <p className="text-sm text-white/60">CEO, Acme Corp</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <div className="grid gap-6">
            <ScrollReveal delay={0.1}>
              <Card className="flex flex-col justify-center p-8 md:p-10">
                <AnimatedCounter
                  value={15}
                  suffix="+"
                  className="text-5xl font-bold text-accent md:text-stat"
                />
                <p className="mt-2 text-lg text-white/65">Projects Delivered</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="flex flex-col justify-center p-8 md:p-10">
                <AnimatedCounter
                  value={98}
                  suffix="%"
                  className="text-5xl font-bold text-accent md:text-stat"
                />
                <p className="mt-2 text-lg text-white/65">Customer Satisfaction</p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
