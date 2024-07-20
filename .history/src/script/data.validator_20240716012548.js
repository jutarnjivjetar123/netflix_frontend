import { PhoneNumberUtil } from "google-libphonenumber";
import validator from "validator";

const phoneUtil = PhoneNumberUtil.get
function validatePhoneNumberOrEmailUserInput() { 
    const inputValue = document.querySelector("#emailInput").value;

    if (!inputValue) { 
        document.querySelector(".warning").childNodes[1].innerTExt = "info";
    }
}
