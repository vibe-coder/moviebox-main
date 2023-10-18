import React from 'react'
import bgPoster from "../../../bg.jpg"

function Section3() {
  return (
    <section className='bg-black px-16 pb-16'>
      {/* ----------------------- Category Button Selection ------------------- */}
      <div className='flex border-b border-neutral mb-16'>
        <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10'>Latest Trailer</button>
        <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10'>Coming Soon</button>
        <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10'>In Thearters</button>
        <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10'>Release Calendar</button>
        <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10'>Box Office</button>
        <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10'>Showtimes and Tickets</button>
        <div className=' flex-1 flex justify-end items-center'><button className='h-8 w-28 rounded font-sans text-yellow-1'>View All</button></div>
      </div>


      {/* ----------------------- Movie Category --------------------------- */}
      <div className='flex justify-between gap-16 mb-6'>

        {/* Single movie card */}
        <div className=' h-[29rem] flex-col justify-between flex-1 '>
          <div className='w-full h-[90%] bg-black rounded-lg'>
            <img className='h-full cursor-pointer w-full object-cover object-center rounded-lg duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] flex items-center text-white font-sans'><p>Avengers: Endgame</p></div>
        </div>

        {/* Single movie card */}
        <div className=' h-[29rem] flex-col justify-between flex-1 '>
          <div className='w-full h-[90%] bg-black rounded-lg'>
            <img className='h-full cursor-pointer w-full object-cover object-center rounded-lg duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] flex items-center text-white font-sans'><p>Avengers: Endgame</p></div>
        </div>

        {/* Single movie card */}
        <div className=' h-[29rem] flex-col justify-between flex-1 '>
          <div className='w-full h-[90%] bg-black rounded-lg'>
            <img className='h-full cursor-pointer w-full object-cover object-center rounded-lg duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] flex items-center text-white font-sans'><p>Avengers: Endgame</p></div>
        </div>

        {/* Single movie card */}
        <div className=' h-[29rem] flex-col justify-between flex-1 '>
          <div className='w-full h-[90%] bg-black rounded-lg'>
            <img className='h-full cursor-pointer w-full object-cover object-center rounded-lg duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] flex items-center text-white font-sans'><p>Avengers: Endgame</p></div>
        </div>
      </div>
    </section>
  )
}

export default Section3