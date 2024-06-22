import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function RandomGif() {
  // Descriptive name
  const [gifUrl, setGifUrl] = useState(null);

  const fetchData = async () => {
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const response = await axios.get(url);
      setGifUrl(response.data.data.images.downsized_large.url);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[35%] bg-[#c0bebe23] shadow-md p-4 gap-y-2 flex flex-col justify-center items-center rounded-md">
      <h1 className="text-[#f6f6f6] text-2xl font-semibold ">Random GIF</h1>
      <div className="w-full h-[19rem] bg-white/10 rounded-sm mt-3 flex justify-center items-center">
        {gifUrl ? ( // Conditionally render the image
          <img className="h-full " src={gifUrl} alt="Random GIF" />
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </div>
      <button
        onClick={fetchData}
        className="bg-[#436724] mt-4 w-full py-1 text-white text-[1.2rem] font-semibold"
      >
        Generate New GIF
      </button>
    </div>
  );
}

export default RandomGif;
