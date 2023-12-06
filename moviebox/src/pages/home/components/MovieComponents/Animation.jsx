import React from 'react'
import { useState, useEffect } from 'react'
import "./styles/Modal.scss"

function Animation() {

  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28%2C12%2C16%2C878'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
    }
  };

  const [movies, setMovies] = useState([])
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

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

  let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const [arr, setArr] = useState([])

  useEffect(() => {
    setArr(myArr)
  }, [setArr])


  // Displaying Modal
  const [mountModal, setMountModal] = useState([])
  const displayModaL = (id, name, bgPoster, overview, vote, date, callback) =>{
      let modalData = {
        modalId: id,
        modalName: name,
        moadlBgPoster: bgPoster,
        modalOverview: overview,
        modalVote: vote,
        modalDate: date,
      }
  
      setMountModal(modalData)
      callback()
  }

  if(modal){
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  } 



  return (
    <div className='relative'>
      {/* Single movie card */}
      <div className='grid grid-cols-2 gap-x-4 gap-y-11 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-5 absolute'>
        {movies.map((data) => {
        return(
          <div className=' h-[19rem] w-[100%] md:h-[20rem] flex-col justify-between lg:h-[20rem] relative z-20' key={data.id} onClick={() => displayModaL(data.id, data.original_title, data.backdrop_path, data.overview, data.vote_average, data.release_date, toggleModal)}>
            <div className='w-full h-[90%] bg-black'>
              <img className='h-full cursor-pointer w-full object-cover object-center duration-[0.2s] hover:opacity-[.7]' src={imgPref + data.poster_path} alt='backgroundPoster' />
            </div>
            <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans '><p className='md:text-lg text-md lg:text-[1rem] text-ellipsis whitespace-pre-wrap overflow-hidden line-clamp-1'>{data.original_title}</p></div>
          </div>
        )
        })}
      </div>


      {/* Movies Selection pop-up modal */}
      {modal && 
        <section  className="flex bg-transparentNeutral-2 justify-center items-center fixed z-[50] top-0 right-0 bottom-0 left-0">
          <div className='w-full h-full flex items-center justify-center overflow-hidden absolute' onClick={toggleModal}></div>
            <div className="bg-black w-[90%] h-[70%] lg:w-[70%] relative overflow-hidden">
              <button className="absolute z-50 bg-yellow-1 text-black text-2xl rounded-full w-32 h-32 right-[-50px] top-[-50px] font-bold pr-7 pt-7    hover:bg-white transition duration-200 ease-in-out" onClick={toggleModal}>x</button>
              <div className="absolute bg-transparetNeutral z-40 text-white top-0 left-0 right-0 bottom-0 flex items-center px-6 md:px-16 lg:px-28">
              <div>
                <h1 className='text-white font-bold font-sans text-4xl m-0 md:text-7xl'>{mountModal.modalName}</h1>
                <p className='text-white text-md font-sans mt-2 mb-5 font-hairline md:text-lg '>{mountModal.modalOverview}</p>
                <p className='text-white text-sm font-sans mt-2 font-bold md:text-lg '>Rating: <span className="font-sans font-normal">{mountModal.modalVote} / 10</span></p>
                <p className='text-white text-sm font-sans mt-2 font-bold md:text-lg '>Release Date: <span className="font-sans font-normal">{mountModal.modalDate}</span></p>
                {/* <div>Production</div> */}
              </div>
              </div>
              <img src={imgPref + mountModal.moadlBgPoster} alt="background poster" className="h-full w-full object-cover object-center" />
            </div>
        </section>
      }

      {/* Loading Animation */}
      <div className='relative top-0 w-full grid grid-cols-2 gap-x-4 gap-y-11 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-5'>
        {arr.map((arr) => {
          return (
            <div className=' h-[19rem] w-[100%] md:h-[20rem] flex-col justify-between  lg:h-[20rem]'>
              <div className='h-[90%] w-full bg-neutral-800 flex justify-center items-center'>
                <div role="status" className="space-y-8 w-full h-full animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                  <div className="flex h-full w-full items-center justify-center bg-neutral-500 dark:bg-gray-800">
                    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>   
    </div>
  )
}

export default Animation