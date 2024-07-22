import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-primary/20">
      <div className="w-[60%] mx-auto flex justify-between p-16 bg-white rounded-lg">
        <div className="w-[35%] h-[300px] shadow-sm border-[2px] bg-white p-6 rounded-md flex justify-center items-center">
          <img
            className="w-full h-full object-contain"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
        <div className="w-[58%]">
          <h1 className="text-[1.7rem] font-extrabold">Lorem Ipsum</h1>

          <p className="mt-3 leading-5 text-[1rem] font-medium text-secondary/80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nemo
            natus laudantium nam magnam dolorem quisquam ullam nihil vero eum?
            Dolorum dignissimos repudiandae velit illum unde deleniti animi
            facilis. Aspernatur.
          </p>

          <p className="text-[1rem] font-bold mt-3 text-secondary/70">
            Category: Men <span>⭐ 3.4</span>
          </p>

          <div className="mt-9 flex justify-between items-center">
            <h1 className="text-green-700 font-extrabold text-[1.5rem]">
              $ 200
            </h1>
            <div className="flex items-center gap-x-3">
              <Link>
                <button className="border-[1.59px] text-[15px] border-green-700 py-1 px-6 rounded-md text-green-700 hover:bg-green-700 hover:text-white transition-all duration-300">
                  Edit
                </button>
              </Link>
              <Link>
                <button className="border-[1.59px] text-[15px] border-red-600 py-1 px-6 rounded-md text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300">
                  Delete
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
