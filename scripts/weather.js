// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// const url = 'https://openweathermap.org/city/2821164';

// CREATE A REQUIRED VARIABLE FOR THE URL
const myKey = "9bad2045dce03fc215cd29e385c1a16f"
const myLat = "49.76"
const myLon = "6.64"

// Create a variable for URL
const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&unit=Imperial`

// Fetching the Json file
async function apiFetch() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display the Json file result
function displayResults(data) {
    // console.log('hello')
    captionDesc.innerHTML = data.weather[0].description
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)

}
apiFetch();