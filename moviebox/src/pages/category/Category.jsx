import React from 'react'
import bgPoster from "../../../src/bg.jpg"
import ButtonData from './ButtonData'
import { useState, useEffect, useRef} from 'react'

function Category() {

  // const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
    }
  };

  const [movies, setMovies] = useState([])


  const fetcMovies = (id) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`, options)
    .then((res) => res.json())
    .then((data) => {
      let newData = data.results
      console.log(newData)
      setMovies(newData)
    })
  }


  // useEffect(() => {
  //   fetcMovies()
  // })

  let imgPref = "https://image.tmdb.org/t/p/original/"

  return (
    <section className='bg-black pb-28 pt-28'>

      {/* Category Buttons */}
      <div className="bg-neutral-800 mb-10 mt-6 grid grid-cols-9 gap-y-3       lg:flex lg:justify-stretch">
        {ButtonData.map((button) => {
          return(
            <button className='bg-neutral-700 text-white lg:h-[20rem] h-[10rem] lg:flex-1 lg:flex [writing-mode:vertical-lr] rotate-180 hover:bg-yellow-2 hover:text-black transition duration-200 ease-in-out active:text-white flex hover:auto-cols-fr justify-center items-center py-2 font-sans font-medium uppercase text-sm' key={button.id} ref={button} onClick={() => fetcMovies(button.id)}>{button.name}</button>
          )
        })}
      </div>

      


      {/* Moive List */}
      <div className='grid grid-cols-3 gap-x-2 gap-y-11 md:grid-cols-3 lg:grid-cols-6 px-6 lg:gap-x-5 lg:px-28'>
        
        {/* Single Movie */}
        {movies.map((moviesData) => {
          return(
          <div key={moviesData.id} className=' h-[10rem] w-[100%] md:h-[20rem] flex-col justify-between lg:h-[20rem]'>
            <div className='w-full h-[90%] bg-black'>
              <img className='h-full cursor-pointer w-full object-cover object-center duration-[0.2s] hover:opacity-[.7]' src={imgPref + moviesData.poster_path} alt='backgroundPoster' />
            </div>
            <div className='h-[10%] mt-2 flex items-center text-neutral-400 font-sans '><p className='md:text-lg text-md lg:text-[1rem] text-ellipsis whitespace-pre-wrap overflow-hidden line-clamp-1'>{moviesData.original_title}</p></div>
          </div>
          )
        })}

        <div className='bg-neutral-700 flex items-center  h-[10rem] w-[100%] md:h-[20rem] justify-center lg:h-[20rem]'>
          <p className='text-white'>More</p>
        </div>    
      </div>
    </section>
  )
}

export default Category