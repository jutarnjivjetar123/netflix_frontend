import validator from "validator";
import { PhoneNumberUtil } from "google-libphonenumber";
const phoneUtil = PhoneNumberUtil.getInstance();
function validatePhoneNumberOrEmailUserInput() {
  const emailValue = document.querySelector("#emailInput").value;
  if (emailValue.trim().length < 1) {
    console.log("Email or phone number is required");
    document.querySelector(".warning").childNodes[1].innerText = "info";
    document.querySelector(".warning").childNodes[3].innerText =
      "Email or phone number is required";
    return false;
  }
  if (validator.isNumeric(emailValue)) {
    try {
      const phoneNumber = phoneUtil.parse(emailValue, "BA");
      if (phoneUtil.isValidNumber(phoneNumber)) {
        document.querySelector(".warning").childNodes[1].innerText = "info";
        document.querySelector(".warning").childNodes[3].innerText =
          "Phone number is fine";
        return true;
      } else {
        document.querySelector(".warning").childNodes[1].innerText = "info";
        document.querySelector(".warning").childNodes[3].innerText =
          "Please enter a valid phone number";
      }
      return false;
    } catch (error) {
      document.querySelector(".warning").childNodes[1].innerText = "info";
      document.querySelector(".warning").childNodes[3].innerText =
        "Please enter a valid phone number";
      return false;
    }
  }
  if (!validator.isEmail(emailValue)) {
    document.querySelector(".warning").childNodes[1].innerText = "info";
    document.querySelector(".warning").childNodes[3].innerText =
      "Please enter a valid email address";
    return false;
  }
  document.querySelector(".warning").childNodes[1].innerText = "info";
  document.querySelector(".warning").childNodes[3].innerText = "Email is fine";
  return true;
}

window.validatePhoneNumberOrEmailUserInput =
  validatePhoneNumberOrEmailUserInput;


function activateInputValidation() { }