import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const [pdata, setPdata] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getSingleProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setPdata(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSingleProduct();
  });

  return pdata ? (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-primary/20">
      <div className="w-[60%] mx-auto flex items-center gap-x-2">
        <Link
          onClick={() => navigate(-1)}
          className="text-[14px] py-1 px-4 rounded-md bg-primary text-white hover:bg-white hover:border-white hover:text-secondary border-primary border-2  font-bold transition-all duration-200"
        >
          Back
        </Link>
        <Link
          to="/"
          className="text-[14px] py-1 px-4 rounded-md hover:bg-white hover:border-white hover:text-secondary border-primary border-2 text-primary font-bold transition-all duration-200"
        >
          Home
        </Link>
      </div>
      <div className="w-[60%] mt-3 mx-auto flex justify-between p-16 bg-white rounded-lg">
        <div className="w-[35%] h-[300px] shadow-sm border-[2px] bg-white p-6 rounded-md flex justify-center items-center">
          <img
            className="w-full h-full object-contain"
            src={pdata?.image}
            alt=""
          />
        </div>
        <div className="w-[58%]">
          <h1 className="text-[1.6rem] leading-8 font-extrabold">
            {pdata?.title}
          </h1>

          <p className="mt-3 leading-[18px] text-[0.95rem] font-medium text-secondary/70">
            {pdata?.description}
          </p>

          <p className="text-[1rem] font-semibold mt-3 text-secondary/40">
            Category: {pdata?.category}{" "}
            <span className="text-secondary/70">⭐ {pdata?.rating?.rate}</span>
          </p>

          <div className="mt-9 flex justify-between items-center">
            <h1 className="text-green-700 font-extrabold text-[1.5rem]">
              $ {pdata?.price}
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
  ) : (
    <div className="w-full h-full text-3xl font-bold text-white flex justify-center items-center bg-primary/20">
      Loading...
    </div>
  );
};

export default Details;
