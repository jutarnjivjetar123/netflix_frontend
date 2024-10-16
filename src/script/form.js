import validator from "validator";
let isEmailValid = false;
let isPasswordValid = false;
const apiUrl = "http://127.0.0.1:3000";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Completed stage: " + localStorage.getItem("completedStage"));
  const completedStage = localStorage.getItem("completedStage");
  if (completedStage !== null) {
    if (completedStage === "2") {
      window.location.href = "http://127.0.0.1:5501/src/signup/offer.html";
    }
    if (completedStage === "3") {
      window.location.href = "http://127.0.0.1:5501/src/signup/card.html";
    }
  }
});
document.addEventListener("DOMContentLoaded", async () => {
  console.log(localStorage.getItem("userIdentification"));
  document.querySelector(".emailOrPhoneNumberInputForm").value =
    localStorage.getItem("userIdentification");
  const emailInput = document.querySelector(".emailOrPhoneNumberInputForm");
  const passwordInput = document.querySelector(".passwordInputForm");
  const emailWarning = document.querySelector(
    ".emailOrPhoneNumberInputWarningText"
  );
  const passwordWarning = document.querySelector(".passwordInputWarningText");
  emailWarning.innerText = "";
  passwordWarning.innerText = "";

  const nextStageButton = document.querySelector(".nextSectionButton");

  emailInput.addEventListener("input", () => {
    emailWarning.innerText = "";
  });
  passwordInput.addEventListener("input", () => {
    passwordWarning.innerText = "";
  });
  nextStageButton.addEventListener("click", async () => {
    emailWarning.innerText = "";
    if (emailInput.value.trim().length < 1) {
      emailWarning.innerText = "Email is required";
    }
    if (
      emailInput.value.trim().length > 0 &&
      !validator.isEmail(emailInput.value)
    ) {
      emailWarning.innerText = "Not valid email address";
    }
    passwordWarning.innerText = "";
    if (passwordInput.value.trim().length < 1) {
      passwordWarning.innerText = "Password is required";
    }
    if (
      passwordInput.value.trim().length > 0 &&
      emailInput.value.trim().length > 0 &&
      validator.isEmail(emailInput.value)
    ) {
      await registerUsingEmail();
    }
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const completedStage = localStorage.getItem("completedStage");
//   console.log(completedStage);
//   if (completedStage !== null) {
//     if (completedStage === "1") {
//       window.location.href = "http://127.0.0.1:5501/src/signup/form.html";
//     }
//     if (completedStage === "2") {
//       console.log("TRYING TO REDIRECT");
//       window.location.href = "http://127.0.0.1:5501/src/signup/offer.html";
//     }
//   }
//   console.log(localStorage.getItem("userIdentification"));
//   document.querySelector(".emailOrPhoneNumberInputForm").value =
//     localStorage.getItem("userIdentification");
//   document.querySelector(".emailOrPhoneNumberInputWarningText").innerText = "";
//   document.querySelector(".passwordInputWarningText").innerText = "";

//   const emailInput = document.querySelector(".emailOrPhoneNumberInputForm");
//   const passwordInput = document.querySelector(".passwordInputForm");

//   const emailWarning = document.querySelector(
//     ".emailOrPhoneNumberInputWarningText"
//   );
//   const passwordWarning = document.querySelector(".passwordInputWarningText");

//   const nextStageButton = document.querySelector(".nextSectionButton");
//   emailInput.addEventListener("input", () => {
//     emailWarning.innerText = "";
//     if (emailInput.value.trim().length < 1) {
//       emailWarning.innerText = "Email is required";
//     }
//     if (
//       emailInput.value.trim().length > 0 &&
//       !validator.isEmail(emailInput.value)
//     ) {
//       emailWarning.innerText = "Not valid email address";
//     }
//   });
//   passwordInput.addEventListener("input", () => {
//     console.log("Password input");
//     passwordWarning.innerText = "";
//     if (passwordInput.value.trim().length < 1) {
//       passwordWarning.innerText = "Password is required";
//     }
//   });
//   nextStageButton.addEventListener("click", () => {
//     emailWarning.innerText = "";
//     if (emailInput.value.trim().length < 1) {
//       emailWarning.innerText = "Email is required";
//     }
//     if (
//       emailInput.value.trim().length > 0 &&
//       !validator.isEmail(emailInput.value)
//     ) {
//       emailWarning.innerText = "Not valid email address";
//     }
//     passwordWarning.innerText = "";
//     if (passwordInput.value.trim().length < 1) {
//       passwordWarning.innerText = "Password is required";
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const nextStageButton = document.querySelector(".nextSectionButton");

//   const emailInput = document.querySelector(".emailOrPhoneNumberInputForm");
//   const passwordInput = document.querySelector(".passwordInputForm");

//   const emailWarning = document.querySelector(
//     ".emailOrPhoneNumberInputWarningText"
//   );
//   const passwordWarning = document.querySelector(".passwordInputWarningText");
//   nextStageButton.addEventListener("click", async () => {
//     document.querySelector(".registrationResponseResult").innerHTML = "";
//     emailWarning.innerText = "";
//     if (emailInput.value.trim().length < 1) {
//       emailWarning.innerText = "Email is required";
//     }
//     if (
//       emailInput.value.trim().length > 0 &&
//       !validator.isEmail(emailInput.value)
//     ) {
//       emailWarning.innerText = "Not valid email address";
//     }
//     passwordWarning.innerText = "";
//     if (passwordInput.value.trim().length < 1) {
//       passwordWarning.innerText = "Password is required";
//     }
//     if (
//       passwordInput.value.trim().length > 0 &&
//       emailInput.value.trim().length > 0 &&
//       validator.isEmail(emailInput.value)
//     ) {
//       await registerUsingEmail();
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 840) {
      document.querySelector(".welcomeText").innerHTML = "Welcome";
      document.querySelector(".easyJoinText").innerHTML =
        "Joining FakeFlix is easy.";
      document.querySelector(".enterPasswordText").innerHTML =
        "Enter your password and you will be watching in no time";
      document.querySelector(".progressionTrackText").innerHTML =
        '<span class="currentProgressStage">Create account</span> > Select Offer > Payment device > Confirm subscription > Verify email';
    }
    if (window.innerWidth < 840) {
      document.querySelector(".welcomeText").innerHTML = "Welcome to FakeFlix!";
      document.querySelector(".easyJoinText").innerHTML = "";
      document.querySelector(".enterPasswordText").innerHTML =
        "Enter your password to start";
      document.querySelector(".progressionTrackText").innerHTML =
        'Current stage: <span class="currentProgressStage">Create account</span>';
      document.querySelector(".goBackButtonElement").innerHTML = "Go back";
    }
    if (window.innerWidth < 450) {
      document.querySelector(".welcomeText").innerHTML = "Welcome to FakeFlix!";
      document.querySelector(".easyJoinText").innerHTML = "";
      document.querySelector(".enterPasswordText").innerHTML = "Enter password";
      document.querySelector(".progressionTrackText").innerHTML =
        '<span class="currentProgressStage">Create account</span>';
      document.querySelector(".goBackButtonElement").innerHTML = "Go back";
    }
    if (window.innerWidth < 310) {
      document.querySelector(".goBackButtonElement").innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/></svg>';
    }
  });
});

