import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import Contact2 from './Contact2'

export default function Contact() {
  return (
    <section className='w-full h-auto ' >
      <div className='flex flex-col items-center justify-center text-center gap-5 py-10 '>
        <h1 className='text-2xl text-purple-400  font-extralight'>Contact Me</h1>
        <p className='text-sm text-gray-300 opacity-50'>Feel free to reach out to me for any inquiries or collaborations!</p>
      </div>

      <div className='flex items-center justify-center text-center gap-5 py-10 '>

        <div className='max-w-3xl bg-transparent  p-6'>
          <h1 className='text-2xl text-purple-400  font-extralight mb-4'>🚀 Let’s Build Something Amazing!</h1>
          <p className='text-sm text-white relative'>
            Got a bold idea? Need technical expertise? Or just want to talk about the latest in tech?
            I’m always open to meaningful conversations that turn ideas into real, impactful projects. Whether it’s web development, systems design, or innovative solutions — it all starts with a simple chat.💡 Every great project begins with a conversation.Let’s connect and create something worth building.
            </p>

          <div className='grid grid-cols-1 text-white gap-4 mt-6  '>
            <div className='flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-300 shadow shadow-lime-300 hover:shadow-xl transition-all duration-300 cursor-pointer gap=1'>

              <FaEnvelope className='text-lime-100 text-lg hover:text-blue-400 transition-colors' />

              <p className='text-lg  text-white'>< a href="mailto:meshacklempayan@gmail.com">
                Email: meshacklempayan@gmail.com</a>
              </p>

            </div>
            <div className=' flex items-center px-4 py-3   rounded-lg border border-gray-300 shadow shadow-lime-300 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer gap-1' >
              <FaPhone className='text-lime-100 text-lg hover:text-blue-400' />
              <p className='text-lg text-white  mt-2'><a href="tel:+254700123456">Phone: +254 718502265</a></p>

            </div>

            <div className=' flex items-center px-4 py-3   rounded-lg border border-gray-300 shadow shadow-lime-300 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer gap-1' >
              <FaMapMarkerAlt className='text-lime-100 text-lg hover:text-blue-400' />
              <p className='text-lg text-white  mt-2'>Nairobi, Kenya</p>

            </div>


          </div>
        </div>
        <div className='max-w-3xl bg-transparent  p-6'>
         <Contact2 />
        </div>
      </div>

    </section>
  )
}
