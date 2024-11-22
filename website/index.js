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

// -------------------------------------------------- OM USER SKRIVER IN ETT ORD SOM INTE FINNS I DATABASEN 


// -------------------------------------------------- STADEN MAN SKRIVER I PROMPTEN BLIR SVART 

let cityIsFound = false;

for (let i = 0; i < cities.length; i++) {
   if (cityFromUser == cities[i].name) {
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
    document.querySelectorAll(".cityBox")[farthestCityIndex]?.classList.add("furthest");
}


//---------------------------------------------------- GRÖNA 

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
}


// ------------------------------------------------------ MALL FÖR TABELLEN 

function createTable() {
    const tabell = document.querySelector("#table"); 
  
    tabell.style.width = "100%"; 
    
    const rows = cities.length; 
    const columns = 40;

    for ( let a = 0; a < columns; a++) {
      const emptyCell = document.createElement("div");
      emptyCell.classList.add("cell"); 
      emptyCell.classList.add("head_column"); 
      emptyCell.style.display = "grid";
      tabell.appendChild(emptyCell); 
  
      if (a=== 0) {
        emptyCell.textContent = ""; 
      } else {
        emptyCell.textContent = cities[a-1].id; 
      }
    }

 for (let i = 0; i < rows; i++) {
    let namesRow = document.createElement("div");
    namesRow.textContent = `${cities[i].id}` + " - " + cities[i].name; 
    namesRow.classList.add("head_row");
    namesRow.classList.add("cell");
    namesRow.style.display = "grid"; 
    tabell.appendChild(namesRow);

    
    for (let j = 1; j < columns; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell"); 
      cell.style.display = "grid"; 
      tabell.appendChild(cell);
      
    }
}
}

createTable ();
