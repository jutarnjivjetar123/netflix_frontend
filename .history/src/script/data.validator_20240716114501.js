import validator from "validator";
import { PhoneNumberUtil } from "google-libphonenumber";
function validatePhoneNumberOrEmailUserInput() {
  const emailValue = document.querySelector("#emailInput").value;
  if (emailValue.trim().) {
    document.querySelector(".warning").childNodes[1].value = "info";
    document.querySelector(".warning").childNodes[3].value =
      "Email or phone number is required";
  }
}

window.validatePhoneNumberOrEmailUserInput =
  validatePhoneNumberOrEmailUserInput;
