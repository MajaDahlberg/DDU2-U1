// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code



let userWritesACityName = prompt("Vilken stad?");

const bigCityDiv = document.querySelector("#cities");

function createCityButton(cityName) {
    const newDiv = document.createElement("div"); 
    newDiv.classList.add("cityBox");
    newDiv.textContent = cityName; 
    bigCityDiv.append(newDiv);
}

for (let i = 0; i < cities.length; i++) {
    createCityButton(cities[i].name);
}

// --------------------------------------------------

let cityIsFound = false;

for (let i = 0; i < cities.length; i++) {
   if (userWritesACityName == cities[i].name) {
        document.querySelector("h2").textContent = `${cities[i].name} (${cities[i].country})`; 
        document.querySelector("title").textContent = `${cities[i].name}`;

        const cityDivs = document.querySelectorAll(".cityBox");
        cityDivs[i].classList.add("target"); 

        cityIsFound = true; 
        break;
    } 
}

for (let i = 0; i < )

// function nameAndCountryH2() {
//     const foundCity = cities.name; 
//     const getH2 = document.querySelector("h2");

//     getH2.textContent = `${cities.name} `;
// }






