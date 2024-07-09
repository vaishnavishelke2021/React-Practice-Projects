import Card from "./Card";
import axios from "../utils/axios";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const HorizontalCards = () => {
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const getTrendingData = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(trending);

  useEffect(() => {
    getTrendingData();
  }, [category]);

  return trending ? (
    <div className="w-full p-10">
      <div className="flex justify-between items-center w-full py-4 pr-0">
        <h1 className="text-[1.4rem] font-semibold">Trending</h1>
        <Dropdown
          title="Filter"
          options={["tv", "movies", "all"]}
          // fun={(e) => setCategory(e.target.value)}
          category={category}
          onCategoryChange={setCategory}
        />
      </div>

      <div className="w-full flex flex-row gap-4 overflow-x-auto">
        {trending?.map((t) => (
          <Card key={t.id} t={t} />
        ))}
      </div>
    </div>
  ) : (
    <h1 className="w-full h-[50vh] flex justify-center items-center bg-[#1e1e1e]">
      <span className="loader"></span>
    </h1>
  );
};

export default HorizontalCards;
