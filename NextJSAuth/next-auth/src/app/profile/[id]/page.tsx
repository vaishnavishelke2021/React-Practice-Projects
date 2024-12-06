import React from "react";

// Define the structure of the params
interface Params {
  id: string;
}

const UserProfile = ({ params }: { params: Params }) => {
  return (
    <div>
      <h2 className="text-2xl bg-rose-600 font-extrabold text-center text-white py-6">
        User Profile Page
      </h2>

      <p className="text-center text-xl font-medium mt-6">
        Hello <span className="text-rose-400">{params.id}</span>
      </p>
    </div>
  );
};

export default UserProfile;
