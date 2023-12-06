import React from 'react'
import { Link } from 'react-router-dom'
import { useState} from 'react'
import "./styles/Modal.scss"

function Nav() {

  // !Getting UserInput
  const [input, setInput] = useState("")
  const [movieData, setMovieData] = useState([])
  const [focus, setFocus] = useState(false)
  const [modal, setModal] = useState(false)

  // ! Toggling Modal states
  const toggleModal = () => {
    setModal(!modal)
  }

  function displayInput(callback){
    let userInput = document.getElementById("searchInput").value
    setInput(userInput)

    fetchSearchData(input)
  }

  function fetchSearchData(param){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${param}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(data => {
        let newData = data.results
        setMovieData(newData)
      })
      .catch(err => console.error(err));
  }


  let imgPref = "https://image.tmdb.org/t/p/original/"

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
    <section id="section"  className='fixed bg-blurTransparent backdrop-blur-2xl border-b-[1px] border-b-borderGrey z-[40] right-0 left-0 h-28 flex justify-center items-center'>
      <div className='w-full h-[50%]'>
        {/*  */}
        <nav id='navs' className="w-full flex gap-4 justify-between items-center px-6 md:gap-8 md:px-16 lg:px-28 relative z-[15]">
          <Link className='' to="/">
            <h1 className='text-white text-xl font-bold m-0 flex-1 font-sans focus:outline-none focus-visible:ring md:text-4xl'>
              MOVIE<span className='font-hairline text-yellow-1'>BOX</span>
            </h1>
          </Link>
          <label className="relative block w-full md:w-50 lg:w-[500px]">
            {/* <span class="sr-only">Search</span> */}
            <input onClick={() => setFocus(!focus)} onChange={displayInput} id='searchInput'  className="placeholder:italic h-10 placeholder:text-slate-400 block text-white w-full bg-transparentWhite border-slate-300 py-2 pl-4 pr-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm focus:bg-transparentWhite hover:bg-transparentWhite" placeholder="Search for anything..." type="text" name="search"/>
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <i className="las la-search 64px text-white scale-x-[-1]"></i>
            </span>
          </label>
          <Link to="/category">
            <button className='transition ease-in-out h-10 w-20 rounded text-black font-bold border border-yellow-1 bg-yellow-1 hover:bg-white hover:border-white md:w-32'>
              Category
            </button>
          </Link>
        </nav>


        {/* Serch Results */}
        {focus && 
          <div className='text-white fixed w-screen h-screen top-0 px-6 pt-28 md:pt-40 md:px-16 lg:pt-40 lg:px-28 bg-neutral-800 '>
            <div className='overflow-scroll no-scrollbar h-[100%] pb-10'>
              <div >
                <h1 className='font-bold font-sans text-neutral-300 text-2xl md:text-4xl lg:text-4xl'>Search Results</h1>
                {/* All Movie Wrapper */}
                <div className='text-white mt-2 grid grid-cols-2 gap-x-4 gap-y-11 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-5'>
                  {
                    movieData.map((data) => {
                      return(
                        <div className=' h-[19rem] w-[100%] md:h-[20rem] flex-col justify-between lg:h-[20rem] relative z-10 hover:cursor-pointer' onClick={() => displayModaL(data.id, data.original_title, data.backdrop_path, data.overview, data.vote_average, data.release_date, toggleModal)}>
                          <div className='w-full h-[90%] bg-black'>
                            <img className='h-full cursor-pointer w-full object-cover object-center duration-[0.2s] hover:opacity-[.7]' src={imgPref + data.poster_path} alt='backgroundPoster' />
                          </div>
                          <div className='h-[10%] mt-2 flex items-center text-neutral-300 font-sans'><p className='md:text-lg text-md lg:text-[1rem] text-ellipsis whitespace-pre-wrap overflow-hidden line-clamp-1'>{data.original_title}</p></div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        }

        {/* Movies Selection pop-up modal */}
        {modal && 
          <section  className="flex bg-transparentNeutral-2 justify-center items-center fixed z-[100] top-0 right-0 bottom-0 left-0 h-screen">
            <div className='w-full h-full flex items-center justify-center overflow-hidden absolute' onClick={toggleModal}></div>s
            <div className="bg-black w-[90%] h-[70%] lg:w-[70%] relative overflow-hidden">
              <button className="absolute z-50 bg-yellow-1 text-black text-2xl rounded-full w-32 h-32 right-[-50px] top-[-50px] font-bold pr-7 pt-7    hover:bg-white transition duration-200 ease-in-out" onClick={toggleModal}>x</button>
              <div className="absolute bg-transparetNeutral z-40 text-white top-0 left-0 right-0 bottom-0 flex items-center px-6 md:px-16 lg:px-28">
                <div>
                <h1 className='text-white font-bold font-sans text-4xl m-0 md:text-7xl'>{mountModal.modalName}</h1>
                <p className='text-white text-md font-sans mt-2 mb-5 font-hairline md:text-lg'>{mountModal.modalOverview}</p>
                <p className='text-white text-sm font-sans mt-2 font-bold md:text-lg '>Rating: <span className="font-sans font-normal">{mountModal.modalVote} / 10</span></p>
                <p className='text-white text-sm font-sans mt-2 font-bold md:text-lg '>Release Date: <span className="font-sans font-normal">{mountModal.modalDate}</span></p>
                {/* <div>Production</div> */}
                </div>
              </div>
              <img src={imgPref + mountModal.moadlBgPoster} alt="background poster" className="h-full w-full object-cover object-center" />
            </div>
          </section>
        }

      </div>
    </section>
  )
}

export default Nav