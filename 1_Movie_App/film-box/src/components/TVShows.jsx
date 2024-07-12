import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import VCard from "./VCard";

const TVShows = () => {
  document.title = "FilmBox | TV Shows";
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tv, setTv] = useState([]);

  const getTvData = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}`);
      setTv(data.results);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(tv);

  useEffect(() => {
    getTvData();
  }, [category]);

  return (
    <div className="w-full h-screen px-14 p-8 pr-16">
      <div className="flex justify-between items-center mt-[-1rem] ">
        <div className="flex gap-x-3 items-center">
          <p
            onClick={() => navigate(-1)}
            className=" text-orange cursor-pointer text-2xl"
          >
            ◀
          </p>
          <h1 className="text-[1.4rem] font-semibold w-fit">
            TV Shows : {category.toUpperCase().replaceAll("_", " ")}
          </h1>
        </div>
        <SearchBar />
        <div className="flex gap-x-3">
          <Dropdown
            title="Category"
            options={["airing_today", "popular", "top_rated", "on_the_air"]}
            category={category}
            onCategoryChange={setCategory}
          />
        </div>
      </div>

      <div className="flex gap-y-5 flex-wrap justify-between py-10 mt-3">
        {tv?.map((t) => (
          <VCard key={t.id} t={t} />
        ))}
      </div>
    </div>
  );
};

export default TVShows;
