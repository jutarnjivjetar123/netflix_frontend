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
    return;
  }
  if (validator.isNumeric(emailValue)) {
    try {
      const phoneNumber = phoneUtil.parse(emailValue, "BA");
      if (phoneUtil.isValidNumber(phoneNumber)) {
        document.querySelector(".warning").childNodes[1].innerText = "info";
        document.querySelector(".warning").childNodes[3].innerText =
          "Phone number is fine";
      } else {
        document.querySelector(".warning").childNodes[1].innerText = "info";
        document.querySelector(".warning").childNodes[3].innerText =
          "Please enter a valid phone number";
      }
      return;
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
    return;
  }
  document.querySelector(".warning").childNodes[1].innerText = "info";
  document.querySelector(".warning").childNodes[3].innerText = "Email is fine";
}

window.validatePhoneNumberOrEmailUserInput =
  validatePhoneNumberOrEmailUserInput;
