import React from "react";
import logo from "../Images/logo.svg";
import { Link, NavLink } from "react-router-dom";
// import PrimaryBtn from "./PrimaryBtn";
import { RiMenu3Fill } from "react-icons/ri";
import { toast } from "react-toastify";

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
          {!isLogin && (
            <Link to="/login">
              <button
                onClick={() => {
                  setIsLogin(false);
                }}
                className=" bg-white/10 px-4 py-[5px] rounded-sm font-normal shadow-sm hover:bg-white/90 transition-all duration-300  hover:text-black hover:cursor-pointer text-white/70"
              >
                Login
              </button>
            </Link>
          )}

          {!isLogin && (
            <Link to="/signup">
              <button className=" bg-white/10 px-4 py-[5px] rounded-sm font-normal shadow-sm hover:bg-white/90 transition-all duration-300  hover:text-black hover:cursor-pointer text-white/70">
                Sign Up
              </button>
            </Link>
          )}

          {isLogin && (
            <Link to="/">
              <button
                onClick={() => {
                  setIsLogin(false);
                  toast.success("Logout Successful", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                  });
                }}
                className=" bg-white/10 px-4 py-[5px] rounded-sm font-normal shadow-sm hover:bg-white/90 transition-all duration-300  hover:text-black hover:cursor-pointer text-white/70"
              >
                Logout
              </button>
            </Link>
          )}

          {isLogin && (
            <Link to="/dashboard">
              <button className=" bg-white/10 px-4 py-[5px] rounded-sm font-normal shadow-sm hover:bg-white/90 transition-all duration-300  hover:text-black hover:cursor-pointer text-white/70">
                Dashboard
              </button>
            </Link>
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
