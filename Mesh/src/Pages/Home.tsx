import React from 'react'
import Type from "./Type"
import code from "../assets/images/code.jpg"
import Home2 from './Home2'
import About from './About'
import Contact from './Contacts'
import Education from './Education'



export default function Home() {
  return (
    <section >
<div className='flex flex-col md:flex-row text-white w-full gap-6 md:gap-3 px-4'>

  <div className='flex-1 max-w-xl w-full items-center text-center mt-12 md:mt-30 px-2 md:px-4 mx-auto'>

    <h1 className='text-4xl sm:text-5xl font-bold'>
      Hi There!{" "}
      <span className="wave" role="img" aria-labelledby="wave">
        👋🏻
      </span>
    </h1>

    <p className='text-2xl sm:text-4xl mt-4 text-gray-300 font-stretch-105%'>
      I'm Meshack <strong className='text-amber-200'>Marteu</strong>
    </p>

    <div className='pt-4 text-base sm:text-lg'>
      <Type />
    </div>

  </div>

  <div className='flex-1 max-w-md w-full items-center text-center mt-6 md:mt-20 px-2 md:px-4 mx-auto'>
    <img
      src={code}
      alt="code"
      className='w-full h-auto object-contain rounded-2xl translate-y-1 hover:translate-y-0 duration-1000'
    />
  </div>

</div>
      
      <div className='flex flex-col text-white w-full gap-3'>
        <Home2 />
      </div>
      
<About/>
<Education />
<Contact />

    </section >
    



  )
}
