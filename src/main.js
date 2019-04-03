const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const prevSlide = () => {
    const current = document.querySelector('.current');
    // remove current from this slide
    current.classList.remove('current');
    if (current.previousElementSibling) {
        // set current to previous slide
        console.log("has prev")
        current.previousElementSibling.classList.add('current');
    } else {
        // this is the first slide so set current to last slide
        console.log("wrap around")
        slides[slides.length-1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const nextSlide = () => {
    const current = document.querySelector('.current');
    // remove current from this slide
    current.classList.remove('current');
    if (current.nextElementSibling) {
        // set current to next slide
        current.nextElementSibling.classList.add('current');
    } else {
        // this is the last slide so set current to first slide
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// auto slide through portfoilio projects
if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}