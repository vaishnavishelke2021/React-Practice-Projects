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
      <div>
        {<button onClick={() => navigation(-1)}>Back</button>}
        <h1>
          Blogs on <span>#{category}</span>
        </h1>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default CategoryPage;
