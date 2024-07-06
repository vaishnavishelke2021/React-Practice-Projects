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
      //   console.log(random);
      setWallpaper(random);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(wallpaper);

  useEffect(() => {
    !wallpaper && getData();
  }, []);

  return wallpaper ? (
    <div
      className="w-full h-[50vh] object-cover flex justify-start items-end"
      style={{
        background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
          wallpaper.backdrop_path || wallpaper.profile_path
        })`,
        backgroundPosition: "top 8%",
        backgroundSize: "cover",
      }}
    >
      <div className="py-10 px-10 max-w-[78%]  flex flex-col gap-y-3">
        <h1 className="text-4xl shadow-lg font-extrabold">
          {wallpaper.name ||
            wallpaper.title ||
            wallpaper.original_name ||
            wallpaper.original_title}
        </h1>
        <p className="text-[14px] text-secondary/60 shadow-lg">
          {wallpaper.overview.slice(0, 210)}{" "}
          <span className="text-blue-500">more...</span>
        </p>

        <div className="flex gap-x-6 text-[14px] shadow-lg">
          <p className="flex gap-x-[7px] justify-start items-center">
            <HiSpeakerphone className="text-yellow-400" />{" "}
            {wallpaper.release_date || "No Information"}
          </p>
          <p className="flex gap-x-[7px] justify-start items-center uppercase">
            <BiSolidCameraMovie className="text-yellow-400" />
            {wallpaper.media_type}
          </p>
        </div>

        <Link className="bg-orange px-4 py-2 w-fit rounded-[4px] mt-1 hover:bg-secondary hover:text-primary transition-all duration-200">Watch Trailer</Link>
      </div>
    </div>
  ) : (
    <h1>no</h1>
  );
};

export default Header;
