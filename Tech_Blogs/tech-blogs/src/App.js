import React from "react";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";

export default function App() {
  return (
    <div className="font-Catamaran  bg-dark text-light">
      <div className="w-[70%] h-[100vh] mx-auto">
        <Header />
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  );
}
