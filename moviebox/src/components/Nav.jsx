import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav className="w-100% h-28 flex gap-4 justify-between absolute top-0 left-0 right-0 items-center px-6 z-10 md:gap-8 md:px-16 md:h-40 lg:px-28">
        <Link className='' to="/">
          <h1 className='text-white text-xl font-bold m-0 flex-1 font-sans focus:outline-none focus-visible:ring md:text-4xl'>
            MOVIE<span className='font-hairline text-yellow-1'>BOX</span>
          </h1>
        </Link>
        
        <label className="relative block w-full md:w-50 lg:w-[500px]">
          {/* <span class="sr-only">Search</span> */}
          <input className="placeholder:italic h-10 placeholder:text-slate-400 block text-white w-full bg-transparentWhite border-slate-300 py-2 pl-4 pr-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm focus:bg-transparentWhite hover:bg-transparentWhite" placeholder="Search for anything..." type="text" name="search"/>
          <span className="absolute inset-y-0 right-0 flex items-center pr-4">
            <i className="las la-search 64px text-white scale-x-[-1]"></i>
          </span>
        </label>

        <Link to="/category">
          <button className='h-10 w-20 rounded text-black font-bold border border-yellow-1 bg-yellow-1 hover:bg-yellow-2 hover:border-yellow-2 md:w-32'>
            Category
          </button>
        </Link>
      </nav>
    </>
  )
}

export default Nav