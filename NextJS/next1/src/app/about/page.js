import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-12 capitalize">about page</h1>
      <Link href="/" className="text-center text-blue-500 underline">
        <p>Go to home</p>
      </Link>
    </div>
  );
};

export default page;
