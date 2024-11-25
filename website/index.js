// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code



let cityFromUser = prompt("Vilken stad?");

// --------------------------------------------------- CITY BUTTONS
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


// -------------------------------------------------- STADEN MAN SKRIVER I PROMPTEN BLIR SVART 

let cityIsFound = false;

for (let i = 0; i < cities.length; i++) {
    if (cityFromUser == cities[i].name) {
        document.querySelector("h2").textContent = `${cities[i].name} (${cities[i].country})`; 
        document.querySelector("title").textContent = `${cities[i].name}`;
        
        const cityDivs = document.querySelectorAll(".cityBox");
        cityDivs[i].classList.add("target"); 
        
        cityIsFound = true; 
        break;
    } 
}

if (!cityIsFound) { // ! = om det man skriver i prompten inte finns i databasen 
    document.querySelector("h2").textContent = `${cityFromUser} finns inte i databasen`
    document.querySelector("title").textContent = `Not found` // titeln (högst upp på webbfönstret) blir "not found"
    document.querySelector("h3").textContent = null; // h3:an slutar existera

}

// ------------------------------------------------------ BLÅA KNAPPAR STADEN SOM ÄR LÄNGST BORT 

let maxDistance = 0;
let farthestCityIndex = -1;

const ifCityMatch = (cityName, cityIndex) => cityFromUser === cities[cityIndex].name;

for (let i = 0; i < distances.length; i++) {
    const { city1, city2, distance } = distances[i];
    
    if (ifCityMatch(cityFromUser, city1) || ifCityMatch(cityFromUser, city2)) {
        const otherCity = ifCityMatch(cityFromUser, city1) ? city2 : city1;

        if (distance > maxDistance) {
            maxDistance = distance;
            farthestCityIndex = otherCity;
        }
    }
}

if (farthestCityIndex !== -1) {
    const cityElements = document.querySelectorAll(".cityBox");
    cityElements[farthestCityIndex].classList.add("furthest");

    const distanceDividedByTen = Math.round(maxDistance / 10);
    cityElements[farthestCityIndex].textContent = `${cities[farthestCityIndex].name} ${distanceDividedByTen} mil bort`;

    document.getElementById("furthest").textContent = `${cities[farthestCityIndex].name}`;
}


//---------------------------------------------------- GRÖNA KNAPPAR STADEN SOM ÄR NÄRMST

let minDistance = Infinity;
let closestCityIndex = -1;

const isCityMatch = (cityName, cityIndex) => cityFromUser === cities[cityIndex].name;

for (let i = 0; i < distances.length; i++) {
    const { city1, city2, distance } = distances[i];
    
    if (isCityMatch(cityFromUser, city1) || isCityMatch(cityFromUser, city2)) {
        const otherCity = isCityMatch(cityFromUser, city1) ? city2 : city1;
        
        if (distance < minDistance) {
            minDistance = distance;
            closestCityIndex = otherCity;
        }
    }
}

if (closestCityIndex !== -1) {
    const cityElements = document.querySelectorAll(".cityBox");
    cityElements[closestCityIndex].classList.add("closest");
    
    const distanceDividedByTen = Math.round(minDistance / 10);
    cityElements[closestCityIndex].textContent = `${cities[closestCityIndex].name} ${distanceDividedByTen} mil bort`;

    document.getElementById("closest").textContent = `${cities[closestCityIndex].name}`;
}



// ---------------------------------------------- INNEHÅLLET PÅ TABELLEN

function createTable() {
    const tabell = document.querySelector("#table"); // Grid-layout
    tabell.style.width = "100%";
    tabell.style.display = "grid";
    
    const rows = cities.length;
    const columns = cities.length + 1; // En extra för header-raden
    
    tabell.style.gridTemplateColumns = `80px repeat(${columns - 1}, 1fr)`;
    tabell.style.gridTemplateRows = `repeat(${rows + 1}, 1fr)`;
    
    // Header-rad
    for (let a = 0; a < columns; a++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("cell");
        emptyCell.classList.add("head_column");
        emptyCell.style.display = "grid";

        
        if (a === 0) {
            emptyCell.textContent = ""; // Tom första cell
        } else {
            emptyCell.textContent = cities[a - 1].id; // Stadens ID
        }
        tabell.appendChild(emptyCell);
    }
    
    for (let j = 1; j < columns; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell"); 
      cell.style.display = "grid"; 
      tabell.appendChild(cell);
      
    }
}
}

createTable ();
