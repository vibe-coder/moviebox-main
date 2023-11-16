import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className='h-80 bg-neutral-2 flex justify-center items-center'>
      <div>
        <Link to="/">
          <h1 className='text-white m-0 mb-9 text-5xl font-bold text-center font-sans focus:outline-none focus-visible:ring'>
            MOVIE<span className='font-hairline text-yellow-1'>BOX</span>
          </h1>
        </Link>

        {/* Socials */}
        <div className='text-center mb-12 flex gap-5 justify-center'>
          <a href="/"><i className="lab la-facebook-f text-white"></i></a>
          <a href="/"><i className="lab la-twitter text-white"></i></a>
          <a href="/"><i className="lab la-pinterest-p text-white"></i></a>
          <a href="/"><i className="lab la-instagram text-white"></i></a>
          <a href="/"><i className="lab la-youtube text-white"></i></a>
          
        </div>

        {/* Credits */}
        <div className='text-center'>
          <p className='text-white font-sans text-sm'>Credit: Designed-by: Akhil Akhi. Developed-by: Vibe-Coder </p>
          <p className='text-white font-sans text-sm'>Developed with: TMDB API</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer