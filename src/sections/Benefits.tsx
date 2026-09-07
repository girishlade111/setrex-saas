import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { ScrollReveal } from '../components/ScrollReveal'
import { Lightbulb, Users, MessageCircle, MousePointer, Infinity, Shield } from 'lucide-react'

const benefits = [
  {
    icon: Lightbulb,
    title: 'Product Planning',
    description: 'Define the right features and flows before a single line of code is written.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work directly with senior designers and engineers in async or live sessions.',
  },
  {
    icon: MessageCircle,
    title: 'Live Support',
    description: 'Get answers and updates within hours, not days, throughout your project.',
  },
  {
    icon: MousePointer,
    title: 'Easy To Use',
    description: 'Intuitive interfaces built for real users, not just demo screenshots.',
  },
  {
    icon: Infinity,
    title: 'Unlimited Flexibility',
    description: 'Custom components and layouts that fit your brand, not a template.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Production-ready code with performance, accessibility, and SEO in mind.',
  },
]

export function Benefits() {
  return (
    <section className="py-20 md:py-24 lg:py-section-desktop">
      <Container>
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Custom-designed modern products at a world-class standard
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.05}>
              <Card className="h-full p-8" glow>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-black">
                  <benefit.icon size={24} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{benefit.title}</h3>
                <p className="mt-3 text-white/65">{benefit.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
