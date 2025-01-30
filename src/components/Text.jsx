import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useDebounce from '../hooks/useDebounce'

const Text = () => {
    const [gif, setGif] = useState(null)
    const [text, Settext] = useState('')

    const KEY = import.meta.env.VITE_GRIPHY_API
    const data = useDebounce(text)
   
    async function Value(datas) {
        
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${datas}`)
        setGif(response.data.data[1].images.fixed_height.url)
        console.log(response.data.data[1].images.fixed_height.url)
        
    }

    useEffect(() => {
        if(!data)return;
        setGif(null)
        Value(data)
   
    }, [data])

    return (
        <div className="w-1/2 py-4 flex flex-col items-center bg-green-300 mt-5 rounded-xl">
            <h3 className="font-bold text-2xl underline"> A Random Gif </h3>
            <input className='border bg-slate-400 text-white ' type="text" placeholder='meme' value={text} onChange={(e) => {
                Settext(e.target.value)
            }
            } />
            {gif ? <img src={gif} className='h-54 mt-4 w-56' alt="" /> : <p className='h-54 mt-4 text-center w-56'>Loading</p>}

        </div>
    )
}

export default Text