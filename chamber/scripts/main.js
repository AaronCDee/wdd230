// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function() {
  const currentDate    = new Date();
  const formattedDate  = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(currentDate);
  const burgerMenu     = document.getElementById('burger-menu');
  const navLinks       = document.querySelector('.nav-links');

  document.getElementById('last-updated-date').innerText = formattedDate;

  burgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show-nav');
      burgerMenu.innerHTML = (burgerMenu.innerHTML === '☰') ? '✕' : '☰';
  });
});
