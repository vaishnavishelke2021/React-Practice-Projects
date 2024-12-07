"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/user/login", user);
      console.log("Login Successful", response.data);
      router.push("/profile");
    } catch (error) {
      console.log("Login Failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="">
      <h2 className="text-2xl font-extrabold text-center text-black my-10">
        {loading ? "loading..." : "Login Page"}
      </h2>

      <div className="flex space-y-5 flex-col justify-center items-center border-2 p-7 w-fit rounded-md mx-auto">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
            className="mt-1 block w-[300px] rounded-md border-gray-600 bg-slate-100 p-2 px-3"
          />
        </div>

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
            className="mt-1 block w-[300px] rounded-md border-gray-600 bg-slate-100 p-2 px-3"
          />
        </div>

        <button
          onClick={onLogin}
          className={` text-white p-2 text-center w-full ${
            buttonDisabled ? "bg-blue-400" : "bg-blue-600"
          }`}
        >
          Login
        </button>
        <Link href="/signup" className="text-blue-600 font-medium text-sm">
          SignUp
        </Link>
      </div>
    </div>
  );
}
