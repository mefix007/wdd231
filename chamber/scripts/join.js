// getting current year and date  
const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

// getting the last day modified  
const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = document.lastModified;

// adjusting the navigation icon for mobile views  
const navigation = document.getElementById('menu');

// Add a click event listener to the hamburger button  
menu.addEventListener('click', function () {
    // Toggle the "show" class on the navigation menu  
    navigation.classList.toggle('show');
});

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

// CREATE A REQUIRED VARIABLE FOR THE URL
const myKey = "9bad2045dce03fc215cd29e385c1a16f"
const myLat = "7.15"
const myLon = "3.35"

// Create a variable for URL
const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`
// Fetching the Json file
async function fetchCurrentWeather() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayCurrentWeather(data); // uncomment when ready
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display the Json file result
function displayCurrentWeather(data) {
    // console.log('hello')
    captionDesc.innerHTML = data.weather[0].description
    currentTemp.innerHTML = `${data.main.temp}&deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)

}

// select HTML elements in the document
const currentTemp2 = document.querySelector('#forecast1-temp');
const weatherIcon2 = document.querySelector('#weather2-icon');
const captionDesc2 = document.querySelector('#figcaption2');

const currentTemp3 = document.querySelector('#forecast2-temp');
const weatherIcon3 = document.querySelector('#weather3-icon');
const captionDesc3 = document.querySelector('#figcaption3');

const currentTemp4 = document.querySelector('#forecast3-temp');
const weatherIcon4 = document.querySelector('#weather4-icon');
const captionDesc4 = document.querySelector('#figcaption4');

const myURL2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`

async function fetchForecastWeather() {
    try {
        const response = await fetch(myURL2);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayForecastWeather(data); // uncomment when ready
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display the Json file result
function displayForecastWeather(data) {
    // console.log('hello')
    captionDesc2.innerHTML = data.list[4].weather[0].description
    currentTemp2.innerHTML = `${data.list[4].main.temp}&deg;C`
    const iconsrc2 = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`
    weatherIcon2.setAttribute('src', iconsrc2)
    weatherIcon2.setAttribute('alt', data.list[4].weather[0].description)

    captionDesc3.innerHTML = data.list[12].weather[0].description
    currentTemp3.innerHTML = `${data.list[12].main.temp}&deg;C`
    const iconsrc3 = `https://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`
    weatherIcon3.setAttribute('src', iconsrc3)
    weatherIcon3.setAttribute('alt', data.list[12].weather[0].description)

    captionDesc4.innerHTML = data.list[20].weather[0].description
    currentTemp4.innerHTML = `${data.list[20].main.temp}&deg;C`
    const iconsrc4 = `https://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`
    weatherIcon4.setAttribute('src', iconsrc4)
    weatherIcon4.setAttribute('alt', data.list[20].weather[0].description)

}
fetchCurrentWeather();
fetchForecastWeather();

// modal buttonn functions
const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

// show the dialog button opens the dialog 
openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Non Profit membership, give members access to free advertisement only.`
})
openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Bronze membership, give members access to free advertisement and clients' reviews.`
})
openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Silver membership, give members access to free advertisement, clients' reviews and live broadcast.`
})
openButton4.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Gold membership, give members access to free advertisement, clients' reviews, live broadcast, and lots of freebies.`
})

// close the dialog button of the modal
closeButton.addEventListener("click", () => {
    dialogBox.close();
})