const getWeatherData = (city) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a2c22ec7c8mshda2e47098e1019bp131851jsn82863d46e99c',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    
   return fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}

const searchCity = async () => {
    const city = document.getElementById('city-input').value

   const data = await getWeatherData(city)
   showWeatherData(data)
}

const showWeatherData = (weatherData) => {
    document.getElementById('city-name').innerText = weatherData.location.city
    document.getElementById('weather-type').innerText = weatherData.current_observation.condition.text
    document.getElementById('temp').innerText = weatherData.current_observation.condition.temperature
    document.getElementById('min-temp').innerText = weatherData.forecasts[0].low
    document.getElementById('max-temp').innerText = weatherData.forecasts[0].high
}