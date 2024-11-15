"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleClick = () => {
    router.push("/about");
  };

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
      <button
        onClick={() => handleClick()}
        className="text-center text-blue-500 underline mt-3"
      >
        Go to about
      </button>
      <Link
        href="/login"
        className="bg-green-600 px-5 py-2 text-white w-fit mx-auto mt-2"
      >
        Login
      </Link>
      <Link
        href="/studentlist"
        className="bg-pink-800 px-5 py-2 text-white w-fit mx-auto mt-2"
      >
        Student List Page
      </Link>
      <Link
        href="/study"
        className="bg-blue-800 px-5 py-2 text-white w-fit mx-auto mt-2"
      >
        Study
      </Link>
    </div>
  );
};
