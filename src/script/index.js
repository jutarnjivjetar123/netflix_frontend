document.addEventListener("DOMContentLoaded", async () => {
  const pingApiURL = "http://localhost:3000/check/status";
  try {
    const response = await fetch(pingApiURL);
    if (!response.ok) {
      throw new Error("Server is not available");
    }
  } catch (error) {
    console.log("Server is currently not available");
    document.querySelectorAll(".subtitle")[1].innerHTML = "";
    document.querySelectorAll(".subtitle")[1].innerHTML =
      "Our servers are currently down, please try again later";
    document.querySelectorAll(".subtitle")[1].style.color = "red";
    document.querySelectorAll(".subtitle")[1].style.backgroundColor = "white";
    document.querySelectorAll(".subtitle")[1].style.width = "fit-content";
    document.querySelectorAll(".subtitle")[1].style.padding = "12px";

    document.querySelectorAll(".subtitle")[1].style.fontSize = "24px";
    document.querySelector(".signUpTopDiv").innerHTML = "";
    document.querySelector("button").remove();
  }
});

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
  window.location.pathname =
    "/Users/mahirkeran/Developer/Apps/Netflix/netflix_frontend/src/index.html";
}

async function togglePhoneNumberAndEmailInput() {
  console.log("Toggle phone number and email input");
  const inputDiv = document.querySelector(".userIdentificationInput");
  const countryData = (inputElement =
    document.querySelector("#emailOrPhoneInput"));
  if (/^[^A-Za-z]+$/.test(inputElement.value)) {
    console.log("TRUE");
    if (inputDiv.querySelector("#country-select") === null) {
      console.log("Input element style was changed");
      const select = document.createElement("select");
      select.name = "countryCodeSelect";
      select.id = "country-select";
      select.style.width = "30%";
      select.style.backgroundColor = "rgba(38, 38, 38, 0)";
      select.style.color = "var(--accent-color)";
      select.style.width = "30%";
      inputElement.style.width = "70%";
      inputElement.style.backgroundColor = "rgba(38, 38, 38, 0) !important";
      inputElement.style.color = "var(--accent-color)";
      inputElement.style.paddingLeft = "12px";
      inputDiv.insertBefore(select, inputElement);

      loadCountryDataInSelectPhoneCountryCode();
    }
  }
  if (!/^[^A-Za-z]+$/.test(inputElement.value)) {
    if (inputDiv.querySelector("#country-select") !== null) {
      inputDiv.removeChild(inputDiv.querySelector("#country-select"));
      inputElement.style.width = "100%";
      inputElement.style.backgroundColor = "rgba(38, 38, 38, 0)";
      inputElement.style.color = "var(--accent-color)";
      inputElement.style.paddingLeft = "0px";
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#emailOrPhoneInput").addEventListener("focus", () => {
    togglePhoneNumberAndEmailInput();
  });
  document.querySelector("#emailOrPhoneInput").addEventListener("input", () => {
    togglePhoneNumberAndEmailInput();
  });
});

function adjustWarningMessagePaddingRelativeToUserInput() {
  console.log(document.querySelector(".userIdentificationInput").offsetLeft);
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("resize", () => {
    if (document.querySelector(".getStartedButton") !== null) {
      document.querySelector(".warning").style.paddingLeft =
        document.querySelector(".userIdentificationInput").offsetLeft -
        20 +
        "px";
    }
  });
});

document.querySelector(".getStartedButton").addEventListener("click", () => {
  console.log("Get started button was clicked");
  console.log("Email: " + document.querySelector("#emailOrPhoneInput").value);
});
