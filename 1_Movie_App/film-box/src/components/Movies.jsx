import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import VCard from "./VCard";

const Movies = () => {
  document.title = "FilmBox | Movies";
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);

  const getMoviesData = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}`);
      setMovies(data.results);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(movies);

  useEffect(() => {
    getMoviesData();
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
          <h1 className="text-[1.4rem] font-semibold w-[16.6rem]">
            Movies : {category.toUpperCase()}
          </h1>
        </div>
        <SearchBar />
        <div className="flex gap-x-3">
          <Dropdown
            title="Category"
            options={["now_playing", "popular", "top_rated", "upcoming"]}
            category={category}
            onCategoryChange={setCategory}
          />
        </div>
      </div>

      <div className="flex gap-y-5 flex-wrap justify-between py-10 mt-3">
        {movies?.map((t) => (
          <VCard key={t.id} t={t} title="movie" />
        ))}
      </div>
    </div>
  );
};

export default Movies;
