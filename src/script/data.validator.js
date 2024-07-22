import validator from "validator";
import { PhoneNumberUtil } from "google-libphonenumber";
const phoneUtil = PhoneNumberUtil.getInstance();
function validatePhoneNumberOrEmailUserInput() {
  const warningElement = document.querySelector(".warning");
  if (warningElement.childElementCount > 0) {
    while (warningElement.firstChild) {
      warningElement.removeChild(warningElement.firstChild);
    }
  }

  const emailValue = document.querySelector("#emailOrPhoneInput").value;

  const span = document.createElement("span");
  const label = document.createElement("label");
  span.classList = "material-symbols-outlined";
  span.style.fontSize = "16px";
  warningElement.appendChild(span);
  warningElement.appendChild(label);
  if (emailValue.trim().length < 1) {
    console.log("Email or phone number is required");
    span.textContent = "info";
    label.textContent = "Email or phone number is required";
    return;
  }
  if (validator.isNumeric(emailValue)) {
    try {
      const phoneNumber = phoneUtil.parse(emailValue, "BA");
      if (phoneUtil.isValidNumber(phoneNumber)) {
        span.textContent = "";
        label.textContent = "";
        console.log("Phone number is valid");
      } else {
        span.textContent = "info";
        label.textContent = "Phone number is invalid";
        console.log("Phone number is invalid");
      }
      return;
    } catch (error) {
      span.textContent = "info";
      label.textContent = "Phone number is invalid";
      console.log("Phone number is invalid");
      return;
    }
  }
  if (!validator.isEmail(emailValue)) {
    span.textContent = "info";
    label.textContent = "Email address is invalid";
    console.log("Email invalid");
    return;
  }
  span.textContent = "";
  label.textContent = "";
  console.log("Email is valid");
  return;
}

window.validatePhoneNumberOrEmailUserInput =
  validatePhoneNumberOrEmailUserInput;

function validatePassword() {
  const passwordElement = document.querySelector("#passwordInput");
  const passwordValue = document.querySelector("#passwordInput").value;
  const passwordWarningElement = document.querySelector(".password-warning");
  if (passwordWarningElement.childElementCount > 0) {
    while (passwordWarningElement.firstChild) {
      passwordWarningElement.removeChild(passwordWarningElement.firstChild);
    }
  }

  const span = document.createElement("span");
  const label = document.createElement("label");
  span.classList = "material-symbols-outlined";
  span.style.fontSize = "16px";
  passwordWarningElement.appendChild(span);
  passwordWarningElement.appendChild(label);

  if (passwordValue.trim().length < 1) {
    console.log("Password string is empty");
    span.textContent = "info";
    label.textContent = "Password is required";
    return;
  }
  console.log("Password is OK");
  span.textContent = "";
  label.textContent = "";
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".signInButton").addEventListener("click", () => {
    validatePhoneNumberOrEmailUserInput();
    validatePassword();
    document
      .querySelector("#emailOrPhoneInput")
      .addEventListener("input", () => {
        console.log("Validation active");
        validatePhoneNumberOrEmailUserInput();
      });
    document.querySelector("#passwordInput").addEventListener("input", () => {
      console.log("Password validation active");
      validatePassword();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".getStartedButton").addEventListener("click", () => {
    validatePhoneNumberOrEmailUserInput();
    document
      .querySelector("#emailOrPhoneInput")
      .addEventListener("input", () => {
        console.log("Validation active");
        validatePhoneNumberOrEmailUserInput();
      });
  });
});
