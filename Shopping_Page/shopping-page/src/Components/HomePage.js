import React from "react";
import Card from "./Card";
import { FaShop } from "react-icons/fa6";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="w-[80%] overflow-x-hidden pb-10">
        <h1 className="text-[1.5rem] flex items-center gap-3 text-primary p-10 px-20 font-extrabold">
          <span className="inline-block text-[1.6rem]">
            <FaShop />
          </span>
          ShopNesty
        </h1>
        <div className="flex flex-wrap justify-between gap-y-8 p-0 px-20">
          <Card />
        </div>
      </div>
    </>
  );
};

export default HomePage;
