"use client";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-12 capitalize">
        Script Tag Use
      </h1>

      <div className="flex flex-col justify-center items-center mt-5">
        <h1>Get user location</h1>

        <div>
          <Script src="location.js" onLoad={() => alert("File loaded")} />
        </div>
      </div>
    </div>
  );
};

export default page;
