import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import noimg from "../../public/no-image.png";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearchResult = async () => {
    try {
      if (query.trim()) {
        const { data } = await axios.get(`/search/multi?query=${query}`);
        setSearches(data.results);
      } else {
        setSearches([]);
      }
    } catch (e) {
      console.log("error: ", e);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      getSearchResult();
    }, 300);

    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] mx-auto h-[9vh] flex justify-end   sm:justify-center items-center gap-x-2 relative z-10 px-4 sm:px-0">
      <FiSearch className="text-[1.18rem] text-secondary/50" />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[80%] p-[5px] px-3 text-sm bg-secondary/5 border-none rounded-md text-secondary/50 outline-none"
        type="text"
        placeholder="Search movies..."
      />
      {query.length > 0 && (
        <IoClose
          onClick={() => setQuery("")}
          className="text-[1.3rem] hover:text-orange transition-all duration-200 cursor-pointer"
        />
      )}

      {/* Movies recommendation */}
      {searches.length > 0 && (
        <div className="w-full bg-[#1e1e1e] absolute top-[100%] max-h-[50vh] overflow-auto shadow-black/50 shadow-lg">
          {searches.map((s) => (
            <Link
              to={`/${s.media_type}/details/${s.id}`}
              key={s.id}
              className="flex gap-x-3 sm:gap-x-5 justify-start items-center px-4 sm:px-8 py-3 sm:py-5 bg-[#1e1e1e] border-b border-secondary/20 w-full hover:bg-zinc-800/70 transition-all duration-200"
            >
              <img
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : noimg
                }
                className="w-[3rem] sm:w-[4rem] h-[2.7rem] sm:h-[3.6rem] bg-cover object-cover rounded-sm"
                alt={s.name || s.title || "Movie poster"}
              />
              <h2 className="text-sm sm:text-base truncate">
                {s.name || s.title || s.original_name || s.original_title}
              </h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
