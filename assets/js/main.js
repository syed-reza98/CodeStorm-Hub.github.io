// Main JavaScript file for CodeStorm Hub website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeThemeToggle();
    initializeScrollEffects();
    initializeAnimations();
    initializeTestimonialSlider();
    initializeFormHandlers();
    initializeLoadingSpinner();
    initializeAccessibility();
    initializePortfolioFilter();
    initializeContactForm();
});

// Navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    
    // Mobile menu toggle
    if (mobileMenuBtn && navbarMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navbarMenu.classList.toggle('active');
            
            // Animate hamburger lines
            const lines = this.querySelectorAll('.hamburger-line');
            lines.forEach((line, index) => {
                if (navbarMenu.classList.contains('active')) {
                    if (index === 0) line.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) line.style.opacity = '0';
                    if (index === 2) line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    line.style.transform = '';
                    line.style.opacity = '';
                }
            });
        });
    }
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarMenu && navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                if (mobileMenuBtn) {
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
                    lines.forEach(line => {
                        line.style.transform = '';
                        line.style.opacity = '';
                    });
                }
            }
        });
    });
    
    // Header scroll effect
    if (header) {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.style.transform = currentScrollY > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';
                header.style.boxShadow = 'var(--shadow-lg)';
            } else {
                header.style.transform = 'translateY(0)';
                header.style.boxShadow = 'none';
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Get saved theme or use system preference
    function getCurrentTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return prefersDarkScheme.matches ? 'dark' : 'light';
    }
    
    // Apply theme
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update toggle button aria-label
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', 
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }
    }
    
    // Initialize theme
    applyTheme(getCurrentTheme());
    
    // Theme toggle event
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// Scroll effects (back to top, scroll indicators)
function initializeScrollEffects() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    // Back to top button
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Animation on scroll
function initializeAnimations() {
    // Simple animation on scroll implementation
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.getAttribute('data-aos');
                const delay = element.getAttribute('data-aos-delay') || 0;
                
                setTimeout(() => {
                    element.classList.add('fade-in-up');
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, delay);
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(element);
    });
    
    // Counter animation for stats
    const stats = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const finalValue = parseInt(stat.textContent);
                animateCounter(stat, 0, finalValue, 2000);
                statsObserver.unobserve(stat);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => statsObserver.observe(stat));
}

// Counter animation helper
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const suffix = element.textContent.replace(/[0-9]/g, '');
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.floor(start + (end - start) * easeProgress);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Testimonial slider
function initializeTestimonialSlider() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const navButtons = document.querySelectorAll('.testimonial-nav-btn');
    let currentSlide = 0;
    let slideInterval;
    
    if (testimonialItems.length === 0) return;
    
    function showSlide(index) {
        // Hide all slides
        testimonialItems.forEach(item => item.classList.remove('active'));
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        // Show current slide
        if (testimonialItems[index]) {
            testimonialItems[index].classList.add('active');
        }
        if (navButtons[index]) {
            navButtons[index].classList.add('active');
        }
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % testimonialItems.length;
        showSlide(next);
    }
    
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }
    
    // Navigation button events
    navButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            showSlide(index);
            stopAutoSlide();
            setTimeout(startAutoSlide, 10000); // Restart after 10 seconds
        });
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let startY = 0;
    const slider = document.querySelector('.testimonials-slider');
    
    if (slider) {
        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        slider.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Check if horizontal swipe is more significant than vertical
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe left - next slide
                    nextSlide();
                } else {
                    // Swipe right - previous slide
                    const prev = currentSlide === 0 ? testimonialItems.length - 1 : currentSlide - 1;
                    showSlide(prev);
                }
                stopAutoSlide();
                setTimeout(startAutoSlide, 10000);
            }
            
            startX = 0;
            startY = 0;
        });
    }
    
    // Initialize
    showSlide(0);
    startAutoSlide();
    
    // Pause auto-slide when page is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoSlide();
        } else {
            startAutoSlide();
        }
    });
}

