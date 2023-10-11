import React from 'react'
import bgPoster from "../../../bg.jpg"
import "./scss/Section-2.scss"

function Section2() {
  return (
    <section className='bg-black p-16'>

      {/* ----------------------- Category Button Selection ------------------- */}
      <div className='flex border-b border-neutral mb-16'>
        <button className='h-16 px-3 font-sans text-white border-b-2 border-transparent hover:border-yellow-1 z-10'>Latest Trailers</button>
        <button className='h-16 px-3 font-sans text-white border-b-2 border-transparent hover:border-yellow-1 z-10'>Coming Soon</button>
        <button className='h-16 px-3 font-sans text-white border-b-2 border-transparent hover:border-yellow-1 z-10'>In Thearters</button>
        <button className='h-16 px-3 font-sans text-white border-b-2 border-transparent hover:border-yellow-1 z-10'>Realease Calendar</button>
        <button className='h-16 px-3 font-sans text-white border-b-2 border-transparent hover:border-yellow-1 z-10'>Box Office</button>
        <button className='h-16 px-3 font-sans text-white border-b-2 border-transparent hover:border-yellow-1 z-10'>Showtimes and Tickets</button>
        <div className=' flex-1 flex justify-end items-center'><button className='h-8 w-28 rounded font-sans text-yellow-1'>View All</button></div>
      </div>


      {/* ----------------------- Movie Category --------------------------- */}
      <div className='flex justify-between gap-6 mb-6'>

        {/* Single movie card */}
        <div className=' h-[29rem] flex-col justify-between flex-1 '>
          <div className='w-full h-[90%] bg-purple rounded-lg'>
            <img className='h-full w-full object-cover object-center rounded-lg' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] flex items-center text-white font-sans'><p>Avengers: Endgame</p></div>
        </div>

        {/* Single movie card */}
        <div className=' h-[29rem] flex-col justify-between flex-1'>
          <div className='w-full h-[90%] bg-purple rounded-lg'>
            <img className='h-full w-full object-cover object-center rounded-lg' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] flex items-center text-white font-sans'><p>Avengers: Endgame</p></div>
        </div>

        {/* Single movie card */}
        <div className=' h-[29rem] flex-col justify-between flex-1'>
          <div className='w-full h-[90%] bg-purple rounded-lg'>
            <img className='h-full w-full object-cover object-center rounded-lg' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] flex items-center text-white font-sans'><p>Avengers: Endgame</p></div>
        </div>

        {/* Single movie card */}
        <div className=' h-[29rem] flex-col justify-between flex-1'>
          <div className='w-full h-[90%] bg-purple rounded-lg'>
            <img className='h-full w-full object-cover object-center rounded-lg' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] flex items-center text-white font-sans'><p>Avengers: Endgame</p></div>
        </div>

      </div>


      {/* --------------------- Movie Banner Description ---------------------*/}
      <div id='movieBanner' className='h-[30rem] flex gap-6'>
        
        {/* Left Section */}
        <div className='bg-yellow-1 flex-[3] relative rounded-lg'>
          <img src={bgPoster} alt="bacground poster" className='object-cover object-center w-full h-full absolute rounded-lg z-[1]'/>

          <div className='absolute z-[2] w-full h-full flex items-center pl-16'>
            <div>
              {/* Title */}
              <h1 className='text-white font-bold font-sans text-5xl m-0'>CHARLIE'S ANGELS</h1>
              {/* Description */}
              <p className='font-sans text-md m-0 text-white'>Action, Adventure, Comedy | 15 November 2019 (USA)</p>
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
        </div>

        {/* Right Section */}
        <div id='rightSection' className='flex-[1] text-white bg-midnigh border border-neutral-2 rounded-md bg-gradient-to-t from-neutral to-transparent'>
          <div className='p-6'>
            <p className='font-bold text-yellow-1'>Suggestions:</p>
            <ul className='mt-4'>
              <li>This Info</li>
              <li>This Info</li>
              <li>This Info</li>
              <li>This Info</li>
            </ul>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Section2