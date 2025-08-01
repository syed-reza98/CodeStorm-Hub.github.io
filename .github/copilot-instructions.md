# Copilot Instructions for CodeStorm Hub Portfolio Website

## Project Overview
- Modern Jekyll portfolio site built for GitHub Pages deployment
- All content managed via HTML files, Jekyll includes/layouts, and `_config.yml`
- No backend or build tools; interactivity is vanilla JavaScript ES6+
- Recently enhanced with comprehensive accessibility, PWA, and performance features

## Architecture & Key Patterns

### Jekyll Structure
- **Layouts**: `_layouts/default.html` defines site-wide template with meta tags, PWA manifest, and structured data
- **Includes**: `_includes/header.html` and `_includes/footer.html` for reusable components
- **Pages**: Front matter drives content, all use `layout: default`
- **Assets**: Direct paths (`assets/css/style.css`, `assets/js/main.js`) for local dev compatibility

### JavaScript Architecture (`assets/js/main.js`)
- **Module Pattern**: All features initialized on DOMContentLoaded via `initialize*()` functions
- **Accessibility First**: Every interactive element has ARIA labels, keyboard navigation, and focus management
- **Component Examples**: `initializeNavigation()`, `initializePortfolioFilter()`, `initializeAccessibility()`
- **Focus Trapping**: Implemented for mobile menu and modals with `trapFocus()` utility
- **Screen Reader Support**: `announceToScreenReader()` for dynamic content changes

### CSS Architecture (`assets/css/style.css`)
- **CSS Custom Properties**: Extensive theming system with `:root` variables and `[data-theme]` selectors
- **Mobile-First**: All responsive design starts from mobile breakpoints
- **No Frameworks**: Pure CSS Grid/Flexbox with custom component system
- **Accessibility**: WCAG AA compliant colors, focus indicators, and touch targets (44px minimum)

## Critical Developer Workflows

### Local Development (Jekyll NOT Required)
- **HTTP Server**: `python -m http.server 8080` for immediate testing
- **Asset Paths**: Use direct paths (`assets/css/style.css`) not Jekyll templating for local dev
- **Template Fix**: Jekyll syntax `{{ '/assets/css/style.css' | relative_url }}` requires Jekyll processing

### Jekyll Template Management
- **Production**: GitHub Pages processes Jekyll templates automatically
- **Local Dev**: Templates remain unprocessed, use fallback CSS/JS links in `_layouts/default.html`
- **Navigation**: Jekyll `relative_url` filter used in includes for deployment compatibility

### Performance & PWA Features
- **Service Worker**: Registered in `main.js` via `initializeServiceWorker()`
- **Manifest**: PWA manifest linked in default layout
- **Lazy Loading**: All images except hero use `loading="lazy"`

## Project-Specific Conventions

### Component Naming
- CSS: `.component-name` with modifiers like `.component-name--variant`
- JS: `initializeComponentName()` functions with camelCase
- Interactive elements: Always include ARIA labels and keyboard handlers

### Content Management Patterns
- **Services**: Update `services.html` service cards and FAQ sections
- **Portfolio**: Modify `portfolio.html` project grid and modal data
- **Navigation**: Update `_includes/header.html` for site-wide nav changes
- **Theming**: Modify CSS custom properties in `:root` for color/spacing changes

### Accessibility Requirements
- **Interactive Elements**: All must have `aria-label`, keyboard navigation, and proper roles
- **Focus Management**: Implement focus trapping for overlays/modals
- **Dynamic Content**: Use `announceToScreenReader()` for screen reader updates
- **Color Contrast**: Maintain WCAG AA compliance (checked in recent implementation)

## Integration Points & Dependencies

### External Services
- **Font Awesome**: Icons via CDN (version 6.4.0)
- **Google Fonts**: Inter & Poppins via preconnect optimized loading
- **No Analytics**: Google Analytics conditionally loaded via `_config.yml`

### Asset Loading Strategy
- **Critical CSS**: Inlined theme script prevents FOUC
- **Loading Order**: CSS before JS, external resources preconnected
- **Fallbacks**: Direct asset paths as fallbacks for Jekyll template paths

## Debugging & Common Issues

### CSS Not Loading
- **Cause**: Jekyll templates not processed locally
- **Fix**: Ensure fallback CSS link exists in `_layouts/default.html`
- **Test**: Use `css-diagnosis.html` for comprehensive testing

### Navigation/Modal Issues
- **Focus Trapping**: Check `trapFocus()` implementation in `main.js`
- **ARIA States**: Verify `aria-expanded`, `aria-controls` attributes
- **Mobile Menu**: Ensure hamburger animation and focus management work

### Performance Optimization
- **Images**: Verify `loading="lazy"` on non-critical images
- **Minification**: Manual process for production deployment
- **Service Worker**: Check registration and caching strategy in `sw.js`

## Key Implementation Examples
- **Adding Service**: Update service cards in `services.html`, maintain ARIA structure
- **Portfolio Project**: Add to `portfolio.html` grid, update modal data and filtering
- **Accessibility**: Reference `initializeAccessibility()` for patterns
- **PWA Enhancement**: Follow service worker pattern in `main.js`

## Critical Files for Context
- `bug_fix_and_improvemnts.md`: Recent enhancement requirements
- `IMPLEMENTATION_SUMMARY.md`: Completed accessibility/performance work
- `CSS_FIX_SUMMARY.md`: Asset linking solutions
- `README.md`: Comprehensive feature documentation

---
Recent major improvements: Complete accessibility overhaul, PWA implementation, mobile responsiveness, and performance optimization. All interactive features now have full keyboard navigation and screen reader support.
