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
  try {
    const response 
  } catch (error) {
    
  }
}