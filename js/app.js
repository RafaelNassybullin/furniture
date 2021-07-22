let burger = document.querySelector('.menu-burgir');
let menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
})
$(document).ready(function () {
    $(".menu23").on('click', function () {
        $(this).find(".hambergerIcon").toggleClass("open3");
    });
})
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        610: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        1054: {
            slidesPerView: 3,
            spaceBetween: 15
        }
    }
});
let swiper2 = new Swiper('.mySwiper2', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },

        1270: {
            slidesPerView: 2,

        }
    }
});