import React from 'react'
import ButtonData from './ButtonData'
import { useState, useEffect} from 'react'
import "./styling/Category.scss"
import './styling/Modal.scss'

function Category() {

  // !  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
    }
  };

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);
  const [myId, setMyId] = useState(28)

  useEffect(() => {
    fetchData(myId)
  }, [page])

  // ! For default data
  const fetchData = async (id) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=truee&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results)

      // setMovies((prevstate) => [...prevstate, ...data.results]);
      setMovies(data.results)
    })
    .catch((error) => {
      console.log(error)
    })
  }


    // ! For Next Page data
    const fetchNextData = async (pageNum, id) => {
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=truee&include_video=false&language=en-US&page=${pageNum}&sort_by=popularity.desc&with_genres=${id}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
  
        // setMovies(prev => prev.concat(data.results))
        // setMovies((prevstate) => [...prevstate, ...data.results]);
        setMovies(data.results)

        // setMovies(data.results)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  

  const loadMore = (callback) => {
    setPage((prevstate) => prevstate + 1);

    callback(page, myId)
  };




  // ! Toggling Modal states
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }



  //! Changing Category Title
  const [current, setCurrent] = useState('ACTION')

  const changeCategoryTitle = (title, id, callback) => {
    
    setCurrent(title)
    setMyId(id)
    

    callback(id)
    
  }

  console.log(myId)


  let imgPref = "https://image.tmdb.org/t/p/original/"


  // ! Populating Loading Animation
  let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const [arr, setArr] = useState([])

  useEffect(() => {
    setArr(myArr)
  }, [setArr])


    // ! Displaying Modal
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

    // ! Lock scroll when modal is active
    if(modal){
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    } 



  return (
    <section id='section' className='bg-black pb-28 pt-28'>

      {/* Category Buttons */}
      <div id='buttonWrapper' className="bg-black mb-10 mt-6 grid grid-cols-9 gap-y-3 px-3     lg:w-full lg:flex lg:overflow-hidden">
        {ButtonData.map((button) => {
          return(
            <button id='button' className='bg-black relative text-white lg:h-[20rem] h-[10rem] lg:flex-[1] lg:flex [writing-mode:vertical-lr] active:text-white flex justify-center items-center font-sans font-medium uppercase text-sm' key={button.id} 
            onClick={() => changeCategoryTitle(button.name, button.id, fetchData)}
            // onClick={() => fetchData(page, button.id)}
            >
              <div id='textWrapper' className='absolute z-10 h-full w-full flex justify-start pt-6 items-center rotate-180'><p className='font-bold lg:font-sans lg:text-3xl lg:font-bold '>{button.name}</p></div>
              <img id='image' className='h-full absolute cursor-pointer w-[100%] object-cover object-center ' src={require('' + button.img)} alt='backgroundPoster' />
            </button>
          )
        })}
      </div>


      <div className='relative'>
        {/* Category Title */}
        <div className='px-6 md:px-16 lg:px-28 py-9 md:py-14 lg:py-14'>
          <h1 className='font-sans text-3xl lg:text-3xl font-bold text-yellow-2 uppercase'>{current}</h1>
        </div>
        {/* Moive List */}
        <div className='grid grid-cols-2 gap-x-2 gap-y-11 md:grid-cols-3 lg:grid-cols-6 px-6 md:px-16 lg:gap-x-5 lg:px-28 relative z-10'>
          {/* Single Movie */}
          {movies.map((moviesData) => {
            return(
            <div key={moviesData.id} onClick={() => displayModaL(moviesData.id, moviesData.original_title, moviesData.backdrop_path, moviesData.overview, moviesData.vote_average, moviesData.release_date, toggleModal)} className=' h-[19rem] w-[100%] md:h-[20rem] flex-col justify-between lg:h-[20rem]'>
              <div className='w-full h-[90%] bg-black'>
                <img className='h-full cursor-pointer w-full object-cover object-center duration-[0.2s] hover:opacity-[.7]' src={imgPref + moviesData.poster_path} alt='backgroundPoster' />
              </div>
              <div className='h-[10%] mt-2 flex items-center text-neutral-400 font-sans '><p className='md:text-lg text-md lg:text-[1rem] text-ellipsis whitespace-pre-wrap overflow-hidden line-clamp-1'>{moviesData.original_title}</p></div>
            </div>
            )
          })}   
        </div>

      
        {/* Movies Selection pop-up modal */}
        {modal && 
          <section  className="flex bg-transparentNeutral-2 justify-center items-center fixed z-[50] top-0 right-0 bottom-0 left-0 w-screen h-screen">
            <div className='w-full h-full flex items-center justify-center overflow-hidden absolute' onClick={toggleModal}></div>
            <div className="bg-black w-[90%] h-[70%] lg:w-[70%] relative overflow-hidden">
              <button className="absolute z-50 bg-yellow-1 text-black text-2xl rounded-full w-32 h-32 right-[-50px] top-[-50px] font-bold pr-7 pt-7    hover:bg-white transition duration-200 ease-in-out" onClick={toggleModal}>x</button>
              <div className="absolute bg-transparentNeutral-3 z-40 text-white top-0 left-0 right-0 bottom-0 flex items-center px-6 md:px-16 lg:px-28">
                <div>
                <h1 className='text-white font-bold font-sans text-4xl m-0 md:text-6xl'>{mountModal.modalName}</h1>
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


        {/* More page Button */}
        <div className='flex items-center w-full justify-center mt-24 gap-8 px-6 md:px-16 lg:px-28'>
          {/* <button onClick={() => prevPage(fetchPrevMovies)} className='transition ease-in-out h-16 w-[50%] font-sans rounded text-black font-bold border border-yellow-1 bg-yellow-1 hover:bg-white hover:border-white text-xl px-5 md:text-2xl lg:text-2xl'> Previous Page </button> */}
          <button className='transition ease-in-out h-16 w-[50%] font-sans rounded text-black font-bold border border-yellow-1 bg-yellow-1 hover:bg-white hover:border-white text-xl px-5 md:text-2xl lg:text-2xl' onClick={() =>  loadMore(fetchNextData)} disabled={page > 20 ? true: false}> Next Page </button>
        </div> 
      </div>
    </section>
  )
}

export default Category