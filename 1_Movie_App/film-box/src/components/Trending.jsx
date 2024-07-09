import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";

const Trending = () => {
  document.title = "FilmBox | Trending";
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState(null);

  const getTrendingData = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrending(data.results);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(trending);

  useEffect(() => {
    getTrendingData();
  }, [category, duration]);

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
          <h1 className="text-[1.4rem] font-semibold">Trending</h1>
        </div>
        <SearchBar />
        <div className="flex gap-x-3">
          <Dropdown
            title="Category"
            options={["tv", "movies", "all"]}
            category={category}
            onCategoryChange={setCategory}
          />
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            category={duration}
            onCategoryChange={setDuration}
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
