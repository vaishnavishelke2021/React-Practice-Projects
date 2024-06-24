import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { NavLink } from "react-router-dom";

function Card({ post }) {
  const { isDark } = useContext(AppContext);

  return (
    <div
      className={`p-4 m-7 max-w-[80%] mx-auto ${
        isDark ? "bg-light/5" : "bg-dark/5"
      } rounded-sm`}
    >
      {/* -----------------------------------------Title----------------------------------------------- */}
      <NavLink to={`blog/${post.id}`}>
        <h1 className="text-[1.4rem] font-bold leading-[26px]">{post.title}</h1>
      </NavLink>

      {/* -----------------------------------------category----------------------------------------------- */}
      <p className="text-[15px] font-normal tracking-[0.7px] mt-2">
        By <span className="italic">{post.author}</span>on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline font-semibold">{post.category}</span>
        </NavLink>
      </p>

      {/* -----------------------------------------date----------------------------------------------- */}
      <p className="text-[15px] font-normal tracking-[0.7px] mt-1">
        Posted on <span>{post.date}</span>
      </p>

      {/* -----------------------------------------Content----------------------------------------------- */}
      <h2 className="mt-6 leading-[24px] font-medium text-[17px]">
        {post.content}
      </h2>

      {/* -----------------------------------------tags----------------------------------------------- */}
      <div className="flex gap-x-2 flex-wrap underline text-blue-500 font-medium text-sm mt-2">
        {post.tags.map((tag, i) => (
          <NavLink key={i} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <p>#{tag}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Card;
