import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";

const App = () => {
  return (
    <div className="w-screen h-screen flex bg-slate-100 font-Mulish">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
