function datalod() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displaydata(data))
}
datalod()

function displaydata(commend) {
    const divcontainer = document.getElementById('commend')
    for (const commends of commend) {
        const p = document.createElement('p');


        p.innerText = commends.email
        divcontainer.appendChild(p)
    }

}