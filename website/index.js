

let cityFromUser = prompt("Vilken stad?");

const bigDivForSmallCityDivs = document.querySelector("#cities");

function createCityButton(getCityNameFromDatabase) {
    const smallCityDiv = document.createElement("div"); 
    smallCityDiv.classList.add("cityBox");
    smallCityDiv.textContent = getCityNameFromDatabase; 
    bigDivForSmallCityDivs.append(smallCityDiv);
}

for (let i = 0; i < cities.length; i++) {
    createCityButton(cities[i].name);
}

let cityIsFound = false;

for (let i = 0; i < cities.length; i++) {
    if (cityFromUser === cities[i].name) {
        document.querySelector("h2").textContent = `${cities[i].name} (${cities[i].country})`; 
        document.querySelector("title").textContent = `${cities[i].name}`;
        
        const cityDivs = document.querySelectorAll(".cityBox");
        cityDivs[i].classList.add("target"); 
        
        cityIsFound = true; 
        break;
    } 
}

if (!cityIsFound) { 
    document.querySelector("h2").textContent = `${cityFromUser} finns inte i databasen`;
    document.querySelector("title").textContent = `Not found`; 
    document.querySelector("h3").textContent = null; 

}

let maxDistance = 0;
let farthestCityIndex = -1;

let ifCityMatch = function(cityName, cityIndex) {
    return cityFromUser === cities[cityIndex].name;
}

for (let i = 0; i < distances.length; i++) {
    let city1 = distances[i].city1;
    let city2 = distances[i].city2;
    let distance = distances[i].distance;
    
    if (ifCityMatch(cityFromUser, city1) || ifCityMatch(cityFromUser, city2)) {
        let otherCity = ifCityMatch(cityFromUser, city1) ? city2 : city1;

        if (distance > maxDistance) {
            maxDistance = distance;
            farthestCityIndex = otherCity;
        }
    }
}

if (farthestCityIndex !== -1) {
    let cityElements = document.querySelectorAll(".cityBox");
    let furthestCity = cityElements[farthestCityIndex];
    furthestCity.classList.add("furthest");

    let distanceDividedByTen = Math.round(maxDistance / 10);
    furthestCity.textContent = `${cities[farthestCityIndex].name} ${distanceDividedByTen} mil bort`;

    document.getElementById("furthest").textContent = `${cities[farthestCityIndex].name}`;
}


let minDistance = Infinity;
let closestCityIndex = -1;

let cityDivs = document.querySelectorAll(".cityBox");

for (let i = 0; i < distances.length; i++) {
    let city1 = distances[i].city1;
    let city2 = distances[i].city2;
    let distance = distances[i].distance;

    if (cityFromUser === cities[city1].name || cityFromUser === cities[city2].name) {
        let otherCity = cityFromUser === cities[city1].name ? city2 : city1;
        if (distance < minDistance) {
            minDistance = distance;
            closestCityIndex = otherCity;
        }
    }
}

if (closestCityIndex !== -1) {
    let closestCity = cityDivs[closestCityIndex];
    closestCity.classList.add("closest");

    let distanceDividedByTen = Math.round(minDistance / 10);
    closestCity.textContent = `${cities[closestCityIndex].name} ${distanceDividedByTen} mil bort`;

    document.getElementById("closest").textContent = `${cities[closestCityIndex].name}`;
}

function createTable() {
    const tabell = document.querySelector("#table"); 
    tabell.style.width = "100%";
    tabell.style.display = "grid";
    
    const rows = cities.length;
    const columns = cities.length + 1;
    
    tabell.style.gridTemplateColumns = `80px repeat(${columns - 1}, 1fr)`;
    tabell.style.gridTemplateRows = `repeat(${rows + 1}, 1fr)`;
    
    for (let a = 0; a < columns; a++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("cell");
        emptyCell.classList.add("head_column");
        emptyCell.style.display = "grid";

        if (a === 0) {
            emptyCell.textContent = ""; 
        } else {
            emptyCell.textContent = cities[a - 1].id;
        }
        tabell.appendChild(emptyCell);
    }
    
    for (let i = 0; i < rows; i++) {
        let namesRow = document.createElement("div");
        namesRow.textContent = cities[i].id + " - " + cities[i].name;
        namesRow.classList.add("head_row");
        namesRow.classList.add("cell");
        tabell.appendChild(namesRow);
        
        if (i % 2 === 0) { 
            namesRow.classList.add("even_row")
        }

        for (let j = 0; j < cities.length; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.display = "grid";

        if (j % 2 === 0)
            cell.style.backgroundColor = "rgb(202, 222, 226)";

            let distanceValue = null; 
            for (let distance of distances) {
                if ((distance.city1 === cities[i].id && distance.city2 === cities[j].id)) {
                    distanceValue = distance.distance;
                    break;
                }
                if (distance.city2 === cities[i].id && distance.city1 === cities[j].id) {
                    distanceValue = distance.distance;
                }
            }
            
            if (distanceValue !== null) {
                cell.textContent = distanceValue / 10;
            } else if (i === j) {
                cell.textContent = "";
            }
            
            if (i % 2 === 0) { 
                cell.classList.add("even_row")
            }
            

            tabell.appendChild(cell);
        }
    }
}
createTable ();
