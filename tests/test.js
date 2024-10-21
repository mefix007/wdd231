// Get references to the hamburger button and navigation menu  
const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

// Add a click event listener to the hamburger button  
hamburger.addEventListener('click', function () {
    // Toggle the "show" class on the navigation menu  
    navigation.classList.toggle('show');
});

/* <script> */
// Sample JSON data  
const data = {
    "members": [
        {
            "names": "Solosegzy Communications",
            "addresses": "shop 5, tamac complex, okelewo Abeokuta",
            "phone": "08034426480",
            "email": "solosegzy@gmail.com",
            "business": "Phone Dealer",
            "order": 0,
            "image": "images/solosegzy.PNG"
        },
        {
            "names": "LOBOT SYSTEM",
            "addresses": "shop 2, tamac complex, okelewo Abeokuta",
            "phone": "08133353469",
            "email": "lobotsystem@gmail.com",
            "business": "Phone Dealer",
            "order": 1,
            "image": "images/lobot.PNG"
        },
        {
            "names": "Soccerfiro Comms",
            "addresses": "shop 15, tamac complex, okelewo Abeokuta",
            "phone": "08069744186",
            "email": "firocommunications@gmail.com",
            "business": "Phone Repairs",
            "order": 2,
            "image": "images/soca.PNG"
        },
        {
            "names": "Aktech",
            "addresses": "shop 56, tamac complex, okelewo Abeokuta",
            "phone": "08133353469",
            "email": "lobotsystem@gmail.com",
            "business": "Phone Dealer",
            "order": 3,
            "image": "images/lobot.PNG"
        },
        {
            "names": "LOBOT SYSTEM",
            "addresses": "shop 2, tamac complex, okelewo Abeokuta",
            "phone": "08133353469",
            "email": "lobotsystem@gmail.com",
            "business": "Phone Dealer",
            "order": 4,
            "image": "images/lobot.PNG"
        },
        {
            "names": "LOBOT SYSTEM",
            "addresses": "shop 2, tamac complex, okelewo Abeokuta",
            "phone": "08133353469",
            "email": "lobotsystem@gmail.com",
            "business": "Phone Dealer",
            "order": 5,
            "image": "images/lobot.PNG"
        },
        {
            "names": "LOBOT SYSTEM",
            "addresses": "shop 2, tamac complex, okelewo Abeokuta",
            "phone": "08133353469",
            "email": "lobotsystem@gmail.com",
            "business": "Phone Dealer",
            "order": 6,
            "image": "images/lobot.PNG"
        }
    ]
};

// Function to display members  
function displayMembers(members) {
    const membersContainer = document.getElementById('membersContainer');
    members.forEach(member => {
        // Create member card  
        const memberCard = document.createElement('div');
        memberCard.classList.add('member');

        // Create image element  
        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.names;

        // Create details container  
        const memberDetails = document.createElement('div');
        memberDetails.classList.add('member-details');

        // Add member information  
        memberDetails.innerHTML = `  
            <strong>Name:</strong> ${member.names}<br>  
            <strong>Address:</strong> ${member.addresses}<br>  
            <strong>Phone:</strong> ${member.phone}<br>  
            <strong>Email:</strong> ${member.email}<br>  
            <strong>Business:</strong> ${member.business}<br>  
            <strong>Order:</strong> ${member.order}  
        `;

        // Append image and details to card  
        memberCard.appendChild(img);
        memberCard.appendChild(memberDetails);

        // Add member card to container  
        membersContainer.appendChild(memberCard);
    });
}

// Call the function with the members array  
displayMembers(data.members);
/* </script> */

