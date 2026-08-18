javascript
document.addEventListener('DOMContentLoaded', () => {

    // --- MOBILE BURGER DRAWER ENGINE ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinksList = document.getElementById('navLinksList');

    if (menuToggle && navLinksList) {
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('mobile-visible');
        });
    }

    // --- STATIC CONTENT ENGINE SCROLL REVEAL LAYER ---
    const revealItems = document.querySelectorAll('.reveal, .reveal-delayed');

    const handleRevealAnimation = () => {
        const structuralViewportDepth = window.innerHeight * 0.88; 

        revealItems.forEach(item => {
            const currentItemTopPosition = item.getBoundingClientRect().top;
            if (currentItemTopPosition < structuralViewportDepth) {
                item.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleRevealAnimation);
    // Execute instantly on boot for top items above page fold
    handleRevealAnimation();
});