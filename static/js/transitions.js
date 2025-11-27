// =====================================
// PAGE TRANSITIONS & ANIMATIONS
// =====================================

// Initialize page animations on page load
document.addEventListener('DOMContentLoaded', function() {
  // Apply fade-in animation to main content
  initializePageAnimation();
  
  // Add animation to all internal links
  setupLinkAnimations();
  
  // Add scroll animations
  setupScrollAnimations();
});

// =====================================================
// 1. PAGE FADE-IN ON LOAD
// =====================================================
function initializePageAnimation() {
  // Get main content area
  const mainContent = document.querySelector('main');
  const body = document.body;
  
  // Set initial opacity to 0
  if (mainContent) {
    mainContent.style.opacity = '0';
    mainContent.classList.add('page-enter');
    // Trigger animation
    setTimeout(() => {
      mainContent.style.opacity = '1';
    }, 10);
  }
}

// =====================================================
// 2. SMOOTH FADE-OUT & PAGE TRANSITION
// =====================================================
function handlePageTransition(event) {
  // Get target URL
  const href = event.currentTarget.getAttribute('href');
  
  // Don't animate hash links or external links
  if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('//')) {
    return;
  }
  
  // Prevent default navigation
  event.preventDefault();
  
  // Fade out current page
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.style.opacity = '0';
    mainContent.classList.add('page-exit');
  }
  
  // Navigate after fade-out completes
  setTimeout(() => {
    window.location.href = href;
  }, 400);
}

// =====================================================
// 3. SETUP LINK ANIMATIONS
// =====================================================
function setupLinkAnimations() {
  // Get all anchor tags
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    // Only animate internal links (not hash, not external)
    if (href && 
        !href.startsWith('#') && 
        !href.startsWith('http') && 
        !href.startsWith('//') &&
        !href.startsWith('mailto:') &&
        !href.startsWith('tel:')) {
      
      // Add click handler with animation
      link.addEventListener('click', handlePageTransition);
      
      // Add hover animation class
      link.classList.add('link-animated');
    }
  });
}

// =====================================================
// 4. SCROLL REVEAL ANIMATIONS (Intersection Observer)
// =====================================================
function setupScrollAnimations() {
  // Create Intersection Observer for elements to animate on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class
        const element = entry.target;
        element.classList.add('fade-in');
        
        // Get data-animation attribute if exists
        const animationType = element.getAttribute('data-animation');
        if (animationType) {
          element.classList.add(animationType);
        }
        
        // Stop observing this element
        observer.unobserve(element);
      }
    });
  }, observerOptions);
  
  // Observe all elements with data-scroll-animation
  const animatedElements = document.querySelectorAll('[data-scroll-animation]');
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Also observe cards for automatic animation
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    observer.observe(card);
  });
  
  // Observe info items
  const infoItems = document.querySelectorAll('.info-item');
  infoItems.forEach(item => {
    observer.observe(item);
  });
  
  // Observe contact-info-cards
  const contactCards = document.querySelectorAll('.contact-info-card');
  contactCards.forEach(card => {
    observer.observe(card);
  });
}

// =====================================================
// 5. SECTION ANIMATIONS ON SCROLL
// =====================================================
function animateSectionsOnScroll() {
  const sections = document.querySelectorAll('section');
  
  const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease-out';
        sectionObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}

// Initialize section scroll animations
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateSectionsOnScroll);
} else {
  animateSectionsOnScroll();
}

// =====================================================
// 6. BUTTON HOVER & CLICK ANIMATIONS
// =====================================================
function setupButtonAnimations() {
  const buttons = document.querySelectorAll('button, .btn, a.btn');
  
  buttons.forEach(button => {
    // Add ripple effect on click
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      button.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupButtonAnimations);
} else {
  setupButtonAnimations();
}

// =====================================================
// 7. FLOATING CARD ANIMATIONS
// =====================================================
function setupFloatingCardAnimations() {
  // Apply floating animation to project cards, team cards, etc
  const floatingCards = document.querySelectorAll('[data-float], .card, .project-card');
  
  floatingCards.forEach((card, index) => {
    // Add card-float class with staggered delays
    const delay = (index % 3) * 0.2;
    card.style.animationDelay = delay + 's';
    card.classList.add('card-float');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupFloatingCardAnimations);
} else {
  setupFloatingCardAnimations();
}

// =====================================================
// 8. SOCIAL LINKS ANIMATION
// =====================================================
function setupSocialLinksAnimation() {
  const socialLinks = document.querySelectorAll('.social-link, .social-links a');
  
  socialLinks.forEach(link => {
    link.classList.add('pulse-soft');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupSocialLinksAnimation);
} else {
  setupSocialLinksAnimation();
}

// =====================================================
// 9. SMOOTH SCROLL ANIMATION
// =====================================================
window.addEventListener('scroll', function() {
  // You can add parallax or other scroll effects here
  // This is a placeholder for future scroll animations
});

// =====================================================
// 10. NAVBAR ANIMATION ON SCROLL
// =====================================================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// =====================================================
// 11. REVEAL ELEMENT FUNCTION (for manual triggers)
// =====================================================
window.revealElement = function(element, animationType = 'fade-in-up') {
  if (typeof element === 'string') {
    element = document.querySelector(element);
  }
  
  if (element) {
    element.classList.add(animationType);
    return element;
  }
};

// =====================================================
// 12. ANIMATE TEXT ON LOAD
// =====================================================
function animateTextElements() {
  const textElements = document.querySelectorAll('h1, h2, h3, .section-title');
  
  textElements.forEach((element, index) => {
    element.classList.add('fade-in-down');
    element.style.animationDelay = (index * 0.1) + 's';
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateTextElements);
} else {
  animateTextElements();
}

// =====================================================
// 13. STAGGER ANIMATIONS FOR LISTS
// =====================================================
function setupStaggerAnimations() {
  const containers = document.querySelectorAll('[data-stagger]');
  
  containers.forEach(container => {
    const items = container.querySelectorAll('> *');
    items.forEach((item, index) => {
      item.classList.add('fade-in-up');
      item.style.animationDelay = (index * 0.15) + 's';
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupStaggerAnimations);
} else {
  setupStaggerAnimations();
}

// =====================================================
// 14. PAGE LOAD COMPLETE ANIMATION
// =====================================================
window.addEventListener('load', function() {
  // Add loaded class to body for final animations
  document.body.classList.add('page-loaded');
  
  // Ensure all elements are visible
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.style.opacity = '1';
  }
});

// =====================================================
// 15. HOVER GLOW EFFECT FOR INTERACTIVE ELEMENTS
// =====================================================
function setupHoverGlowEffect() {
  const glowElements = document.querySelectorAll('.card, .btn, .social-link, .contact-info-card');
  
  glowElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease-in-out';
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupHoverGlowEffect);
} else {
  setupHoverGlowEffect();
}
