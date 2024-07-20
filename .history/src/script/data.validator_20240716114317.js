import validator from "validator";
import { PhoneNumberUtil } from "google-libphonenumber";
function validatePhoneNumberOrEmailUserInput() {
  console.log("Validation function was called");
  const emailValue = document.querySelector("#emailInput").value;
  
}

window.validatePhoneNumberOrEmailUserInput =
  validatePhoneNumberOrEmailUserInput;
