import React, { useContext } from "react";
import { AppContext } from "../AppContext";

function Card({ post }) {
  const { isDark } = useContext(AppContext);

  return (
    <div
      className={`p-4 m-7 max-w-[80%] mx-auto ${
        isDark ? "bg-light/5" : "bg-dark/5"
      } rounded-sm`}
    >
      <h1 className="text-[1.4rem] font-bold">{post.title}</h1>
      <p className="text-[15px] font-normal tracking-[0.7px] mt-1">
        By <span className="italic">{post.author}</span>on{" "}
        <span className="underline font-semibold">{post.category}</span>
      </p>
      <p className="text-[15px] font-normal tracking-[0.7px] mt-1">
        Posted on <span>{post.date}</span>
      </p>
      <h2 className="mt-6 leading-[24px] font-medium text-[17px]">
        {post.content}
      </h2>
      <div className="flex space-x-3 flex-wrap underline text-blue-500 font-medium text-sm mt-2">
        {post.tags.map((tag, i) => (
          <p>#{tag}</p>
        ))}
      </div>
    </div>
  );
}

export default Card;
