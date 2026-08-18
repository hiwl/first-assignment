javascript
document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menuToggle');
    const navLinksList = document.getElementById('navLinksList');

    if (menuToggle && navLinksList) {
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('mobile-visible');
        });
    }
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
    handleRevealAnimation();
});