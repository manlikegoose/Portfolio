import React from 'react'

export default function() {
  return (
    <form className=' w-full h-full bg-transparent p-6 rounded-lg border border-gray-300 shadow shadow-lime-300 hover:shadow-lg transition-all duration-400'>
            <h1 className='text-2xl text-purple-400  font-extralight mb-4'>let's Connect!</h1>
            <div className='flex mb-4 text-white gap-2'>
              <label className='block text-sm  mt-2' htmlFor='name'>NAME:</label>
              <input className='w-full px-6 py-2 rounded-lg border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400' type='text'  placeholder='Enter your full names' required />
            </div>
            <div className='flex mb-4 text-white gap-2'>
              <label className='block text-sm  mt-2' htmlFor='email'>EMAIL:</label>
              <input className='w-full px-6 py-2 rounded-lg border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400' type='email' placeholder='Enter your email address' required />
            </div>
            <div className='flex mb-4 text-white gap-2'>
              <label className='block text-sm  mt-2' htmlFor='message'>MESSAGE:</label>
              <textarea className='w-full px-6 py-2 rounded-lg border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400' id='message' name='message' placeholder='Enter your message' rows={4} required />
            </div>

         </form>
  )
}
