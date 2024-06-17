import React from "react";
import CardContainer from "./Components/CardContainer";

function App() {
  return (
    <div>
      <div className="">
        <h1 className="text-slate-300 mx-auto w-fit  text-center px-8 py-3 mt-14 tracking-normal rounded-md bg-zinc-800/60 text-[1.9rem]  font-poetsen [word-spacing:5px] shadow-lg">
          Plan With Love{" "}
        </h1>
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
