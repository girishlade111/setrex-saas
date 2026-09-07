import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { ScrollReveal } from '../components/ScrollReveal'
import { Badge } from '../components/ui/Badge'

const posts = [
  {
    category: 'Strategy',
    title: 'How to design a SaaS landing page that converts',
    date: 'Dec 12, 2024',
  },
  {
    category: 'Development',
    title: 'Why we build performant marketing sites with React',
    date: 'Dec 5, 2024',
  },
  {
    category: 'Design',
    title: 'The anatomy of a premium dark-mode interface',
    date: 'Nov 28, 2024',
  },
]

export function Blog() {
  return (
    <section className="py-20 md:py-24 lg:py-section-desktop">
      <Container>
        <ScrollReveal className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Latest insights
          </h2>
          <a href="#" className="text-sm font-semibold text-accent hover:underline">
            View all articles →
          </a>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="h-full overflow-hidden p-0" hover={false}>
                  <div className="group relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-surface-300 to-black">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <Badge variant="muted" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-white transition-colors hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/50">{post.date}</p>
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
