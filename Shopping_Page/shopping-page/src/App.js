import React from "react";
import HomePage from "./Components/HomePage";
import { Route, Routes } from "react-router-dom";
import Details from "./Components/Details";

const App = () => {
  return (
    <div className="w-screen h-screen flex bg-slate-100 font-Mulish">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
