import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-7xl font-bold text-red-600 ">404</h1>
      <p className="text-lg text-gray-600">Page not found (Global 404 Page)</p>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