// Form handlers
function initializeFormHandlers() {
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Contact forms (will be implemented in contact page)
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', handleContactSubmit);
    });
    
    // FAQ toggles
    initializeFAQ();
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    const button = form.querySelector('button[type="submit"]');
    
    // Basic email validation
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Disable button and show loading state
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    button.disabled = true;
    
    // Simulate API call (replace with actual implementation)
    setTimeout(() => {
        showNotification('Thank you for subscribing!', 'success');
        form.reset();
        button.innerHTML = originalHTML;
        button.disabled = false;
    }, 1500);
}

function handleContactSubmit(e) {
    e.preventDefault();
    // Contact form handling will be implemented in contact page
    showNotification('Message sent successfully!', 'success');
}

// Portfolio filtering functionality
function initializePortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioProjects = document.querySelectorAll('.portfolio-project');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    if (filterButtons.length === 0 || portfolioProjects.length === 0) return;
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            portfolioProjects.forEach(project => {
                const category = project.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    project.classList.remove('hidden');
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    project.style.opacity = '0';
                    project.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        project.classList.add('hidden');
                    }, 300);
                }
            });
            
            // Announce filter change to screen readers
            if (window.announceToScreenReader) {
                const filterText = button.textContent.trim();
                window.announceToScreenReader(`Filtered portfolio to show ${filterText}`);
            }
        });
    });
    
    // Project details modal
    const projectDetailsButtons = document.querySelectorAll('.project-details-btn');
    const projectModal = document.querySelector('.project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (projectModal) {
        projectDetailsButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = button.getAttribute('data-project');
                openProjectModal(projectId);
            });
        });
        
        // Close modal events
        if (modalClose) {
            modalClose.addEventListener('click', closeProjectModal);
        }
        
        if (modalOverlay) {
            modalOverlay.addEventListener('click', closeProjectModal);
        }
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                closeProjectModal();
            }
        });
    }
    
    // Load more functionality (placeholder)
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // In a real application, this would load more projects via API
            showNotification('Loading more projects...', 'info');
            setTimeout(() => {
                showNotification('All projects loaded!', 'success');
                loadMoreBtn.style.display = 'none';
            }, 1500);
        });
    }
}

