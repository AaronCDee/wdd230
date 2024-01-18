const darkModeBtn = document.getElementById("dark-mode-btn")

darkModeBtn.addEventListener("click", () => {
  let toggleMap = {
    light: "dark",
    dark:  "light"
  }

  let oldColorScheme = document.documentElement.getAttribute('data-color-mode');

  document.documentElement.setAttribute('data-color-mode', toggleMap[oldColorScheme]);
});