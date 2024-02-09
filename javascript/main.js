document.addEventListener("DOMContentLoaded", function() {

    const header = document.querySelector('header');
    const hero = document.querySelector('.hero-section');
    const heroBottom = hero.offsetTop + hero.offsetHeight;

    function stickyNavigation() {
        if (window.scrollY >= heroBottom) {
            header.classList.add('sticky');
            header.classList.add('animate-slideDown');
        } else {
            header.classList.remove('sticky');
            header.classList.remove('animate-slideDown');
        }
    }

    window.addEventListener('scroll', stickyNavigation);

    let hamburger = document.querySelector('.hamburger');
    let mobileNav = document.querySelector('.mobile-nav ul');
    let root = document.querySelector('html');
    let mobileNavItem = document.querySelectorAll('.mobile-nav ul li');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('z-20');
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('hidden');
        root.classList.toggle('overflow-y-hidden');
    })

    mobileNavItem.forEach(function(navItem, index) {
        navItem.addEventListener('click', function () {
            hamburger.classList.remove('z-20');
            hamburger.classList.remove('open');
            mobileNav.classList.add('hidden');
            root.classList.remove('overflow-y-hidden');
        })
    })
});