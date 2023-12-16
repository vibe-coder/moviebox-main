import React from 'react'
import { Link } from 'react-router-dom'
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import linktag from "../images/link.png"
// import LinkedInIcon from '@mui/icons-material/LinkedIn';



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
        <div className='text-center mb-12 flex gap-8 justify-center'>
          <a href="https://www.linkedin.com/in/david-irinyemi-395220162" target="_blank">
            <img src={linkedin} alt="linkedin" className='h-5 w-5 opacity-50 hover:opacity-100 transition ease-in-out duration-150'/>
          </a>
          <a href="https://twitter.com/vibe_coder" target="_blank">
            <img src={twitter} alt="twitter" className='h-5 w-5 opacity-50 hover:opacity-100 transition ease-in-out duration-150'/>
          </a>
          <a href="https://vibe-coder.netlify.app/" target="_blank">
            <img src={linktag} alt="link" className='h-5 w-5 opacity-50 hover:opacity-100 transition ease-in-out duration-150' />
          </a>
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