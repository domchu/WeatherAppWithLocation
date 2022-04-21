let apiKey = "9b2b17c141011453cde21df077126a89";
let loader = document.querySelector(".load");
let resultDiv = document.querySelector(".result");
let cityName = document.querySelector("cityname");
let getWeatherBtn = document.querySelector(".getbtn");

function outPutData(result) {
  let temp = result.main.temp;
  temp = Math.floor(temp - 273.15);
  let cityDetail = document.querySelector(".citydetail");
  let name = result.name;
  // console.log(name);
  let weather = result.weather[0];
  let icon = weather.icon;
  let description = weather.description;
  let desc = document.querySelector(".desc");
  let tempData = document.querySelector(".temp");
  let wIcon = document.querySelector(".icon-img");
  let imgLink = `http://openweathermap.org/img/wn/${icon}@4x.png`;
  cityDetail.textContent = name;
  desc.textContent = description;
  tempData.textContent = temp;
  wIcon.src = imgLink;
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((location) => {
    // console.log(location);
    let lat = location.coords.latitude;
    let long = location.coords.longitude;
    // console.log(lat);
    // console.log(long);
    async function getWeather() {
      loader.style.display = "block";
      let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
      let data = fetch(api);
      let result = await data;
      result = await result.json();
      loader.style.display = "none";
      outPutData(result);
      //   console.log(result.main);
    }
    getWeather();
  });
}

async function getWeather() {
  loader.style.display = "block";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`;
  let data = fetch(api);
  let result = await (await data).json();
  loader.style.display = "none";
  resultDiv.style.display = "block";
  outPutData(result);
}
getWeatherBtn.addEventListener("click", getWeather);
