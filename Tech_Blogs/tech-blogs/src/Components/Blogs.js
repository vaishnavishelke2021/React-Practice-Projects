import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Card from "./Card";

function Blogs() {
  const { loading, posts } = useContext(AppContext);
  return (
    <div className="w-[90%] mx-auto py-3">
      {loading ? (
        <h1>loading</h1>
      ) : posts.length === 0 ? (
        <h1>No Post Found</h1>
      ) : (
        posts.map((post) => <Card key={post.id} post={post} />)
      )}
    </div>
  );
}

export default Blogs;
