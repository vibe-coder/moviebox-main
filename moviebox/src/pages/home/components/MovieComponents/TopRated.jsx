import React from 'react'
import { useState, useEffect } from 'react'

function TopRated() {

  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
    }
  };

  const [movies, setMovies] = useState([])

  function fetchMovies(){
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      let newPopular = data.results
      setMovies(newPopular)
     })
    .catch((error) => {console.log(error)})
  }

  // Calling fetchData
  useEffect(()=>{
    fetchMovies()
  }, [setMovies])

  let imgPref = "https://image.tmdb.org/t/p/original/"

  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-11 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-5'>
      {/* Single movie card */}
      {movies.map((data) => {
        return(
          <div className=' h-[15rem] w-[100%] flex-col justify-between lg:h-[20rem]' key={data.id}>
            <div className='w-full h-[90%] bg-black'>
              <img className='h-full cursor-pointer w-full object-cover object-center duration-[0.2s] hover:opacity-[.7]' src={imgPref + data.poster_path} alt='backgroundPoster' />
            </div>
            <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans '><p className='md:text-lg text-md lg:text-[1rem] text-ellipsis whitespace-pre-wrap overflow-hidden line-clamp-1'>{data.original_title}</p></div>
          </div>
        )
      })}
    </div>
  )
}

export default TopRated