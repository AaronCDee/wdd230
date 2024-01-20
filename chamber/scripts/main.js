// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function() {
  // Get the current date
  const currentDate = new Date();

  // Format the date as "Month day, year"
  const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(currentDate);

  // Display the formatted date in the last-updated-date element
  document.getElementById('last-updated-date').innerText = formattedDate;

  // Get elements
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks   = document.querySelector('.nav-links');

  // Toggle navigation on burger menu click
  burgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show-nav');
      burgerMenu.innerHTML = (burgerMenu.innerHTML === '☰') ? '✕' : '☰';
  });
});
