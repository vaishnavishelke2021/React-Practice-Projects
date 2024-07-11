import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext(null);

//custom hook
export const useWeatherData = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("India");

  const base_URL =
    "https://api.weatherapi.com/v1/current.json?key=05f580ad02034711a0d142345241007&";

  const fetchData = async () => {
    const res = await fetch(`${base_URL}q=${search}&aqi=no`);
    const data = await res.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = { data, search, setSearch, fetchData };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
