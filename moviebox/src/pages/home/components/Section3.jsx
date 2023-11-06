import React from 'react'
import bgPoster from "../../../bg.jpg"

function Section3() {
  return (
    <section className=' px-6 mt-40 md:px-16 lg:px-28'>
      {/* ----------------------- Category Button Selection ------------------- */}
      <div className='flex border-b border-neutral mb-10 overflow-scroll no-scrollbar lg:overflow-visible'>
        <div className='flex justify-between lg:justify-between overflow-hidden'>
          {/* Category button */}
          <div className='flex  gap-2 w-[220vw] md:gap-6 md:w-[140vw] lg:w-screen lg:flex-1'>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Action</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Adventure</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Animation</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Comedy</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Crime</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Documentary</button>
          </div>

          {/* View All selection */}
          <div className='flex justify-end items-center lg:flex-3'><button className='pb-12 h-6 w-28 font-sans text-yellow-1 border-b-2 border-transparent hover:border-yellow-1 md:text-lg'>View All</button></div>
        </div>
      </div>

      {/* ----------------------- Movie Category --------------------------- */}
      <div className='grid grid-cols-2 gap-x-4 gap-y-6 mb-12 md:grid-cols-3 lg:grid-cols-6'>
        {/* Single movie card */}
        <div className=' h-[15rem] w-[100%] flex-col justify-between lg:h-[20rem]'>
          <div className='w-full h-[90%] bg-black'>
            <img className='h-full cursor-pointer w-full object-cover object-center duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans '><p className='md:text-lg'>Avengers: Endgame</p></div>
        </div>

        <div className=' h-[15rem] w-[100%] flex-col justify-between lg:h-[20rem]'>
          <div className='w-full h-[90%] bg-black'>
            <img className='h-full cursor-pointer w-full object-cover object-center duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans '><p className='md:text-lg'>Avengers: Endgame</p></div>
        </div>

        <div className=' h-[15rem] w-[100%] flex-col justify-between lg:h-[20rem]'>
          <div className='w-full h-[90%] bg-black'>
            <img className='h-full cursor-pointer w-full object-cover object-center duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans '><p className='md:text-lg'>Avengers: Endgame</p></div>
        </div>

        <div className=' h-[15rem] w-[100%] flex-col justify-between lg:h-[20rem]'>
          <div className='w-full h-[90%] bg-black'>
            <img className='h-full cursor-pointer w-full object-cover object-center duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans '><p className='md:text-lg'>Avengers: Endgame</p></div>
        </div>

        <div className=' h-[15rem] w-[100%] flex-col justify-between lg:h-[20rem]'>
          <div className='w-full h-[90%] bg-black'>
            <img className='h-full cursor-pointer w-full object-cover object-center duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans '><p className='md:text-lg'>Avengers: Endgame</p></div>
        </div>

        <div className=' h-[15rem] w-[100%] flex-col justify-between lg:h-[20rem]'>
          <div className='w-full h-[90%] bg-black'>
            <img className='h-full cursor-pointer w-full object-cover object-center duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans '><p className='md:text-lg'>Avengers: Endgame</p></div>
        </div>

      </div>
    </section>
  )
}

export default Section3