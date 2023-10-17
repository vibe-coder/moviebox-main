import React from 'react'
import bgPoster from "../../../bg.jpg"

function Section1() {
  return (
    <section className='h-[90vh] bg-metal flex items-center  relative'>
      
      <img src={bgPoster} alt='background' className='absolute w-screen h-full object-cover object-center'/>
      
      {/* Information Wrapper */}
      
      <div className='flex h-full w-full items-center px-16 z-[1] bg-gradient-to-t from-black to-transparent'>
        <div>
          {/* Title */}
          <h1 className='text-white font-bold font-sans text-6xl m-0'>CHARLIE'S ANGELS</h1>
          {/* Description */}
          <p className='font-sans text-xl m-0 text-white'>Action, Adventure, Comedy | 15 November 2019 (USA)</p>
          {/* Rating */}
          <div className='my-4 text-white'>4.0</div>
          {/* Button Wrapper */}
          <div className='flex gap-4'>
            <button className='h-8 w-28 rounded text-clack border border-yellow-1 bg-yellow-1 hover:border-white'>Watch Trailer</button>
            <button className='h-8 w-28 rounded text-white border-2 border-white bg-transparent hover:border-blue-1'>View Info</button>
            <button className='h-8 rounded text-white bg-transparent hover:border-blue-1'>+ Favorites</button>
            <button className='h-8 rounded text-white bg-transparent'><i class="las la-ellipsis-v"></i></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1