import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { TrustStats } from './sections/TrustStats'
import { Features } from './sections/Features'
import { Partners } from './sections/Partners'
import { Benefits } from './sections/Benefits'
import { Integrations } from './sections/Integrations'
import { Testimonial } from './sections/Testimonial'
import { Pricing } from './sections/Pricing'
import { FAQ } from './sections/FAQ'
import { Blog } from './sections/Blog'
import { FinalCTA } from './sections/FinalCTA'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-background text-white">
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <Features />
        <Partners />
        <Benefits />
        <Integrations />
        <Testimonial />
        <Pricing />
        <FAQ />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
