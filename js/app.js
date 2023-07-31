document.addEventListener("DOMContentLoaded", function() {
  const slideContainer = document.querySelector(".slide-container");
  const slides = slideContainer.children;
  let currentPosition = 0;

  function slideTo(position) {
    currentPosition = position;
    slideContainer.style.transform = `translateX(-${currentPosition * 100}%)`;
  }

  function nextSlide() {
    currentPosition = (currentPosition + 1) % slides.length;
    slideTo(currentPosition);
    if (currentPosition === 0) {
      clearInterval(interval);
    }
  }

  const interval = setInterval(nextSlide, 2000); 
});

