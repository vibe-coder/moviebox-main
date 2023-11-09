import React from 'react'
import bgPoster from "../../../bg.jpg"
import { useEffect, useState} from 'react';


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

  const [movieData, setMovieData] = useState([])
  const [index, setIndex] = React.useState(0);
  const delay = 2500;

  // Fetching Data and looping through them
  function fetchData(){
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      
      let movieArr = data.results.slice(0, -10)    
      setMovieData(movieArr)
     })
    .catch((error) => {console.log(error)})
  }

  // Calling fetchData
  useEffect(()=>{
    fetchData()
  }, [setMovieData])

  // Slide show effect
  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === movieData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);



  let imgPref = "https://image.tmdb.org/t/p/original/"

  return (
    <section className='slideshow h-scree overflow-hidden bg-black' > 
      <div className={`slideshowSlider relative w-full h-full whitespace-nowrap overflow-scroll no-scrollbar`} >
        {movieData.map((data) => {
          return(
            <div style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} className='relative w-full h-screen inline-block transition ease-in-out duration-[1000ms]'>
              <div key={index}>
                <img src = {imgPref + data.backdrop_path} alt='background' className='absolute w-screen h-screen object-cover object-center'/>

                {/* Information Wrapper */}
                <div className='flex absolute h-screen w-full items-center px-6 z-[2] md:px-16 lg:px-28 whitespace-normal bg-gradient-to-t from-black to-transparent'>
              <div className='md:w-[80%] lg:w-[600PX]'>
                {/* Title */}
                <h1 className='text-white font-bold font-sans text-4xl m-0 md:text-7xl'>{data.original_title}</h1>
                {/* Description */}
                <p className='font-sans text-sm m-0 text-neutral-400 md:text-xl'>{data.genre_ids} | {data.release_date}</p>
                {/* Overview */}
                <p className='text-white text-sm font-sans mt-5 font-hairline md:text-lg '>{data.overview}</p>
                {/* Rating */}
                <div className='my-6 text-white'>
                  <div className='border-2 border-yellow-1 w-12 rounded flex justify-center items-center md:h-9 md:w-14'>4.0</div>
                </div>
                {/* Button Wrapper */}
                <div className='flex gap-4 flex-wrap'>
                  <button className='transition ease-in-out h-8 w-28 rounded text-black font-medium border border-yellow-1 hover:-translate-y-1 bg-yellow-1 hover:bg-white hover:border-white duration-200 md:h-11 md:w-32'>Watch Trailer</button>
                  <button className='transition ease-in-out h-8 w-28 rounded text-white border-2 border-white bg-transparent hover:border-yellow-1 hover:text-yellow-1 hover:-translate-y-1 duration-200 md:h-11 md:w-32'>View Info</button>
                  <button className='transition ease-in-out h-8 rounded text-white bg-transparent hover:text-yellow-1 hover:-translate-y-1 duration-200 md:h-11'>+ Favorites</button>
                  {/* <button className='h-8 rounded text-white bg-transparent hover:text-yellow-1'><i className="las la-ellipsis-v"></i></button> */}
                </div>
              </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>   
    </section>
  )
}

export default Section1