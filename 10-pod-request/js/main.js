/*
    Check for valid email address before submitting
    access request.
 */

const email = document.getElementById("email");
const errMsg = document.getElementById("err-email");
const button = document.querySelector("button");

email.addEventListener("keypress", enterPressed);
button.addEventListener("click", checkEmail);

function enterPressed(ev) {
  if (ev.keyCode == 13) checkEmail();
}

function checkEmail() {
  if (email.value == "") {
    errMsg.innerHTML = "Oops! Please add your email.";
    return false;
  }

  if (!email.checkValidity()) {
    errMsg.innerHTML = "Oops! Please check your email.";
    return false;
  }

  errMsg.innerHTML = "";
}
