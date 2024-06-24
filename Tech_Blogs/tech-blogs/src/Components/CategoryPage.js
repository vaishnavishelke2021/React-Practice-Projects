import React, { useContext } from "react";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";
import Blogs from "./Blogs";
import Pagination from "./Pagination";
import { AppContext } from "../AppContext";

function CategoryPage() {
  const { isDark } = useContext(AppContext);
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div
      className={`font-Catamaran h-full ${
        isDark ? " bg-dark text-light" : " bg-light text-dark"
      }`}
    >
      <Header />
      <div className="pt-20 -mb-14 w-full md:max-w-[63%] mx-auto">
        <div className="max-w-[80%] mx-auto flex items-center gap-x-5">
          <button
            className="bg-primary text-light
            p-1 px-4 rounded-sm mt-1 -mb-3"
            onClick={() => navigation(-1)}
          >
            Back
          </button>

          <h1 className="md:text-xl text-[16px] font-bold mt-[17px]">
            Blogs on &nbsp; <span className="underline">{category}</span>
          </h1>
        </div>
      </div>

      <Blogs />
      <Pagination />
    </div>
  );
}

export default CategoryPage;
