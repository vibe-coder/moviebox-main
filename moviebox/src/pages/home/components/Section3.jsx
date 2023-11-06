import React from 'react'
import bgPoster from "../../../bg.jpg"

function Section3() {
  return (
    <section className='bg-black px-6 pb-16 mt-20'>
      {/* ----------------------- Category Button Selection ------------------- */}
      <div className='flex border-b border-neutral mb-10 overflow-scroll no-scrollbar'>
        <div className='flex'>
          {/* Category button */}
          <div className='flex gap-2 w-[220vw]'>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10'>Latest Trailers</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10'>Coming Soon</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10'>In Thearters</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10'>Release Calendar</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10'>Box Office</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10'>Showtime and Tickets</button>
          </div>

          {/* View All selection */}
          <div className='flex justify-end items-center'><button className='pb-12 h-6 w-28 font-sans text-yellow-1 border-b-2 border-transparent hover:border-yellow-1'>View All</button></div>
        </div>
      </div>

            {/* ----------------------- Movie Category --------------------------- */}
      <div className='grid grid-cols-2 gap-x-4 gap-y-6 mb-12'>
        {/* Single movie card */}
        <div className=' h-[15rem] w-[100%] flex-col justify-between flex-1 '>
          <div className='w-full h-[90%] bg-black rounded-lg'>
            <img className='h-full cursor-pointer w-full object-cover object-center rounded-lg duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans'><p>Avengers: Endgame</p></div>
        </div>

        {/* Single movie card */}
        <div className=' h-[15rem] w-[100%] flex-col justify-between flex-1 '>
          <div className='w-full h-[90%] bg-black rounded-lg'>
            <img className='h-full cursor-pointer w-full object-cover object-center rounded-lg duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans'><p>Avengers: Endgame</p></div>
        </div>
      </div>
    </section>
  )
}

export default Section3