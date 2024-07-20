import validator from "validator";
import { PhoneNumberUtil } from "google-libphonenumber";
function validatePhoneNumberOrEmailUserInput() {
  console.log("Validation function was called");
  const emailValue = document.querySelector("#emailInput").value;
  if (!emailValue) { 
    document.querySelector(".warning").childNodes[1].value = "info";
    document.querySelector(".warning").childNodes[1].value = "";
  }
}

window.validatePhoneNumberOrEmailUserInput =
  validatePhoneNumberOrEmailUserInput;
