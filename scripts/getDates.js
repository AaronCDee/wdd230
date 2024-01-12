const currentYearElement  = document.getElementById("currentYear");
const lastModifiedElement = document.getElementById("lastModified");

document.addEventListener("DOMContentLoaded", () => {
  let date = new Date();

  currentYearElement.innerHTML  = date.getFullYear();
  lastModifiedElement.innerHTML = `Last Modified: ${document.lastModified}`;
})