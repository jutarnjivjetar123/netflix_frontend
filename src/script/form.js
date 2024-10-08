let isPasswordValid = false;
document.addEventListener("DOMContentLoaded", () => {
  console.log(localStorage.getItem("userIdentification"));
  document.querySelector(".registrationValue").innerText =
    localStorage.getItem("userIdentification");
  document.querySelector(".passwordInputForm").addEventListener("input", () => {
    console.log("Password input");
    let passwordValue = document.querySelector(".passwordInputForm").value;
    console.log(passwordValue);
    if (passwordValue.length > 1) {
      isPasswordValid = true;
    }
    console.log(isPasswordValid);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".nextSectionButton").addEventListener("click", () => {
    console.log("Button was clicked");
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      document.querySelector(".warningText").innerHTML =
        "Password must be entered";
    }
  });
});
