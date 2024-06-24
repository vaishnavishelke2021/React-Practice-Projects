import React, { useContext } from "react";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";
import Blogs from "./Blogs";
import Pagination from "./Pagination";
import { AppContext } from "../AppContext";

function TagPage() {
  const { isDark } = useContext(AppContext);
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div
      className={`font-Catamaran h-full ${
        isDark ? " bg-dark text-light" : " bg-light text-dark"
      }`}
    >
      <Header />
      <div className="h-[]">
        {<button onClick={() => navigation(-1)}>Back</button>}
        <h1>
          Blogs Tagged <span>#{tag}</span>
        </h1>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default TagPage;
