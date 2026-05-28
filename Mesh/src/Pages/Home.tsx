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
      <div className='flex text-white   w-full gap-3'>
      <div className='flex-1 max-w-xl items-center text-center mt-30  px-4 mx-4'>

        <h1 className='text-5xl font-bold max-w-300'>
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <p className='text-4xl mt-4 text-gray-300 font-stretch-105%'>
          I'm Meshack <strong className='text-amber-200'>Marteu</strong>
        </p>

        <div className='pt-4 text-lg'>
          <Type />
        </div >

      </div>

      <div className='flex-1 max-w-md items-center text-center mt-20 px-4 mx-4'>
        <img src={code} alt="code" className='w-full h-auto object-contain rounded-2xl translate-y-1 hover:translate-y-0 duration-1000' />
      </div>
      
      
      </div>
      
      <div className='flex text-white   w-full gap-3'>
        <Home2 />
      </div>
      
<About/>
<Education />
<Contact />

    </section >
    



  )
}
