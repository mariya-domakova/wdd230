
const visitsDisplay = document.querySelector("#visits");
const lastVisit = window.localStorage.getItem("lastVisit");

const currentDate = new Date();

if (!lastVisit) {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else {
    const lastVisitDate = new Date(lastVisit);
    const timeDifference = currentDate - lastVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (daysDifference < 1) {
        visitsDisplay.textContent = `Back so soon! Awesome!`;
    } else {
        const message = (daysDifference === 1) ? `You last visited 1 day ago.` : `You last visited ${daysDifference} days ago.`;
        visitsDisplay.textContent = message;
    }
}
window.localStorage.setItem("lastVisit", currentDate.toString());
