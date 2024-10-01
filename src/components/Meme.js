import React from 'react'
import { useState } from 'react';
import memesData from './memesData';

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage () {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        // console.log(url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

  return (
    <main>
        <div className='form'>
            {/* <label htmlFor="top-text">Top Text</label> */}
            <input 
                type="text"
                className='form--input' 
                placeholder='Top Text'
            />
            {/* <label htmlFor="bottom-text">Bottom Text</label> */}
            <input 
                type="text" 
                className='form--input'
                placeholder='Bottom Text'
            />
            <button
                className='form--button'
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <div>
            <img 
                src={meme.randomImage} 
                alt="meme-image" 
                className='meme--image'
            />
        </div>
    </main>
  )
}

export default Meme