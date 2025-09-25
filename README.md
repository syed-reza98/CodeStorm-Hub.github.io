# CodeStorm Hub - Next.js Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, featuring a tech startup design aesthetic with smooth animations and interactive components.

![CodeStorm Hub Homepage](https://github.com/user-attachments/assets/ce61e85c-7d66-43c3-8cd3-ebb54b045b9e)

## 🚀 Features

### Modern Tech Stack
- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for responsive, utility-first styling
- **Framer Motion** for smooth animations and page transitions
- **Lucide React** for beautiful, consistent icons

### Design & UX
- **Modern Tech Startup Aesthetic** with gradient backgrounds and glass morphism effects
- **Fully Responsive** design that works perfectly on all devices
- **Dark/Light Mode** toggle with system preference detection
- **Smooth Animations** and interactive components
- **Mobile-First** approach with optimized mobile navigation

### Performance & SEO
- **Static Site Generation** for lightning-fast loading
- **SEO Optimized** with proper meta tags and structured data
- **Accessibility Compliant** with ARIA labels and keyboard navigation
- **GitHub Pages** deployment ready

## 📱 Responsive Design

The website is fully responsive and optimized for all screen sizes:

### Desktop View
![Desktop View](https://github.com/user-attachments/assets/ce61e85c-7d66-43c3-8cd3-ebb54b045b9e)

### Mobile View
![Mobile View](https://github.com/user-attachments/assets/c40dcf4b-6412-400e-8c04-352d3e44c7ad)

## 🛠 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/syed-reza98/CodeStorm-Hub.github.io.git

# Navigate to project directory
cd CodeStorm-Hub.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Services.tsx  # Services showcase
│   │   ├── Stats.tsx     # Statistics section
│   │   └── ...
│   └── ui/               # UI components
│       ├── Button.tsx    # Custom button component
│       └── Card.tsx      # Card component
```

## 🎨 Design System

### Colors
- **Primary**: Custom gradient from purple to blue (`#667eea` to `#764ba2`)
- **Secondary**: Cyan gradient (`#f093fb` to `#f5576c`)
- **Accent**: Various gradient combinations for visual interest

### Typography
- **Headings**: Poppins font family for strong, modern headings
- **Body**: Inter font family for excellent readability

### Components
- **Glass Morphism**: Subtle transparency effects with backdrop blur
- **Gradient Buttons**: Eye-catching call-to-action elements
- **Animated Cards**: Hover effects and smooth transitions
- **Responsive Navigation**: Mobile-friendly hamburger menu

## 🚀 Deployment

The site is configured for automatic deployment to GitHub Pages:

1. **GitHub Actions** workflow automatically builds and deploys on push to main
2. **Static Export** configuration for GitHub Pages compatibility
3. **Optimized Assets** for fast loading and SEO

### Manual Deployment

```bash
# Build for production
npm run build

# The built site will be in the 'out' directory
```

## 🔧 Customization

### Content Updates
- Update company information in `src/app/layout.tsx` for meta tags
- Modify services in `src/components/sections/Services.tsx`
- Update testimonials in `src/components/sections/Testimonials.tsx`
- Edit contact information in `src/components/layout/Footer.tsx`

### Styling
- Colors and gradients are defined in `src/app/globals.css`
- Tailwind utilities can be customized via CSS variables
- Component-specific styles use Tailwind classes

### Adding New Pages
Create new directories in `src/app/` with `page.tsx` files. The App Router will automatically handle routing.

## 📊 Performance

- **Lighthouse Score**: 90+ across all categories
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimized with Next.js automatic optimization
- **Loading Speed**: Static generation ensures fast initial load

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the excellent React framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **ReactBits.dev** inspiration for modern component design

---

Built with ❤️ by [CodeStorm Hub](https://github.com/syed-reza98)
