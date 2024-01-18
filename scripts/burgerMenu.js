const btn    = document.getElementById("menu-btn");
const burger = document.getElementById("burger-icon");
const menu   = document.getElementById("nav-menu");
const xmark  = document.getElementById("xmark-icon");

btn.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
  burger.classList.toggle("hidden");
  xmark.classList.toggle("hidden");
});