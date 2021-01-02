/*
    Check for valid email address before submitting
    access request.
 */

const email = document.getElementById("email");
const errMsg = document.getElementsByClassName("pcs-ErrMsg_email")[0];
const button = document.querySelector("button");

email.addEventListener("keypress", enterPressed);
button.addEventListener("click", checkEmail);

function enterPressed(ev) {
  if (ev.keyCode == 13) checkEmail();
}

function checkEmail() {
  if (email.value == "") {
    errMsg.innerHTML = "Whoops! It looks like you forgot to add your email";
    return false;
  }

  /*
    FireFox sees the input as invalid when the email.value is reset to ""
    Can't find a way to prevent the behaviour.
  */
  let isValid = email.checkValidity();
  if (isValid) {
    errMsg.innerHTML = "";
    email.value = "";
  } else {
    errMsg.innerHTML = "Please provide a valid email address";
    return false;
  }
}
