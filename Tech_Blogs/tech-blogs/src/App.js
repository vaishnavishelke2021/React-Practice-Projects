import React, { useEffect, useContext } from "react";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { AppContext } from "./AppContext";

export default function App() {
  const { fetchData } = useContext(AppContext);

  const { isDark } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`font-Catamaran h-full ${isDark ? ' bg-dark text-light' : ' bg-light text-dark'}`}>
      <div className="h-full mx-auto">
        <Header />
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}