function openProjectModal(projectId) {
    const modal = document.querySelector('.project-modal');
    const modalBody = document.querySelector('.modal-body');
    
    if (!modal || !modalBody) return;
    
    // Project data (in a real application, this would come from an API)
    const projectData = {
        'ecommerce': {
            title: 'TechMart E-commerce Platform',
            category: 'Web Development',
            year: '2023',
            client: 'TechMart Inc.',
            duration: '4 months',
            team: '5 developers',
            description: 'A comprehensive e-commerce solution built for a technology retailer, featuring advanced product management, real-time inventory tracking, AI-powered recommendations, and seamless payment integration.',
            challenges: [
                'Handling high traffic during peak sales periods',
                'Integrating with multiple payment providers',
                'Implementing real-time inventory synchronization',
                'Creating an intuitive admin dashboard'
            ],
            solutions: [
                'Implemented microservices architecture for scalability',
                'Used Redis for caching and session management',
                'Built custom inventory management system',
                'Designed responsive admin interface with real-time updates'
            ],
            results: [
                '150% increase in online sales',
                '60% reduction in page load times',
                '40% improvement in user engagement',
                '99.9% uptime achieved'
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'AWS'],
            images: [
                '/assets/images/portfolio/ecommerce-1.jpg',
                '/assets/images/portfolio/ecommerce-2.jpg',
                '/assets/images/portfolio/ecommerce-3.jpg'
            ]
        }
        // Add more project data as needed
    };
    
    const project = projectData[projectId];
    if (!project) return;
    
    // Generate modal content
    modalBody.innerHTML = `
        <div class="project-detail">
            <div class="project-header">
                <h2 class="project-title">${project.title}</h2>
                <div class="project-meta">
                    <span class="meta-item">
                        <i class="fas fa-tag"></i>
                        ${project.category}
                    </span>
                    <span class="meta-item">
                        <i class="fas fa-calendar"></i>
                        ${project.year}
                    </span>
                    <span class="meta-item">
                        <i class="fas fa-clock"></i>
                        ${project.duration}
                    </span>
                </div>
            </div>
            
            <div class="project-content">
                <div class="content-section">
                    <h3>Project Overview</h3>
                    <p>${project.description}</p>
                </div>
                
                <div class="content-section">
                    <h3>Challenges</h3>
                    <ul>
                        ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="content-section">
                    <h3>Our Solutions</h3>
                    <ul>
                        ${project.solutions.map(solution => `<li>${solution}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="content-section">
                    <h3>Results</h3>
                    <ul class="results-list">
                        ${project.results.map(result => `<li><i class="fas fa-check-circle"></i>${result}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="content-section">
                    <h3>Technologies Used</h3>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Enhanced focus management for accessibility
    setTimeout(() => {
        const closeButton = modal.querySelector('.modal-close');
        if (closeButton) {
            closeButton.focus();
        }
    }, 100);
    
    // Announce modal opening to screen readers
    if (window.announceToScreenReader) {
        window.announceToScreenReader(`Project details modal opened for ${project.title}`);
    }
}

function closeProjectModal() {
    const modal = document.querySelector('.project-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Return focus to the button that opened the modal
        const lastFocusedButton = document.querySelector('.project-details-btn[data-project]');
        if (lastFocusedButton) {
            setTimeout(() => lastFocusedButton.focus(), 100);
        }
        
        // Announce modal closing to screen readers
        if (window.announceToScreenReader) {
            window.announceToScreenReader('Project details modal closed');
        }
    }
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    const submitButton = contactForm.querySelector('.form-submit');
    const submitText = submitButton.querySelector('.submit-text');
    const submitLoading = submitButton.querySelector('.submit-loading');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Clear previous errors
        clearFormErrors(contactForm);
        
        // Validate form
        const isValid = validateContactForm(contactForm);
        
        if (!isValid) {
            showNotification('Please correct the errors in the form', 'error');
            return;
        }
        
        // Show loading state
        submitText.classList.add('hidden');
        submitLoading.classList.remove('hidden');
        submitButton.disabled = true;
        
        // Collect form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        try {
            // Simulate API call (replace with actual endpoint)
            await simulateFormSubmission(data);
            
            showNotification('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.', 'success');
            contactForm.reset();
            
            // Track form submission (if analytics is set up)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    event_category: 'Contact',
                    event_label: data.projectType || 'general'
                });
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
        } finally {
            // Reset button state
            submitText.classList.remove('hidden');
            submitLoading.classList.add('hidden');
            submitButton.disabled = false;
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('.form-input, .form-select, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        input.addEventListener('input', () => {
            // Clear error when user starts typing
            const errorElement = document.getElementById(`${input.name}-error`);
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.classList.remove('visible');
                input.classList.remove('error');
            }
        });
    });
    
    // Phone number formatting
    const phoneInput = contactForm.querySelector('#phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = utils.formatPhoneNumber(e.target.value);
        });
    }
}

function validateContactForm(form) {
    let isValid = true;
    
    // Required fields validation
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    else if (fieldName === 'email' && value) {
        if (!isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Phone validation
    else if (fieldName === 'phone' && value) {
        const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }
    
    // Name validation
    else if ((fieldName === 'firstName' || fieldName === 'lastName') && value) {
        if (value.length < 2) {
            isValid = false;
            errorMessage = 'Name must be at least 2 characters long';
        }
    }
    
    // Message validation
    else if (fieldName === 'message' && value) {
        if (value.length < 10) {
            isValid = false;
            errorMessage = 'Please provide more details about your project (at least 10 characters)';
        }
    }
    
    // Update field appearance and error message
    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.classList.toggle('visible', !isValid);
    }
    
    field.classList.toggle('error', !isValid);
    
    return isValid;
}

function clearFormErrors(form) {
    const errorElements = form.querySelectorAll('.form-error');
    const inputElements = form.querySelectorAll('.form-input, .form-select, .form-textarea');
    
    errorElements.forEach(error => {
        error.textContent = '';
        error.classList.remove('visible');
    });
    
    inputElements.forEach(input => {
        input.classList.remove('error');
    });
}

async function simulateFormSubmission(data) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate occasional errors for testing
    if (Math.random() < 0.1) {
        throw new Error('Network error');
    }
    
    // In a real application, you would send data to your backend
    console.log('Form submitted with data:', data);
    
    return { success: true };
}

// FAQ functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherQuestion && otherAnswer) {
                        otherQuestion.setAttribute('aria-expanded', 'false');
                        otherAnswer.style.maxHeight = '0';
                    }
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    
                    // Scroll to item if needed
                    setTimeout(() => {
                        if (!isElementInViewport(item)) {
                            item.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'center' 
                            });
                        }
                    }, 300);
                }
            });
        }
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Check if element is in viewport helper
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelectorAll('.notification');
    existing.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 4px;
        margin-left: 8px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Loading spinner
function initializeLoadingSpinner() {
    const spinner = document.querySelector('.loading-spinner');
    
    // Hide spinner when page is fully loaded
    window.addEventListener('load', () => {
        if (spinner) {
            spinner.classList.add('hidden');
            setTimeout(() => {
                spinner.style.display = 'none';
            }, 300);
        }
    });
    
    // Fallback: hide spinner after 3 seconds regardless
    setTimeout(() => {
        if (spinner && !spinner.classList.contains('hidden')) {
            spinner.classList.add('hidden');
            setTimeout(() => {
                spinner.style.display = 'none';
            }, 300);
        }
    }, 3000);
}

// Accessibility enhancements
function initializeAccessibility() {
    // Keyboard navigation for custom components
    const interactiveElements = document.querySelectorAll('[role="button"], .btn, .nav-link, .faq-question, .filter-btn, .project-details-btn');
    
    interactiveElements.forEach(element => {
        // Add tabindex if not already set
        if (!element.hasAttribute('tabindex') && !['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName)) {
            element.setAttribute('tabindex', '0');
        }
        
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });
    
    // Focus management for mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    if (mobileMenuBtn && navbarMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            if (navbarMenu.classList.contains('active')) {
                // Focus first nav link when menu opens
                const firstNavLink = navbarMenu.querySelector('.nav-link');
                if (firstNavLink) {
                    setTimeout(() => firstNavLink.focus(), 100);
                }
            }
        });
    }
    
    // Enhanced focus trapping for mobile menu and modals
    document.addEventListener('keydown', (e) => {
        // Mobile menu focus trap
        if (e.key === 'Tab' && navbarMenu && navbarMenu.classList.contains('active')) {
            trapFocus(e, navbarMenu);
        }
        
        // Modal focus trap
        const activeModal = document.querySelector('.project-modal.active');
        if (e.key === 'Tab' && activeModal) {
            trapFocus(e, activeModal);
        }
        
        // Close mobile menu with Escape key
        if (e.key === 'Escape') {
            if (navbarMenu && navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
                lines.forEach(line => {
                    line.style.transform = '';
                    line.style.opacity = '';
                });
                mobileMenuBtn.focus();
            }
            
            // Close modal with Escape key
            const activeModal = document.querySelector('.project-modal.active');
            if (activeModal) {
                closeProjectModal();
            }
        }
    });
    
    // Focus trap utility function
    function trapFocus(e, container) {
        const focusableElements = container.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
    
    // Announce dynamic content changes to screen readers
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
    
    // Make announcement function globally available
    window.announceToScreenReader = announceToScreenReader;
}

// Performance monitoring
function initializePerformanceMonitoring() {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
        // This would integrate with web-vitals library if included
        // For now, we'll use basic performance API
    }
    
    // Basic performance logging
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            // Log performance data (in production, send to analytics)
            console.log('Page load time:', loadTime + 'ms');
            
            // If load time is too long, show a message
            if (loadTime > 5000) {
                console.warn('Page load time is slow:', loadTime + 'ms');
            }
        }, 0);
    });
}

// Service Worker registration (for PWA features)
function initializeServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

// Utility functions
const utils = {
    // Debounce function for performance
    debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    },
    
    // Throttle function for scroll events
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Format phone number
    formatPhoneNumber(phoneNumber) {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return phoneNumber;
    }
};

// Make utils globally available
window.CodeStormUtils = utils;

// Initialize performance monitoring
initializePerformanceMonitoring();

// Initialize service worker for PWA features
initializeServiceWorker();