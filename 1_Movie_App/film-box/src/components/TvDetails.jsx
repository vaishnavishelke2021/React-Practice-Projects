import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removeTv } from "../store/actions/tvActions";
import noimg from "../../public/no-image.png";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { LiaImdb } from "react-icons/lia";
import { IoMdArrowBack } from "react-icons/io";
import HCard from "../components/HCard";

const TvDetails = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.tv);
  console.log(info);
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removeTv());
    };
  }, [id]);

  return info ? (
    <div className="w-full mx-auto  h-screen">
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0,0,0,.79), rgba(0,0,0,.81)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
          backgroundPosition: "top 1%",
          backgroundSize: "cover",
        }}
        className="w-full h-[85vh] px-6 py-4 rounded-sm flex items-center"
      >
        {/* -----------------------------poster and details overvoew------------------------------ */}
        <div className="w-[90%] mx-auto ">
          {/* ------------------------------back btn------------------------------- */}

          <Link
            onClick={() => navigate(-1)}
            className=" text-white cursor-pointer text-2xl  hover:text-orange transition-all duration-200 w-fit"
          >
            <IoMdArrowBack />
          </Link>

          <div className=" flex justify-between mt-[3.2rem]">
            {/* -----------------------------poster------------------------------ */}
            <div className="w-[22%] flex flex-col gap-y-0">
              <img
                className="w-full h-[55vh] object-cover rounded-[3px] "
                src={`https://image.tmdb.org/t/p/original/${
                  info.detail.backdrop_path || info.detail.poster_path
                }`}
                alt=""
              />
              <div>
                {info.watchproviders && info.watchproviders.flatrate && (
                  <div className="flex gap-x-3 bg-white/5 shadow-lg p-4 justify-center items-center">
                    <div className="flex flex-row gap-x-3">
                      {info.watchproviders.flatrate.map((w, i) => (
                        <img
                          className="w-[5.5vh] h-[5.5vh] rounded-sm object-cover"
                          key={i}
                          src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                        />
                      ))}
                    </div>
                    <div className="flex flex-col leading-4">
                      <h1 className="text-sm text-secondary/80">
                        Now Streaming
                      </h1>
                      <h1 className="text-sm font-semibold">Watch Now</h1>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* --------------------details and overview--------------------------- */}
            <div className="text-start w-[72%] ">
              <h1 className="text-4xl font-bold">
                {`${info.detail.title || info.detail.name || "No title"} `}
                <span className="font-normal text-2xl text-white/60">
                  ({new Date(info.detail.first_air_date).getFullYear()})
                </span>
              </h1>

              <div className="mt-1">
                {/* ------------------------------------release date & genre----------------------------------------- */}
                <div className="flex gap-x-4 text-[14.4px] mt-1 text-secondary/70">
                  <h1>{info.detail.first_air_date}</h1> |
                  <p className="flex gap-x-2">
                    {info.detail.genres.map((g) => g.name).join(",  ")}
                  </p>
                </div>

                {/* -----------------------------------user score , links----------------------------------- */}
                <div className="flex space-x-8  items-center">
                  <div className="flex space-x-3 mt-10">
                    <div className="ashadow-lg bg-green-700 text-[18px] text-secondary text-extrabold p-2 flex justify-center items-center rounded-full w-[45px] h-[45px]">
                      {(info.detail.vote_average * 10).toFixed()}
                      <span className="text-[10px]">%</span>
                    </div>

                    <h1 className="font-medium leading-5 mt-[2px]">
                      User <br /> Score
                    </h1>
                  </div>

                  <nav className="flex gap-x-4 mt-8 items-center">
                    <a
                      href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                      target="_blank"
                      className="text-[17px] text-secondary/60 shadow-md hover:text-secondary "
                    >
                      <FaGlobeAmericas />
                    </a>
                    <a
                      href={info.detail.homepage}
                      target="_blank"
                      className="text-[20px] text-secondary/60 shadow-md hover:text-secondary"
                    >
                      <FaLink />
                    </a>
                    <a
                      href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
                      target="_blank"
                      className="text-[26px] text-secondary/60 shadow-md hover:text-secondary"
                    >
                      <LiaImdb />
                    </a>
                  </nav>
                </div>

                {/* -----------tagline, overview----------  */}
                <p className="mt-10 text-secondary/50 italic">
                  {info.detail.tagline || "No tagline"}
                </p>
                <h5 className="mt-1 text-[18px] font-semibold">Overview</h5>
                <p className="mt-1 text-secondary/80">{info.detail.overview}</p>

                {/* -------------------trailer link --------------- */}
                <div className="mt-10">
                  <Link
                    to={`${pathname}/trailer`}
                    className="bg-orange px-4 py-2 w-fit rounded-[4px] hover:bg-secondary hover:text-primary transition-all duration-200"
                  >
                    Watch Trailer
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------watch providers------------------------------------- */}
          <div className="mt-10 flex gap-x-6">
            <div>
              {info.watchproviders && info.watchproviders.rent && (
                <div className="flex flex-col gap-y-1">
                  <h1 className="text-sm">Rent/ Buy</h1>
                  <div className="flex flex-row gap-x-3">
                    {info.watchproviders.reninfo.detail.map((w, i) => (
                      <img
                        className="w-[5vh] h-[5vh] rounded-sm object-cover"
                        key={i}
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ------------------------------------------------------------------------------  */}
          </div>
        </div>
      </div>

      {/* -------------------------------------Seasons------------------------------------ */}
      <div className="w-full py-4 ">
        <div className="w-[90%] mx-auto py-5">
          <h1 className="text-xl font-semibold py-5">Seasons</h1>
          <div className="w-full flex flex-row gap-5 overflow-x-auto">
            {info.detail.seasons.length > 0 ? (
              info.detail.seasons.map((s) => (
                <div
                  className="min-w-[180px] bg-[#1e1e1e] p-2 rounded-[4px] mb-2"
                  key={s.id}
                >
                  <img
                    className="w-full h-[230px] object-cover rounded-[2px]"
                    src={
                      s.poster_path
                        ? `https://image.tmdb.org/t/p/original/${s.poster_path}`
                        : noimg
                    }
                    alt=""
                  />

                  <h1 className="text-[1rem]  font-semibold mt-2">
                    {s.name || "No name"}
                    {"  "}
                    <span className="text-secondary/30 text-[13px] font-normal">
                      ({` ${new Date(s.air_date).getFullYear()}`})
                    </span>
                  </h1>
                  <p className="text-sm mt-1 font-normal text-secondary/80">
                    Episodes: {s.episode_count}
                  </p>
                </div>
              ))
            ) : (
              <h1>No seasons available</h1>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------Recommendations------------------------------------ */}
      <div className="w-full py-4 ">
        <div className="w-[90%] mx-auto py-10">
          <h1 className="text-xl font-semibold py-5">
            Recommendations & Similar
          </h1>
          <div className="w-full flex flex-row gap-4 overflow-x-auto">
            {info.recommendations.length > 0
              ? info.recommendations?.map((t) => <HCard key={t.id} t={t} />)
              : info.similar?.map((t) => <HCard key={t.id} t={t} />)}
            {}
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------- */}
      <Outlet />
    </div>
  ) : (
    <div className="w-full h-screen flex justify-center items-center">
      <span className="loader2"></span>
    </div>
  );
};

export default TvDetails;
