let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

