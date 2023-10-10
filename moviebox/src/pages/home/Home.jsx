import React from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'

function Home() {
  return (
    <section className='bg-midnight'>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      
    </section>
  )
}

export default Home