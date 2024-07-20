const apiUrl = "http://localhost:3001";

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
  const loginUrl = `${apiUrl}/user/login`;
  const data = {
    email: document.querySelector("#emailInput").value,
    password: document.querySelector("#passwordInput").value,
  };
  console.log("Fetching POST to: " + loginUrl);
  console.log("Request body: " + JSON.stringify(data));
  sessionStorage.setItem("test", "test");
  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    sessionStorage.setItem("test1", "test1");
    console.log(response);
    if (response.status === 200) {
      const responseData = await response.json();
      console.log("Redirect link: " + JSON.stringify(responseData));
      console.log(response.headers.get("Authorization"));
      localStorage.setItem(
        "Authorization",
        response.headers.get("Authorization").toString()
      );
      sessionStorage.setItem("test2", "test2");
      window.location.href = response.body.data.redirectLink;
    }
  } catch (error) {
    console.error("There was a problem with the login request:", error);
  }
}

async function loadUserData() {}
