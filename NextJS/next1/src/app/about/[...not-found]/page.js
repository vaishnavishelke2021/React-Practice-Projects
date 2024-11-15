import Link from "next/link";
import React from "react";

const AboutNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-200">
      <h1 className="text-7xl font-bold text-red-600 ">404</h1>
      <p className="text-lg text-gray-600">
        Page not found in Abot Page (Route Specific 404 Page)
      </p>
      <Link
        href="/about"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
      >
        Back To About
      </Link>
    </div>
  );
};

export default AboutNotFound;
