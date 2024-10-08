import validator from "validator";
import { PhoneNumberUtil } from "google-libphonenumber";
import { login } from "./user.data";
const phoneUtil = PhoneNumberUtil.getInstance();

async function validatePhoneNumberOrEmailUserInput() {
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
  if (document.querySelector(".getStartedButton") !== null) {
    warningElement.style.paddingLeft =
      document.querySelector(".userIdentificationInput").offsetLeft - 20 + "px";
  }
  if (emailValue.trim().length < 1) {
    console.log("Email or phone number is required");
    span.textContent = "info";
    label.textContent = "Email or phone number is required";
    return false;
  }
  if (validator.isNumeric(emailValue)) {
    try {
      const phoneNumber = phoneUtil.parse(emailValue, "BA");
      if (phoneUtil.isValidNumber(phoneNumber)) {
        span.textContent = "";
        label.textContent = "";
        console.log("Phone number is valid");
        return true;
      } else {
        span.textContent = "info";
        label.textContent = "Phone number is invalid";
        console.log("Phone number is invalid");
        return false;
      }
    } catch (error) {
      span.textContent = "info";
      label.textContent = "Phone number is invalid";
      console.log("Phone number is invalid");
      return false;
    }
  }
  if (!validator.isEmail(emailValue)) {
    span.textContent = "info";
    label.textContent = "Email address is invalid";
    console.log("Email invalid");
    return false;
  }
  span.textContent = "";
  label.textContent = "";
  console.log("Email is valid");
  return true;
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
    return false;
  }
  console.log("Password is OK");
  span.textContent = "";
  label.textContent = "";
  return true;
}
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".signInButton")
    .addEventListener("click", async () => {
      var userValidationResult = false;
      var passwordValidationResult = false;
      userValidationResult = validatePhoneNumberOrEmailUserInput();
      passwordValidationResult = validatePassword();
      document
        .querySelector("#emailOrPhoneInput")
        .addEventListener("input", () => {
          console.log("Validation active");
          userValidationResult = validatePhoneNumberOrEmailUserInput();
        });
      document.querySelector("#passwordInput").addEventListener("input", () => {
        console.log("Password validation active");
        passwordValidationResult = validatePassword();
      });
      if (userValidationResult && passwordValidationResult) {
        console.log("User login process started");
        await login();
      }
    });
});

var isPhoneNumberOrEmailInputValidated = false;
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".getStartedButton")
    .addEventListener("click", async () => {
      isPhoneNumberOrEmailInputValidated =
        await validatePhoneNumberOrEmailUserInput();

      if (isPhoneNumberOrEmailInputValidated) {
        localStorage.setItem(
          "userIdentification",
          document.querySelector("#emailOrPhoneInput").value
        );
        // Redirect to the given link when validation succeeds
        window.location.href = "http://127.0.0.1:5501/src/signup/form.html";
      }
    });
});

