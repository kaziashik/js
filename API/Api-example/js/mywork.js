const loadcountris = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displaycountry(data));
}

loadcountris()

const divcountris = document.getElementById('countries')
const displaycountry = countries => {
    // console.log(countries)
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = ` <h1>${country.name}</h1>
        <p>${country.capital}</p>
        <button onclick="displayDitals('${country.name}')">Details</button>`
        divcountris.appendChild(div)
    })

}


const displayDitals = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    const contrydetailsDIV = document.getElementById('country-details')
    contrydetailsDIV.innerHTML = `<h1>${country.name}</h1>
    <p>${country.population}</p > 
    <img width='200px' src="${country.flag}">`

}