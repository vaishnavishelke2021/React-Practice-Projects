"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignUp = async () => {};

  return (
    <div className="">
      <h2 className="text-2xl font-extrabold text-center text-black my-10">
        SignUp Page
      </h2>

      <div className="flex space-y-5 flex-col justify-center items-center border-2 p-7 w-fit rounded-md mx-auto">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            User Name
          </label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="username"
            className="mt-1 block w-[300px] rounded-md border-gray-600 bg-slate-100 p-2 px-3"
          />
        </div>

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
          onClick={onSignUp}
          className="bg-blue-600 text-white p-2 text-center w-full"
        >
          Sign Up
        </button>
        <Link href="/login" className="text-blue-600 font-medium text-sm">Login</Link>
      </div>
    </div>
  );
}
