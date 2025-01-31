import { useState, useEffect } from "react";
import axios from "axios";

const KEY = import.meta.env.VITE_GRIPHY_API;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${KEY}`;
const text_url = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}`;

const useGif = (tag) => {
  const [gif, setgif] = useState(null);

  async function FetchMeme(tag) {
    setgif(null);
    const { data } = await axios.get(tag ? `${text_url}&q=${tag}` : url);
    // const response = data.data.map((x)=>{ return x.url})
    if (!tag) {
      const response = data.data.images.original.url;
      setgif(response);
    }else{
        const response=data.data[1].images.fixed_height.url
        setgif(response);
    }
  }
  useEffect(() => {
    FetchMeme();
  }, []);

  return { gif, FetchMeme };
};

export default useGif;
