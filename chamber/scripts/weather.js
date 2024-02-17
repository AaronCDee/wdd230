const weatherIconEl           = document.getElementById("current-weather-icon");
const currentTempEl           = document.getElementById("current-temp");
const weatherDescEl           = document.getElementById("current-weather-desc");
const forecastEl              = document.querySelector(".weather-forecast-container");
const lat                     = 30.26;
const lon                     = -97.74;
const weatherApiKey           = "383b207d50af21030e353caff7fab99d";
const baseUrl                 = "https://api.openweathermap.org/data/2.5/"
const currentWeatherEndpoint  = `/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`;
const forecastWeatherEndpoint = `forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`;

async function getCurrentWeatherData() {
  try {
    const response = await fetch(baseUrl + currentWeatherEndpoint);

    if(!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();

    displayCurrentWeather(data);
  } catch (error) {
    console.log(error);
  }
}

const displayCurrentWeather = (data) => {
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc      = data.weather[0].description;

    currentTempEl.innerHTML = `${data.main.temp}&deg;F`;

    weatherIconEl.setAttribute('src', iconsrc);
    weatherIconEl.setAttribute('alt', desc);
    weatherIconEl.setAttribute('loading', 'lazy');
    weatherDescEl.textContent = `${desc}`;
}

async function getForecastWeatherData() {
  try {
    const response = await fetch(baseUrl + forecastWeatherEndpoint);

    if(!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();

    displayForecastWeather(filterForecastData(data.list));
  } catch (error) {
    console.log(error);
  }
}

const displayForecastWeather = (data) => {
  let forecastHTML = "";

  data.forEach(forecastRow => {
    forecastHTML += `
      <div class="weather-forecast-card">
        <p class="text-center">${new Intl.DateTimeFormat('en-US', { year: "numeric", month: "short", day: "numeric" }).format(new Date(forecastRow.dt_txt))}</p>
        <p class="text-center">${forecastRow.main.temp}&deg;F</p>
      </div>
    `
  });

  forecastEl.innerHTML = forecastHTML;
}

const filterForecastData = (weatherArr) => {
  let currentDate = new Date();
  let currentDay  = currentDate.getDate();

  return weatherArr.filter(weatherRow => {
    let weatherDate = new Date(weatherRow.dt_txt);
    let weatherDay  = weatherDate.getDate();
    let weatherHour = weatherDate.getHours();

    return weatherDay > currentDay && weatherHour === 12;
  }).slice(0, 3);
}

// MAIN
getCurrentWeatherData();
getForecastWeatherData();

