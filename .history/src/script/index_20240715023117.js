
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

function isEmpty() {
  console.log(document.querySelector("#emailInput").value.trim().length > 0);

  return (
    document.querySelector("#emailInput").value.length > 0 &&
    document.querySelector("#emailInput").value.match(/\s+/)
  );
}

function validateEmailPhoneNumberInput() {
  console.log(checkIsEmail());
}
function checkIsEmail() {
  return validator.isEmail(document.querySelector("#emailInput").value);
} 
