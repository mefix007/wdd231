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


// scrit for menu Get all the navigation links
const navLinks = document.querySelectorAll('.navigation a');

// Function to remove 'active' class from all links
function removeActiveClasses() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to add 'active' class to the clicked link
function addActiveClass(clickedLink) {
    removeActiveClasses(); // Remove the active class from all links first
    clickedLink.classList.add('active'); // Add active class to the clicked link
}

// Add event listeners to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior (optional, if you don’t want to navigate)
        addActiveClass(link); // Add active class to the clicked link
    });
});
