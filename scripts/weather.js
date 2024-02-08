const weatherIconEl = document.getElementById("weather-icon");
const currentTempEl = document.getElementById("current-temp");
const weatherDescEl = document.getElementById("weather-desc");
const jhbLat        = -26.10;
const jhbLon        = 27.94;
const weatherApiKey = "383b207d50af21030e353caff7fab99d";
const url           = `https://api.openweathermap.org/data/2.5/weather?lat=${jhbLat}&lon=${jhbLon}&appid=${weatherApiKey}&units=metric`;

async function fetchWeatherData() {
  try {
    const response = await fetch(url);

    if(!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();

    displayWeather(data);
  } catch (error) {
    console.log(error);
  }
}

const displayWeather = (data) => {
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc      = data.weather[0].description;

    currentTempEl.innerHTML = `${data.main.temp}&deg;C`;

    weatherIconEl.setAttribute('src', iconsrc);
    weatherIconEl.setAttribute('alt', desc);
    weatherIconEl.setAttribute('loading', 'lazy');
    weatherDescEl.textContent = `${desc}`;
}


// MAIN
fetchWeatherData();

