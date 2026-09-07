import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { ScrollReveal } from '../components/ScrollReveal'
import { Star } from 'lucide-react'

export function Testimonial() {
  return (
    <section id="testimonial" className="py-20 md:py-24 lg:py-section-desktop">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-gradient-to-br from-surface-300 to-black">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
                  Featured Client
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="p-8 md:p-12">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-6 text-2xl font-medium leading-relaxed text-white md:text-3xl">
                "Working with Setrex felt like hiring an in-house product team. They understood our vision immediately and shipped a site that doubled our demo requests."
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent-secondary" />
                <div>
                  <p className="font-semibold text-white">Marcus Reid</p>
                  <p className="text-sm text-white/60">Founder, FutureScale</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
