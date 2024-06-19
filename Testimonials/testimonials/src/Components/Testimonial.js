import React from "react";
import Card from "./Card";
import { data } from "../data";

function Testimonial() {
  return (
    <div>
      <div className="max-w-[700px] mx-auto flex justify-center items-center flex-col mt-20">
        <div className="max-w-fit">
          <h1 className="text-2xl font-bold mt-3">Our Testimonials</h1>
          <div className="w-[65%] mt-[2px] h-[3px] rounded-sm bg-orange mx-auto"></div>
        </div>
        <div>
          {
            data.map((card)=>(
                <Card key={card.id} card={card} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
