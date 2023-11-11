import React from 'react'
import MovieTabs from './MovieTabs';

function Section2() {
  return (
    <section className='p-6 md:p-16 lg:px-28 lg:mt-40 lg:py-0 b'>
      {/* ----------------------- Category Button Selection ------------------- */}
      <MovieTabs/>
    </section>
  )
}

export default Section2;