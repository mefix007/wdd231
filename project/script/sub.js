// get functions for sub html
const pageUrl = window.location.href;
console.log(pageUrl);

const everything = pageUrl.split('?')
console.log(everything)

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based  
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Format: YYYY-MM-DD HH:MM  
    return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const timestamp = formatDate(new Date()); // Format the current date  
console.log(timestamp);

let formData = everything[1].split('&')
console.log(formData)

function show(thank) {
    console.log(thank)
    formData.forEach((element) => {
        console.log(element)
        if (element.startsWith(thank)) {
            result = element.split('=')[1].replace("%40", "@")
        }
    })
    return (result)
}

const showInfo = document.querySelector('#result')
const email = show("email") || 'N/A'; // Get email or 'N/A'  

// Make the email clickable  
const clickableEmail = email !== 'N/A' ? `<a href="mailto:${email}">${email}</a>` : email;

showInfo.innerHTML = `
<p><strong>${show("firstname")} ${show("lastname")}</strong></p>
<p>${clickableEmail}</p>
<p>${show("phone")}</p>
<p>${show("option")}</p>
<p>${show("title")}</p>
<p>${show("description")}</p>
<p>Today: ${timestamp}</p>
`