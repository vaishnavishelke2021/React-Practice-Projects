"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const onLogout = async () => {
    try {
      await axios.get("api/user/logout");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl bg-rose-600 font-extrabold text-center text-white py-6">
        Profile Page
      </h2>

      <div className="w-fit mx-auto mt-7">
        <button
          onClick={onLogout}
          className="bg-rose-600 hover:bg-rose-700 text-white px-5 font-medium py-2 rounded-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
