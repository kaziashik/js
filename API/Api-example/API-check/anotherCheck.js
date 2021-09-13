const loddata = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayinformetion(data.results[0]))

}

loddata()

const showinfo = document.getElementById('randomuser')

const displayinformetion = data => {
    console.log(data)
    const div = document.createElement('div');
    div.innerHTML = ` <img src="${data.picture.large}"> <p>${data.cell}</p>
 <p>${data.location.city}</p> 
 <p>${data.location.coordinates.latitude}</p> 
 <p>${data.location.street.number, data.location.street.name}</p> 
 <p>${data.location.timezone.offset}</p> `
    showinfo.appendChild(div)

}

// অর্থাৎ street, city, coordinates, timezone 