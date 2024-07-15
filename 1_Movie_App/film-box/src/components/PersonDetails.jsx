import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadPerson, removePerson } from "../store/actions/personActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import HCard from "./HCard";
import Dropdown from "./Dropdown";
import Footer from "./Footer";

const PersonDetails = () => {
  const [category, setCategory] = useState("movie");
  const [more, setMore] = useState(false);
  const navigate = useNavigate();
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
    <div className="w-[90%] mx-auto py-8 h-screen px-2 sm:px-0">
      {/* ------------------------------back btn------------------------------- */}

      <Link
        onClick={() => navigate(-1)}
        className=" text-white cursor-pointer text-2xl  hover:text-orange transition-all duration-200 w-fit"
      >
        <IoMdArrowBack />
      </Link>

      {/* --------------------------------header-------------------------------------     */}
      <div className=" flex  flex-wrap justify-between mt-[3.2rem] w-full sm:w-[90%] mx-auto">
        {/* -----------------------------left box------------------------------ */}
        <div className=" w-full sm:w-[25%] flex flex-col">
          {/* -----------------------------left box------------------------------ */}
          <img
            className="max-w-full min-w-[20%] h-[30vh] sm:h-[55vh] object-cover shadow-lg rounded-[5px] "
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <h1 className="visible sm:hidden text-[1.7rem] font-bold mt-4">
            {info.detail.name}
          </h1>

          {/* ------------------------------------personal info------------------------------------    */}
          <div className="py-5 sm:py-10">
            <h1 className="text-[1.2rem] sm:text-xl font-semibold">
              Personal Info
            </h1>
            <div className="mt-4">
              <h4 className="text-[15px] text-secondary/80 font-medium">
                Known for
              </h4>
              <p className="text-[14px] font-light text-secondary/60">
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
        <div className="text-start w-full sm:w-[70%] mt-4 sm:mt-0">
          {/* --------------------details and overview--------------------------- */}
          <div>
            <h1 className="text-[1.7rem] sm:text-3xl font-bold">
              {info.detail.name}
            </h1>
            <p className="text-secondary/90 mt-2 sm:mt-7 font-semibold">
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

          {/* --------------------------------------- acting -------------------------------------- */}
          <div className="w-full mt-10 pb-10">
            <div className="flex justify-between items-center w-full py-4 p">
              <h1 className="text-xl font-semibold">Acting</h1>
              <Dropdown
                title="Filter"
                options={["tv", "movie"]}
                // fun={(e) => setCategory(e.target.value)}
                category={category}
                onCategoryChange={setCategory}
              />
            </div>

            <div className="list-disc w-full h-[60vh] border-zinc-800 border overflow-x-hidden overflow-y-auto bg-[#1e1e1e] shadow-xl">
              {info[category + "Credits"]?.cast.map((c) => (
                <li
                  key={c.id}
                  className="text-secondary/80 p-4 hover:bg-[#161616] hover:text-secondary duration-300 cursor-pointer"
                >
                  <Link to={`/${category}/details/${c.id}`}>
                    <span>
                      {c.name || c.title || c.original_name || c.original_title}
                    </span>
                    <p className="text-secondary/60 ml-[22px] text-sm">{`Character name: ${c.character}`}</p>
                  </Link>
                </li>
              ))}
            </div>
          </div>

          {/* -------------------------------------------------------------------------------  */}
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div className="w-full h-screen flex justify-center items-center">
      <span className="loader2"></span>
    </div>
  );
};

export default PersonDetails;
