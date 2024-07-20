async function getCountryCodes(){ 
    const url = "https://country.io/phone.json";
    try {
        const response = await fetch(url);
        console.log(response);
    } catch (error) {
        
    }
}
