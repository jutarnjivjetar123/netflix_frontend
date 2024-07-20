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

async function getCountryCodes() {
  const url = "https://country.io/phone.json";
  try {
    const response = await fetch(url);
    if (!response.ok) { 
      throw new Error ()
    }
  } catch (error) {
    console.log(error);
  }
}
