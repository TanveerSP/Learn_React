import React, { useEffect, useState } from "react";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const API_KEY = "3f03d4df713167a5ecf9639df3247fb6"
    const CITY = "Pune"

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
        .then((res) => res.json())
        .then((data) => setWeather(data))
        .catch((err) => console.log("Error fetching Weather", err))
    },[])
    
    return( 
    <div>
        <h1>Weather Information</h1>
        {weather ? 
        (<div>
            <p>City: {Weather.name}</p>
            <p>Temperature: {weather.main.temp}</p>
            <p>Condition: {weather.weather[0].description}</p>
        </div>) :
        (<p>Loadding.....</p>)}
    </div>
    );
};

export default Weather;
