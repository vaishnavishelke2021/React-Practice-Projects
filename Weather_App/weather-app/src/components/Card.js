import React from "react";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { useWeatherData } from "../context/WeatherContext";

function Card() {
  const { data } = useWeatherData();

  return (
    <div className="max-w-[26%] mx-auto bg-zinc-800/70 px-4 py-7 rounded-sm mt-4 flex flex-col justify-center items-center">
      <img
        className="h-[120px] w-auto"
        src={data?.current?.condition?.icon}
        alt=""
      />
      <p className="text-[2.7rem] font-bold mt-[10px] text-white">
        {data?.current?.temp_c}°C
      </p>
      <h1 className="text-[1.2rem] text-zinc-100/80 font-semibold -mt-2 ">
        {data?.location?.name}, {data?.location?.country}
      </h1>

      <p className="text-[1rem] font-medium text-zinc-100/30 mt-1">
        {data?.current?.condition?.text}
      </p>
      <div className="flex justify-between mt-14  w-[90%]">
        {/* -------------------------wind-------------------------  */}
        <div className="flex  flex-col">
          <p className="text-[1.1rem] font-bold text-zinc-100/70">
            {data?.current?.wind_kph} km/h
          </p>
          <p className="flex items-center gap-x-2 mt-1 font-bold text-zinc-100/80">
            <FiWind className="text-2xl" />{" "}
            <span className="text-[1rem]"> Wind</span>
          </p>
        </div>

        {/* ----------------------humidity ----------------------- */}
        <div className="flex items-start flex-col">
          <p className="text-[1.1rem] ml-[5px] font-bold text-zinc-100/70">
            {data?.current.humidity} %
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
