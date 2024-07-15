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
    <div className="w-full h-screen px-3 sm:px-14 py-8">
      <div className="flex flex-wrap justify-between items-center mt-[-1rem] ">
        <div className="flex gap-x-3 items-center">
          <p
            onClick={() => navigate(-1)}
            className=" text-orange cursor-pointer text-[1.3rem] sm:text-2xl"
          >
            ◀
          </p>
          <h1 className="text-[1.2rem] sm:text-[1.4rem] font-semibold w-fit ">
            Movies : {category.toUpperCase().replaceAll("_", " ")}
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

      <div className="flex gap-y-5 flex-wrap justify-center sm:justify-between py-10 mt-3">
        {movies?.map((t) => (
          <VCard key={t.id} t={t} title="movie" />
        ))}
      </div>
    </div>
  );
};

export default Movies;
