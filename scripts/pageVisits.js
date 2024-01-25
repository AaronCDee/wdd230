const pageVisitsKey = "pageVisits";
const pageVisitsEl  = document.getElementById("pageVisits");


document.addEventListener("DOMContentLoaded", () => {
  let pageVisits = 0;

  if(Object.keys(localStorage).includes(pageVisitsKey)) {
    pageVisits = parseInt(localStorage.getItem(pageVisitsKey));
  }

  pageVisits++;

  localStorage.setItem(pageVisitsKey, pageVisits);

  pageVisitsEl.innerHTML = pageVisits;
});