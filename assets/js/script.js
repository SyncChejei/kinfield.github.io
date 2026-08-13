const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {

    const isOpen = menuToggle.classList.toggle('is-open');

    mobileMenu.classList.toggle('is-open');

    menuToggle.setAttribute(
        'aria-expanded',
        isOpen
    );

});

document.addEventListener("DOMContentLoaded", function () {

    const testimonialSwiper = new Swiper(".testimonialSwiper", {
        slidesPerView: 1,
        spaceBetween: 0,

        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
        },

        loop: true,

        speed: 600,
    });

});