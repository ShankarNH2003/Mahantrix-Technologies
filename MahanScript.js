function toggleMenu() {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector("nav ul");

    menuIcon.classList.toggle("active");
    navLinks.classList.toggle("show");
  }

window.addEventListener('scroll', () => {
    const background = document.querySelector('.image-background');
    if (window.scrollY > 50) {
        background.classList.add('scrolled');
    } else {
        background.classList.remove('scrolled');
    }
});
document.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about-container');
    const triggerHeight = window.innerHeight * 0.8;

    if (aboutSection.getBoundingClientRect().top < triggerHeight) {
        aboutSection.classList.add('visible');
    }
});

    // Parallax effect for the background image
    const aboutBg = document.querySelector('.about-bg');
    const scrollPosition = window.pageYOffset;
    aboutBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    
    
    //<!-- serviceCardspush -->
    document.addEventListener('DOMContentLoaded', () => {
        const serviceCards = document.querySelectorAll('.service-card');
        const triggerHeight = window.innerHeight * 0.8;

        function revealCardsOnScroll() {
            serviceCards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < triggerHeight) {
                    card.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', revealCardsOnScroll);
        revealCardsOnScroll(); // To show the cards when initially loaded

        // Add rotation effect on tap (for mobile)
        serviceCards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('tap-rotate');
            });
        });
    });  