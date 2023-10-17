import React from 'react'

function Footer() {
  return (
    <footer className='h-80 bg-neutral-2 flex-col justify-between items-center'>
      <h1 className='text-white text-3xl font-bold m-0 font-sans text-center'>
        MovieBox
      </h1>

      {/* Socials */}
      <div className='text-center'>Socials</div>

      {/* Credits */}
      <div className='text-center'>
        <p>Credit: Designed-by: Akhil Akhi. Developed-by: Vibe-Coder </p>
        <p>Developed with: TMDB API</p>

      </div>
    </footer>
  )
}

export default Footer