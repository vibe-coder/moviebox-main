import React from 'react'
import bgPoster from "../../../src/bg.jpg"

function Category() {
  return (
    <section className='bg-black pb-28 pt-28'>

      {/* Category Buttons */}
      <div className="bg-neutral p-6 px-16 grid grid-cols-12 gap-6 mb-24 mt-6">
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
        <button className='bg-yellow-1 hover:bg-yellow-2 active:text-neutral-2 flex justify-center items-center py-1 px-6 font-sans font-medium text-lg tracking-wider'>Action</button>
      </div>


      {/* Moive List */}
      <div className='px-16 grid grid-cols-6 w-full gap-10'>
        
        {/* Single Movie */}
        <div>
          <div className='bg-black w-[200px] h-[260px] mb-4'>
            <img className='h-full cursor-pointer w-full object-cover object-center duration-[0.2s] hover:opacity-[.7]' src={bgPoster} alt='backgroundPoster' />
          </div>
          <p className='font-sans text-xl text-white'>Extraction</p>
        </div>
      </div>
    </section>
  )
}

export default Category