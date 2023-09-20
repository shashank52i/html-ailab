document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel__viewport');
    const slides = document.querySelectorAll('.carousel__slide');
    const prevButton = document.querySelector('.carousel__prev');
    const nextButton = document.querySelector('.carousel__next');
    
    let currentIndex = 0;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    // Initial display of the first slide
    showSlide(currentIndex);

    // Event listener for the "Previous" button
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Event listener for the "Next" button
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
});
