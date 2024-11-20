// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code



let userWritesACityName = prompt("Vilken stad?")

const bigCityDiv = document.querySelector("#cities");

function createCityButton(cityName) {
    const newDiv = document.createElement("div"); 
    newDiv.classList.add("cityBox");
    newDiv.textContent = cityName; 
    bigCityDiv.append(newDiv);
}

for (let i = 0; i < cities.length; i++) {
    createCityButton(cities[i].name)
}


