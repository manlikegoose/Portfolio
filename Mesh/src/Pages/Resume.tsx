import React from 'react'
import resume from '../assets/resume.pdf'

export default function Resume() {
  return (
    <section className='min-h-screen w-full px-4 sm:px-6 lg:px-8 py-20 text-white overflow-hidden'>
      <div className='w-full max-w-5xl mx-auto'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-8'>
          <div>
            <h1 className='text-3xl sm:text-4xl font-bold'>My Resume</h1>
            <p className='text-gray-400 mt-2'>
              Computer Science Student | Software Developer
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-3'>
            <a
              href={resume}
              target='_blank'
              rel='noopener noreferrer'
              className='px-5 py-3 rounded-lg bg-amber-200 text-black font-semibold hover:bg-amber-300 transition'
            >
              Open in New Tab
            </a>

            <a
              href={resume}
              download='Meshack_Lempayan_Resume.pdf'
              className='px-5 py-3 rounded-lg border border-amber-200 text-amber-200 font-semibold hover:bg-amber-200 hover:text-black transition'
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className='w-full h-[70vh] sm:h-[80vh] rounded-xl overflow-hidden border border-gray-700 bg-white'>
          <iframe
            src={resume}
            title='Meshack Lempayan Resume'
            className='w-full h-full'
          />
        </div>
      </div>
    </section>
  )
}