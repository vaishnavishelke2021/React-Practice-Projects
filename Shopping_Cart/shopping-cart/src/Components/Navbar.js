import React from "react";
import { IoStorefront } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <div className="w-full py-4 bg-[#f0e3e7] fixed top-0 z-10">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto flex justify-between items-center">
        {/* ------------------------------------------ logo ------------------------------------------------ */}
        <NavLink to="/">
          <div className="flex gap-x-3 items-center">
            <IoStorefront className="text-[1.6rem] text-rose" />
            <h1 className="text-[1.3rem] font-bold text-rose">ShopNest</h1>
          </div>
        </NavLink>

        {/* ------------------------------------------ Navlink ------------------------------------------------ */}
        <div>
          <ul className="flex gap-x-4 md:gap-x-7 items-center text-zinc-800 text-[1.11rem]">
            {/* -------------Home--------------- */}
            <NavLink to="/">
              <li className="font-medium">Home</li>
            </NavLink>

            {/* -------------Cart--------------- */}
            <NavLink to="/cart">
              <li className="relative">
                <FaShoppingCart className="text-[1.4rem]"/>
                <p className="absolute -top-[6px] -right-2 bg-rose animate-bounce text-[#f6f6f6] text-[12px] px-[5px]  rounded-full">{cart.length}</p>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
