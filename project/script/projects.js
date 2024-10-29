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



// script for animated slide show
// script.js

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Next/previous controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Automatic slideshow
setInterval(function () {
    showSlides(slideIndex += 1);
}, 3000); // Change image every 3 seconds