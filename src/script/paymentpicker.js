const apiUrl = "http://127.0.0.1:3000";

document.addEventListener("DOMContentLoaded", async () => {
  console.log("Completed stage: " + localStorage.getItem("completedStage"));
  const completedStage = localStorage.getItem("completedStage");
  if (completedStage === null) {
    window.location.href = "http://127.0.0.1:5501/src/signup/form.html";
  }
  if (completedStage !== null) {
    if (completedStage === "1") {
      window.location.href = "http://127.0.0.1:5501/src/signup/offer.html";
    }
    if (completedStage === "2") {
      window.location.href =
        "http://127.0.0.1:5501/src/signup/paymentpicker.html";
    }
  }

  const allPaymentMethodsUrl = `${apiUrl}/payment/method/all`;
  const response = await fetch(allPaymentMethodsUrl);
  if (response.status === 404) {
    console.log("No payment methods available, please try again");
  }
  const responseBody = await response.json();
  if (!response.ok) {
    console.log(responseBody.message);
  }

  // Assume 'response' is the received response body from the API
  const { paymentMethods } = responseBody;

  // Get all method types (keys) dynamically
  const methodTypes = Object.keys(paymentMethods);

  // Iterate over each type and access the array of methods
  methodTypes.forEach((methodType) => {
    console.log(`Payment methods for type: ${methodType}`);
    paymentMethods[methodType].forEach((method) => {
      console.log(method.serviceProviderName);
      console.log(method.serviceProviderLogo);
    });
  });

  //Clear area where all the payment options will be presented
  const selectionContainer = document.querySelector(".selectionContainer");

  //For each payment option create a div which will hold the name of the payment method and all of the available provider logos
  methodTypes.forEach((methodType) => {
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("optionContainer");

    const encryptionType = document.createElement("p");
    encryptionType.classList.add("encryptionType");
    encryptionType.innerHTML = `End to end encrypted<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F19E39"><path d="M263.72-96Q234-96 213-117.15T192-168v-384q0-29.7 21.15-50.85Q234.3-624 264-624h24v-96q0-79.68 56.23-135.84 56.22-56.16 136-56.16Q560-912 616-855.84q56 56.16 56 135.84v96h24q29.7 0 50.85 21.15Q768-581.7 768-552v384q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72Zm.28-72h432v-384H264v384Zm216.21-120Q510-288 531-309.21t21-51Q552-390 530.79-411t-51-21Q450-432 429-410.79t-21 51Q408-330 429.21-309t51 21ZM360-624h240v-96q0-50-35-85t-85-35q-50 0-85 35t-35 85v96Zm-96 456v-384 384Z"/></svg>`;

    const optionSelectionContainer = document.createElement("div");
    optionSelectionContainer.classList.add("optionSelectionContainer");

    const paymentMethodAndLogos = document.createElement("div");
    paymentMethodAndLogos.classList.add("paymentMethodNameAndLogos");

    const selectionLabel = document.createElement("span");
    selectionLabel.classList.add("selectionLabel");
    selectionLabel.textContent = methodType;

    const logosContainer = document.createElement("div");
    logosContainer.classList.add("logosContainer");

    console.log(`Payment methods for type: ${methodType}`);
    paymentMethods[methodType].forEach((method) => {
      logosContainer.innerHTML += `${method.serviceProviderLogo}`;
    });
    logosContainer.childNodes.forEach((node) => {
      node.classList.add("paymentOptionLogoIcon");
    });
    paymentMethodAndLogos.append(selectionLabel, logosContainer);

    const continueLabel = document.createElement("span");
    continueLabel.classList.add("continueLabel");
    continueLabel.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z"/></svg>`;
    optionSelectionContainer.append(paymentMethodAndLogos, continueLabel);

    optionContainer.append(encryptionType, optionSelectionContainer);

    selectionContainer.append(optionContainer);
  });
});
