/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: {
          DEFAULT: '#0A0A0A',
          100: '#0A0A0A',
          200: '#101010',
          300: '#151515',
        },
        border: 'rgba(255,255,255,0.08)',
        accent: {
          DEFAULT: '#D7FF3F',
          secondary: '#B7FF00',
        },
        primary: '#FFFFFF',
        secondary: 'rgba(255,255,255,0.65)',
        muted: 'rgba(255,255,255,0.45)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.05', fontWeight: '800' }],
        'hero-mobile': ['42px', { lineHeight: '1.05', fontWeight: '800' }],
        'stat': ['72px', { lineHeight: '1', fontWeight: '700' }],
      },
      maxWidth: {
        'container': '1440px',
        'content': '1200px',
      },
      borderRadius: {
        'card': '24px',
      },
      boxShadow: {
        'premium': '0 10px 40px rgba(0,0,0,0.45)',
        'glow': '0 0 60px rgba(215,255,63,0.18)',
        'glow-sm': '0 0 30px rgba(215,255,63,0.12)',
      },
      spacing: {
        'section-desktop': '140px',
        'section-tablet': '100px',
        'section-mobile': '80px',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
