import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import MainOutlet from "./Components/MainOutlet";
import About from "./Components/About";
import Contact from "./Components/Contact";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <div className="w-[75%] h-[95vh] text-white mx-auto tracking-[1px]">
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />

        <Routes>
          <Route path="/" element={<MainOutlet />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
            <Route
              path="/signUp"
              element={<SignUp setIsLogin={setIsLogin} />}
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute isLogin={isLogin}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
