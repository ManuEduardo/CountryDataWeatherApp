import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const previusCity = {
    current: { temperature: 0, weather_icons: [1], wind_speed: 0, wind_dir: 0, weather_descriptions:[1] },
  };
  const [cityInfo, setCityInfo] = useState(previusCity);
  const hooku = () => {
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: capital[0],
    };
    axios
      .get("/api/", { params })
      .then((response) => {
        setCityInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(hooku, [capital]);
  return (
    <div className="m-1 p-1">
      <h2 className="font-serif text-4xl font-semibold text-slate-800 text-center mb-6 drop-shadow-xl">
        Weather in {capital}
      </h2>

      <div className="max-w-lg container mx-auto rounded-t-3xl overflow-hidden h-16 transition-all delay-150 hover:h-64">
        <h3 className="text-center font-sans font-medium text-3xl text-slate-200 py-2 mb-7 border-2 rounded-full bg-indigo-300 transition delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-300">
          {cityInfo.current.weather_descriptions[0]}
        </h3>

        <div className="grid grid-cols-2 grid-rows-flow gap-3">
          <img
            alt="weather"
            src={cityInfo.current.weather_icons[0]}
            className="w-40 rounded-md row-span-2"
          />
          <p className="mb-3">
            <b>temperature: </b>
            {cityInfo.current.temperature} Celsius
          </p>
          <p>
            <b>wind: </b>
            {cityInfo.current.wind_speed} mph direction{" "}
            {cityInfo.current.wind_dir}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
