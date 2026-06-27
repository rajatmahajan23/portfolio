# Software Engineer Portfolio — Production Edition

A world-class portfolio website built to showcase backend engineering expertise, distributed systems knowledge, and production-quality code.

## 🚀 Live Site

Visit: [rajatmahajan23.github.io/portfolio/](https://rajatmahajan23.github.io/portfolio/)

## ⚡ Quick Start

### Local Development

```bash
cd site
npm install
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
cd site
npm run build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── site/                 # 🔥 NEW: Production React app
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route pages
│   │   ├── contexts/    # React Context
│   │   ├── hooks/       # Custom hooks
│   │   └── styles/      # Tailwind + custom CSS
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.cjs
│   └── README.md        # Detailed site docs
│
├── index.html           # Legacy template (for reference)
├── css/                 # Legacy styles (for reference)
├── js/                  # Legacy scripts (for reference)
├── scss/                # Legacy SCSS (for reference)
├── vendor/              # Third-party libs
├── img/                 # Assets (profile photo, etc.)
└── README.md            # This file
```

## 🎯 Features

✨ **Modern Stack**
- React 18 + TypeScript
- Vite (blazing fast builds)
- Tailwind CSS (dark mode)
- React Query (data fetching)
- React Router (navigation)
- Framer Motion (animations)

🎨 **Design**
- Dark-first aesthetic
- Responsive & mobile-friendly
- Smooth micro-interactions
- Glassmorphism effects
- Apple-level polish

⚙️ **Functionality**
- Command Palette (Cmd/Ctrl+K)
- Theme toggle (light/dark)
- Auto-fetch GitHub repos
- Sticky navbar
- Fully accessible
- SEO-optimized

📊 **Performance**
- ~73KB gzipped JS
- ~4KB gzipped CSS
- Instant page loads
- Lighthouse 95+

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React 18, TypeScript, Tailwind CSS |
| **Build** | Vite 4, PostCSS |
| **State** | React Context, React Query |
| **Routing** | React Router 6 |
| **Icons** | Lucide React |
| **Animations** | Framer Motion |

## 🚢 Deployment

### Option 1: Vercel (Recommended)

```bash
npm i -g vercel
cd site
vercel
```

### Option 2: GitHub Pages

```bash
cd site
npm run build
# Deploy site/dist folder to gh-pages branch
```

### Option 3: Netlify

```bash
npm i -g netlify-cli
cd site
netlify deploy --prod
```

### Option 4: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY site/package*.json ./
RUN npm install
COPY site/ .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🎨 Customization

### Update Hero Section

Edit `site/src/components/Hero.tsx`:
- Profile photo path: `src/img/profile.jpg`
- Introduction text
- Resume link
- Social links (GitHub, LinkedIn)

### Update Skills

Edit `site/src/components/Skills.tsx`:
- Add/remove skill categories
- Customize skill chips
- Update statistics

### Update Experience

Edit `site/src/pages/Experience.tsx`:
- Add your work history
- Update metrics
- Add technologies

### Update Projects

Edit `site/src/pages/Projects.tsx` and `site/src/pages/ProjectDetail.tsx`:
- Add project case studies
- Include metrics & impact
- Add screenshots/diagrams

### Change Colors

Edit `site/tailwind.config.cjs`:
```javascript
colors: {
  primary: '#YOUR_COLOR'
}
```

## 🔍 Performance Optimization

### Lighthouse Scores

Run audits:
```bash
npm run build
npm run preview
# Use Chrome DevTools > Lighthouse
```

Target: **95+ (Performance, Accessibility, Best Practices)**

### Image Optimization

- Use WebP format
- Compress with tools like TinyPNG
- Lazy load offscreen images
- Responsive images (srcset)

### Code Splitting

Vite automatically code-splits routes — no manual config needed.

## ♿ Accessibility

✓ Keyboard navigation (Tab, Cmd+K)
✓ ARIA labels & semantic HTML
✓ Color contrast (WCAG AA)
✓ Screen reader support
✓ Focus indicators

## 🔐 Security

- No backend — purely static hosting
- All links validated
- Environment variables for sensitive data
- Regular dependency updates

## 📝 Content Guidelines

✅ **Do:**
- Highlight measurable impact (metrics, percentages)
- Explain technical decisions
- Show architectural thinking
- Include real projects & achievements
- Keep writing clear & concise

❌ **Don't:**
- Invent experience
- Fabricate achievements
- Use stock photos or generic descriptions
- Over-animate or distract
- Clutter with unnecessary content

## 🤝 Contributing

This is a personal portfolio. To customize:

1. Fork or clone this repo
2. Edit content in `site/src/`
3. Run `npm run dev` locally
4. Test on mobile & dark mode
5. Deploy when ready

## 📞 Support

For issues or questions:
- Email: rmahaj13@asu.edu
- GitHub Issues: [Create an issue](https://github.com/rajatmahajan23/portfolio/issues)

## 📄 License

MIT — Feel free to use this as a template for your own portfolio.

## 🙏 Credits

- **Design Inspiration**: Stripe, Vercel, Linear, Datadog
- **Framework**: React 18, Vite, Tailwind CSS
- **Hosting**: GitHub Pages, Vercel, Netlify

---

### Next Steps

1. Customize `site/src/` with your content
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Deploy to your hosting platform
5. Share with recruiters and network!

**Happy building!** 🚀
