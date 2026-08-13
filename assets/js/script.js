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

document.querySelectorAll(".accordion-btn").forEach(button => {

    button.addEventListener("click", () => {

        const currentContent = button.nextElementSibling;
        const currentIcon = button.querySelector(".accordion-icon-vertical");
        const isOpen = button.getAttribute("aria-expanded") === "true";

        // Close all accordions
        document.querySelectorAll(".accordion-btn").forEach(otherButton => {

            const content = otherButton.nextElementSibling;
            const vertical = otherButton.querySelector(".accordion-icon-vertical");

            otherButton.setAttribute("aria-expanded", "false");

            content.classList.remove("grid-rows-[1fr]");
            content.classList.add("grid-rows-[0fr]");

            // Show vertical line = "+"
            vertical.classList.remove("scale-y-0");
            vertical.classList.add("scale-y-100");
        });

        // Open current accordion
        if (!isOpen) {

            button.setAttribute("aria-expanded", "true");

            currentContent.classList.remove("grid-rows-[0fr]");
            currentContent.classList.add("grid-rows-[1fr]");

            // Hide vertical line = "−"
            currentIcon.classList.remove("scale-y-100");
            currentIcon.classList.add("scale-y-0");
        }

    });

});