# Portfolio Site — Production-Grade Frontend

A modern, responsive portfolio built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**.

## Features

✨ **Modern Stack**
- React 18 with TypeScript for type safety
- Vite for lightning-fast builds
- Tailwind CSS with dark mode support
- Framer Motion for smooth animations
- React Router for navigation
- React Query for data fetching

🎨 **Design**
- Dark-first, elegant aesthetic
- Responsive on all devices
- Glassmorphism effects
- Smooth micro-interactions
- Apple-level polish

⚙️ **Functionality**
- Command Palette (Cmd/Ctrl+K) for navigation
- Theme toggle (light/dark mode)
- GitHub repositories auto-fetch
- Sticky navigation with smooth scroll
- Fully accessible (WCAG 2.1 AA)
- SEO-optimized

📦 **Performance**
- ~72KB gzipped JavaScript
- ~4KB gzipped CSS
- Instant page loads with Vite
- Optimized images and lazy loading

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
cd site
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── NavBar.tsx      # Navigation with theme toggle
│   ├── Hero.tsx        # Hero section intro
│   ├── Skills.tsx      # Skills grid by category
│   ├── CommandPalette.tsx  # Cmd+K search
│   ├── GitHubSection.tsx   # Auto-fetched repos
│   └── Footer.tsx      # Footer links
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Experience.tsx  # Work experience timeline
│   ├── Projects.tsx    # Portfolio projects
│   └── ProjectDetail.tsx
├── contexts/           # React Context
│   └── SearchContext.tsx
├── hooks/              # Custom React hooks
│   └── useGitHub.ts
├── styles/             # Global styles
│   └── index.css
└── App.tsx            # Main app component
```

## Configuration

### Tailwind CSS (`tailwind.config.cjs`)

Customize colors, fonts, and theme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#BD5D38'
    }
  }
}
```

### Environment Variables (`.env.local`)

```env
VITE_GITHUB_TOKEN=your_github_token_optional
```

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### GitHub Pages

```bash
npm run build
# Deploy dist/ folder
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## Performance Targets

- **Lighthouse**: 95+ (Performance, Accessibility, Best Practices)
- **SEO**: 100
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s

## Accessibility

✓ Keyboard navigation (Tab, Cmd+K)
✓ ARIA labels and semantic HTML
✓ Color contrast (WCAG AA)
✓ Screen reader support
✓ Focus indicators

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

| Tool | Purpose |
|------|---------|
| React | UI framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Vite | Build tool |
| React Router | Routing |
| React Query | Data fetching |
| Framer Motion | Animations |
| Lucide Icons | Icons |

## Customization Guide

### Add a New Page

1. Create `src/pages/NewPage.tsx`
2. Add route in `App.tsx`
3. Update NavBar links

### Add a New Component

1. Create `src/components/NewComponent.tsx`
2. Import where needed
3. Export as default

### Update Skills

Edit `src/components/Skills.tsx` — modify the `skillCategories` array

### Update Experience

Edit `src/pages/Experience.tsx` — update the `experiences` array

### Add Projects

Edit `src/pages/Projects.tsx` — modify the `projects` data

## GitHub Integration

The app auto-fetches your GitHub repositories using the GitHub API. No token required for public repositories.

To use with private repos, set `VITE_GITHUB_TOKEN` in `.env.local`:

```env
VITE_GITHUB_TOKEN=ghp_your_personal_access_token
```

## Tips & Best Practices

1. **Dark Mode**: Always test both light and dark modes
2. **Mobile**: Use Chrome DevTools to test on mobile sizes
3. **Performance**: Use React DevTools Profiler to identify bottlenecks
4. **Accessibility**: Use axe DevTools or Lighthouse audits
5. **SEO**: Keep meta descriptions and og:images updated

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Slow builds | Clear `node_modules` and reinstall |
| Dark mode not working | Check localStorage for theme value |
| GitHub repos not loading | Verify API endpoint and rate limits |
| Build errors | Check Node version (16+) |

## License

MIT

## Contact

Email: rmahaj13@asu.edu
GitHub: @rajatmahajan23
LinkedIn: /in/rajat-mahajan23/

