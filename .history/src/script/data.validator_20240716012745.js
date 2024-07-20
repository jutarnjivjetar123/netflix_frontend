import { PhoneNumberUtil } from "google-libphonenumber";
import validator from "validator";

const phoneUtil = PhoneNumberUtil.get;
function validatePhoneNumberOrEmailUserInput() {
  const inputValue = document.querySelector("#emailInput").value;
    console.log("")
  if (!inputValue) {
    document.querySelector(".warning").childNodes[1].innerText = "info";
    document.querySelector(".warning").childNodes[3].innerText =
      "Email or phone number is required";
  }
}
