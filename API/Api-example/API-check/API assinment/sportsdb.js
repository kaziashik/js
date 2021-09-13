
const loddata = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value = ''

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`

    fetch(url)

        .then(res => res.json())
        .then(data => displaydata(data.teams))


}




const displaydata = play => {
    console.log(play)


    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    play.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');

        div.classList.add('col');
        div.innerHTML = `
        <div  onclick="loadMeaIdetail(${meal.idTeam})" class="card h-100">
          <img src="${meal.strTeamBadge}" class="card-img-top" alt="...">
          <div class="card-body">
               <h5 class="card-title">${meal.strAlternate}</h5>
               <p class="card-text">${meal.strDescriptionDE}</p>
               <p>${meal.strStadiumDescription}</p>
         </div>
            </div>
            `

        searchResult.appendChild(div)
    })
}


const loadMeaIdetail = idTeam => {
    // console.log(mealId)

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${idTeam}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.idTeam[0]));
}

const displayMealDetail = meal => {
    console.log(meal);

    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strTeamBadge}"class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strAlternate}</h5>
      <p class="card-text">$${meal.strDescriptionDE}</p>
      <a href="${meal.strWebsite}" class="btn btn-primary">Go somewhere</a>
    </div>
  `

    mealDetails.appendChild(div)
}

