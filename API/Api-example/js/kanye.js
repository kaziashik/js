const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayquet(data))
}

const displayquet = quote => {
    const quoteElement = document.getElementById('quote');

    quoteElement.innerText = quote.quote;

}