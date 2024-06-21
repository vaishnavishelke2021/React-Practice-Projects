import React, { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm({ setIsLogin }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

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
    navigate("/dashboard");
    setIsLogin(true);
    toast.success("Login Successful", {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
    });
  };
  console.log(formData);

  return (
    <div>
      <form className="mt-6 flex flex-col gap-4" onSubmit={submitHandler}>
        <label>
          <p className="text-sm text-white/90 font-normal">
            Email address <sup className="text-red-400 text-[12px]">*</sup>
          </p>

          <input
            className="bg-zinc-700/20 font-light text-[15px] px-3 py-2 mt-2 w-full border-b-[1px] border-white/10 rounded-sm"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={changeHandler}
          />
        </label>

        <label className="relative">
          <p className="text-sm text-white/90 font-normal">
            Password <sup className="text-red-400 text-[12px]">*</sup>
          </p>

          <input
            className=" bg-zinc-700/20 font-light text-[15px] px-3 py-2 mt-2 w-full border-b-[1px] border-white/10 rounded-sm"
            type={isVisible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={changeHandler}
          />
          <span
            onClick={() => setIsVisible((prev) => !prev)}
            className="cursor-pointer text-white/60 absolute bottom-[10px] right-3 text-[20px]"
          >
            {isVisible ? <IoIosEye /> : <IoIosEyeOff />}
          </span>
          <span className="absolute bottom-[-22px] right-0 text-[11px] text-[#49b0ff] font-light">
            Forgot passwod ?
          </span>
        </label>

        <button className="bg-yellow-500 border-none py-2 px-3 text-[#0d0d20] font-bold mt-14 rounded-sm w-full">
          Login
        </button>

        <div className="mt-3 relative">
          <div className="w-full h-[0.8px] bg-white/20 rounded-sm "></div>
          <span className="bg-[#0d0d20] font-thin text-white/30 px-2 text-[16px] absolute bottom-[-9px] left-[47%]">
            or
          </span>
        </div>

        <button className="flex space-x-3 justify-center items-center py-2 px-3 text-white/80 font-light border-[1px] border-white/60 mt-3 rounded-sm w-full">
          <FcGoogle className="text-lg" />{" "}
          <span className="text-[14px]">Sign in with Google</span>
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
