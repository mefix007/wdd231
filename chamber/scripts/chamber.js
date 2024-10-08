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
const captionDesc = document.querySelector('figcaption');

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

// Fetch .json file from the data folder
const myURL = `https://mefix007.github.io/wdd231/chamber/data/members.json`

// Async function to get members data
async function getMembersData() {
    try {
        const response = await fetch(myURL);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        // Access members within the JSON structure
        console.log(data.members);
        members = data.members; // Store members in the global variable  
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

// Function to display spotlight members  
// const displaySpotlightMembers = () => {
//     const spotlightSection = document.querySelector('#spotlight');
//     spotlightSection.innerHTML = ''; // Clear existing spotlight content  

//     // Filter members for Gold and Silver levels  
//     const qualifiedMembers = members.filter(member =>
//         member.membership_level === 'Gold' || member.membership_level === 'Silver'
//     );

//     // Shuffle the qualified members array  
//     const shuffledMembers = qualifiedMembers.sort(() => 0.5 - Math.random());

//     // Select 2 or 3 members randomly  
//     const spotlightMembers = shuffledMembers.slice(0, 3);

//     // Loop through selected spotlight members and display their information  
//     spotlightMembers.forEach(member => {
//         let spotlightCard = document.createElement('div');
//         spotlightCard.classList.add('spotlight-card'); // Optional: Add a class for styling  

//         // Create elements for company information  
//         let companyName = document.createElement('h3');
//         let logo = document.createElement('img');
//         let phone = document.createElement('p');
//         let address = document.createElement('p');
//         let websiteLink = document.createElement('a');
//         let membershipLevel = document.createElement('p');

//         // Set content for the spotlight member  
//         companyName.textContent = member.business; // Assuming 'business' is the company name  
//         logo.setAttribute('src', member.logo); // Assuming 'logo' is the image URL  
//         logo.setAttribute('alt', `Logo of ${member.business}`);
//         phone.textContent = `Phone: ${member.phone}`;
//         address.textContent = `Address: ${member.addresses}`; // Assuming 'addresses' is the address  
//         websiteLink.setAttribute('href', member.website); // Assuming 'website' is the URL  
//         websiteLink.textContent = `Visit Website`;
//         membershipLevel.textContent = `Membership Level: ${member.membership_level}`; // Assuming 'membership_level' is the level  

//         // Append elements to the spotlight card  
//         spotlightCard.appendChild(logo);
//         spotlightCard.appendChild(companyName);
//         spotlightCard.appendChild(phone);
//         spotlightCard.appendChild(address);
//         spotlightCard.appendChild(websiteLink);
//         spotlightCard.appendChild(membershipLevel);

//         // Append the spotlight card to the spotlight section  
//         spotlightSection.appendChild(spotlightCard);
//     });
// };

// // Handling navigation link clicks for filtering courses  
// const all = document.getElementById("#all");
// const phoneDealer = document.getElementById("#phone_dealers");
// const phoneRepair = document.getElementById("#phone_repairs");
// const accessories = document.getElementById("#phone_parts");

// // Select the card selector from the HTML file
// const directory = document.querySelector('#directory');

// all.addEventListener("click", (e) => {
//     e.preventDefault(); // Prevent default anchor behavior  
//     displayMembers(members); // Display all
// });

// phoneDealer.addEventListener("click", (e) => {
//     e.preventDefault();
//     const filteredMembers = members.filter(member => member.business === 'phone_dealers');
//     displayMembers(filteredMembers);  // Display phone_dealers
// });

// phoneRepair.addEventListener("click", (e) => {
//     e.preventDefault();
//     const filteredMembers = members.filter(member => member.business === 'phone_repairs');
//     displayMembers(filteredMembers); // Display phone_repairs
// });

// accessories.addEventListener("click", (e) => {
//     e.preventDefault();
//     const filteredMembers = members.filter(member => member.business === 'phone_parts');
//     displayMembers(filteredMembers); // Display phone_parts
// });

getMembersData();

const displayMembers = (members) => {
    // Loop through each member and build the card
    directory.innerHTML = '';


    members.forEach((member) => {
        // Create a new section(card) element
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');  // Added address element
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let business = document.createElement('p'); // Added business element
        let portrait = document.createElement('img');

        // Build the h2 content to show the member's full name
        name.textContent = member.names; // Updated to use member.names
        address.textContent = `Address: ${member.addresses}`; // Added address display
        phone.textContent = `Phone: ${member.phone}`;
        email.textContent = `Email: ${member.email}`;
        business.textContent = `Business: ${member.business}`; // Added business display

        // Set up the image portrait
        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Portrait of ${member.names}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '80');
        portrait.setAttribute('height', '120');

        // Append the created elements to the card
        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(address); // Included address
        card.appendChild(phone);
        card.appendChild(email);
        card.appendChild(business); // Included business

        // Finally, append the card to the directory
        directory.appendChild(card);
    });

}