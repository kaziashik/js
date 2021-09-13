function loadAlbam() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbam(data))
}

loadAlbam();

function displayAlbam(albums) {
    const albumContainer = document.getElementById('albums');

    for (const album of albums) {
        const p = document.createElement('p');
        p.style.textAlign = 'center'
        p.style.background = 'green'
        p.style.color = 'white'
        p.innerText = album.title;
        albumContainer.appendChild(p)
    }


}