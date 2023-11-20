import React from 'react'
import ButtonData from './ButtonData'
import { useState, useEffect} from 'react'
import "./styling/Category.scss"

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
  const [page, setPage] = useState(1)


  let number = 1
  let condition = true

  let newNumber

  function nextPage(){
    if(condition){
      number++
      console.log(number)
      
      newNumber = number
      console.log(newNumber)
      return newNumber
    }
  }

  const fetchMovies = (id) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=truee&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let newData = data.results
      // console.log(newData)
      setMovies(newData)
    })
  }


  useEffect(() => {
    fetchMovies()
  }, [setMovies])

  let imgPref = "https://image.tmdb.org/t/p/original/"
  let categoryimg = "../../images"


  let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const [arr, setArr] = useState([])

  useEffect(() => {
    setArr(myArr)
  }, [setArr])


  return (
    <section id='section' className='bg-black pb-28 pt-28'>

      {/* Category Buttons */}
      <div id='buttonWrapper' className="bg-black mb-10 mt-6 grid grid-cols-9 gap-y-3 px-3     lg:w-full lg:flex lg:overflow-hidden">
        {ButtonData.map((button) => {
          return(
            <button id='button' className='bg-black relative text-white lg:h-[20rem] h-[10rem] lg:flex-[1] lg:flex [writing-mode:vertical-lr] active:text-white flex justify-center items-center font-sans font-medium uppercase text-sm' key={button.id} 
            // onClick={() => fetchMovies(button.id)}
            >
              <div id='textWrapper' className='absolute z-10 h-full w-full flex justify-start pt-6 items-center rotate-180'><p className='font-bold lg:font-sans lg:text-3xl lg:font-bold '>{button.name}</p></div>
              <img id='image' className='h-full absolute cursor-pointer w-[100%] object-cover object-center ' src={require('' + button.img)} alt='backgroundPoster' />
            </button>
          )
        })}
      </div>


      <div>
        {/* Moive List */}
        <div className='grid grid-cols-3 gap-x-2 gap-y-11 md:grid-cols-3 lg:grid-cols-6 px-6 lg:gap-x-5 lg:px-28 absolute z-20'>
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
        </div>




        {/* Loading animation */}
        <div className='top-0 w-full grid grid-cols-2 gap-x-4 gap-y-11 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-5 px-6 lg:px-28'>
        {arr.map((arr) => {
          return (
            <div key={arr} className=' h-[19rem] w-[100%] md:h-[20rem] flex-col justify-between  lg:h-[20rem]'>
              <div className='h-[90%] w-full bg-neutral-800 flex justify-center items-center'>
                <div role="status" className="space-y-8 w-full h-full animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                  <div className="flex h-full w-full items-center justify-center bg-neutral-500 dark:bg-gray-800">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        </div> 

          {/* More page Button */}
          <div className='flex items-center w-full justify-center mt-24'>
          <button onClick={() => nextPage()} className='transition ease-in-out h-20 w-[50%] font-sans rounded text-2xl text-black font-bold border border-yellow-1 bg-yellow-1 hover:bg-white hover:border-white'> More </button>
          </div> 
      </div>
    </section>
  )
}

export default Category