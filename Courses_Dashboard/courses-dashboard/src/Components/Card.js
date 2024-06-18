import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

function Card({ c }) {
  const [like, setLike] = useState(false);
  const shortDesc = c.description.substring(0, 92);

  const likeHandler = () => {
    setLike(!like);
  };

  return (
    <div>
      <div className=" relative max-w-[250px] h-[280px] bg-zinc-800 rounded-[4px]">
        <img
          className=" w-full h-[150px] rounded-t-[4px]"
          src={c.image.url}
          alt=""
        />
        <button
          onClick={likeHandler}
          className=" absolute top-[48%] right-2  border-none rounded-full p-[6px] bg-white shadow-lg text-sm"
        >
          <span>
            {like ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaHeart className="text-black/40" />
            )}
          </span>
        </button>
        <div className="px-3 py-2 pb-4">
          <h1 className="text-yellow-600 font-bold text-[1rem]">{c.title}</h1>
          <p className="text-[13px] text-lemon/90 mt-2 tracking-[0.6px] leading-4 font-normal">
            {`${shortDesc}...`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
