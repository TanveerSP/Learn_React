import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "3f03d4df713167a5ecf9639df3247fb6";
  const CITY = "Pune";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log("Error fetching Weather", err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-around gap-y-5 bg-blue-900 p-6 max-w-md mx-auto mt-5 rounded-2xl">
      <h1 className="text-2xl">Weather Information</h1>
      {weather ? (
        <div className="flex flex-col gap-y-4 ">
          <p className=" text-xl ">
            City:
            <span className="text-lg pl-2 font-bold">{weather.name}</span>
          </p>
          <p className=" text-xl ">
            Temperature:
            <span className="text-lg pl-2 font-bold">{weather.main.temp}</span>
          </p>
          <p className=" text-xl ">
            Condition:
            <span className="text-lg pl-2 font-bold">
              {weather.weather[0].description}
            </span>
          </p>
        </div>
      ) : (
        <p>Loadding.....</p>
      )}
    </div>
  );
};

export default Weather;
