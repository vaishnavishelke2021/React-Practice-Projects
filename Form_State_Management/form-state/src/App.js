import React from "react";
import Form from "./Components/Form";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="screen">
      <Routes>
        <Route path="/" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
