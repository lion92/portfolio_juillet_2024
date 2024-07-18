document.getElementById("menuburger").addEventListener("click", function() {
    var div = document.getElementById("ulid");
    if (div.classList.contains("burger")) {
        div.classList.remove("burger");
        div.classList.add("burgerApparait");
    } else {
        div.classList.remove("burgerApparait");
        div.classList.add("burger");
    }
});

let currentSlide = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});