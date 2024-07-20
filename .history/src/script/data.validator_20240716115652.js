import validator from "validator";
import { PhoneNumberUtil } from "google-libphonenumber";
function validatePhoneNumberOrEmailUserInput() {
  const emailValue = document.querySelector("#emailInput").value;
  if (emailValue.trim().length < 1) {
    console.log("Email or phone number is required");
    document.querySelector(".warning").childNodes[1].innerText = "info";
    document.querySelector(".warning").childNodes[3].innerText =
      "Email or phone number is required";
  }
}

window.validatePhoneNumberOrEmailUserInput =
  validatePhoneNumberOrEmailUserInput;