async function registerUsingEmail() {
  const emailValue = document.querySelector(
    ".emailOrPhoneNumberInputForm"
  ).value;
  const passwordValue = document.querySelector(".passwordInputForm").value;
  console.log(emailValue);
  console.log(passwordValue);
  const registerUrl = `${apiUrl}/user/register/create`;
  const data = {
    email: emailValue,
    password: passwordValue,
  };
  console.log("Fetching POST to: " + registerUrl);
  console.log("Request body: " + data);
  try {
    const response = await fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    const responseData = await response.json();
    if (response.status !== 200) {
      document.querySelector(
        ".registrationResponseResult"
      ).innerHTML = `<p>We could not register you, because:</p>
        <p>${responseData.message}</p>
        `;
    }
    if (response.status === 200) {
      console.log("User Account was registered");
      localStorage.setItem("loginCredentials", emailValue);
      localStorage.setItem("publicId", responseData.publicId);
      localStorage.setItem("completedStage", 1);
      window.location.href = responseData.redirectLink;
    }
  } catch (error) {
    document.querySelector(
      ".registrationResponseResult"
    ).innerHTML = `<p>We could not register you, because:</p>
      <p>${error}</p>
      `;
  }
}

function redirectIfAnotherStageCompleted(completedStage) {
  console.log("FUNCTION CALLED");
  if (completedStage === 1) {
    window.location.href = "http://127.0.0.1:5501/src/signup/form.html";
  }
  if (completedStage === 2) {
    window.location.href = "http://127.0.0.1:5501/src/signup/offer.html";
  }
  return;
}
