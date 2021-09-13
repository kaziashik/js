const loadCuntries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

loadCuntries()



const displayCountry = countries => {

    // for (const country of countries) {
    //     console.log(country)
    // }

    const countriDiv = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country')

        div.innerHTML = ` <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>`

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);

        // const p = document.createElement('p');
        // p.innerText = country.capital
        // div.appendChild(p);

        countriDiv.appendChild(div)

    });
};

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountrydetails(data[0]));
}

const displayCountrydetails = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `<h5>${country.name}</h5>
    <p>capital: ${country.capital}</p>
    <p>area: ${country.area}</p>
    <p>population: ${country.population}</p>
    <p>resion: ${country.region}</p>
    <img width="200px" src="${country.flag}">`

}