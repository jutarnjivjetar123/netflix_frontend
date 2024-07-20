import validator from "validator";
import { PhoneNumberUtil } from ""
function validatePhoneNumberOrEmailUserInput() {
  console.log("Validation function was called");
  const emailValue = document.querySelector("#emailInput").value;
  console.log(emailValue);
  console.log(validator.isEmail(emailValue));
}

window.validatePhoneNumberOrEmailUserInput =
  validatePhoneNumberOrEmailUserInput;
