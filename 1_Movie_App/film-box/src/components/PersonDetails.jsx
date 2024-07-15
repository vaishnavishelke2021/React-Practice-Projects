import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadPerson, removePerson } from "../store/actions/personActions";
import {
  Link,
  // Outlet,
  // useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import HCard from "./HCard";

const PersonDetails = () => {
  const [more, setMore] = useState(false);
  const navigate = useNavigate();
  // const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  console.log(info);
  useEffect(() => {
    dispatch(asyncloadPerson(id));
    return () => {
      dispatch(removePerson());
    };
  }, [id]);

  return info ? (
    <div className="w-[90%] mx-auto py-8 h-screen">
      {/* ------------------------------back btn------------------------------- */}

      <Link
        onClick={() => navigate(-1)}
        className=" text-white cursor-pointer text-2xl  hover:text-orange transition-all duration-200 w-fit"
      >
        <IoMdArrowBack />
      </Link>

      {/* --------------------------------header-------------------------------------     */}
      <div className=" flex justify-between mt-[3.2rem]">
        {/* -----------------------------left box------------------------------ */}
        <div className="w-[25%] flex flex-col gap-y-0">
          {/* -----------------------------left box------------------------------ */}
          <img
            className="w-[86%] h-[60vh] object-cover shadow-lg rounded-[5px] "
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />

          {/* ------------------------------------personal info------------------------------------    */}
          <div className=" py-10">
            <h1 className="text-xl font-semibold">Personal Info</h1>
            <div className="mt-4">
              <h4 className="text-[15px] text-secondary/80 font-medium">
                Knowon for
              </h4>
              <p className="text-[14px] font-light text-secondary/60">
                {info.detail.known_for_department}
              </p>
            </div>

            <div className="mt-5">
              <h4 className="text-[15px] text-secondary/80 font-medium">
                Knowon credits
              </h4>
              <p className="text-[14px] font-extralight text-secondary/60">
                {info.detail.known_for_department}
              </p>
            </div>

            <div className="mt-5">
              <h4 className="text-[15px] text-secondary/80 font-medium">
                Gender
              </h4>
              <p className="text-[14px] font-extralight text-secondary/60">
                {info.detail.gender === 1 ? "Female" : "Male"}
              </p>
            </div>

            <div className="mt-5">
              <h4 className="text-[15px] text-secondary/80 font-medium">
                Birthday
              </h4>
              <p className="text-[14px] font-extralight text-secondary/60">
                {`${new Date(info.detail.birthday).toLocaleDateString("en-US", {
                  month: "long",
                })} 
                ${new Date(info.detail.birthday).getDate()}, 
                ${new Date(info.detail.birthday).getFullYear()} 
                (${
                  Math.floor(
                    new Date().getTime() / (1000 * 60 * 60 * 24 * 365)
                  ) -
                  Math.floor(
                    new Date(info.detail.birthday).getTime() /
                      (1000 * 60 * 60 * 24 * 365)
                  )
                } years old)`}
              </p>
            </div>

            <div className="mt-5">
              <h4 className="text-[15px] text-secondary/80 font-medium">
                Place of Birth
              </h4>
              <p className="text-[14px] font-extralight text-secondary/60">
                {info.detail.place_of_birth}
              </p>
            </div>

            <div className="mt-5">
              <h4 className="text-[15px] text-secondary/80 font-medium">
                Also Known As
              </h4>
              <p className="text-[14px] font-extralight text-secondary/60">
                {info.detail.also_known_as.map((name, i) => (
                  <p className="mt-1" key={i}>
                    {name}
                  </p>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* --------------------right box-------------------------- */}
        <div className="text-start w-[73%] ">
          {/* --------------------details and overview--------------------------- */}
          <div>
            <h1 className="text-3xl font-bold">{info.detail.name}</h1>
            <p className="text-secondary/90 mt-7 font-semibold">
              <h5 className="text-[17px]">Biography</h5>
              <p className="text-secondary/50 text-[16px] mt-1  font-normal">
                {more
                  ? info.detail.biography
                  : info.detail.biography.substring(0, 280)}{" "}
                <span
                  onClick={() => setMore(!more)}
                  className="cursor-pointer text-zinc-600"
                >
                  {more ? " less" : " more..."}
                </span>{" "}
              </p>
            </p>
          </div>

          {/* -------------------------------populaity & social links---------------------------  */}
          <div className="flex space-x-9 items-center mt-10">
            <div className="flex items-center space-x-3">
              <div className="ashadow-lg bg-green-700 text-[18px] text-secondary text-extrabold p-2 flex justify-center items-center rounded-full w-[45px] h-[45px]">
                {info.detail.popularity.toFixed()}
              </div>

              <h1 className="font-medium ">Popularity</h1>
            </div>

            <nav className="flex gap-x-4 items-center">
              <a
                href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                target="_blank"
                className="text-[18px] text-secondary/60 shadow-md hover:text-secondary "
              >
                <FaGlobeAmericas />
              </a>
              <a
                href={`https://x.com/${info.externalid.twitter_id}/`}
                target="_blank"
                className="text-[20px] text-secondary/60 shadow-md hover:text-secondary"
              >
                <FaXTwitter />
              </a>
              <a
                href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
                target="_blank"
                className="text-[20px] text-secondary/60 shadow-md hover:text-secondary"
              >
                <RiInstagramFill />
              </a>
            </nav>
          </div>

          {/* ----------------------------------known for --------------------------------- */}
          <div className="w-full mt-10 ">
            <div className="w-full mx-auto">
              <h1 className="text-xl font-semibold">Known For</h1>
              <div className="w-full mt-6 flex flex-row gap-4 overflow-x-auto">
                {info.combinedCredits.cast?.map((t) => (
                  <HCard key={t.id} t={t} />
                ))}
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------------------  */}
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex justify-center items-center">
      <span className="loader2"></span>
    </div>
  );
};

export default PersonDetails;
