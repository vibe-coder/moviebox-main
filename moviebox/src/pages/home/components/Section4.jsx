import React from 'react'
import bgPoster from "../../../bg.jpg"

function Section4() {
  return (
    <section className='mt-40 px-6 pb-32 md:px-16 lg:px-28'>
      {/* ----------------------- Category Button Selection ------------------- */}
      <div className='flex border-b border-neutral mb-12'>
        <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Celebs</button>
        <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Events</button>
        <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>News</button>
        <div className=' flex-1 flex justify-end items-center'><button className='pb-12 h-6 w-28 font-sans text-yellow-1 border-b-2 border-transparent hover:border-yellow-1 md:text-lg'>View All</button></div>
      </div>

      {/* Celeb Container */}
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>

        {/* Single Celeb Container*/}
        <div className='flex col-span-1'>
          {/* Picture */}
          <div className='w-[1000px] h-[180px] bg-metal md:h-[230px]'>
            <img className='h-full cursor-pointer w-full object-cover object-center' src={bgPoster} alt='backgroundPoster' />
          </div>
          {/* Info */}
          <div className=' ml-6 overflow-hidden'>
            <h1 className='text-yellow-1 font-bold text-lg tracking-widest font-sans mb-2 md:text-2xl'>Naomi Scott</h1>
            <h2 className='font-sans mb-2 text-neutral-400 md:text-lg'>Actress | <span className='text-yellow-1'>Aladdin</span></h2>
            <p className='font-sans mb-4 text-neutral-300 font-hairline text-ellipsis whitespace-pre-wrap overflow-hidden line-clamp-3 md:text-lg'>Naomi Scott is a multi-talented actor, singer and songwriter. She stars as "Jasmine"
              is Disney's blockbuster live action remake Aladdin (2019), alongside Mena Massoud and Will Smith,
              directed by Guy Ritchie. Disney released the film in May 2019, and it became one of the biggest film of the year.
            </p>
            <button className='text-neutral-400 border-b-2 border-neutral-400 hover:text-white md:text-lg'>More</button>
          </div>
        </div>

        <div className='flex col-span-1'>
          {/* Picture */}
          <div className='w-[1000px] h-[180px] bg-metal md:h-[230px]'>
            <img className='h-full cursor-pointer w-full object-cover object-center' src={bgPoster} alt='backgroundPoster' />
          </div>
          {/* Info */}
          <div className=' ml-6 overflow-hidden'>
            <h1 className='text-yellow-1 font-bold text-lg tracking-widest font-sans mb-2 md:text-2xl'>Naomi Scott</h1>
            <h2 className='font-sans mb-2 text-neutral-400 md:text-lg'>Actress | <span className='text-yellow-1'>Aladdin</span></h2>
            <p className='font-sans mb-4 text-neutral-300 font-hairline text-ellipsis whitespace-pre-wrap overflow-hidden line-clamp-3 md:text-lg'>Naomi Scott is a multi-talented actor, singer and songwriter. She stars as "Jasmine"
              is Disney's blockbuster live action remake Aladdin (2019), alongside Mena Massoud and Will Smith,
              directed by Guy Ritchie. Disney released the film in May 2019, and it became one of the biggest film of the year.
            </p>
            <button className='text-neutral-400 border-b-2 border-neutral-400 hover:text-white md:text-lg'>More</button>
          </div>
        </div>

        <div className='flex col-span-1'>
          {/* Picture */}
          <div className='w-[1000px] h-[180px] bg-metal md:h-[230px]'>
            <img className='h-full cursor-pointer w-full object-cover object-center' src={bgPoster} alt='backgroundPoster' />
          </div>
          {/* Info */}
          <div className=' ml-6 overflow-hidden'>
            <h1 className='text-yellow-1 font-bold text-lg tracking-widest font-sans mb-2 md:text-2xl'>Naomi Scott</h1>
            <h2 className='font-sans mb-2 text-neutral-400 md:text-lg'>Actress | <span className='text-yellow-1'>Aladdin</span></h2>
            <p className='font-sans mb-4 text-neutral-300 font-hairline text-ellipsis whitespace-pre-wrap overflow-hidden line-clamp-3 md:text-lg'>Naomi Scott is a multi-talented actor, singer and songwriter. She stars as "Jasmine"
              is Disney's blockbuster live action remake Aladdin (2019), alongside Mena Massoud and Will Smith,
              directed by Guy Ritchie. Disney released the film in May 2019, and it became one of the biggest film of the year.
            </p>
            <button className='text-neutral-400 border-b-2 border-neutral-400 hover:text-white md:text-lg'>More</button>
          </div>
        </div>

        <div className='flex col-span-1'>
          {/* Picture */}
          <div className='w-[1000px] h-[180px] bg-metal md:h-[230px]'>
            <img className='h-full cursor-pointer w-full object-cover object-center' src={bgPoster} alt='backgroundPoster' />
          </div>
          {/* Info */}
          <div className=' ml-6 overflow-hidden'>
            <h1 className='text-yellow-1 font-bold text-lg tracking-widest font-sans mb-2 md:text-2xl'>Naomi Scott</h1>
            <h2 className='font-sans mb-2 text-neutral-400 md:text-lg'>Actress | <span className='text-yellow-1'>Aladdin</span></h2>
            <p className='font-sans mb-4 text-neutral-300 font-hairline text-ellipsis whitespace-pre-wrap overflow-hidden line-clamp-3 md:text-lg'>Naomi Scott is a multi-talented actor, singer and songwriter. She stars as "Jasmine"
              is Disney's blockbuster live action remake Aladdin (2019), alongside Mena Massoud and Will Smith,
              directed by Guy Ritchie. Disney released the film in May 2019, and it became one of the biggest film of the year.
            </p>
            <button className='text-neutral-400 border-b-2 border-neutral-400 hover:text-white md:text-lg'>More</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Section4