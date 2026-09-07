import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { ScrollReveal } from '../components/ScrollReveal'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter Plan',
    price: '$2,500',
    period: '/project',
    description: 'Perfect for early-stage startups validating their brand.',
    features: [
      'Single landing page',
      'Mobile-responsive design',
      '3 revision rounds',
      'Basic SEO setup',
      '2 weeks delivery',
    ],
    highlighted: false,
  },
  {
    name: 'Enterprise Plan',
    price: '$8,500',
    period: '/project',
    description: 'For companies that need a full conversion-ready experience.',
    features: [
      'Multi-page marketing site',
      'Custom animations',
      'Unlimited revisions',
      'Advanced SEO & analytics',
      'Priority support',
      '4 weeks delivery',
    ],
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-24 lg:py-section-desktop">
      <Container>
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Flexible pricing for every stage
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/65">
            Transparent project pricing with no hidden fees.
          </p>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card
                  className={`h-full p-8 md:p-10 ${
                    plan.highlighted
                      ? 'border-accent/30 bg-accent text-black'
                      : 'border-white/[0.08] bg-surface-200/60'
                  }`}
                  hover={false}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-bold ${plan.highlighted ? 'text-black' : 'text-white'}`}>
                      {plan.name}
                    </h3>
                    {plan.highlighted && <Badge variant="muted">Popular</Badge>}
                  </div>
                  <p className={`mt-2 text-sm ${plan.highlighted ? 'text-black/70' : 'text-white/60'}`}>
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-black' : 'text-white'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.highlighted ? 'text-black/70' : 'text-white/60'}>
                      {plan.period}
                    </span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`mt-0.5 h-5 w-5 shrink-0 ${plan.highlighted ? 'text-black' : 'text-accent'}`} />
                        <span className={plan.highlighted ? 'text-black/80' : 'text-white/80'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlighted ? 'secondary' : 'primary'}
                    className="mt-8 w-full"
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
