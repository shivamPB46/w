async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "e6358c75d78cc1115bc7701fa714a38f"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${e6358c75d78cc1115bc7701fa714a38f}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p> Temperature: ${data.main.temp}°C</p>
      <p> Weather: ${data.weather[0].description}</p>
      <p> Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } else {
    document.getElementById("result").innerHTML = `<p>City not found </p>`;
  }
}
