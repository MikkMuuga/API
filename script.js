let btn = document.getElementById("generateBtn");
let quote = document.getElementById("quote");

let options = {
    method: "GET",
    headers: { "x-api-key": apiKey }, 
};

let url = "https://api.breakingbadquotes.xyz/v1/quotes";

let generateQuote = () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            quote.innerText = data[0].quote;
        });
};

btn.addEventListener("click", generateQuote);
window.addEventListener("load", generateQuote);
