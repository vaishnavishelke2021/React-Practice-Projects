import React, { useContext } from "react";
import Header from "./Header";
import Blogs from "./Blogs";
import Pagination from "./Pagination";
import { AppContext } from "../AppContext";

function HomePage() {
  const { isDark } = useContext(AppContext);
  return (
    <div
      className={`font-Catamaran h-full ${
        isDark ? " bg-dark text-light" : " bg-light text-dark"
      }`}
    >
      <div className="h-full mx-auto">
        <Header />
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}

export default HomePage;
