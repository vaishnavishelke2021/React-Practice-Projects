import React from "react";

const Navbar = () => {
  return (
    <div className="w-[20%] bg-primary/10 p-10 px-13">
      <div className="flex items-center justify-center">
        <button className="text-center py-2 px-4 rounded-md bg-primary text-white mx-auto">
          Add New Product
        </button>
      </div>

      <div className="mt-5 h-[1px] bg-slate-400"></div>

      <nav className="mt-8">
        <h2 className="font-semibold text-lg">Category Filter</h2>
        <ul className="flex flex-col gap-3 mt-5 text-[15px] font-normal">
          <li className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-primary/60 rounded-full"></span>{" "}
            Women
          </li>
          <li className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-primary/60 rounded-full"></span>{" "}
            Men
          </li>
          <li className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] bg-primary/60 rounded-full"></span>{" "}
            Kids
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
