function printSelectedObject(selectedObject) {
  console.log(selectedObject);

  const selectedFAQ = selectedObject;
  console.log(selectedFAQ.parentElement.nodeName);
}

function toggleAnswerVisibility(selectedObject) {
  console.log(selectedObject);
  selectedObject.children[0].innerText === "close"
    ? (selectedObject.children[0].innerText = "keyboard_arrow_down")
    : (selectedObject.children[0].innerText = "close");
  const parentElement = selectedObject.parentElement;
  const answerElement = parentElement.children[1];
  document.querySelectorAll(".faq-answer").forEach((x) => {
    if (x !== answerElement) {
      x.classList.remove("shown");
      // Ensure their icons are reset as well
      x.previousElementSibling.children[0].innerText = "keyboard_arrow_down";
    }
  });
  answerElement.classList.toggle("shown");
}

function redirectToLoginPage() {
  window.location.pathname = "src/login.html";
}

function redirectToRegistrationPage() {
  window.location.pathname = "src/index.html";
}

function checkIsDataValid() {
  const emailValue = document.querySelector("#emailInput").value;
  console.log(validator.isEmail(emailValue));
  if (document.querySelector("#emailInput").value.trim().length < 1) {
    document.querySelector(".warning").childNodes[1].innerText = "info";
    document.querySelector(".warning").childNodes[3].innerText =
      "Email or phone number required";
    return null;
  }
  if (validator.isNumeric(emailValue)) {
    console.log("Phone number detected");
    if(validator.isMobilePhone(emailValue))
  }
  if (!validator.isEmail(emailValue)) {
    document.querySelector(".warning").childNodes[1].innerText = "info";
    document.querySelector(".warning").childNodes[3].innerText =
      "Please enter a valid email address.";
  }
}
