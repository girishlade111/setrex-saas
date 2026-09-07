import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { ScrollReveal } from '../components/ScrollReveal'

const partners = [
  { name: 'OpenAI', initials: 'OI' },
  { name: 'Anthropic', initials: 'An' },
  { name: 'Cohere', initials: 'Co' },
  { name: 'Stability', initials: 'St' },
  { name: 'Hugging Face', initials: 'HF' },
  { name: 'Midjourney', initials: 'MJ' },
]

export function Partners() {
  return (
    <section className="py-20 md:py-24 lg:py-section-desktop">
      <Container>
        <ScrollReveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Supported by leading AI and future-focused investors.
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 0.05}>
              <motion.div whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="flex items-center gap-3 px-5 py-4" hover>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                    {partner.initials}
                  </div>
                  <span className="font-semibold text-white">{partner.name}</span>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
