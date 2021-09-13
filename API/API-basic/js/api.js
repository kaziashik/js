// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
}

function loadUser() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))

}

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
}

// function displayUsers(data) {

//     const ul = document.getElementById('users')
//     for (const user of data) {

//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ul.appendChild(li);
//     }
// }

function displayUsers(data) {
    const pi = document.getElementById('userp')
    for (const user of data) {
        const p = document.createElement('p');
        p.innerText = `name ${user.name} \n email:${user.email}`;
        pi.appendChild(p)
    }
}