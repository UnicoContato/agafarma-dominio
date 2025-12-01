document.addEventListener('DOMContentLoaded', () => {
    
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    const btnMobile = document.getElementById('mobile-menu-btn');
    const menuDiv = document.getElementById('mobile-menu');
    const menuLinks = menuDiv.querySelectorAll('a');

    btnMobile.addEventListener('click', () => {
        menuDiv.classList.toggle('hidden');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuDiv.classList.add('hidden');
        });
    });

    const privacyBtn = document.getElementById('privacy-btn');
    const modal = document.getElementById('privacy-modal');
    const closeModal = document.getElementById('close-modal');

    privacyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});