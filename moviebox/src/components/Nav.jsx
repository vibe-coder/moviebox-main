import React from 'react'

function Nav() {
  return (
    <nav className="w-100% h-20 flex gap-8 justify-between items-center">
      <h1 className='text-white text-3xl font-bold m-0 flex-1 font-sans'>MovieBox</h1>
      <input placeholder='Search' type='search' className='indent-2 bg-transparent border rounded font-sans text-white border-white h-8 w-60'/>
      <button className='h-8 w-28 rounded text-white border border-blue-1 bg-blue-1 hover:border-metal'>Category</button>
    </nav>
  )
}

export default Nav