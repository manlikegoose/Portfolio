import React from 'react'
import work from '../assets/images/work.jpg'
import About2 from './About2'
import AboutTools from './AboutTools'

export default function About() {
  return (
    <section className='w-full h-auto'>
      <div className='w-full h-auto flex  gap-4 py-10 mt-5 justify-center items-center flex-col md:flex-row'>
        <div className=' p-4 justify-center items-center max-w-3xl  gap-4 text-white text-xl gap relative left-translate-x-1/2'>
          <h1 className='text-3xl bold text-emerald-400 underline italic m-3 text-center'>Do you know me?</h1>
          <p className='text-justify'>
            Hi I'm Meshack Marteu from Nakuru,Kenya,with a strong intrest with <strong>web development</strong> and <b>software development</b>.
            <br />
            <br />
            I am currently a student at <b>Machakos University</b> pursuing a degree in Computer Science, where I am honing my skills and knowledge in the field of technology. I am passionate about creating innovative solutions and contributing to the ever-evolving world of software development.
            <br />
            <br />
            Apart from coding ,i enjoy activities such as:
            <ul className='list-disc list-inside p-4'>
              <li>Playing video games</li>
              <li>Listening to music especially Kenyan music</li>
              <li>Baking</li>
            </ul>
          </p>
        </div>
        <div className='w-full h-auto flex justify-center items-center '>
          <img src={work} alt="Work" className='w-sm h-auto object-cover rounded-full hover:translate-y-1 duration-1000  ' />
        </div>

      </div>
      <div className=' justify-center items-center'>
        <h1 className='text-3xl bold text-emerald-400 underline italic m-3 text-center'>
          my profecianal skillset include:
        </h1>
        <About2 />
        
      </div>
      <div className=' justify-center items-center'>
        <h1 className='text-3xl bold text-emerald-400 underline italic m-3 text-center'>
          my tools of choice include:
        </h1>
        <AboutTools />
        </div>
    </section>
  )
}

