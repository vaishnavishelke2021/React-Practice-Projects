import React from "react";
import Button from "./Button";
import { useWeatherData } from "../context/WeatherContext";

const Search = () => {
  const { search, setSearch, fetchData } = useWeatherData();

  function handleSearch() {
    console.log("Search clicked");
    fetchData();
  }

  return (
    <div className="flex gap-x-1 mx-auto w-[26%] mt-12">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border-none outline-none text-[15px] bg-zinc-800/60 px-3 py-[4.8px] rounded-sm"
        type="text"
        placeholder="search city"
      />
      <Button value={"Search"} onClick={handleSearch} />
    </div>
  );
};

export default Search;
