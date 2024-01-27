// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function() {
  const currentDate    = new Date();
  const formattedDate  = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(currentDate);
  const burgerMenu     = document.getElementById('burger-menu');
  const navLinks       = document.querySelector('.nav-links');
  const lastVisitedKey = "lastVisited";
  const welcomeEl      = document.getElementById('welcome');

  let lastVisited    = currentDate;
  let lastVisitedMsg = "Welcome! Let us know if you have any questions."

  document.getElementById('last-updated-date').innerText = formattedDate;

  burgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show-nav');
      burgerMenu.innerHTML = (burgerMenu.innerHTML === '☰') ? '✕' : '☰';
  });

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
});
