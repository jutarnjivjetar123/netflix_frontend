function fetchCountryData() {
  const url = "src/script/countries.json";
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // You can now work with the JSON data here
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
