import logo from "../../public/logo.svg";
import { Link } from "react-router-dom";
import { RiFireFill } from "react-icons/ri";
import { RiSparklingFill } from "react-icons/ri";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="w-[18%] bg-[#1e1e1e] p-8 shadow-md">
      <h1 className="flex justify-start items-center">
        <img src={logo} className="w-[27px] mr-2" alt="logo" />{" "}
        <span className="text-[1.5rem] font-[600]">FilmBox</span>
      </h1>

      <nav className="flex flex-col">
        <h1 className="mt-8 text-[1.2rem] font-semibold text-secondary/90">
          New Feeds
        </h1>
        <div className="flex flex-col mt-5 gap-y-1 text-secondary/50">
          <Link to="/trending" className="flex justify-start gap-x-[10px] items-center hover:bg-orange py-3 px-5 rounded-[4px] hover:text-secondary transition-all duration-200">
            <RiFireFill /> <span>Trending</span>
          </Link>
          <Link className="flex justify-start gap-x-[10px] items-center  hover:bg-orange py-3 px-5 rounded-[4px] hover:text-secondary transition-all duration-200">
            <RiSparklingFill /> <span>Popular</span>
          </Link>
          <Link className="flex justify-start gap-x-[10px] items-center  hover:bg-orange py-3 px-5 rounded-[4px] hover:text-secondary transition-all duration-200">
            <RiMovie2Fill /> <span>Movies</span>
          </Link>
          <Link className="flex justify-start gap-x-[10px] items-center  hover:bg-orange py-3 px-5 rounded-[4px] hover:text-secondary transition-all duration-200">
            <PiTelevisionSimpleFill /> <span>TV Shows</span>
          </Link>
          <Link className="flex justify-start gap-x-[10px] items-center  hover:bg-orange py-3 px-5 rounded-[4px] hover:text-secondary transition-all duration-200">
            <IoIosPeople /> <span>People</span>
          </Link>
        </div>
      </nav>

      <hr className="bg-secondary/20 border-none h-[1.2px] rounded-sm mt-8" />

      <nav className="flex flex-col">
        <h1 className="mt-8 text-[1.2rem] font-semibold text-secondary/90">
          Website Information
        </h1>
        <div className=" flex flex-col mt-5 gap-y-1 text-secondary/50">
          <Link className="flex justify-start gap-x-[10px] items-center  hover:bg-orange py-3 px-5 rounded-[4px] hover:text-secondary transition-all duration-200">
            <IoIosInformationCircle /> <span>About</span>
          </Link>
          <Link className="flex justify-start gap-x-[10px] items-center  hover:bg-orange py-3 px-5 rounded-[4px] hover:text-secondary transition-all duration-200">
            <BiSolidPhoneCall /> <span>Contact</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
