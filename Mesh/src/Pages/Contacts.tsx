import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import Contact2 from './Contact2'

export default function Contact() {
  return (
    <section className='w-full max-w-full overflow-hidden'>

      <div className='flex flex-col items-center justify-center text-center gap-3 py-6 sm:py-10 px-4 w-full'>
        <h1 className='text-2xl text-purple-400 font-extralight'>Contact Me</h1>

        <p className='text-sm text-gray-300 opacity-50 max-w-2xl'>
          Feel free to reach out to me for any inquiries or collaborations!
        </p>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center text-center gap-6 lg:gap-8 py-6 sm:py-10 px-3 sm:px-4 w-full max-w-full'>

        <div className='w-full max-w-2xl min-w-0 bg-transparent p-2 sm:p-6'>
          <h1 className='text-xl sm:text-2xl text-purple-400 font-extralight mb-4'>
            🚀 Let’s Build Something Amazing!
          </h1>

          <p className='text-sm sm:text-base text-white leading-relaxed break-words'>
            Got a bold idea? Need technical expertise? Or just want to talk about the latest in tech?
            I’m always open to meaningful conversations that turn ideas into real, impactful projects.
            Whether it’s web development, systems design, or innovative solutions — it all starts with a simple chat.
            💡 Every great project begins with a conversation. Let’s connect and create something worth building.
          </p>

          <div className='grid grid-cols-1 text-white gap-4 mt-6 w-full'>

            <div className='flex items-center gap-3 px-3 sm:px-4 py-3 rounded-lg border border-gray-300 shadow shadow-lime-300 hover:shadow-xl transition-all duration-300 cursor-pointer w-full min-w-0'>
              <FaEnvelope className='text-lime-100 text-lg hover:text-blue-400 transition-colors shrink-0' />

              <p className='text-sm sm:text-base text-white text-left break-all min-w-0'>
                <a href="mailto:meshacklempayan@gmail.com">
                  Email: meshacklempayan@gmail.com
                </a>
              </p>
            </div>

            <div className='flex items-center gap-3 px-3 sm:px-4 py-3 rounded-lg border border-gray-300 shadow shadow-lime-300 hover:shadow-lg transition-all duration-300 cursor-pointer w-full min-w-0'>
              <FaPhone className='text-lime-100 text-lg hover:text-blue-400 shrink-0' />

              <p className='text-sm sm:text-base text-white text-left break-words min-w-0'>
                <a href="tel:+254718502265">
                  Phone: +254 718502265
                </a>
              </p>
            </div>

            <div className='flex items-center gap-3 px-3 sm:px-4 py-3 rounded-lg border border-gray-300 shadow shadow-lime-300 hover:shadow-lg transition-all duration-300 cursor-pointer w-full min-w-0'>
              <FaMapMarkerAlt className='text-lime-100 text-lg hover:text-blue-400 shrink-0' />

              <p className='text-sm sm:text-base text-white text-left min-w-0'>
                Nairobi, Kenya
              </p>
            </div>

          </div>
        </div>

        <div className='w-full max-w-2xl min-w-0 bg-transparent p-2 sm:p-6'>
          <Contact2 />
        </div>

      </div>
    </section>
  )
}
