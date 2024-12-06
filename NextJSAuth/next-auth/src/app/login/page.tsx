"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="">
      <h2 className="text-2xl font-extrabold text-center text-black my-10">
        Login Page
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
          className="bg-blue-600 text-white p-2 text-center w-full"
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
