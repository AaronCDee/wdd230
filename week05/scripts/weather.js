49.74979864067096, 6.6370978836668915

// select HTML elements in the document
const currentTemp   = document.querySelector('#current-temp');
const weatherIcon   = document.querySelector('#weather-icon');
const captionDesc   = document.querySelector('figcaption');
const trierLat      = 49.74;
const trierLon      = 6.63;
const weatherApiKey = "383b207d50af21030e353caff7fab99d";
const url           = `https://api.openweathermap.org/data/2.5/weather?lat=${trierLat}&lon=${trierLon}&appid=${weatherApiKey}&units=imperial`;

const apiFetch = async () => {
  console.log(url)
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

apiFetch();