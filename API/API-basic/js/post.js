function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

loadPosts();

function displayPosts(post) {
    const postContainer = document.getElementById('posts')
    for (const posts of post) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `<h3>${posts.title}</h3>
      <p>${posts.body}</p>`
        postContainer.appendChild(div);


    }

}


function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'my new post',
            body: 'This is my posts',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })

    .then(res=>res.json())
    .then
}