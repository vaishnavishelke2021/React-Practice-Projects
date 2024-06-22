import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "mnV8KJUIQJYrHN3HI2LQx1wUcrMrF2ZP";
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
  const [gifUrl, setGifUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (tag) => {
    setLoading(true);
    try {
      const response = await axios.get(tag ? `${URL}&tag=${tag}` : URL);

      setGifUrl(response.data.data.images.downsized_large.url);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData('dog');
  }, []);

  return { gifUrl, loading, fetchData };
}

export default useGif;
