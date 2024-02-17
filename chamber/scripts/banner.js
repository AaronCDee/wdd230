const bannerEl       = document.getElementById("banner");
const bannerButtonEl = document.getElementById("banner-button");
const currentDate    = new Date();
const showDays       = [1,2,3];

bannerButtonEl.addEventListener("click", (e) => {
  bannerEl.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  if(showDays.includes(currentDate.getDay())) {
    bannerEl.classList.remove("hidden");
  }
});