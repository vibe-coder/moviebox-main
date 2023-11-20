import React from "react";
import bgPoster from "../images/fantasy.jpg"




const DynamicPage = (props) => {
  return(
    <section className="flex bg-transparentNeutral-2 justify-center items-center fixed z-20 top-0 right-0 bottom-0 left-0">
      <div className="bg-black w-[90%] h-[70%] lg:w-[70%] relative overflow-hidden">
        <button className="absolute z-50 bg-yellow-1 text-black text-2xl rounded-full w-32 h-32 right-[-50px] top-[-50px] font-bold pr-7 pt-7    hover:bg-white transition duration-200 ease-in-out">x</button>
        <div className="absolute bg-transparetNeutral z-40 text-white top-0 left-0 right-0 bottom-0 flex items-center px-6 md:px-16 lg:px-28">
          <div>
            <h1 className='text-white font-bold font-sans text-4xl m-0 md:text-7xl'>Barbie</h1>
            <p className='text-white text-md font-sans mt-2 mb-5 font-hairline md:text-lg '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum vel, magnam officiis in, illo dolorem cupiditate, porro maxime quisquam distinctio voluptas. Nesciunt ipsa animi eos. Velit error non saepe corrupti.</p>
            <p className='text-white text-sm font-sans mt-2 font-bold md:text-lg '>Rating:</p>
            <p className='text-white text-sm font-sans mt-2 font-bold md:text-lg '>Revenue:</p>
            <p className='text-white text-sm font-sans mt-2 md:text-lg font-bold'>Tagline:</p>
          </div>
        </div>
        <img src={bgPoster} alt="background poster" className="h-full w-full object-cover object-center" />
      </div>
    </section>
  )
}

export default DynamicPage;