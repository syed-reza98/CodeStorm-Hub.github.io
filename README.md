# CodeStorm Hub - Company Portfolio Website

A comprehensive, modern portfolio website built with Jekyll for GitHub Pages. This website showcases our technology services, team, and successful projects while providing an excellent user experience across all devices.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with seamless adaptation to all screen sizes
- **Dark/Light Theme Toggle**: User-preferred theme with system preference detection
- **Performance Optimized**: Fast loading times with optimized assets and modern web standards
- **SEO Optimized**: Complete meta tags, OpenGraph, and structured data implementation
- **Accessibility Compliant**: Enhanced ARIA labels, keyboard navigation, focus management, and screen reader support
- **PWA Ready**: Service worker, web app manifest, and offline capabilities

### Page Structure
- **Homepage**: Hero section, services overview, portfolio highlights, client testimonials
- **About Page**: Company story, team profiles, mission/vision, company timeline
- **Services Page**: Detailed service offerings, pricing tiers, process overview, enhanced FAQ
- **Portfolio Page**: Project showcase with filtering, case studies, project details modal
- **Contact Page**: Contact form with validation, company information, interactive map

### Interactive Features
- **Smooth Scrolling Navigation**: Animated scroll-to-section functionality
- **Portfolio Filtering**: Filter projects by category with smooth animations
- **Testimonial Slider**: Auto-playing carousel with touch/swipe support
- **Contact Form Validation**: Real-time validation with user-friendly error messages
- **Enhanced FAQ Accordions**: Fully accessible accordions with proper ARIA attributes
- **Loading Animations**: Engaging micro-interactions and scroll-triggered animations
- **Keyboard Navigation**: Complete keyboard accessibility for all interactive elements
- **Focus Management**: Proper focus trapping in modals and navigation

## 🔧 Recent Improvements

### Accessibility Enhancements
- ✅ Enhanced ARIA labels and attributes for all interactive elements
- ✅ Improved keyboard navigation with proper tab order
- ✅ Focus trapping in modals and mobile menu
- ✅ Enhanced focus indicators with better visibility
- ✅ Screen reader announcements for dynamic content
- ✅ Proper semantic markup and roles

### Mobile Responsiveness
- ✅ Improved mobile menu with better touch targets (44px minimum)
- ✅ Enhanced touch/swipe support for testimonial slider
- ✅ Better mobile navigation with proper ARIA states
- ✅ Optimized breakpoints and layouts for all devices

### Performance Optimizations
- ✅ Lazy loading implemented for all images
- ✅ Service worker for offline capabilities and faster repeat visits
- ✅ Web app manifest for PWA features
- ✅ Optimized animations and transitions

### UI/UX Improvements
- ✅ Enhanced button styles with micro-interactions
- ✅ Better color contrast for improved accessibility (WCAG AA)
- ✅ Consistent use of CSS custom properties for theming
- ✅ Smooth animations and hover effects
- ✅ Loading states and visual feedback

### Technical Enhancements
- ✅ Service worker implementation for PWA features
- ✅ Web app manifest for mobile installation
- ✅ Enhanced meta tags and SEO optimization
- ✅ Better error handling and form validation

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup with accessibility best practices
- **CSS3**: Modern features including Grid, Flexbox, custom properties, and animations
- **JavaScript (ES6+)**: Vanilla JavaScript for optimal performance
- **Jekyll**: Static site generator for GitHub Pages

### Styling & Design
- **Custom CSS**: No external CSS frameworks for optimal performance
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: Consistent theming and easy customization
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Professional typography (Inter & Poppins)

### Development Tools
- **GitHub Pages**: Hosting and deployment
- **Jekyll**: Static site generation
- **Git**: Version control
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
CodeStorm-Hub.github.io/
├── _config.yml              # Jekyll configuration
├── _includes/               # Reusable components
│   ├── header.html         # Navigation header
│   └── footer.html         # Site footer
├── _layouts/               # Page templates
│   └── default.html        # Main layout template
├── assets/                 # Static assets
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/             # Image assets
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── portfolio.html          # Portfolio page
├── contact.html            # Contact page
├── robots.txt              # Search engine directives
└── README.md               # This file
```

## 🚦 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io.git
   cd CodeStorm-Hub.github.io
   ```

2. **Install Jekyll (optional for local testing)**
   ```bash
   gem install bundler jekyll
   bundle install
   ```

3. **Serve locally**
   ```bash
   bundle exec jekyll serve
   ```
   
   The site will be available at `http://localhost:4000`

### GitHub Pages Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch.

## 🎨 Customization

### Theming
The site uses CSS custom properties for easy theming. Main color variables are defined in `:root` and can be modified in `assets/css/style.css`.

### Content Updates
- **Company Information**: Update `_config.yml` for site-wide settings
- **Team Members**: Modify the team section in `about.html`
- **Services**: Update service offerings in `services.html`
- **Portfolio**: Add new projects in `portfolio.html`
- **Contact Details**: Update contact information in `contact.html`

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- **Mobile**: Optimized for phones (320px and up)
- **Tablet**: Enhanced layout for tablets (768px and up)
- **Desktop**: Full-featured experience (1024px and up)
- **Large Screens**: Optimized for large displays (1440px and up)

## ⚡ Performance Features

- **Optimized Images**: Proper sizing and lazy loading
- **Minified Assets**: Compressed CSS and JavaScript
- **Efficient Animations**: Hardware-accelerated CSS transitions
- **Fast Loading**: Optimized critical rendering path

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **OpenGraph**: Social media sharing optimization
- **Structured Data**: Schema.org markup for search engines
- **Sitemap**: Automatic sitemap generation via Jekyll
- **Robots.txt**: Search engine crawler directives

## ♿ Accessibility Features

- **ARIA Labels**: Proper accessibility labels
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic markup and announcements
- **Color Contrast**: WCAG AA compliant color ratios
- **Focus Management**: Visible focus indicators

## 🧪 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+

---

**Built with ❤️ by the CodeStorm Hub team**