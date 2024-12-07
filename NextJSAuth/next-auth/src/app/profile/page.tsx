"use client";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [data, setData] = React.useState("");
  const router = useRouter();

  const onLogout = async () => {
    try {
      await axios.get("/api/user/logout", { withCredentials: true });
      router.push("/login");
    } catch (error) {
      console.log("Logout Error:", error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/user/me", { withCredentials: true });
      console.log("API Response:", res.data);
      setData(res.data.data.username || "");
    } catch (error) {
      console.log("Error fetching user details:", error.message);
    }
  };

  React.useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <h2 className="text-2xl bg-rose-600 font-extrabold text-center text-white py-6">
        Profile Page
      </h2>

      {/* Show user details */}
      <div className="text-center my-8 text-xl font-normal">
        {data ? <p>Username: {data}</p> : <p>Loading...</p>}
      </div>

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
