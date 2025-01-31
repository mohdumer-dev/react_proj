import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useDebounce from '../hooks/useDebounce'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'


const Text = () => {
    const [text, Settext] = useState('dog')
    const data = useDebounce(text)
    const { gif, FetchMeme } = useGif()

    

    useEffect(() => {
        if (!data) return;
        FetchMeme(data)

    }, [data])

    return (
        <div className="w-1/2 py-4 flex flex-col items-center bg-green-300 mt-5 rounded-xl">
            <h3 className="font-bold text-2xl underline"> A Random Gif </h3>
            <input className='border bg-slate-400 text-white ' type="text" placeholder='meme' value={text} onChange={(e) => {
                Settext(e.target.value)
            }
            } />
            {gif ? (<img src={gif} className='h-54 mt-4 w-56' alt="" />) : <Spinner />}

        </div>
    )
}

export default Text