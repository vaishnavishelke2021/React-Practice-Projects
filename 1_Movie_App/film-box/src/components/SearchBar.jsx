import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import noimg from "../../public/no-image.png";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  //   console.log(query);

  const getSearchResult = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      console.log(data);
      setSearches(data.results);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  useEffect(() => {
    getSearchResult();
  }, [query]);

  return (
    <div className="w-[45%] mx-auto h-[9vh] flex justify-center items-center gap-x-3 relative z-10">
      <FiSearch className="text-[1.18rem]" />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[90%] p-[5px] px-3 text-sm bg-secondary/5 border-none rounded-md text-secondary/50 outline-none"
        type="text"
        placeholder="Search movies..."
      />
      {query.length > 0 && (
        <IoClose
          onClick={() => setQuery("")}
          className="text-[1.3rem] hover:text-orange transition-all duration-200 cursor-pointer"
        />
      )}

      {/* =================================movies reccommendation================================ */}
      <div className="w-full bg-[#1e1e1e] absolute top-[100%] max-h-[50vh] overflow-auto shadow-black/50 shadow-lg">
        {searches.map((s) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={s.id}
            className="flex gap-x-5 justify-start items-center px-8 py-5 bg-[#1e1e1e] border-b border-secondary/20 w-[100%] mx-auto hover:bg-zinc-800/70 transition-all duration-200"
          >
            <img
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimg
              }
              className="w-[4rem] h-[3.6rem] bg-cover object-cover rounded-sm"
              alt=""
            />
            <h2>{s.name || s.title || s.original_name || s.original_title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
