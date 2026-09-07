import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Marquee } from '../components/Marquee'
import { ScrollReveal } from '../components/ScrollReveal'

const tools = [
  { name: 'Slack', icon: 'S' },
  { name: 'Figma', icon: 'F' },
  { name: 'Notion', icon: 'N' },
  { name: 'GitHub', icon: 'G' },
  { name: 'Framer', icon: 'Fr' },
  { name: 'Stripe', icon: 'St' },
  { name: 'Zapier', icon: 'Z' },
  { name: 'Linear', icon: 'L' },
]

export function Integrations() {
  return (
    <section className="overflow-hidden bg-surface-100 py-20 md:py-24 lg:py-section-desktop">
      <Container className="mb-12 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Seamless Integration
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/65">
            Connect with the tools your team already uses every day.
          </p>
          <Button variant="primary" className="mt-8">
            View Integrations
          </Button>
        </ScrollReveal>
      </Container>

      <Marquee speed={25}>
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="mx-3 flex h-20 items-center gap-3 rounded-2xl border border-white/[0.08] bg-surface-200/60 px-6 backdrop-blur-xl"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white">
              {tool.icon}
            </div>
            <span className="font-semibold text-white">{tool.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
