import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav className="w-100% h-28 flex gap-8 justify-between items-center px-16 absolute z-10 left-0 right-0 bg-transparetNeutral">
        <Link className='flex-1' to="/">
          <h1 className='text-white text-3xl font-bold m-0 flex-1 font-sans focus:outline-none focus-visible:ring'>
            MOVIE<span className='font-hairline text-yellow-1'>BOX</span>
          </h1>
        </Link>
        
        <label class="relative block w-[300px]">
          {/* <span class="sr-only">Search</span> */}
          <input class="placeholder:italic placeholder:text-slate-400 block bg-transparent text-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm focus:bg-transparentWhite hover:bg-transparentWhite" placeholder="Search for anything..." type="text" name="search"/>
          <span class="absolute inset-y-0 right-0 flex items-center pr-4">
            <i class="las la-search 64px text-white scale-x-[-1]"></i>
          </span>
        </label>

        <Link to="/category">
          <button className='h-8 w-28 rounded text-black font-medium border border-yellow-1 bg-yellow-1 hover:bg-yellow-2 hover:border-yellow-2'>
            Category
          </button>
        </Link>
      </nav>
    </>
  )
}

export default Nav