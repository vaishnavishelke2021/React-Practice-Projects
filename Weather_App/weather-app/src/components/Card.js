import React, { useEffect, useState } from "react";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

const base_URL =
  "https://api.weatherapi.com/v1/current.json?key=05f580ad02034711a0d142345241007&";

function Card() {
  const [weather, setweather] = useState();

  const fetchData = async () => {
    const res = await fetch(`${base_URL}q=${"London"}&aqi=no`);
    const data = await res.json();
    console.log(data);
    setweather(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[30%] mx-auto bg-zinc-800 p-5 rounded-sm mt-7 flex flex-col justify-center items-center">
      <img
        className="h-[150px] w-auto"
        src={weather?.current?.condition?.icon}
        alt=""
      />
      <p className="text-[2.7rem] font-bold mt-[-18px]">
        {weather?.current?.temp_c}°C
      </p>
      <h1 className="text-[1.3rem] font-semibold">
        {weather.location.name}, {weather?.location?.country}
      </h1>

      <p className="text-[1rem] font-medium text-zinc-100/60 mt-1">
        {weather?.current?.condition?.text}
      </p>
      <div className="flex justify-between mt-14  w-[90%]">
        {/* -------------------------wind-------------------------  */}
        <div className="flex  flex-col">
          <p className="text-[1.1rem] font-bold text-zinc-100/70">
            {weather?.current?.wind_kph} km/h
          </p>
          <p className="flex items-center gap-x-2 mt-1 font-bold text-zinc-100/80">
            <FiWind className="text-2xl" />{" "}
            <span className="text-[1rem]"> Wind</span>
          </p>
        </div>

        {/* ----------------------humidity ----------------------- */}
        <div className="flex items-start flex-col">
          <p className="text-[1.1rem] ml-[5px] font-bold text-zinc-100/70">
            {weather?.current.humidity} %
          </p>
          <p className="flex items-center gap-x-1 mt-1 font-bold text-zinc-100/80">
            <WiHumidity className="text-2xl" />{" "}
            <span className="text-[1rem]"> Humidity</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
