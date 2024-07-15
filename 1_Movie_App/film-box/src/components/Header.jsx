import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { HiSpeakerphone } from "react-icons/hi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  const [wallpaper, setWallpaper] = useState(null);

  const getData = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      let random =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(random);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    !wallpaper && getData();
  }, []);

  return wallpaper ? (
    <div
      className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover flex justify-start items-end"
      style={{
        background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${
          wallpaper.backdrop_path || wallpaper.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="py-5 md:py-8 lg:py-10 px-4 md:px-8 lg:px-10 w-full md:max-w-[85%] lg:max-w-[78%] flex flex-col gap-y-2 md:gap-y-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold md:font-extrabold">
          {wallpaper.name ||
            wallpaper.title ||
            wallpaper.original_name ||
            wallpaper.original_title}
        </h1>
        <p className="text-xs md:text-sm lg:text-[14px] text-secondary/60 line-clamp-3 md:line-clamp-none">
          {wallpaper.overview.slice(0, 210)}{" "}
          <Link
            to={`/${wallpaper.media_type}/details/${wallpaper.id}}`}
            className="text-blue-500"
          >
            more...
          </Link>
        </p>

        <div className="flex gap-x-4 md:gap-x-6 text-xs md:text-sm lg:text-[14px]">
          <p className="flex gap-x-[5px] md:gap-x-[7px] justify-start items-center">
            <HiSpeakerphone className="text-yellow-400" />{" "}
            {wallpaper.release_date || "No Information"}
          </p>
          <p className="flex gap-x-[5px] md:gap-x-[7px] justify-start items-center uppercase">
            <BiSolidCameraMovie className="text-yellow-400" />
            {wallpaper.media_type}
          </p>
        </div>

        <Link
          to={`/${wallpaper.media_type}/details/${wallpaper.id}/trailer`}
          className="bg-orange px-3 py-1 md:px-4 md:py-2 text-sm md:text-base w-fit rounded-[4px] mt-1 hover:bg-secondary hover:text-primary transition-all duration-200"
        >
          Watch Trailer
        </Link>
      </div>
    </div>
  ) : (
    <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] flex justify-center items-center bg-[#1e1e1e]">
      <span className="loader"></span>
    </div>
  );
};

export default Header;
