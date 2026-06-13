// GSAP Animations and Interactions

document.addEventListener("DOMContentLoaded", (event) => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Navbar animation on load
    gsap.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // General Reveal Animations for elements with .gsap-reveal class
    const revealElements = document.querySelectorAll('.gsap-reveal');
    revealElements.forEach((el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%", // Animation triggers when top of element hits 85% of viewport
                toggleActions: "play none none none"
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2
        });
    });

    // Staggered reveal for grid items or cards
    const bentoCards = document.querySelectorAll('.bento-grid-item');
    if(bentoCards.length > 0) {
        gsap.from(bentoCards, {
            scrollTrigger: {
                trigger: ".bento-grid-container",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)"
        });
    }

    // Hero section animations (index.html specifically)
    const heroContent = document.querySelector('.hero-content');
    if(heroContent) {
        gsap.from(".hero-title", {
            x: -50,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out"
        });
        gsap.from(".hero-subtitle", {
            x: -50,
            opacity: 0,
            duration: 1,
            delay: 0.4,
            ease: "power3.out"
        });
        gsap.from(".hero-btn", {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.6,
            ease: "power3.out"
        });
        gsap.from(".hero-image", {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            delay: 0.3,
            ease: "power4.out"
        });
    }

    // ==========================================
    // Advanced Hover States (Magnetic 3D)
    // ==========================================
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const teamCards = document.querySelectorAll('.team-card');
    
    if (!isTouchDevice) {
        teamCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; // x position within the element
                const y = e.clientY - rect.top;  // y position within the element
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Calculate rotation based on cursor distance from center
                const rotateX = ((y - centerY) / centerY) * -15; // Max 15 degrees tilt
                const rotateY = ((x - centerX) / centerX) * 15;
                
                gsap.to(card, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    transformPerspective: 1000,
                    ease: "power2.out",
                    duration: 0.4
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotationX: 0,
                    rotationY: 0,
                    ease: "elastic.out(1, 0.3)",
                    duration: 1.2
                });
            });
        });
    }
});
