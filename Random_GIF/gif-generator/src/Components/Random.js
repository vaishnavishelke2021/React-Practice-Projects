import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "mnV8KJUIQJYrHN3HI2LQx1wUcrMrF2ZP";

function RandomGif() {
  const [gifUrl, setGifUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

  return (
    <div className="w-[35%] bg-[#c0bebe23] shadow-md p-4 flex flex-col  items-center rounded-md">
      <h1 className="text-[#f6f6f6] text-2xl font-semibold ">Random GIF</h1>
      <div className="w-full h-[17rem] bg-white/10 rounded-sm mt-3 flex justify-center items-center">
        {!loading ? (
          <img className="h-full " src={gifUrl} alt="Random GIF" />
        ) : (
          <p className="text-white spinner"></p>
        )}
      </div>
      <button
        onClick={clickHandler}
        className="bg-[#436724] mt-4 w-full py-1 text-white text-[1.2rem] font-semibold"
      >
        Generate New GIF
      </button>
    </div>
  );
}

export default RandomGif;
