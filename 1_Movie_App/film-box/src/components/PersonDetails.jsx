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
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex justify-center items-center">
      <span className="loader2"></span>
    </div>
  );
};

export default PersonDetails;
