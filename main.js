document.addEventListener('DOMContentLoaded', () => {
    // Select elements to animate
    const animatedElements = document.querySelectorAll(`
        .hero-left, .hero-cat, 
        .section-label, .portfolio-heading, .banner-card, .portfolio-desc,
        .testi-card, 
        .about-anime, .about-right, 
        .adaapa-left, .adaapa-right, 
        #portfolio-group-container, #creator-group-container,
        .footer-top > div
    `);

    // Add base class for animation
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        
        // Add slight stagger delays to sibling cards like testimonials or banners
        if (el.classList.contains('testi-card') || el.classList.contains('banner-card')) {
            const delay = (index % 3) + 1;
            el.classList.add(`delay-${delay}`);
        }
        // Add delays to footer columns
        if (el.parentElement && el.parentElement.classList.contains('footer-top')) {
            const delay = (index % 4) + 1;
            el.classList.add(`delay-${delay}`);
        }
    });

    // Intersection Observer for smooth reveal on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
