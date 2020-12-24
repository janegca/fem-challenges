// Navigation control for the slides

const slides = document.querySelectorAll(".slide");
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");

// add the event listeners
prevBtns.forEach((btn) => btn.addEventListener("click", showPrev));
nextBtns.forEach((btn) => btn.addEventListener("click", showNext));

// track the current slide index
const lastIndex = slides.length - 1;
var slideIndex = 0;

// get the previous slide
function showPrev() {
  toggleDisplay(slideIndex);
  slideIndex -= 1;
  if (slideIndex < 0) slideIndex = lastIndex;
  toggleDisplay(slideIndex);
}

// get the next slide
function showNext() {
  toggleDisplay(slideIndex);
  slideIndex += 1;
  if (slideIndex > lastIndex) slideIndex = 0;
  toggleDisplay(slideIndex);
}

// flip the slide's display value
function toggleDisplay(idx) {
  var style = getComputedStyle(slides[idx]);

  style.display == "none"
    ? (slides[idx].style.display = "flex")
    : (slides[idx].style.display = "none");
}
