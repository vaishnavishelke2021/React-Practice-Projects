import React from "react";
import Card from "./components/Card";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="bg-zinc-900 w-full h-screen text-zinc-100 text-center flex justify-center items-center">
      <div className="w-[90%] mx-auto">
        <h1 className="text-3xl font-semibold">Weather App</h1>
        <Search />
        <Card />
      </div>
    </div>
  );
};

export default App;
