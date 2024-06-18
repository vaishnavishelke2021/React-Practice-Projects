import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import CardContainer from "./Components/CardContainer";


function App() {
  return (
    <div>
      <Navbar />

      <Filter />

      <CardContainer />
    </div>
  );
}

export default App;
