const form = document.querySelector('form');


form.addEventListener('submit', function (e) {
    e.preventDefault();
const input = document.querySelector('input');


async function getCountry(){
    const country = await axios.get('https://restcountries.eu/rest/v2/name/' + input.value +'?fullText=true');

    input.value = '';

    console.log(country.data);
    const div = document.querySelector('.info-content');
    div.innerHTML = `
    <h1 class="country-title">${country.data[0].name}</h1>
    <h2>${country.data[0].nativeName}</h2>
    <img src='${country.data[0].flag}'>
    <h3>Population:</h3>
    <p>${country.data[0].population}</p>
    <h3>Region:</h3>
    <p>${country.data[0].region}, ${country.data[0].subregion}</p>
    <h3>Language:</h3>
    `
    
    for(language of country.data[0].languages){
        div.insertAdjacentHTML('beforeend', `
        <p>${language.name}</p>`)
    }

    div.insertAdjacentHTML('beforeend', `
    <h3>Currency:</h3>
    `)

    for(money of country.data[0].currencies){
        div.insertAdjacentHTML("beforeend", `
        <h3>${money.symbol}</h3>
        <p>${money.name}</p>`)
    }
} 

    getCountry();
})

const randomBtn = document.querySelector('.btn--random')

randomBtn.addEventListener('click', () => {
    async function randomCountry(){
    const random = await axios.get('https://restcountries.eu/rest/v2/all')


    let randomNumber = Math.floor((Math.random() * 248) + 1);
    console.log(random.data[randomNumber]);

    const div = document.querySelector('.info-content');


    div.innerHTML = `
    <h1 class="country-title">${random.data[randomNumber].name}</h1>
    <h2>${random.data[randomNumber].nativeName}</h2>
    <img src='${random.data[randomNumber].flag}'>
    <h3>Population:</h3>
    <p>${random.data[randomNumber].population}</p>
    <h3>Region:</h3>
    <p>${random.data[randomNumber].region}, ${random.data[randomNumber].subregion}</p>
    <h3>Language:</h3>
    `
    
    for(language of random.data[randomNumber].languages){
        div.insertAdjacentHTML('beforeend', `
        <p>${language.name}</p>`)
    }

    div.insertAdjacentHTML('beforeend', `
    <h3>Currency:</h3>
    `)

    for(money of random.data[randomNumber].currencies){
        div.insertAdjacentHTML("beforeend", `
        <h3>${money.symbol}</h3>
        <p>${money.name}</p>`)
    }

}
randomCountry();
})