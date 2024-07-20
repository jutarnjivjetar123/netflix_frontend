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
  const loginUrl = "http://localhost:3000/user/login";
  const data = {
    email: document.querySelector("#emailInput").value,
    password: document.querySelector("#passwordInput").value,
  };
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
      localStorage.setItem("userData", JSON.)
    }
  } catch (error) {
    console.error("There was a problem with the login request:", error);
  }
}
