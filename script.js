async function getWeather() {
        const apiKey = 'API Key';
        const city = document.getElementById('cityInput').value.trim();
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
        try {
            const response = await fetch(url);
            const data = await response.json();
            const weatherInfo = document.querySelector('.weather-data');
            const weatherTitle = document.querySelector('.weather-info h2');
            const container = document.querySelector('.container');
    
            if (data.cod === 200) {
                weatherTitle.textContent = 'ByteMazeHashim';
                weatherInfo.innerHTML = `
                    <p>Location: ${data.name}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                weatherTitle.style.color = '#333';
    
        
                container.style.flexDirection = 'column';
            } else {
                weatherTitle.textContent = 'Error';
                weatherTitle.style.color = 'red'; 
                weatherInfo.innerHTML = `<p>${data.message}</p>`;
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.querySelector('.weather-data');
            weatherInfo.innerHTML = '<p>Failed to fetch weather data</p>';
        }
    }
    