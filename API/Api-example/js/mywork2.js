function searchFood() {
    const serchField = document.getElementById('search-field');
    const inputvalu = serchField.value;
    serchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalu}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayfood(data.meals))


}

const displayfood = meals => {
    console.log(meals)
    const displayFood = document.getElementById('search-result');
    displayFood.textContent = ''

    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="displayFoodInformention(${meal.idMeal})" class="card h - 100" >
            < img src="${meal.strMealThumb}" class="card-img-top" alt="..." >
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                </div>
            </div > `

        displayFood.appendChild(div)

    })


}


const displayFoodInformention = milId => {


    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${milId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealD(data.meals[0]))
}

const displayMealD = meal => {
    console.log(meal)
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
  `

    mealDetails.appendChild(div)
}