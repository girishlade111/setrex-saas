import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { ScrollReveal } from '../components/ScrollReveal'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Why should I trust your agency?',
    answer:
      'We have delivered 15+ premium sites for AI, SaaS, and enterprise teams. Every project is led by senior designers and engineers, with a focus on measurable conversion outcomes.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'A focused landing page typically ships in 2 weeks. A full multi-page marketing site usually takes 4 weeks, depending on scope and feedback speed.',
  },
  {
    question: 'Do you work internationally?',
    answer:
      'Yes. Our team works asynchronously across time zones and schedules live checkpoints that fit your calendar.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We specialize in AI, SaaS, fintech, and enterprise technology companies, but our process works for any ambitious brand.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We primarily use React, TypeScript, Next.js, Tailwind CSS, and Framer Motion. We can adapt to your preferred stack when needed.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-24 lg:py-section-desktop">
      <Container>
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Frequently asked questions
          </h2>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.question} delay={i * 0.05}>
              <div className="rounded-card border border-white/[0.08] bg-surface-200/60 backdrop-blur-xl">
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {openIndex === i ? (
                    <Minus className="h-5 w-5 text-accent" />
                  ) : (
                    <Plus className="h-5 w-5 text-white/60" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-white/65">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
