// getting current year and date  
const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

// getting the last day modified  
const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = document.lastModified;

// adjusting the navigation icon for mobile views  
const hamButton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamButton.classList.toggle('show');
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];


// Handling navigation link clicks for filtering courses  
const allLink = document.getElementById("All");
const cseLink = document.getElementById("CSE");
const wddLink = document.getElementById("WDD");

allLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior  
    displayCourses(courses); // Display all courses  
});

cseLink.addEventListener("click", (e) => {
    e.preventDefault();
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses); // Display CSE courses  
});

wddLink.addEventListener("click", (e) => {
    e.preventDefault();
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses); // Display WDD courses  
});


const container = document.querySelector("#full");

// Function to display the courses  
function displayCourses(courseList) {
    // Create a section to display courses if it's not already there  
    let courseDisplay = document.querySelector("#courseDisplay");
    if (!courseDisplay) {
        courseDisplay = document.createElement("div");
        courseDisplay.id = "courseDisplay"; // Set an ID for course display  
        container.appendChild(courseDisplay);
    }

    courseDisplay.innerHTML = ""; // Clear previous content  
    courseList.forEach(course => {
        const courseSection = document.createElement("section");
        courseSection.classList.add("course");

        // Set background color based on completion status  
        courseSection.style.backgroundColor = course.completed ? "#d4edda" : "#f8d7da"; // Green for completed, red for not completed  

        // Create elements to display course details  
        const title = document.createElement("h2");
        title.innerText = `${course.title} (${course.subject} ${course.number})`;

        const credits = document.createElement("p");
        credits.innerText = `Credits: ${course.credits}`;

        const description = document.createElement("p");
        description.innerText = course.description;

        const technology = document.createElement("p");
        technology.innerText = `Technologies: ${course.technology.join(', ')}`;

        const certificate = document.createElement("p");
        certificate.innerText = `Certificate: ${course.certificate}`;

        const status = document.createElement("p");
        status.innerText = `Completed: ${course.completed ? 'Yes' : 'No'}`;

        // Append all details to the course section  
        courseSection.appendChild(title);
        courseSection.appendChild(credits);
        courseSection.appendChild(description);
        courseSection.appendChild(technology);
        courseSection.appendChild(certificate);
        courseSection.appendChild(status);

        // Append course section to display area  
        courseDisplay.appendChild(courseSection);
    });
}  