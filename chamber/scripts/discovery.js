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

// Fetch .json file from the data folder  
const myURL = `https://mefix007.github.io/wdd231/chamber/data/discovery.json`;

// Async function to get discovery data  
async function getDiscoveryData() {
    try {
        const response = await fetch(myURL);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        // Access members within the JSON structure  
        console.log(data.discovery);
        const discovery = data.discovery; // Store discovery in the local variable  
        displayDiscovery(discovery);
    } catch (error) {
        console.error('Error fetching discovery data:', error);
    }
}

// Select the card container from the HTML file  
const directory = document.querySelector('#discovery'); // Corrected selector to match the target element  

getDiscoveryData();

const displayDiscovery = (discoveries) => { // Renamed parameter for clarity  
    // Loop through each discovery and build the card  
    directory.innerHTML = ''; // Clear previous content  

    discoveries.forEach((discovery) => { // Changed 'discovery' variable inside the loop to avoid confusion  
        // Create a new section(card) element  
        let card = document.createElement('section');
        let portrait = document.createElement('img');
        let caption = document.createElement('p'); // Element for caption  

        // Build the h2 content to show the member's full name or other identifier  
        caption.textContent = `${discovery.caption}`; // Add caption display  

        // Set up the image portrait  
        portrait.setAttribute('src', discovery.image);
        portrait.setAttribute('alt', `Portrait of ${discovery.name}`); // Corrected to refer to 'discovery.name'  
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '320');
        portrait.setAttribute('height', '300');

        // Append the created elements to the card  
        card.appendChild(portrait);
        card.appendChild(caption); // Append caption  

        // Finally, append the card to the directory  
        directory.appendChild(card);
    });
};


// script for users visit from localstorage
document.addEventListener("DOMContentLoaded", function () {
    // Select the element where the visit message will be displayed
    const visitMessageElement = document.getElementById('visitMessage'); // Ensure this ID matches your HTML

    // Check if the element exists
    if (visitMessageElement) {
        const lastVisit = localStorage.getItem('lastVisit');
        const now = new Date();
        const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day

        if (!lastVisit) {
            // First visit
            visitMessageElement.textContent = `Welcome! Let us know if you have any questions.`;
        } else {
            const lastVisitDate = new Date(lastVisit);
            const timeDifference = now - lastVisitDate;
            const daysSinceVisit = Math.floor(timeDifference / oneDay);

            if (daysSinceVisit < 1) {
                // Less than a day since last visit
                visitMessageElement.textContent = `Back so soon! Awesome!`;
            } else {
                // More than a day since last visit
                const dayText = daysSinceVisit === 1 ? "day" : "days";
                visitMessageElement.textContent = `You last visited ${daysSinceVisit} ${dayText} ago.`;
            }
        }

        // Update the last visit date in localStorage
        localStorage.setItem('lastVisit', now.toISOString());
    } else {
        console.error("The element with ID 'visitMessage' was not found.");
    }
});
