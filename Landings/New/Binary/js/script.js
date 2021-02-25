let headerBurger = document.querySelector('.icon__menu');
let bodyMenu = document.querySelector('.menu__body');
let body = document.querySelector('body');
let sliderBody = document.querySelector('.slider__body');
let firstSlide = document.querySelector('.first__slide');
let secondSlide = document.querySelector('.second__slide');
let thirdSlide = document.querySelector('.third__slide');


headerBurger.addEventListener('click', toogle);
// firstSlide.classList.add('dot_active');

// firstSlide.addEventListener('click', activeDotFirst);
// secondSlide.addEventListener('click', activeDotSecond);
// thirdSlide.addEventListener('click', activeDotThird);

// function activeDotFirst() {
//     firstSlide.classList.add('dot_active')
//     secondSlide.classList.remove('dot_active')
//     thirdSlide.classList.remove('dot_active')

// }

// function activeDotSecond() {
//     secondSlide.classList.add('dot_active')
//     firstSlide.classList.remove('dot_active')
//     thirdSlide.classList.remove('dot_active')

// }

// function activeDotThird() {
//     thirdSlide.classList.add('dot_active')
//     firstSlide.classList.remove('dot_active')
//     secondSlide.classList.remove('dot_active')
// }


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides (n) {
    let i;
    let slides = document.querySelectorAll('.slider__item');
    let dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot_active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot_active')
}

// TOGGLE 
function toogle() {
    headerBurger.classList.toggle('active')
    bodyMenu.classList.toggle('active')
    body.classList.toggle('lock')
};
//TOGGLE



