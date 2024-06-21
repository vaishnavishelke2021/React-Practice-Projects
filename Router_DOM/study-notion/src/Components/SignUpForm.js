import React, { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUpForm({ setIsLogin }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnotherVisible, setIsAnotherVisible] = useState(false);
  const [accType, setAccType] = useState("student");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.createPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
      return;
    }
    navigate("/dashboard");
    setIsLogin(true);
    toast.success("Account Created", {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
    });
  };

  return (
    <div>
      {/* -------------------------------------student instructor div ------------------------------------------- */}
      <div className="bg-zinc-700/20 w-fit flex gap-1 py-2 px-2 mt-4 rounded-full text-sm font-light">
        <button
          onClick={() => setAccType("student")}
          className={`${
            accType === "student"
              ? "bg-[#0d0d20] text-white/60 px-4 py-2 rounded-full"
              : "text-white/80 bg-transparent px-4 py-2 rounded-full"
          }`}
        >
          Student
        </button>
        <button
          onClick={() => setAccType("instructor")}
          className={`${
            accType === "instructor"
              ? "bg-[#0d0d20] text-white/60 px-4 py-2 rounded-full"
              : "text-white/80 bg-transparent px-4 py-2 rounded-full"
          }`}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler} className="mt-6 flex flex-col gap-4 pb-10">
        {/* ---------------------------------------name div ----------------------------------------------------- */}
        <div className="w-[85%] flex justify-start space-x-10">
          <label>
            <p className="text-sm text-white/90 font-normal">
              First Name <sup className="text-red-400 text-[12px]">*</sup>
            </p>

            <input
              className="bg-zinc-700/20 font-light text-[15px] px-3 py-2 mt-2 w-[110%] border-b-[1px] border-white/10 rounded-sm"
              type="firstName"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={changeHandler}
            />
          </label>

          <label>
            <p className="text-sm text-white/90 font-normal">
              Last Name <sup className="text-red-400 text-[12px]">*</sup>
            </p>

            <input
              className="bg-zinc-700/20 font-light text-[15px] px-3 py-2 mt-2 w-[110%] border-b-[1px] border-white/10 rounded-sm"
              type="lastName"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={changeHandler}
            />
          </label>
        </div>

        <label>
          <p className="text-sm text-white/90 font-normal">
            Email address <sup className="text-red-400 text-[12px]">*</sup>
          </p>

          <input
            className="bg-zinc-700/20 font-light text-[15px] px-3 py-2 mt-2 w-[85%] border-b-[1px] border-white/10 rounded-sm"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={changeHandler}
          />
        </label>

        {/* ----------------------------------------password div ---------------------------------------------------- */}
        <div className="w-[85%] flex justify-start space-x-10">
          <label className="relative">
            <p className="text-sm text-white/90 font-normal">
              Create Password <sup className="text-red-400 text-[12px]">*</sup>
            </p>

            <input
              className=" bg-zinc-700/20 font-light text-[15px] px-3 py-2 mt-2 w-[110%] border-b-[1px] border-white/10 rounded-sm"
              type={isVisible ? "text" : "password"}
              name="createPassword"
              id="createPassword"
              placeholder="Enter password"
              value={formData.createPassword}
              onChange={changeHandler}
            />
            <span
              onClick={() => setIsVisible((prev) => !prev)}
              className="cursor-pointer text-white/60 absolute bottom-[10px] right-[-8px] text-[20px]"
            >
              {isVisible ? <IoIosEye /> : <IoIosEyeOff />}
            </span>
          </label>

          <label className="relative">
            <p className="text-sm text-white/90 font-normal">
              Confirm Password <sup className="text-red-400 text-[12px]">*</sup>
            </p>

            <input
              className=" bg-zinc-700/20 font-light text-[15px] px-3 py-2 mt-2 w-[110%] border-b-[1px] border-white/10 rounded-sm"
              type={isAnotherVisible ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={changeHandler}
            />
            <span
              onClick={() => setIsAnotherVisible((prev) => !prev)}
              className="cursor-pointer text-white/60 absolute bottom-[10px] right-[-8px] text-[20px]"
            >
              {isAnotherVisible ? <IoIosEye /> : <IoIosEyeOff />}
            </span>
          </label>
        </div>

        {/* -------------------------------------------Buttons ----------------------------------------------- */}
        <button className="bg-yellow-500 tracking-normal border-none py-2 px-3 text-[#0d0d20] font-bold mt-10 rounded-sm w-[85%]">
          Create Account
        </button>

        <div className="mt-3 relative">
          <div className="w-[85%] h-[0.8px] bg-white/20 rounded-sm "></div>
          <span className="bg-[#0d0d20] font-thin text-white/30 px-2 text-[16px] absolute bottom-[-9px] left-[35%]">
            or
          </span>
        </div>

        <button className="flex space-x-3 justify-center items-center py-2 px-3 text-white/80 font-light border-[1px] border-white/60 mt-3 rounded-sm w-[85%]">
          <FcGoogle className="text-lg" />{" "}
          <span className="text-[14px]">Sign in with Google</span>
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
