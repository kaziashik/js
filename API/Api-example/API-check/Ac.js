const loadPlaceholder = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => dosplayCommend(data))

}

loadPlaceholder()

const divcontain = document.getElementById('placeholder')
const dosplayCommend = data => {
    // const buddies = data[0];
    console.log(data)
    data.forEach(datas => {
        const div = document.createElement('div');
        div.innerHTML = `<h1>${datas.id} </h1>\n <p>${datas.body}</p>
        <button onclick="loadCommendById(${datas.id})">click</button>`
        divcontain.appendChild(div)
    });


    // 
    // data.forEach(datas => {
    //    
};

const loadCommendById = id => {

    const url = `https://jsonplaceholder.typicode.com/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

}
