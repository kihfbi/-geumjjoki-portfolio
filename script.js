document.addEventListener('DOMContentLoaded', () => {
    // Mouse Spotlight Effect
    const spotlight = document.getElementById('spotlight');
    if (spotlight) {
        document.addEventListener('mousemove', (e) => {
            spotlight.style.left = `${e.clientX}px`;
            spotlight.style.top = `${e.clientY}px`;
        });
    }

    // Scroll Fade-in Animation
    const fadeInSections = document.querySelectorAll('.fade-in-scroll');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        observer.observe(section);
    });

    // Simple Header Animation on load (already handled by CSS in index.html, keeping for JS example if needed)
    const header = document.querySelector('header');
    if (header) {
        // You can add more complex JS animations here if needed
    }
});
