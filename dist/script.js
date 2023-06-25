const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${(indx * 105)-((Math.floor(slides.length/2))*100)}%)`;
});

let curSlide = Math.floor(slides.length/2);

const nextSlide = document.querySelector(".btn-next");

let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${105 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${105 * (indx - curSlide)}%)`;
  });
});