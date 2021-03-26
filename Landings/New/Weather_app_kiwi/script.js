const api = {
    key: 'c3dc70c5b1b61bc6ef71cfdce1f43e98',
    base: 'http://api.openweathermap.org/data/2.5/'
}

const searchButton = document.querySelector('.header__search-field-button');
const query = document.querySelector('.header__search-field-input');
let dateNow = new Date();
let temp = document.querySelector('.header__search-result-left-temp');
let tempMin = document.querySelector('.header__search-result-temp-min');
let tempMax = document.querySelector('.header__search-result-temp-max');
let city = document.querySelector('.header__search-result-right-city');
let date = document.querySelector('.header__search-result-right-date');
let descMain = document.querySelector('.header__search-result-left-weather');
let descAdd = document.querySelector('.header__search-result-left-weather-add');
let icons = document.querySelector('.header__search-result-left-icon');
let nonRes = document.querySelector('.header__search-list-non-result');
let listResults = document.querySelector('.header__search-list-avaiable-results');
let listResultsItem = document.querySelector('.search-list__result');
let newYork = document.querySelector('.popular-newYork');
let london = document.querySelector('.popular-london');
let dubai = document.querySelector('.popular-dubai');
let paris = document.querySelector('.popular-paris');

// FETCH API
function getData(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather =>{
            return weather.json();
        }).then(displayResults)
}

// Search button
searchButton.addEventListener('click', () => {
    getData(query.value);
});
query.addEventListener('keypress', setQuery);

function setQuery(event) {
    if (event.keyCode == 13) {
        getData(query.value);
    } 
}

// Local storage
function localStorageData () {
    localStorage.setItem('query', query.value)
}

// Reload && Default city
function reloadData() {
    query.value = localStorage.getItem('query');
    query.oninput = () => {
        localStorageData()
    };

    if (localStorage.query == '') {
        getData('Lviv')
    }
    
    getData(query.value)
}

// Night Mode
function nightBg () {
    let date = new Date;
    if (date.getHours() >= 21 || date.getHours() <= 6) {
        let bgNight = document.querySelector('.header');
        let searchButton = document.querySelector('.header__search-field-button');
        let searchIcon = document.querySelector('.header__search-field-icon');
        searchIcon.style.color = 'White';
        searchButton.style.backgroundColor = '#2A344B';
        bgNight.style.backgroundImage = 'url(../img/bg_night.png)';
        listResultsItem.addEventListener('mouseenter', nightListItemOn);
        function nightListItemOn () {
            listResultsItem.style.backgroundColor = '#2A344B';
            listResultsItem.style.color = 'white';            
        }
        listResultsItem.addEventListener('mouseleave', nightListItemOff);
        function nightListItemOff () {
            listResultsItem.style.backgroundColor = 'white';
            listResultsItem.style.color = 'black';            
        }
    }
}

//Display results
function displayResults (weather) {
    // CITY/COUNTRY
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
    
    // DATE
    date.innerHTML = dateBuilder(dateNow);

    // TEMPERATURE
    tempMin.innerHTML = `${degreeSign(Math.round(weather.main.temp_min))}&#176;C`;
    tempMax.innerHTML = `${degreeSign(Math.round(weather.main.temp_max))}&#176;C`;
    temp.innerHTML = `${degreeSign((Math.round(((weather.main.temp_min) + (weather.main.temp_max))/2)))}&#176;C`;

    // DESCRIPTION
    descMain.innerHTML = `${weather.weather[0].main}`
    descAdd.innerHTML = capitalizeFirstLetter(`${weather.weather[0].description}`);

    // ICONS
    icons.innerHTML = `<img src='http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png'>`
    console.log(weather);
}

// Popular cities
newYork.addEventListener('click', function(){
    query.value = "New York";
    localStorageData();
    getData(query.value);
});
london.addEventListener('click', function(){
    query.value = "London";
    localStorageData();
    getData(query.value);
});
dubai.addEventListener('click', function(){
    query.value = "Dubai";
    localStorageData();
    getData(query.value);
});
paris.addEventListener('click', function(){
    query.value = "Paris";
    localStorageData();
    getData(query.value);
});

// + sign to degree
function degreeSign(deg) {
    if (deg >= 0) {
        return `+${deg}`
    } else return deg
}

// Capitalize additional description
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Date builder 
function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${date} ${month} ${year}`;
}

// Adding cards BG
let card = document.querySelectorAll('.main__pop-cities-card');
let cardBg = [
    'url(../img/new-york-card.png)',
    'url(../img/london-card.png)',
    'url(../img/dubai-card.png)',
    'url(../img/paris-card.png)',    
];
card.forEach(function (val, i) {
    let n = 0;
    val.style.backgroundImage = cardBg[i];
    n++;
});

// Result list
query.addEventListener("keyup", KeyCheck);
function showListItem() {
    getData(query.value);
    listResults.style.display = "none";
    nonRes.style.display = 'none';
}
function getListData (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayListResults)
}
function displayListResults (data) {
    if (data.name) {
        let cityName = data.name;
        listResults.style.display = 'flex';
        listResultsItem.innerText = `${cityName}, ${data.sys.country}`;
    } else {
        nonRes.style.display = 'flex';
    }
}
function KeyCheck(event) {
    var KeyID = event.keyCode;
    if (query.value.split('').length >= 1) {
        nonRes.style.display = 'flex';
        nonRes.innerHTML = 'City not found, please try to change your search query';
        console.log(query.value);
        getListData(query.value);
    } else if (KeyID == 8 && query.value.split('').length <= 0) {
        nonRes.style.display = 'none';
        listResults.style.display = 'none';
        console.log(query.value.split(''))
    }
}

nightBg();
reloadData ();