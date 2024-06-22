import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "mnV8KJUIQJYrHN3HI2LQx1wUcrMrF2ZP";

function Custom() {
  const [gifUrl, setGifUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("cat");

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const response = await axios.get(url);
      setGifUrl(response.data.data.images.downsized_large.url);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandler = () => {
    fetchData();
  };

  const changeHandler = (e) => {
    setTag(e.target.value);
  };

  return (
    <div className="w-full md:w-[35%] mt-4 md:mt-0 bg-[#c0bebe14] shadow-md p-4  flex flex-col items-center rounded-md">
      <h1 className="text-[#f6f6f6] text-2xl font-semibold ">
        Random {tag} GIF
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
        onClick={clickHandler}
        className="bg-[#436724] mt-4 w-full py-1 text-white text-[1.2rem] font-semibold"
      >
        Generate New GIF
      </button>
    </div>
  );
}

export default Custom;
