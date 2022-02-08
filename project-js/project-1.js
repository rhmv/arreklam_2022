// Navbar Scroll
window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 50);
})




// Slide Header 1
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




// Slide 2
let swiperr = new Swiper(".mySwiper_2", {
    spaceBetween: 0,
    loop: true,
    loopFillGroupWithBlank: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        570: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
            slidesPerGroup: 1
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 3,
        },
    },
});




