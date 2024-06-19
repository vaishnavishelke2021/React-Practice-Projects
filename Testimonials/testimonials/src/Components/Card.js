import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Card() {
  return (
    <div>
      <div className="relative max-w-[90%] bg-white mx-auto mt-11 rounded-[4px] py-8 p-6 shadow-md">
        <div className="absolute -top-14 left-10 w-[100px] h-[100px] rounded-full bg-orange"></div>
        <img
          className="absolute -top-12 left-8 w-[100px] h-[100px] rounded-full"
          src="https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718668800&semt=sph"
          alt=""
        />

        <div className="flex flex-col text-center">
          <h1 className="text-center text-[1.4rem] font-bold text-[#161616]">Paolo Pig</h1>
          <p className="text-center text-[1rem] text-orange/60 leading-4 font-semibold">
            Designer Graphic
          </p>
          <FaQuoteLeft className="mx-auto mt-7 text-orange"/>
          <p className="py-2 px-4 text-zinc-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.dolores Ducimus
            consequatur at eum quam dolores accusantium, sapiente facilis
            consequuntur beatae pariatur dolores.
          </p>
          <FaQuoteRight className="mx-auto text-orange"/>

          <div className="flex gap-1 font-bold mt-10 text-orange text-2xl mx-auto">
            <IoIosArrowBack className=" hover:text-amber-800 cursor-pointer transition-all"/>
            <IoIosArrowForward className=" hover:text-amber-800 cursor-pointer transition-all"/>
          </div>
          <button className="bg-orange hover:bg-amber-700 transition-all py-1 px-4 rounded-sm text-white w-fit mx-auto mt-5">Random Testimonial</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
