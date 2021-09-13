
function loddata() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displaydata(data))
}

loddata()

function displaydata(post) {
    const postContainer = document.getElementById('post')
    for (const posts of post) {
        const div = document.createElement('p');
        div.classList.add('post')
        div.innerHTML = `<h1>${posts.id}</h1>
        <p>${posts.title}</p> <img src="${posts.url}" alt="">`

        postContainer.appendChild(div)
    }
}