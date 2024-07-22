async function fetchCountryData() {
  const url = "http://127.0.0.1:5501/src/data/countries.json";
  const response = await fetch(url, {
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
      return data;
      // You can now work with the JSON data here
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
  return response;
}

async function loadCountryDataInSelectPhoneCountryCode() {
  const countryData = await fetchCountryData();
  console.log(countryData);
  const sel = document.querySelector("#country-select");
  countryData.forEach((country) => {
    const opt1 = document.createElement("option");
    opt1.value = country.code;
    opt1.text =
      country.flag +
      " " +
      (country.countryCode.startsWith("+")
        ? country.countryCode
        : "+" + country.countryCode);
    opt1.dataset.flag = country.flag;
    opt1.dataset.code = country.countryCode;
    opt1.dataset.name = country.name;
    opt1.className = "country-option";
    sel.add(opt1);
  });
}

function updateSelectedCountryCodeOption() {}


async function checkServerStatus() { 
  const response = await fetch("httlp://localhost:3000/checkStatus");
  
}