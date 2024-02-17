const currentDate    = new Date();
const lastVisitedKey = "lastVisited";
const welcomeEl      = document.getElementById('welcome');

let lastVisited    = currentDate;
let lastVisitedMsg = "Welcome! Let us know if you have any questions."

if (Object.keys(localStorage).includes(lastVisitedKey)) {
  lastVisited = new Date(localStorage.getItem(lastVisitedKey));

  if ((currentDate.getTime() - lastVisited.getTime()) < (1000 * 60 * 60 * 24)) {
    lastVisitedMsg = "Back so soon! Awesome!";
  }

  if ((currentDate.getTime() - lastVisited.getTime()) > (1000 * 60 * 60 * 24)) {
    let dayDiff = (currentDate.getTime() - lastVisited.getTime()) / (1000 * 60 * 60 * 24);

    lastVisitedMsg = `You last visited ${parseInt(dayDiff)} days ago.`;
  }
}

welcomeEl.innerText = lastVisitedMsg;

localStorage.setItem(lastVisitedKey, currentDate);
