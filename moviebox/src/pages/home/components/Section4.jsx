import React from 'react'
import bgPoster from "../../../bg.jpg"
import { useState, useEffect } from 'react';

function Section4() {

  const url = 'https://api.themoviedb.org/3/trending/person/day?language=en-US'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
    }
  };

  const [people, setPeople] = useState([ ])

  function fetchPeople() {
    fetch(url,options)
        .then((res)=> res.json())
        .then((data) => {
          console.log(data.results)
          let newPeople = data.results
          setPeople(newPeople)
        })
        .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchPeople()
  }, [setPeople])

  let imgPref = "https://image.tmdb.org/t/p/original/"

  return (
    <section className='mt-40 px-6 pb-32 md:px-16 lg:px-28'>
      {/* ----------------------- Category Button Selection ------------------- */}
      <div className='flex border-b border-neutral mb-12'>
        <button className='px-3 pb-12 h-6 font-sans text-white border-b-2  border-transparent hover:border-yellow-1 z-10 md:text-lg'>Trending Celebs</button>
        <div className=' flex-1 flex justify-end items-center'><button className='pb-12 h-6 w-28 font-sans text-yellow-1 border-b-2 border-transparent hover:border-yellow-1 md:text-lg'>View All</button></div>
      </div>

      {/* Celeb Container */}
      <div className='grid grid-cols-1 md:grid-cols-1 gap-6 lg:grid-cols-2'>
        {/* Single Celeb Container*/}       
          {people.map((data, index) => {
            return(
              <div className='flex col-span-1 w-full' key={index}>
                {/* Picture */}
                <div className='w-[300px] h-[180px] md:h-[230px]'>
                  <img className='h-full cursor-pointer w-full object-cover object-center' src={imgPref + data.profile_path} alt='backgroundPoster' />
                </div>
                {/* Info */}
                <div className=' ml-6 overflow-hidden w-full'>
                  <h1 className='text-yellow-1 font-bold text-lg font-sans md:text-2xl'>{data.name}</h1>
                  <h3 className='font-sans mb-4 text-white md:text-md'>{data.known_for_department}</h3>
                  <div>
                    <p className='text-neutral-300 font-medium'>Works:</p>
                    {data.known_for.map((data) => {
                      return(
                        <ul className='list-disc text-neutral-400 pl-4'>
                          <li>{data.title}</li>
                        </ul>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}

      </div>
    </section>
  )
}

export default Section4