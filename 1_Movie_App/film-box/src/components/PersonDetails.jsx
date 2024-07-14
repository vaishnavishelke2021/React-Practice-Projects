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
        {/* -----------------------------image------------------------------ */}
        <div className="w-[25%] flex flex-col gap-y-0">
          <img
            className="w-[84%] h-[50vh] object-cover shadow-lg rounded-[3px] "
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
        </div>

        {/* --------------------details and overview--------------------------- */}
        <div className="text-start w-[73%] ">
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
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex justify-center items-center">
      <span className="loader2"></span>
    </div>
  );
};

export default PersonDetails;
