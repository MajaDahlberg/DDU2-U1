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

// ------------------------------------------------------ BLÅA

let maxDistance = 0; // (deklarerar=skapa) deklarerar variabeln maxDistance och tilldelar värdet 0 till "maxDistance"
let farthestCityIndex = -1; // same same fast "farthestCityIndex" får värdet -1

for (let i= 0; i < distances.length; i++) {  // loop: så länge distance.length är större än i så fortsätter loopen, dvs längden på arrayen som heter distances (i databasen). I arrayen finns det objekt som har varsit index-nummer. Med loopen säger vi till datorn att gå igenom alla objekt som finns tills att den når den sista då distances.length blir större än i, då stannar den. 
    if (userWritesACityName === cities[distances[i].city1].name || userWritesACityName === cities [distances[i].city2].name) { // påbörjar en if-sats meed villkoret: 
        let farthestCity = (userWritesACityName === cities[distances[i].city1].name) ? distances[i].city2 : distances[i].city1;
        if (distances[i].distance > maxDistance) {
            maxDistance = distances[i].distance; 
            farthestCityIndex = farthestCity;
        }
    }
}

if (farthestCityIndex !== -1) {
    const cityDivs = document.querySelectorAll(".cityBox"); 
    cityDivs[farthestCityIndex].classList.add("furthest");
}


//---------------------------------------------------- GRÖNA 

let minDistance = Infinity; 
let closestCityIndex = -1; 

for (let i = 0; i < distances.length; i++) {
    if (userWritesACityName === cities[distances[i].city1].name || userWritesACityName === cities[distances[i].city2].name) {
        let closestCity = (userWritesACityName === cities[distances[i].city1].name) ? distances[i].city2 : distances[i].city1; 
        if (distances[i].distance < minDistance) {
            minDistance = distances[i].distance;
            closestCityIndex = closestCity;
        }
    }
}

if (closestCityIndex !== -1) {
    const cityDivs = document.querySelectorAll(".cityBox"); 
    cityDivs[closestCityIndex].classList.add("closest");
}

// ------------------------------------------------------







