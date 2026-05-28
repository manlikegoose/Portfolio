import React from 'react'
import knowme from "../assets/images/knowme.jpg"

export default function Home2() {
  return (
    <section className='w-full'>
      <div className='flex items-center text-white mt-30 px-4 mx-4 w-full gap-4'>

      
      <div className='flex-1 max-w-3xl items-center text-center'>
        <h1 className='text-4xl font-bold max-w-300 mt-20 text-emerald-300 underline underline-offset-4'>
          Let's me introduce myself
        </h1>
        <p className='text-lg mt-4 text-gray-300 font-stretch-105% relative p-2'>
          I’m a Computer Science student with a strong focus on front-end development, passionate about turning ideas into clean, responsive, and user-friendly interfaces. 
          <br />
          <br />
          I enjoy working with
          <strong className='text-pink-500'>  C++,Python, HTML, CSS, JavaScript, and the React framework</strong> to build modern web experiences that are both visually engaging and functional. 
          <br />
          <br />
          My approach is all about simplicity, performance, and attention to detail—making sure every interaction feels smooth and intuitive. Whether I’m structuring layouts, styling components, or bringing pages to life with dynamic behavior, I’m constantly refining my craft and exploring better ways to create seamless user experiences.
        </p>
      </div>
      <div className='max-w-3xl mt-4 relative items-end-safe text-center flex-1 mr-6'>
      <img src={knowme} alt="knowme" className='w-sm h-auto object-contain  translate-y-1 hover:translate-y-0 duration-1000 rounded-full ' />
      </div>
      </div>
    </section>
  )
}
