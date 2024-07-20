import validator from "validator";
import { }
function validatePhoneNumberOrEmailUserInput() {
  console.log("Validation function was called");
  const emailValue = document.querySelector("#emailInput").value;
  console.log(emailValue);
  console.log(validator.isEmail(emailValue));
}

window.validatePhoneNumberOrEmailUserInput =
  validatePhoneNumberOrEmailUserInput;
