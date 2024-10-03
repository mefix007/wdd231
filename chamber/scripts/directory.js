// getting current year and date  
const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

// getting the last day modified  
const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = document.lastModified;

// adjusting the navigation icon for mobile views  
// Get references to the hamburger button and navigation menu  
// const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('menu');

// Add a click event listener to the hamburger button  
menu.addEventListener('click', function () {
    // Toggle the "show" class on the navigation menu  
    navigation.classList.toggle('show');
});

// calculation for windchill
const temp = 26;
const windSpeed = 5;
function calculateWindchill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const windchill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;
        const roundedWindchill = Math.round(windchill * 100) / 100;
        return roundedWindchill;
    } else {
        return "N/A";
    }
}
const windchillFactor = document.querySelector('#windchill-factor');
windchillFactor.textContent = calculateWindchill(temp, windSpeed);

// Fetch .json file from the data folder   
const filePath = 'data/members.json';

// Select the card selector from the HTML file  
const directory = document.querySelector('#directory');

// Async function to get members data  
async function getMembersData() {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        // Access members within the JSON structure  
        console.table(data[0].members);
        displayMembers(data[0].members);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

getMembersData();

const displayMembers = (members) => {
    // Loop through each member and build the card  
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
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

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
};