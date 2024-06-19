import Card from "./Card";
import { data } from "../data";
import React, { useState } from "react";

function Testimonial() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="max-w-[700px] mx-auto flex justify-center items-center flex-col mt-20">
        <div className="max-w-fit">
          <h1 className="text-2xl font-bold mt-3">Our Testimonials</h1>
          <div className="w-[65%] mt-[2px] h-[3px] rounded-sm bg-orange mx-auto"></div>
        </div>
        <div>
          <Card
            review={data[index]}
            data={data}
            index={index}
            setIndex={setIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
