import { useState,useEffect } from "react";

function useDebounce(text) {
  const [data, setdata] = useState("dog");
  useEffect(() => {
    const clock = setTimeout(() => {
      setdata(text);
    }, 500);
    return () => {
      clearTimeout(clock);
    };
  }, [text]);
  return data;
}
export default useDebounce
