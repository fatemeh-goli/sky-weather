//

let bodyElement = document.querySelector("body");
let citySearch = document.getElementById("city-search");
let searchButton = document.getElementById("search-button");
let temperatureValue = document.getElementById("city-temperature");
let weatherValue = document.getElementById("city-weather");
let windSpeedValue = document.getElementById("city-wind-speed");
let loadingMessage = document.getElementById("loading-message");
let cityNameInfo = document.getElementById("city-name-info");
let temperatureInfo = document.getElementById("temperature-info");
let weatherInfo = document.getElementById("weather-info");
let windSpeedInfo = document.getElementById("wind-speed-info");

let weatherData = {
  Tehran: { temperature: 18, weather: "Sunny", windSpeed: 10 },
  Tabriz: { temperature: 12, weather: "Cloudy", windSpeed: 15 },
  Mashhad: { temperature: 15, weather: "Rainy", windSpeed: 20 },
  Isfahan: { temperature: 22, weather: "Sunny", windSpeed: 8 },
  Shiraz: { temperature: 25, weather: "Clear", windSpeed: 12 },
  Rasht: { temperature: 16, weather: "Rainy", windSpeed: 18 },
  Ahvaz: { temperature: 30, weather: "Cloudy", windSpeed: 11 },
  Sari: { temperature: 19, weather: "Cloudy", windSpeed: 14 },
  BandarAbbas: { temperature: 28, weather: "Sunny", windSpeed: 16 },
};

let backgroundImages = [
  "./Blossom.jpg",
  "./Chamomile flower.jpg",
  "./cloudy.jpg",
  "./cloudyy.jpg",
  "./sunnyy.jpg",
  "./Snow.jpg",
  "./sunny (2).jpg",
  "./Sunny weather.jpg",
  "./sunny.jpg",
  "./suuny and cloudy.jpg",
  "./The Moon and the Forest.jpg",
  "./Wave.jpg",
];

let mobileBackgroundImages = [
  "./cloudy.jpg",
  "./rainy.jpg",
  "./sea.jpeg",
  "./Street.jpeg",
  "./sunny.jpg",
  "./suuny and rainy.jpg",
  "./tree.jpeg",
  "./Wave.jpeg",
];

function changeBackgroundImage() {
  let selectedBackgroundImages;

  if (window.innerWidth <= 480) {
    selectedBackgroundImages = mobileBackgroundImages;
  } else {
    selectedBackgroundImages = backgroundImages;
  }

  let backgroundImagesLength = selectedBackgroundImages.length;
  let randomValue = Math.random();
  let randomIndexValue = randomValue * backgroundImagesLength;
  let randomImageIndex = Math.floor(randomIndexValue);
  let selectedBackgroundImage = selectedBackgroundImages[randomImageIndex];

  bodyElement.style.backgroundImage = "url('" + selectedBackgroundImage + "')";
}

searchButton.addEventListener("click", function () {
  changeBackgroundImage();

  let citySearchValue = citySearch.value;
  let cityWeatherData = weatherData[citySearchValue];

  if (cityWeatherData) {
    let cityTemperature = cityWeatherData.temperature;
    let cityWeather = cityWeatherData.weather;
    let cityWindSpeed = cityWeatherData.windSpeed;

    cityNameInfo.innerText = citySearchValue;
    temperatureValue.innerText = cityTemperature + "°C";
    weatherValue.innerText = cityWeather;
    windSpeedValue.innerText = cityWindSpeed + " km/h";

    loadingMessage.style.display = "none";
    cityNameInfo.style.display = "block";
    temperatureInfo.style.display = "block";
    weatherInfo.style.display = "block";
    windSpeedInfo.style.display = "block";
  } else {
    loadingMessage.style.display = "block";
    cityNameInfo.style.display = "none";
    temperatureInfo.style.display = "none";
    weatherInfo.style.display = "none";
    windSpeedInfo.style.display = "none";

    loadingMessage.innerText =
      "There is no information available to display for the city.";
  }
});

changeBackgroundImage();
