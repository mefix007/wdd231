document.addEventListener("DOMContentLoaded", function () {

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
