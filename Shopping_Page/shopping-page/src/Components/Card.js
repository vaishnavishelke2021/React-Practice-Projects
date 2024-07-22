import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Link
      to="details/"
      className="w-[23%] group hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] hover:scale-[1.03] hover:bg-slate-50 transition-all duration-300 cursor-pointer p-3 rounded-lg border-2 bg-primary/10"
    >
      <div className="max-w-full h-[170px] bg-white rounded-md p-4 flex justify-center items-center">
        <img
          className="w-full h-full group-hover:scale-[1.05] transition-all duration-300 cursor-pointer object-contain"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </div>
      <h1 className="font-bold text-[1.1rem] mt-2  transition-all duration-300">
        Lorem ipsum dolor{" "}
      </h1>
      <p className="text-[12px] mt-1 leading-4 text-secondary/60 transition-all duration-300">
        Lorem ipsum dolor sit amet consectetur adipisicing maiores ad...
      </p>
      <h3 className="text-primary font-extrabold text-lg mt-1">$ 200</h3>
    </Link>
  );
}

export default Card;
