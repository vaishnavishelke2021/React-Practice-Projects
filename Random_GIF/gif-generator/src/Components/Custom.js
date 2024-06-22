import React, { useState } from "react";
import useGif from "../hooks/useGif";

function Custom() {
  const [tag, setTag] = useState("dog");

  const { gifUrl, loading, fetchData } = useGif(tag);

  const changeHandler = (e) => {
    setTag(e.target.value);
  };

  return (
    <div className="w-full md:w-[35%] mt-4 md:mt-0 bg-[#c0bebe14] shadow-md p-4  flex flex-col items-center rounded-md">
      <h1 className="text-[#f6f6f6] text-2xl uppercase font-semibold ">
        {tag} GIF
      </h1>
      <div className="w-full h-[15rem] bg-[#a5ffc20f] rounded-sm mt-3 flex justify-center items-center">
        {!loading ? (
          <img className="h-full " src={gifUrl} alt="Random GIF" />
        ) : (
          <p className="text-white spinner"></p>
        )}
      </div>
      <input
        className="w-full text-center font-bold py-1 px-3 mt-4 bg-white rounded-sm"
        placeholder="Enter here..."
        type="text"
        value={tag}
        onChange={changeHandler}
      />
      <button
        onClick={() => fetchData(tag)}
        className="bg-[#436724] mt-4 w-full py-1 text-white text-[1.2rem] font-semibold"
      >
        Generate New GIF
      </button>
    </div>
  );
}

export default Custom;
