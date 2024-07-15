import React, { useState, useEffect } from "react";
import logo from "../../public/logo.svg";
import { Link } from "react-router-dom";
import {
  RiFireFill,
  RiSparklingFill,
  RiMovie2Fill,
  RiMenuLine,
  RiCloseLine,
} from "react-icons/ri";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { IoIosPeople, IoIosInformationCircle } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarClass = `${isOpen ? "translate-x-0" : "-translate-x-full"} 
    md:translate-x-0 fixed md:static top-0 left-0 h-full max-w-64 min-w-[200px] md:w-[18%] 
    bg-[#1e1e1e] p-8 shadow-md transition-transform duration-300 ease-in-out z-50`;

  return (
    <>
      {windowWidth < 766 && (
        <button
          onClick={toggleMenu}
          className="fixed top-4 left-4 z-50 text-white"
        >
          {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      )}
      <div className={navbarClass}>
        <div className="flex justify-between items-center mb-8">
          <h1 className="flex justify-start items-center">
            <img src={logo} className="w-[24px] md:w-[27px] mr-2" alt="logo" />
            <span className="text-[1.1rem] md:text-[1.5rem] font-[600]">
              FilmBox
            </span>
          </h1>
          {windowWidth < 766 && (
            <button onClick={toggleMenu} className="text-white">
              <RiCloseLine size={24} />
            </button>
          )}
        </div>

        <nav className="flex flex-col">
          <h1 className="mt-8 text-[0.9rem] md:text-[1.2rem] font-semibold text-secondary/90">
            New Feeds
          </h1>
          <div className="flex flex-col mt-5 gap-y-1 text-secondary/50">
            <NavLink to="/trending" icon={<RiFireFill />} text="Trending" />
            <NavLink to="/popular" icon={<RiSparklingFill />} text="Popular" />
            <NavLink to="/movies" icon={<RiMovie2Fill />} text="Movies" />
            <NavLink
              to="/tvshows"
              icon={<PiTelevisionSimpleFill />}
              text="TV Shows"
            />
            <NavLink to="/person" icon={<IoIosPeople />} text="People" />
          </div>
        </nav>

        <hr className="bg-secondary/20 border-none h-[1.2px] rounded-sm mt-8" />

        <nav className="flex flex-col">
          <h1 className="mt-8 text-[0.9rem] md:text-[1.2rem] font-semibold text-secondary/90">
            Website Information
          </h1>
          <div className="flex flex-col mt-5 gap-y-1 text-secondary/50">
            <NavLink icon={<IoIosInformationCircle />} text="About" />
            <NavLink icon={<BiSolidPhoneCall />} text="Contact" />
          </div>
        </nav>
      </div>
    </>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex justify-start gap-x-[10px] items-center hover:bg-orange py-3 px-5 rounded-[4px] hover:text-secondary transition-all duration-200"
  >
    {React.cloneElement(icon, { size: 15 })}{" "}
    <span className="text-sm md:text-base">{text}</span>
  </Link>
);

export default Navbar;
