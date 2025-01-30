import { useState, useEffect } from "react";
import axios from "axios";

const KEY = import.meta.env.VITE_GRIPHY_API;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${KEY}`;
// const url2 = `https://api.giphy.com/v1/gifs/random?api_key=${KEY}`;
const useGif = (tag) => {
  const [gif, setgif] = useState(null);

  async function FetchMeme(tag) {
    setgif(null);
    const { data } = await axios.get(url);
    // const response = data.data.map((x)=>{ return x.url})
    const response = data.data.images.original.url;
    console.log(response)
    setgif(response);
  }
  useEffect(() => {
    FetchMeme();
  }, []);

  return { gif, FetchMeme };
};

export default useGif;
