import React from 'react'
import { FaUniversity, FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  return (
    <section className='w-full h-auto text-white flex justify-center items-center flex-col gap-4 py-4 mt-2 px-3 sm:px-4 overflow-hidden'>

      <div className='w-full h-auto gap-4 py-6 md:py-10 justify-center items-center flex-col'>

        <h1 className='text-2xl sm:text-3xl bold text-pink-700 underline m-3 text-center'>
          Education
        </h1>

        <p className='mx-auto max-w-3xl px-2 sm:px-6 text-base sm:text-lg opacity-50 text-gray-200 italic text-center'>
          My academic journey and ongoing learning that has equipped me with the knowlege and skills!!
        </p>

        <div className='w-full max-w-6xl mx-auto my-4 p-4 sm:p-6 border rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 shadow-lime-400 shadow-lg hover:shadow-emerald-400 cursor-pointer translate-y-2 hover:translate-y-1 duration-1000'>

          <div className='flex flex-col justify-center'>
            <h2 className='text-lg font-bold flex items-center gap-2'>
              <FaUniversity className='text-cyan-700' />
              Bachelor of Computer Science
            </h2>

            <h3 className='text-gray-300 mt-1'>Computer Science</h3>

            <p className='text-sm text-gray-400 mt-3'>
              Status: Pending...
            </p>
          </div>

          <div className='flex flex-col justify-center md:items-end text-gray-300 text-left md:text-right'>
            <p className='font-medium'>Machakos University</p>

            <p className='text-sm mt-1'>
              2024 – Present
            </p>
          </div>
        </div>

        <div className='w-full max-w-6xl mx-auto my-4 p-4 sm:p-6 border rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lime-400 shadow-lg hover:shadow-emerald-400 cursor-pointer translate-y-2 hover:translate-y-1 duration-1000'>

          <div className='flex flex-col justify-center'>
            <h2 className='text-lg font-bold flex items-center gap-2'>
              <FaGraduationCap className='text-cyan-700' />
              Certificate in Safari AI
            </h2>

            <h3 className='text-gray-300 mt-1'>Artificial Intelligence</h3>

            <p className='text-sm text-gray-400 mt-3'>
              Status: ongoing
            </p>
          </div>

          <div className='flex flex-col justify-center md:items-end text-gray-300 text-left md:text-right'>
            <p className='font-medium'>power learn project</p>

            <p className='text-sm mt-1'>
              2026 – Present
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
