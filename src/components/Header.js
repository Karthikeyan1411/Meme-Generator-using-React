import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <img 
            src="/images/Troll_Face.png" 
            alt="troll_face" 
            className='header--image'
        />
        <h2 className='header--title'>Meme Generator</h2>
        <h4 className='header--project'>React Course - Project 3</h4>
    </header>
  )
}

export default Header