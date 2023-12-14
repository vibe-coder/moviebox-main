import React from 'react'
import { useEffect, useState} from 'react';
// import DynamicPage from '../../../components/DynamicPage';
// import star from "../star-02.png"

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
  // let demo = {
  //   adult:false,
  //   backdrop_path: "/gN79aDbZdaSJkFS1iVA17HplF2X.jpg",
  //   genre_ids: (3) [27, 9648, 53],
  //   id: 968051,
  //   original_language: "en",
  //   original_title: "The Nun II",
  //   overview: "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
  //   popularity: 1577.995,
  //   poster_path: "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
  //   release_date:"2023-09-06",
  //   title: "The Nun II",
  //   video: false,
  //   vote_average: 6.963,
  //   vote_count: 125
  // }

  const [movieData, setMovieData] = useState([])
  const [index, setIndex] = React.useState(0);
  const delay = 6500;

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
  },
  // [setMovieData]
  )

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
  }, 
  [index]
  );


  const alertUser = () => {
    alert("This is a demo button")
  }



  let imgPref = "https://image.tmdb.org/t/p/original/"

  return (
    <section className='slideshow relative h-screen overflow-hidden bg-black' > 
      <div className="slideshowSlider z-10 relative w-full h-full whitespace-nowrap overflow-hidden no-scrollbar" >
        {movieData.map((data) => {
          return(
            <div key={data.id} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} className='relative w-full h-screen inline-block transition ease-in-out duration-[2000ms]'>
              <div key={index}>
                <img src = {imgPref + data.backdrop_path} alt='background' className='absolute w-screen h-screen object-cover object-center'/>

                {/* Information Wrapper */}
                <div className='flex absolute h-screen w-full items-center px-6 z-[2] md:px-16 lg:px-28 whitespace-normal bg-gradient-to-t from-black to-transparent'>
                  <div className='md:w-[80%] lg:w-[600PX]'>
                    {/* Title */}
                    <h1 className='text-white font-bold font-sans text-4xl m-0 md:text-7xl text-ellipsis whitespace-pre-wrap overflow-hidden line-clamp-2'>{data.original_title}</h1>
                    {/* Description */}
                    <p className='font-sans text-sm m-0 text-yellow-1 md:text-xl'>{data.release_date}</p>
                    {/* Overview */}
                    <p className='text-white text-sm font-sans mt-5 font-hairline md:text-lg '>{data.overview}</p>
                    {/* Rating */}
                    <div className='my-6 text-white flex gap-4 items-center'>
                      <div className='border-2 border-yellow-1 w-12 rounded flex justify-center items-center md:h-9 md:w-14'>{Math.round(data.vote_average * 10) / 10}</div>
                      {/* <img src={star} alt="star" className='h-5 w-5' /> */}
                    </div>
                    {/* Button Wrapper */}
                    <div className='flex gap-4 flex-wrap items-center'>
                      <button onClick={alertUser} className='transition ease-in-out h-8 w-28 rounded text-black font-medium border border-yellow-1 hover:-translate-y-1 bg-yellow-1 hover:bg-white hover:border-white duration-200 md:h-11 md:w-32'>Watch Trailer</button>
                      <button onClick={alertUser} className='transition ease-in-out h-8 w-28 rounded text-white border-2 border-white bg-transparent hover:border-yellow-1 hover:text-yellow-1 hover:-translate-y-1 duration-200 md:h-11 md:w-32'>View Info</button>
                      <button onClick={alertUser} className='transition ease-in-out h-8 rounded text-white bg-transparent hover:text-yellow-1 hover:-translate-y-1 duration-200 md:h-11'>+ Favorites</button>
                      <button onClick={alertUser} className='h-8 rounded text-white bg-transparent hover:text-yellow-1'><i className="las la-ellipsis-v"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div> 

      {/* Loader */}
      <div className='bg-neutral-black absolute z-[1] top-0 left-0 right-0 bottom-0'>
        {/* Spinner */}
        <div role="status" className='h-screen w-screen flex justify-center items-center'>
          <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-1" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </section>
  )
}

export default Section1