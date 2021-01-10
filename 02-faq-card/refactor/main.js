/* Utility to ensure only the selected details item is 'open' */
const questions = document.querySelectorAll("details");
questions.forEach((item) => {
  item.addEventListener("click", toggleOpen);
});

/* ensure only the selected details item is 'open' */
function toggleOpen() {
  questions.forEach((item) => {
    if (item.hasAttribute("open") && item !== this) {
      item.removeAttribute("open");
    }
  });
}
