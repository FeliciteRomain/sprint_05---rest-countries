const listCountries = "https://restcountries.com/v3.1/region/europe";
async function render() {
  let serv = await fetch(listCountries);
  let pays = await serv.json();
  for (let j in pays) {
    let tableau = document.getElementById("result");
    let tr_personne = document.createElement("tr");
    let country = document.createElement("td");
    let area = document.createElement("td");
    let population = document.createElement("td");
    let capital = document.createElement("td");

    country.textContent = pays[j].name.official;
    area.textContent = nombre(pays[j].area);
    population.textContent = nombre(pays[j].population);
    capital.textContent = pays[j].capital;

    tableau.appendChild(tr_personne);
    tr_personne.appendChild(country);
    tr_personne.appendChild(area);
    tr_personne.appendChild(population);
    tr_personne.appendChild(capital);
  }
}
render();

function nombre(nb) {
  let lol = nb.toString();
  let tour = 0;
  let result = "";
  if (lol.includes(".") == true) {
    return lol;
  }
  for (let index = lol.length - 1; index >= 0; index--) {
    if (tour == 2) {
      result += lol[index] + ",";
      tour = -1;
    } else {
      result += lol[index];
    }
    tour++;
  }
  return reverseString(result);
}

function reverseString(baba) {
  let newString = "";
  for (let i = baba.length - 1; i >= 0; i--) {
    newString += baba[i];
  }
  if (newString.charAt(0) == ",") {
    newString = newString.replace(",", "");
  }
  return newString;
}
