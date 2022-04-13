let apiKey = "9b2b17c141011453cde21df077126a89";
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((location) => {
    // console.log(location);
    let lat = location.coords.latitude;
    let long = location.coords.longitude;
    // console.log(lat);
    // console.log(long);
    async function getWeather() {
      let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
      let data = fetch(api);
      let result = await data;
      result = await result.json();
      outputData(result);
      console.log(result.main);
    }
    getWeather();
  });
}
let resultDiv = document.querySelector(".result");
let cityName = document.querySelector("cityname");
let getWeatherBtn = document.querySelector(".getbtn");
