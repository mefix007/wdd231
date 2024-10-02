// Get references to the hamburger button and navigation menu  
const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

// Add a click event listener to the hamburger button  
hamburger.addEventListener('click', function () {
    // Toggle the "show" class on the navigation menu  
    navigation.classList.toggle('show');
});