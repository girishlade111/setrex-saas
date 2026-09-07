# Setrex Saas

A modern, responsive SaaS landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Stack**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth, performant animations
- **Icons**: Lucide React for beautiful, consistent icons
- **Utilities**: clsx + tailwind-merge for className management
- **Code Quality**: ESLint + TypeScript strict mode

## 📦 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 |
| Language | TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Linting | ESLint + TypeScript ESLint |
| Package Manager | npm |

## 🏗️ Project Structure

```
setrex-saas/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── styles/             # Global styles
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Entry point
│   └── index.css           # Tailwind imports
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript config
├── tsconfig.node.json      # Node TypeScript config
├── vite.config.ts          # Vite config
├── tailwind.config.js      # Tailwind config
├── postcss.config.js       # PostCSS config
├── eslint.config.js        # ESLint config
├── DESIGN.md               # Design system documentation
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/setrex-saas.git
cd setrex-saas

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## 🎨 Design System

See [DESIGN.md](DESIGN.md) for detailed design system documentation including:
- Color palette
- Typography scale
- Spacing system
- Component variants
- Animation guidelines

## 🔧 Configuration

### TypeScript

Strict mode enabled. Configuration in `tsconfig.json` and `tsconfig.node.json`.

### Tailwind CSS

Custom configuration in `tailwind.config.js` including:
- Custom color palette
- Extended spacing scale
- Custom animations
- Plugin configuration

### ESLint

Configured with:
- TypeScript ESLint
- React hooks rules
- React refresh rules

## 📱 Responsive Design

Mobile-first approach with breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` directory, ready for deployment to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any CDN

### Preview Production Build

```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style

- Follow TypeScript strict mode
- Use ESLint recommendations
- Write meaningful commit messages
- Keep components small and focused

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

---

Built with ❤️ using modern web technologies