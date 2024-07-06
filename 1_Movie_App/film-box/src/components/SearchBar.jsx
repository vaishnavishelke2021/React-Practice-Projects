import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="w-[45%] mx-auto h-[9vh] flex justify-center items-center gap-x-3 relative">
      <FiSearch className="text-[1.18rem]"/>
      <input
        className="w-[90%] p-[5px] px-3 text-sm bg-secondary/5 border-none rounded-md text-secondary/50 outline-none"
        type="text"
        placeholder="Search movies..."
      />
      <IoClose  className="text-[1.3rem]"/>

      {/* =================================movies reccommendation================================ */}
      <div className="w-full bg-[#1e1e1e] absolute top-[100%] h-[5rem]">

      </div>
    </div>
  );
}

export default SearchBar;
