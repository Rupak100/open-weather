async function fetchWeatherData(latitude, longitude) {
  const apiKey = "my_api";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    localStorage.setItem("weatherData", JSON.stringify(data));
    console.log("Weather data saved to localStorage.");
  } catch (error) {
    console.error("Error fetching weather data:");
  }
}

fetchWeatherData(24, 32);
