import React from "react";
import logo from "../Images/logo.svg";
import { NavLink } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";
import { RiMenu3Fill } from "react-icons/ri";

function Navbar({ isLogin, setIsLogin }) {
  return (
    <div>
      <div className="flex justify-between  items-center flex-wrap py-7">
        {/* -------------------------------- Logo-----------------------------------  */}

        <img className="md:h-8 h-6" src={logo} alt="" />

        {/* ---------------------------------Nav links-----------------------------------  */}

        <ul className=" hidden lg:flex space-x-6 text-[18px] font-light text-white/80 ">
          <li className="hover:text-white">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        {/* ---------------------------------Login SignUp-----------------------------------  */}

        <div className="hidden lg:flex space-x-4 text-[0.9rem]">
          {!isLogin ? (
            <>
              <PrimaryBtn name="Login" />
              <PrimaryBtn name="Sign Up" />
            </>
          ) : (
            <>
              <PrimaryBtn name="Log Out" />
              <PrimaryBtn name="Dashboard" />
            </>
          )}
        </div>

        {/* ---------------------------------Hamburger-menu-----------------------------------  */}
        <div className="visible lg:hidden">
          <RiMenu3Fill />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
