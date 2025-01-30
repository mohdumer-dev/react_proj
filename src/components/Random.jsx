import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Random = () => {
    const [gif, setgif] = useState(null)
    const KEY = "wu46XRgnGLj93elYDGxhOWGVWuLWeWCZ"


    // random trending 

    async function fetchData() {
        setgif(null)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${KEY}`
        const { data } = await axios.get(url)
        // const response = data.data.map((x)=>{ return x.url})
        const response = data.data.images.original.url
        setgif(response)

    }
    useEffect(() => {
        fetchData()
    }, [])
    function changeGif() {
       fetchData()
       console.log(gif)
     
    }
    return (
        <div className="w-1/2 py-4 flex flex-col items-center bg-green-300 mt-5 rounded-xl">
            <h3 className="font-bold text-2xl underline"> A Random Gif </h3>
           {gif? <img src={gif} className='h-54 mt-4 w-56' alt="" />:<p>Loading</p>}
            <button onClick={changeGif} className="w-4/5 mt-5 p-1 rounded-2xl font-extrabold bg-white" >Generate</button>
        </div>
    )
}

export default Random