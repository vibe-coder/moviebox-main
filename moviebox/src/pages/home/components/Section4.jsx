import React from 'react'

function Section4() {
  return (
    <section className='bg-black px-16 pb-32 '>
      {/* ----------------------- Category Button Selection ------------------- */}
      <div className='flex border-b border-neutral mb-12'>
        <button className='h-16 px-3 font-sans text-white border-b-2 border-transparent hover:border-yellow-1 z-10'>Celebs</button>
        <button className='h-16 px-3 font-sans text-white border-b-2 border-transparent hover:border-yellow-1 z-10'>Events</button>
        <button className='h-16 px-3 font-sans text-white border-b-2 border-transparent hover:border-yellow-1 z-10'>News</button>
        <div className=' flex-1 flex justify-end items-center'><button className='h-8 w-28 rounded font-sans text-yellow-1'>View All</button></div>
      </div>

      {/* Celeb Container */}
      <div className='grid grid-cols-2 gap-6'>

        {/* Single Celeb Container*/}
        <div className='flex col-soan-1'>
          {/* Picture */}
          <div className='w-[1000px] h-[260px] bg-metal'>Picture</div>
          {/* Info */}
          <div className=' ml-6'>
            <h1 className='text-yellow-1 font-bold text-lg tracking-widest font-sans mb-2'>Naomi Scott</h1>
            <h2 className='font-sans mb-2 text-white'>Actress | <span className='text-yellow-1'>Aladdin</span></h2>
            <p className='font-sans mb-4 text-white font-extralight'>Naomi Scott is a multi-talented actor, singer and songwriter. She stars as "Jasmine"
              is Disney's blockbuster live action remake Aladdin (2019), alongside Mena Massoud and Will Smith,
              directed by Guy Ritchie. Disney released the film in May 2019, and it became one of the biggest film of the year.
            </p>
            <button className='text-white border-b-2 border-white'>More</button>
          </div>
        </div>

        {/* Single Celeb Container*/}
        <div className='flex col-soan-1'>
          {/* Picture */}
          <div className='w-[1000px] h-[260px] bg-metal'>Picture</div>
          {/* Info */}
          <div className=' ml-6'>
            <h1 className='text-yellow-1 font-bold text-lg tracking-widest font-sans mb-2'>Naomi Scott</h1>
            <h2 className='font-sans mb-2 text-white'>Actress | <span className='text-yellow-1'>Aladdin</span></h2>
            <p className='font-sans mb-4 text-white'>Naomi Scott is a multi-talented actor, singer and songwriter. She stars as "Jasmine"
              is Disney's blockbuster live action remake Aladdin (2019), alongside Mena Massoud and Will Smith,
              directed by Guy Ritchie. Disney released the film in May 2019, and it became one of the biggest film of the year.
            </p>
            <button className='text-white border-b-2 border-white'>More</button>
          </div>
        </div>

        

        

      </div>
    </section>
  )
}

export default Section4