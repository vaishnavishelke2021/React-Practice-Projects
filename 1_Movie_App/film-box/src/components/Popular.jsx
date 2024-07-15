import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import VCard from "./VCard";
import Footer from "./Footer";

const Popular = () => {
  document.title = "FilmBox | Popular";
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);

  const getPopularData = async () => {
    try {
      const { data } = await axios.get(`${category}/popular`);
      setPopular(data.results);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(popular);

  useEffect(() => {
    getPopularData();
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
          <h1 className="text-[1.2rem] sm:text-[1.4rem] font-semibold w-[13rem]">
            Popular : {category.toUpperCase()}
          </h1>
        </div>
        <SearchBar />
        <div className="flex gap-x-3">
          <Dropdown
            title="Category"
            options={["tv", "movie"]}
            category={category}
            onCategoryChange={setCategory}
          />
        </div>
      </div>

      <div className="flex gap-y-5 flex-wrap justify-center sm:justify-between py-10 mt-3">
        {popular?.map((t) => (
          <VCard key={t.id} t={t} title={category} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Popular;
