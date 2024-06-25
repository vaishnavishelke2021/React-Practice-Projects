import React from "react";
import { IoStorefront } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full py-4 bg-rose/10">
      <div className="max-w-[90%] md:max-w-[70%] mx-auto flex justify-between items-center">
        <div className="flex gap-x-3 items-center">
          <IoStorefront className="text-[1.6rem] text-rose" />
          <h1 className="text-[1.3rem] font-bold text-rose">ShopNest</h1>
        </div>
        <div>
          <ul className="flex gap-x-4 md:gap-x-7 items-center text-zinc-800 text-[1.11rem]">
            <li className="font-medium">Home</li>
            <li>
              <FaShoppingCart />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
