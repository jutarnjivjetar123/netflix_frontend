const url = "https://mock_b1ce8aac820947a08c709b75d8b95216.mock.insomnia.rest";

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

async function login() {
  const loginUrl = url.concat("/user/login");
  const data = {
    email: document.querySelector("#emailInput").value,
    password: document.querySelector("#passwordInput").value,
  };
  console.log("Fetching POST to: " + loginUrl);
  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response);
    if (response.status === 200) {
      const bodyData = await response.json();
      window.location.href = bodyData.data.redirectLink;
    }
  } catch (error) {
    console.error("There was a problem with the login request:", error);
  }
}

async function loadUserData() {}
