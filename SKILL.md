\---

name: design-system-setrex

description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.

\---



<!-- TYPEUI\_SH\_MANAGED\_START -->



\# Setrex



\## Mission

Deliver implementation-ready design-system guidance for Setrex that can be applied consistently across marketing site interfaces.



\## Brand

\- Product/brand: Setrex

\- URL: https://setrex-saas-template.framer.ai/

\- Audience: buyers, teams, and decision-makers

\- Product surface: marketing site



\## Style Foundations

\- Visual style: structured, accessible, implementation-first

\- Main font style: `font.family.primary=Inter Display`, `font.family.stack=Inter Display, Inter Display Placeholder, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`

\- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=16px`, `font.size.lg=18px`, `font.size.xl=20px`, `font.size.2xl=24px`, `font.size.3xl=32px`, `font.size.4xl=42px`

\- Color palette: `color.text.primary=#ffffff`, `color.text.secondary=#e0e0e0`, `color.text.tertiary=#0000ee`, `color.text.inverse=#010104`, `color.surface.base=#000000`, `color.surface.strong=#cffe25`

\- Spacing scale: `space.1=4px`, `space.2=8px`, `space.3=10px`, `space.4=12px`, `space.5=17px`, `space.6=20px`, `space.7=30px`, `space.8=60px`

\- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=12px`, `radius.md=50px` | `shadow.1=rgba(255, 255, 255, 0.2) 0px 0.5px 0px 0px inset, rgba(0, 63, 189, 0.4) 0px 0px 0px 0.5px` | `motion.duration.instant=500ms`



\## Accessibility

\- Target: WCAG 2.2 AA

\- Keyboard-first interactions required.

\- Focus-visible rules required.

\- Contrast constraints required.



\## Writing Tone

concise, confident, implementation-focused



\## Rules: Do

\- Use semantic tokens, not raw hex values in component guidance.

\- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.

\- Responsive behavior and edge-case handling should be specified for every component family.

\- Accessibility acceptance criteria must be testable in implementation.



\## Rules: Don't

\- Do not allow low-contrast text or hidden focus indicators.

\- Do not introduce one-off spacing or typography exceptions.

\- Do not use ambiguous labels or non-descriptive actions.



\## Guideline Authoring Workflow

1\. Restate design intent in one sentence.

2\. Define foundations and tokens.

3\. Define component anatomy, variants, and interactions.

4\. Add accessibility acceptance criteria.

5\. Add anti-patterns and migration notes.

6\. End with QA checklist.



\## Required Output Structure

\- Context and goals

\- Design tokens and foundations

\- Component-level rules (anatomy, variants, states, responsive behavior)

\- Accessibility requirements and testable acceptance criteria

\- Content and tone standards with examples

\- Anti-patterns and prohibited implementations

\- QA checklist



\## Component Rule Expectations

\- Include keyboard, pointer, and touch behavior.

\- Include spacing and typography token requirements.

\- Include long-content, overflow, and empty-state handling.



\## Quality Gates

\- Every non-negotiable rule must use "must".

\- Every recommendation should use "should".

\- Every accessibility rule must be testable in implementation.

\- Prefer system consistency over local visual exceptions.



<!-- TYPEUI\_SH\_MANAGED\_END -->



