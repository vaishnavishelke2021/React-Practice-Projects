import React from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Template({ title, desc, desc2, image, formType, setIsLogin }) {
  return (
    <div className="w-full flex flex-wrap justify-between mt-12 mx-auto">
      <div className="w-[45%]">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg font-light mt-4 text-white/80 ">{desc}</p>
        <p className="text-lg font-light text-[#49b0ff] italic -mt-1">
          {" "}
          {desc2}
        </p>
        {formType === "login" ? <LoginForm setIsLogin={setIsLogin}/> : <SignUpForm setIsLogin={setIsLogin}/>}
      </div>

      <div className="w-[45%] mt-8 relative  flex justify-end">
        <div className="bg-yellow-500 w-[25rem] h-[25rem] absolute rounded-sm"></div>
        <img
          className="w-[25rem] h-[25rem] object-cover absolute right-6 top-6 rounded-sm"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
}

export default Template;
