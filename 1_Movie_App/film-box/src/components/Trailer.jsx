import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Error from "./Error";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return (
    <div className="absolute top-0 left-0 z-[100] flex justify-center items-center w-screen h-screen bg-[rgba(0,0,0,.91)] mx-auto py-4">
      <Link
        onClick={() => navigate(-1)}
        className="absolute top-[5%] right-[9%] text-white cursor-pointer text-2xl  hover:text-orange transition-all duration-200 "
      >
        <IoClose />
      </Link>
      {ytvideo ? (
        <ReactPlayer
          controls
          width={1250}
          height={580}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Trailer;
