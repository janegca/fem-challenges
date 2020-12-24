// Navigation control for the slides

const slides = document.querySelectorAll(".slide");
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");

prevBtns.forEach((btn) => btn.addEventListener("click", showPrev));
nextBtns.forEach((btn) => btn.addEventListener("click", showNext));

var slideIndex = 0;

function showPrev() {
  toggleDisplay(slideIndex);
  slideIndex -= 1;
  if (slideIndex < 0) slideIndex = slides.length;
  toggleDisplay(slideIndex);
}

function showNext() {
  toggleDisplay(slideIndex);
  slideIndex += 1;
  if (slideIndex > slides.length) slideIndex = 0;
  toggleDisplay(slideIndex);
}

function toggleDisplay(idx) {
  slides[idx].style.display == "none"
    ? (slides[idx].style.display = "flex")
    : (slides[idx].style.display = "none");
}
