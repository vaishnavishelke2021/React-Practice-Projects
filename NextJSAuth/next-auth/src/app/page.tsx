import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex gap-3 justify-center items-center mt-10">
        <Link
          href="/login"
          className="text-center rounded-sm border-2 border-blue-500 bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 font-semibold"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="text-center rounded-sm border-2 border-blue-600  px-5 py-2 text-blue-600 hover:text-white hover:bg-blue-600 font-semibold"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
