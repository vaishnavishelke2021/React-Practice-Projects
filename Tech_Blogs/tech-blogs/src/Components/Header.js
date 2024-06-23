import React from "react";
import Theme from "./Theme";

function Header() {
  return (
    <div className="w-[90%] mx-auto py-5 flex justify-between items-center">
      <h1 className="lg:text-3xl text-2xl font-bold">
        <span className="text-darkBlue">Tech</span>Blogs
      </h1>
      <Theme />
    </div>
  );
}

export default Header;
