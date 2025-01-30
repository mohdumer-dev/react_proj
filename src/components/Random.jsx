import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useGif from '../hooks/useGif'


const Random = () => {

    const { gif, FetchMeme } = useGif()
    

    return (
        <div className="w-2/4 py-4 flex flex-col items-center bg-green-300 mt-5 rounded-xl">
            <h3 className="font-bold text-2xl underline"> A Random Gif </h3>
            {gif ? <img src={gif} className='h-54 mt-4 w-56' alt="" /> : <p>Loading</p>}
            <button onClick={() => { FetchMeme() }} className="w-4/5 mt-5 p-1 rounded-2xl font-extrabold bg-white" >Generate</button>
        </div>
    )
}

export default Random