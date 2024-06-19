import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


function Card({card}) {
  return (
    <div>
      <div className="relative w-[90%] bg-white mx-auto lg:mt-[3.5rem] mt-[6rem] rounded-[4px] py-8 p-6 shadow-md">
        <div className="absolute -top-14 left-10 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-orange"></div>
        <img
          className="absolute -top-12 left-8 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] object-cover rounded-full"
          src={card.image}
          alt=""
        />

        <div className="flex flex-col text-center mt-8 lg:mt-0">
          <h1 className="text-center text-[1.4rem] font-bold text-[#161616]">{card.name}</h1>
          <p className="text-center text-[1rem] text-orange/60 leading-4 font-semibold">
            {card.job}
          </p>
          <FaQuoteLeft className="mx-auto mt-7 text-orange"/>
          <p className="py-2 px-4 text-zinc-600">
            {card.text}
          </p>
          <FaQuoteRight className="mx-auto text-orange"/>

          <div className="flex gap-1 font-bold mt-7 text-orange text-2xl mx-auto">
            <IoIosArrowBack className=" hover:text-amber-800 cursor-pointer transition-all"/>
            <IoIosArrowForward className=" hover:text-amber-800 cursor-pointer transition-all"/>
          </div>
          <button className="bg-orange hover:bg-amber-700 transition-all py-1 px-4 rounded-sm text-white w-fit mx-auto mt-3">Random Testimonial</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
