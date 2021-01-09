/* Ensure only the selected FAQ question is 'open' */
const questions = document.querySelectorAll("details");
questions.forEach((item) => {
  item.addEventListener("click", toggleOpen);
});

/* close all open questions except the currently selected one */
function toggleOpen() {
  questions.forEach((item) => {
    if (item.hasAttribute("open") && item !== this) {
      item.removeAttribute("open");
    }
  });
}
