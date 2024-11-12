"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <Next1 />
    </div>
  );
};

export default page;

const Next1 = () => {
  return (
    <div className="flex flex-col justify-center item-center">
      <h1 className="text-center text-3xl font-bold my-10">
        Hey, this is my first Next js code
      </h1>
      <button
        className="bg-blue-500 px-4 py-2 rounded-md text-white mx-auto hover:bg-blue-600"
        onClick={() => alert("i am using use client")}
      >
        use client btn
      </button>
    </div>
  );
};
