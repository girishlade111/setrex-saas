# Setrex SaaS Landing Page — Design Spec

## Context and Goal
Build a premium, dark-themed SaaS marketing landing page for Setrex. The page must match the visual hierarchy, spacing rhythm, layout proportions, and interaction quality of the provided reference screenshot. The output must feel like an elite product-design-agency build.

## Source of Truth
The detailed creative brief supplied by the user defines exact tokens, section order, content, and animation values. This spec captures the implementation decisions and structure.

## Tech Stack
- React 18+
- TypeScript
- Vite (project scaffold)
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Responsive, accessible markup

## Design Tokens
- Background: `#050505`
- Surfaces: `#0A0A0A`, `#101010`, `#151515`
- Border: `rgba(255,255,255,0.08)`
- Primary accent: `#D7FF3F`
- Secondary accent: `#B7FF00`
- Text primary: `#FFFFFF`
- Text secondary: `rgba(255,255,255,0.65)`
- Muted: `rgba(255,255,255,0.45)`
- Shadow: `0 10px 40px rgba(0,0,0,0.45)`
- Glow: `0 0 60px rgba(215,255,63,0.18)`
- Radius: `24px`
- Container max: `1440px`
- Content max: `1200px`
- Grid gap: `24px`
- Section spacing: `140px` desktop, `100px` tablet, `80px` mobile

## Component Architecture
Reusable section components, one file per section, plus shared UI primitives.

### Shared primitives
- `Button` — primary, secondary/ghost, with motion hover/tap scales
- `Container` — max-width wrapper
- `Section` — vertical spacing wrapper
- `Card` — glass surface, border, radius, hover lift
- `Badge` — accent or muted labels

### Section components
1. `Header` — fixed 80px navbar, blur-on-scroll, border on scroll, mobile hamburger
2. `Hero` — planet background, headline, subhead, CTAs, trust logos
3. `TrustStats` — two-column testimonial + stats counters
4. `Features` — large feature card + two smaller cards
5. `Partners` — investor/partner avatar row with glow hover
6. `Benefits` — 6-card 3x2 grid
7. `Integrations` — marquee icon strip, pause on hover
8. `Testimonial` — two-column image + quote
9. `Pricing` — two cards, highlighted enterprise
10. `FAQ` — animated accordion
11. `Blog` — 3 blog cards
12. `FinalCTA` — cinematic CTA with planet
13. `Footer` — 4-column links + bottom bar

## Animation System
- Reveal: `initial={{ opacity:0, y:40 }}` → `whileInView={{ opacity:1, y:0 }}`, viewport once/0.2, duration 0.8 easeOut
- Cards: `whileHover={{ y:-8, scale:1.02 }}`
- Buttons: `whileHover={{ scale:1.05 }}`, `whileTap={{ scale:0.97 }}`
- Planet: `animate={{ y:[0,-15,0] }}`, duration 8, repeat Infinity
- Navbar: slide from top on load
- Stats: animated counters
- Integrations: infinite marquee, pause on hover
- FAQ: height-auto accordion with layout animation

## Responsive Breakpoints
- Desktop: `1440px`
- Laptop: `1280px`
- Tablet: `768px`
- Mobile: `390px`

Mobile adaptations: planet scales down, hero headline 42px, stacked cards, single-column pricing, full-width FAQ, hamburger navigation.

## Accessibility
- Semantic HTML (`header`, `main`, `section`, `nav`, `footer`, `button`)
- Focus-visible styles for interactive elements
- Keyboard-navigable accordion and mobile menu
- Sufficient contrast for primary text and accent buttons
- Reduced-motion media query respect for animations

## Assets
- Planet: CSS/SVG gradient sphere with noise overlay (no external image dependency)
- Customer/partner images: placeholder divs with initials or abstract gradients
- Dashboard illustration: abstract UI card with gradient overlay
- Company logos: simple monochrome SVG wordmarks
- Blog images: gradient placeholders

## Anti-patterns
- No one-off raw hex values outside the token set
- No layout shifts on load
- No bright colors beyond lime accent
- No inaccessible hidden focus states

## QA Checklist
- [ ] Vite project scaffolds and dev server runs
- [ ] All 14 sections render in order
- [ ] Responsive at 390px, 768px, 1280px, 1440px
- [ ] Animations run at 60fps without jank
- [ ] Focus states visible on all interactive elements
- [ ] Mobile menu opens/closes with keyboard
- [ ] FAQ accordion expands/collapses smoothly
- [ ] No console errors or TypeScript errors
