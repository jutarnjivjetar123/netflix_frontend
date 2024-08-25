const apiUrl = "http://127.0.0.1:3000";

async function testConnectionToApi() {
  const url = "http://localhost:3000/checkStatus";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

export async function login() {
  const loginUrl = `${apiUrl}/user/login`;
  const data = {
    email: document.querySelector("#emailOrPhoneInput").value,
    password: document.querySelector("#passwordInput").value,
  };
  console.log("Fetching POST to: " + loginUrl);
  console.log("Request body: " + JSON.stringify(data));
  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      const responseData = await response.json();
      console.log("Redirect link: " + JSON.stringify(responseData));
      console.log(response.headers.get("Authorization"));
      console.log(responseData.data.redirectLink);
      localStorage.setItem(
        "Authorization",
        response.headers.get("Authorization")
      );
      window.location.href = responseData.data.redirectLink;
    }
    if (response.status !== 200) {
      const responseData = await response.json();
      console.log(responseData);
      console.log("Error");
      setErrorMessage(responseData.message);
    }
  } catch (error) {
    console.error("There was a problem with the login request:", error);
  }
}

async function loadUserData() {
  console.log(localStorage.getItem("Authorization"));
  const dashboardDataUrl = `${apiUrl}/dashboard`;
  try {
    const response = await fetch(dashboardDataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("Authorization").toString(),
      },
    });
  } catch (error) {
    console.log(error);
  }
}

function setErrorMessage(message) {
  const warningElement = document.querySelector(".warning");
  if (warningElement.childElementCount > 0) {
    while (warningElement.firstChild) {
      warningElement.removeChild(warningElement.firstChild);
    }
  }

  const emailValue = document.querySelector("#emailOrPhoneInput").value;

  const span = document.createElement("span");
  const label = document.createElement("label");
  span.classList = "material-symbols-outlined";
  span.style.fontSize = "16px";
  warningElement.appendChild(span);
  warningElement.appendChild(label);
  if (document.querySelector(".getStartedButton") !== null) {
    warningElement.style.paddingLeft =
      document.querySelector(".userIdentificationInput").offsetLeft - 20 + "px";
  }

  span.textContent = "info";
  label.textContent = message;
}
