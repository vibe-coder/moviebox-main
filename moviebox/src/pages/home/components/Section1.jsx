import React from 'react'
import bgPoster from "../../../bg.jpg"
import { useEffect, useState, useCallback} from 'react';


const Section1 = () => {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
    }
  };  

  // Placeholder demo
  let demo = {
    adult:false,
    backdrop_path: "/gN79aDbZdaSJkFS1iVA17HplF2X.jpg",
    genre_ids: (3) [27, 9648, 53],
    id: 968051,
    original_language: "en",
    original_title: "The Nun II",
    overview: "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
    popularity: 1577.995,
    poster_path: "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
    release_date:"2023-09-06",
    title: "The Nun II",
    video: false,
    vote_average: 6.963,
    vote_count: 125
  }

  const [movieData, setMovieData] = useState(demo)

  // Fetching Data and looping through them
  function fetchData(){
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      
      let movieArr = data.results
      let count = 0
    
      function displayArr(arr){

          let arrayData = arr[count]   

          if(count === arr.length){
            return count
          } else{
            console.log(arrayData)
            count += 1
            console.log(count)
            return setMovieData(arrayData)
          }
      }
    
    
      setInterval(() =>{
        displayArr(movieArr)
      }, 5000)
     })
    .catch((error) => {console.log(error)})
  }
  useEffect(()=>{
    // fetchData()
  }, [setMovieData])


  let imgPref = "https://image.tmdb.org/t/p/w500/"

  return (
    <section className='h-screen bg-purple flex items-center relative'>      
      <img src = {imgPref + movieData.backdrop_path} alt='background' className='absolute w-screen h-full object-cover object-center'/>

      {/* Information Wrapper */}
      <div className='flex h-full w-full items-center px-6 z-[1] bg-gradient-to-t from-black to-transparent md:px-16'>
        <div className='mt-[300px] md:w-[80%] lg:w-[40%]'>
          {/* Title */}
          <h1 className='text-white font-bold font-sans text-4xl m-0 md:text-7xl'>{movieData.original_title}</h1>
          {/* Description */}
          <p className='font-sans text-sm m-0 text-neutral-400 md:text-xl'>Action, Adventure, Comedy | {movieData.release_date} (USA)</p>
          {/* Overview */}
          <p className='text-white text-sm font-sans mt-5 font-hairline md:text-lg'>{movieData.overview}</p>
          {/* Rating */}
          <div className='my-6 text-white'>
            <div className='border-2 border-yellow-1 w-12 rounded flex justify-center items-center md:h-9 md:w-14'>4.0</div>
          </div>
          {/* Button Wrapper */}
          <div className='flex gap-4 flex-wrap'>
            <button className='h-8 w-28 rounded text-black font-medium border border-yellow-1 bg-yellow-1 hover:bg-yellow-2 hover:border-yellow-2 md:h-11 md:w-32'>Watch Trailer</button>
            <button className='h-8 w-28 rounded text-white border-2 border-white bg-transparent hover:border-yellow-1 md:h-11 md:w-32'>View Info</button>
            <button className='h-8 rounded text-white bg-transparent hover:text-yellow-1 md:h-11'>+ Favorites</button>
            {/* <button className='h-8 rounded text-white bg-transparent hover:text-yellow-1'><i className="las la-ellipsis-v"></i></button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1