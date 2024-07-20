import { PhoneNumberUtil } from "google-libphonenumber";
import validator from "validator";

const phoneUtil = PhoneNumberUtil.get;
export function validatePhoneNumberOrEmailUserInput() {
  const inputValue = document.querySelector("#emailInput").value;
  console.log("Data validation was called");
  if (!inputValue) {
    document.querySelector(".warning").childNodes[1].innerText = "info";
    document.querySelector(".warning").childNodes[3].innerText =
      "Email or phone number is required";
  }
}
