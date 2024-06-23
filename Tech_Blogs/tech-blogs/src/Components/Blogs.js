import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Card from "./Card";

function Blogs() {
  const { loading, posts } = useContext(AppContext);
  return (
    <div className="w-[63%] mt-12 mx-auto py-3 pb-12">
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="spinner"></div>
        </div>
      ) : posts.length === 0 ? (
        <h1>No Blog Found</h1>
      ) : (
        posts.map((post) => <Card key={post.id} post={post} />)
      )}
    </div>
  );
}


export default Blogs;
