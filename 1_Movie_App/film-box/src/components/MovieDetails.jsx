import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removeMovie } from "../store/actions/movieActions";
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
import Footer from "./Footer";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);
  console.log(info);
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, [id]);

  return info ? (
    <div className="w-full mx-auto h-screen">
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0,0,0,.79), rgba(0,0,0,.81)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
          backgroundPosition: "top 1%",
          backgroundSize: "cover",
        }}
        className="w-full min-h-[85vh] px-6 py-4 rounded-sm flex items-center"
      >
        {/* -----------------------------poster and details overvoew------------------------------ */}
        <div className="w-full sm:w-[90%] mx-auto ">
          {/* ------------------------------back btn------------------------------- */}

          <Link
            onClick={() => navigate(-1)}
            className=" text-white cursor-pointer text-2xl  hover:text-orange transition-all duration-200 w-fit"
          >
            <IoMdArrowBack />
          </Link>

          <div className=" flex justify-center flex-wrap sm:justify-between mt-[3.2rem]">
            {/* -----------------------------poster------------------------------ */}
            <div className=" w-full sm:w-[25%] flex flex-col gap-y-0">
              <img
                className="max-w-full min-w-[20%] h-[20vh] sm:h-[55vh] object-cover rounded-[3px] "
                src={`https://image.tmdb.org/t/p/original/${
                  info.detail.backdrop_path || info.detail.poster_path
                }`}
                alt=""
              />
              <div>
                {info.watchproviders && info.watchproviders.flatrate && (
                  <div className="flex gap-x-3 bg-white/5 shadow-lg p-2 sm:p-3 justify-center items-center">
                    <div className="flex flex-row gap-x-3">
                      {info.watchproviders.flatrate.map((w, i) => (
                        <img
                          className="w-[3vh] sm:w-[5.2vh] h-[3vh] sm:h-[5.2vh] rounded-sm object-cover"
                          key={i}
                          src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                        />
                      ))}
                    </div>
                    <div className="flex flex-col leading-4">
                      <h1 className="text-[12px] sm:text-sm text-secondary/80">
                        Now Streaming
                      </h1>
                      <h1 className="text-[12px] sm:text-sm font-semibold">
                        Watch Now
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* --------------------details and overview--------------------------- */}
            <div className="text-start w-full sm:w-[70%] ">
              <h1 className="text-[1.7rem] mt-4 sm:mt-0 leading-10 md:text-[2rem] lg:text-4xl font-bold">
                {`${info.detail.title} `}
                <span className="font-normal text-[1.3rem] md:text-2xl text-white/60 ">
                  ({new Date(info.detail.release_date).getFullYear()})
                </span>
              </h1>

              <div className="mt-1">
                {/* ------------------------------------release date & genre----------------------------------------- */}
                <div className="flex flex-wrap gap-x-4 text-[14.4px] mt-1 text-secondary/70">
                  <h1>{info.detail.release_date}</h1> •
                  <p className="flex gap-x-2">
                    {info.detail.genres.map((g) => g.name).join(",  ")}
                  </p>{" "}
                  •
                  <p>
                    {`${Math.floor(info.detail.runtime / 60)}h ${
                      info.detail.runtime % 60
                    }m`}
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

                  <nav className="flex gap-x-4 mt-8 sm:mt-6 items-center">
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
            {/* <div>
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
            </div> */}

            {/* ------------------------------------------------------------------------------  */}
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
      <Footer />
      {/* ---------------------------------------------------------------------------------------- */}
      <Outlet />
    </div>
  ) : (
    <div className="w-full h-screen flex justify-center items-center">
      <span className="loader2"></span>
    </div>
  );
};

export default MovieDetails;
