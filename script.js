async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '426a6f1d496f31f130f66e999d63bec7'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    const weatherInfo = `
      <h3>${data.name}</h3>
      <p>${data.weather[0].description}</p>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weatherResult').innerHTML = weatherInfo;
  } else {
    document.getElementById('weatherResult').innerHTML = `<p>City not found!</p>`;
  }
}
