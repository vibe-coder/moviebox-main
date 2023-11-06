import React from 'react'
import bgPoster from "../../../bg.jpg"
import "./scss/Section-2.scss"

function Section2() {
  return (
    <section className='p-6 md:p-16'>

      {/* ----------------------- Category Button Selection ------------------- */}
      <div className='flex border-b border-neutral mb-10 overflow-scroll no-scrollbar'>
        <div className='flex'>
          {/* Category button */}
          <div className='flex gap-2 w-[200vw] md:gap-6 md:w-[140vw] '>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Movies</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>TV Series</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Popular Downloads</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Top Rated Movies</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Top Rated Series</button>
            <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Premium</button>
          </div>

          {/* View All selection */}
          <div className='flex justify-end items-center'><button className='pb-12 h-6 w-28 font-sans text-yellow-1 border-b-2 border-transparent hover:border-yellow-1 md:text-lg'>View All</button></div>
        </div>
      </div>

      {/* ----------------------- Movie Category --------------------------- */}
      <div className='grid grid-cols-2 gap-x-4 gap-y-6 mb-12 md:grid-cols-3'>
        {/* Single movie card */}
        <div className=' h-[15rem] w-[100%] flex-col justify-between flex-1 '>
          <div className='w-full h-[90%] bg-black rounded-lg'>
            <img className='h-full cursor-pointer w-full object-cover object-center rounded-lg duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans '><p className='md:text-lg'>Avengers: Endgame</p></div>
        </div>

        <div className=' h-[15rem] w-[100%] flex-col justify-between flex-1 '>
          <div className='w-full h-[90%] bg-black rounded-lg'>
            <img className='h-full cursor-pointer w-full object-cover object-center rounded-lg duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans '><p className='md:text-lg'>Avengers: Endgame</p></div>
        </div>

        <div className=' h-[15rem] w-[100%] flex-col justify-between flex-1 '>
          <div className='w-full h-[90%] bg-black rounded-lg'>
            <img className='h-full cursor-pointer w-full object-cover object-center rounded-lg duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans '><p className='md:text-lg'>Avengers: Endgame</p></div>
        </div>

        <div className=' h-[15rem] w-[100%] flex-col justify-between flex-1 '>
          <div className='w-full h-[90%] bg-black rounded-lg'>
            <img className='h-full cursor-pointer w-full object-cover object-center rounded-lg duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans '><p className='md:text-lg'>Avengers: Endgame</p></div>
        </div>




      </div>

      {/* --------------------- Movie Banner Description ---------------------*/}
      <div id='movieBanner' className='flex flex-col gap-3 md:flex-col'>

        {/* Left Section */}
        <div className='w-full relative rounded-lg h-[300px]'>
          <img src={bgPoster} alt="bacground poster" className='object-cover object-center w-full h-full absolute rounded-lg z-[1]'/>

          <div className='absolute bg-transparetNeutral w-full h-full flex items-center py-6 pl-6 z-[2]'>
            <div>
              {/* Title */}
              <h1 className='text-white font-bold font-sans text-3xl m-0 md:text-4xl'>CHARLIE'S ANGELS</h1>
              {/* Description */}
              <p className='font-sans text-sm m-0 text-white md:text-[16px]'>Action, Adventure, Comedy | 15 November 2019 (USA)</p>
              {/* Rating */}
              <div className='mt-4 text-white'><div className='border-2 border-yellow-1 w-12 rounded flex justify-center items-center'>4.0</div></div>
              {/* Button Wrapper */}
              <div className='flex gap-4 flex-wrap'>
                {/* <button className='h-8 w-28 rounded text-black font-medium border border-yellow-1 bg-yellow-1 hover:bg-yellow-2 hover:border-yellow-2'>Watch Trailer</button>
                <button className='h-8 w-28 rounded text-white border-2 border-white bg-transparent hover:border-yellow-1'>View Info</button>
                <button className='h-8 rounded text-white bg-transparent hover:text-yellow-1'>+ Favorites</button> */}
                {/* <button className='h-8 rounded text-white bg-transparent hover:text-yellow-1'><i className="las la-ellipsis-v"></i></button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div id='rightSection' className='flex-[1] w-full text-white bg-midnigh border border-neutral-2 rounded-md bg-gradient-to-t from-neutral to-transparent md:w-[50%]'>
          <div className='p-6'>
            <p className='font-bold font-sans text-yellow-1 md:text-xl'>Suggestions:</p>
            <ul className='mt-4 pl-6'>
              <li className='list-disc cursor-pointer font-sans hover:text-neutral-400 md:text-lg'>This Info</li>
              <li className='list-disc cursor-pointer font-sans hover:text-neutral-400 md:text-lg'>This Info</li>
              <li className='list-disc cursor-pointer font-sans hover:text-neutral-400 md:text-lg'>This Info</li>
              <li className='list-disc cursor-pointer font-sans hover:text-neutral-400 md:text-lg'>This Info</li>
              <li className='list-disc cursor-pointer font-sans hover:text-neutral-400 md:text-lg'>This Info</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2;