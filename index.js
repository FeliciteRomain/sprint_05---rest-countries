// fetch(https://restcountries.com/v3.1/regionalbloc/eu)

async function render() {
  let prend = await fetch("https://restcountries.com/v3.1/region/europe");
  let data = await prend.json();
  console.log(data);

  let results = "";

  for (var key in data) {
    results += `<li> ${data[key].name.official}`;
  }
  document.getElementById("list").innerHTML = results;
}
render();
